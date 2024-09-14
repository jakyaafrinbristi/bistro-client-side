import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../provider/AuthProvider";
import toast from "react-hot-toast";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";

import SocialLogin from "../../../components/SocialLogin/SocialLogin";


const Register = () => {
	const axiosPublic =useAxiosPublic()
	// const {user}=useAuth()
	
	const {  createUser,  user, setUser, updateUserProfile } = useContext(AuthContext);
	const navigate = useNavigate()
	const location = useLocation()
		// const from = location.state || '/'
		const from = location.state?.from?.pathname || '/'

	

	// email pass
	const handleSignUp = async e => {
		e.preventDefault()
		const form = e.target
		const email = form.email.value;
		const name = form.name.value;
		const photo = form.photo.value;
		const password = form.password.value;
		console.log({ email, name, photo, password })
		
	
		try {
			const result = await createUser(email, password)
			console.log(result)
			await updateUserProfile(name, photo)
			setUser({ ...user, photoURL: photo, displayName: name })
			const userInfo={
				name:name,
				email:email

			}
			const response=await axiosPublic.post('/users',userInfo)
		
				if(response.data.insertedId){
	
					Swal.fire({
						position: "top-end",
						icon: "success",
						title: "User added to the database",
						showConfirmButton: false,
						timer: 1500
					  });
					  navigate('/')

				}
		
		

		}
		catch (err) {
			console.log(err)
			toast.error(err?.message)

		}
	}
	return (
		<div>
			
			<div className="container mx-auto grid px-12 grid-cols-1 lg:grid-cols-2 mt-12 mb-12">
				<div className="w-full max-w-md p-4 rounded-md  shadow sm:p-8 bg-pink-50 lg:ml-10">
					<h2 className="mb-3 text-3xl font-semibold text-center"><span className="text-2xl  text-pink-600" >G</span>et <span className="text-2xl  text-pink-600">Y</span>our <span className="text-2xl  text-pink-600" >F</span>ree <span className="text-2xl  text-pink-600" >A</span>ccount <span className="text-2xl  text-pink-600" >N</span>ow.</h2>
					<p className="text-sm text-center font-bold dark:text-gray-600">Already have an account?
						<Link to='/login' rel="noopener noreferrer" className="focus:underline hover:underline">SignIn here</Link>
					</p>
				{/* goggle */}
				<SocialLogin></SocialLogin>
					<div className="flex items-center w-full my-4">
						<hr className="w-full dark:text-gray-600" />
						<p className="px-3 dark:text-gray-600">OR</p>
						<hr className="w-full dark:text-gray-600" />
					</div>
					<form  onSubmit={handleSignUp}  noValidate="" action="" className="space-y-8">
						<div className="space-y-4">
							<div className="space-y-2">
								<label htmlFor="name" className="block font-semibold text-sm">Name</label>
								<input type="text" name="name" id="name" placeholder="name" className="w-full  px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
							</div>
							<div className="space-y-2">
								<label htmlFor="photo" className="block font-semibold text-sm">Photo Url</label>
								<input type="photo" name="photo" id="photo" placeholder="Photo Url" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
							</div>
							<div className="space-y-2">
								<label htmlFor="email" className="block font-semibold text-sm">Email address</label>
								<input type="email" name="email" id="email" placeholder="leroy@jenkins.com" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
							</div>
							<div className="space-y-2">
								<div className="flex justify-between">
									<label htmlFor="password" className="text-sm font-semibold">Password</label>
									<a rel="noopener noreferrer" href="#" className="text-xs font-semibold hover:underline dark:text-gray-600">Forgot password?</a>
								</div>
								<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
							</div>
						</div>
						<button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-pink-300 dark:text-black"><span className="text-pink-800 font-bold">S</span>ign <span className="text-pink-800 font-bold">U</span>p</button>
					</form>
				</div>
				

			</div>




		</div>
	);
};

export default Register;