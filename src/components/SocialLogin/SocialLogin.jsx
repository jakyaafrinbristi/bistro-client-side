
import toast from 'react-hot-toast';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';

import {useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const SocialLogin = () => {
    const { signInWithGoogle } = useAuth()
    const axiosPublic =useAxiosPublic()
    const navigate =useNavigate()

    // googleSignIn
		const handleGoogleSignIn = async () => {
			try {
				const result=await signInWithGoogle()
				console.log(result.user)
				const userInfo={
					email:result.user?.email,
					name:result.user?.displayName
				}
			const response=await axiosPublic.post('/users',userInfo)
			console.log(response.data);
			navigate('/')

			
			
					
			}
			catch (err) {
				console.log(err)
				toast.error('err?.message')
	
	
			}
	
		}
    return (
        <div className="my-6 space-y-4">
						<button onClick={handleGoogleSignIn} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 dark:border-gray-600 focus:dark:ring-violet-600">
							<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" className="w-5 h-5 fill-current">
								<path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
							</svg>
							<p className="font-bold"><span className=" text-pink-600" >L</span>ogin <span className="  text-pink-600" >W</span>ith <span className="  text-pink-600" >G</span>oogle</p>
						</button>

					</div>
    );
};

export default SocialLogin;