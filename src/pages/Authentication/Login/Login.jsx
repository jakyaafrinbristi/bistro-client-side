import { useContext } from "react";
import { AuthContext } from "../../../provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from "sweetalert2";
import useAuth from "../../../hooks/useAuth";
import SocialLogin from "../../../components/SocialLogin/SocialLogin";



const Login = () => {
	const { signIn } = useAuth()

	const navigate = useNavigate()




		
	// emailpass
	const handleSIgnIn = async e => {
		e.preventDefault()
		const form = e.target;
		const email = form.email.value;
		const password = form.password.value;
		console.log({ email, password })
		try {
			const result = await signIn(email, password)
			console.log(result)
		
					  navigate('/')
					  toast.success('sign in')

			
		

		}
		catch (err) {
			console.log(err)
			toast.error(err?.message)

		}

	}


	return (
		<div>
			
			<div className='container mx-auto px-10 mt-12 mb-12  grid grid-cols-1 lg:grid-cols-2'>
				<div className="w-full max-w-md p-4 rounded-md shadow sm:p-8 dark:bg-pink-50 dark:text-gray-800  ">
					<h2 className="mb-3 text-3xl font-semibold text-center"><span className="text-4xl  text-pink-600" >L</span>ogin <span className="text-4xl  text-pink-600" >T</span>o <span className="text-4xl text-pink-600" >Y</span>our <span className="text-4xl text-pink-600" >A</span>ccount</h2>
					<p className="text-sm text-center font-bold dark:text-gray-600">Don't have account?
						<Link to='/register' className="focus:underline hover:underline">Sign up here</Link>
					</p>
					{/* social login */}
					<SocialLogin></SocialLogin>
					<div className="flex items-center w-full my-4">
						<hr className="w-full dark:text-gray-600" />
						<p className="px-3 font-bold dark:text-gray-600"><span className=" text-pink-600" >O</span>R</p>
						<hr className="w-full dark:text-pink-600" />
					</div>
					<form onSubmit={handleSIgnIn} noValidate="" action="" className="space-y-8">
						<div className="space-y-4">
							<div className="space-y-2">
								<label htmlFor="email" className="block font-semibold text-sm">Email address</label>
								<input type="email" name="email" id="email" placeholder="email" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
							</div>
							<div className="space-y-2">
								<div className="flex justify-between">
									<label htmlFor="password" className="text-sm font-semibold">Password</label>
									<a rel="noopener noreferrer" href="#" className="text-xs font-bold hover:underline dark:text-gray-600">Forgot password?</a>
								</div>
								<input type="password" name="password" id="password" placeholder="*****" className="w-full px-3 py-2 border rounded-md dark:border-gray-300 dark:bg-gray-50 dark:text-gray-800 focus:dark:border-violet-600" />
							</div>
						</div>
						<button type="submit" className="w-full px-8 py-3 font-semibold rounded-md dark:bg-pink-300 dark:text-black"><span className="text-pink-800 font-bold">S</span>ign <span className="text-pink-800 font-bold">I</span>n</button>
					</form>
				</div>
				
				
			
			</div>
		</div>
	);
};

export default Login;