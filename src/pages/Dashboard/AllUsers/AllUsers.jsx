import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrash, FaUser } from "react-icons/fa";
import Swal from "sweetalert2";


const AllUsers = () => {
  const axiosSecure = useAxiosSecure()
  const { data: users = [], refetch } = useQuery({
    queryKey: ['users'],
    queryFn: async () => {
      const res = await axiosSecure.get('/users');
      return res.data;
    }
  })
  const handleMakeAdmin = user => {
 axiosSecure.patch(`/users/admin/${user._id}`)
 .then(res=>{
  if (res.data.modifiedCount > 0) {
    refetch()

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: `${user.name} is an admin now`,
      showConfirmButton: false,
      timer: 1500
    })
  }

 })
  

  }
  const handleDelete = user => {
    refetch()
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {

        axiosSecure.delete(`/users/${user._id}`)
          .then(res => {
            if (res.data.deletedCount > 0) {
              refetch();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              });

            }
          })
      }
    });

  }

  return (
    <div>
      <div className="flex justify-evenly">
        <h1 className="text-3xl font-bold">All Users</h1>
        <h1 className="text-3xl font-bold">Total Users:{users.length}</h1>
      </div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Active</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {
              users.map((user, index) => <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                 {user.role==='admin'? 'Admin':
                   <button
                   onClick={() => handleMakeAdmin(user)}
                   className="btn bg-amber-600 btn-md"><FaUser className="text-white text-2xl"></FaUser></button>

                 }
                </td>
                <td>
                  <button
                    onClick={() => handleDelete(user)}
                    className="btn btn-ghost btn-lg"><FaTrash></FaTrash></button>

                </td>

              </tr>)
            }


          </tbody>
        </table>
      </div>

    </div>
  );
};

export default AllUsers;