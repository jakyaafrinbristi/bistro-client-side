import { useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from 'sweetalert2'
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";


const FoodCard = ({ item }) => {
  const { user } = useAuth()
  const navigate = useNavigate()
  const axiosSecure = useAxiosSecure()
  const[,refetch]=useCart()

  const location = useLocation()
  // const from = location.state || '/'
  const { name, recipe, category, price, image, _id } = item
  const handleCart = (food) => {
    // console.log(food,user.email)
    if (user && user?.email) {
      // TODO
      console.log(user.email, food)
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        recipe,
        image,
        price
      }
      axiosSecure.post('/carts', cartItem)
        .then(res => {
          console.log(res.data)
          if (res.data.insertedId) {
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: `${name} added to your cart`,
              showConfirmButton: false,
              timer: 1500
            });
            refetch()
          }
        })


    }
    else {
      Swal.fire({
        title: "You are not logged in",
        text: "Plkease login Add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login"
      }).then((result) => {
        if (result.isConfirmed) {
          navigate('/login', { state: { from: location } })


        }
      });

    }

  }
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src={image} />
      </figure>
      <p className="bg-gray-600 text-white absolute right-0 rounded-full px-3 mr-5 mt-5 ">${price}</p>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button onClick={() => handleCart(item)} className="btn btn-primary">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;