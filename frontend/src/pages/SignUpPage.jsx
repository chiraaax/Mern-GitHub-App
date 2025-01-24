import React from 'react'
import { FaGithub, FaUnlockAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import { handleLoginWithGithub } from "../lib/function";

const SignUpPage = () => {	
	return (
		<div className='flex flex-col items-center justify-center px-6 py-8 mx-auto h-screen lg:py-0'>
			<div className='w-full rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0 bg-glass'>
				<div className='p-6 spacey-y-4 md:space-y-6 sm:p-8'>
					<h1 className='text-xl font-bold md:text-2xl text-center'>Create Account</h1>


					<button
  type="button"
  className="
    relative overflow-hidden text-white bg-gradient-to-r 
    from-[#24292F] via-[#3A4349] to-[#24292F] 
    bg-opacity-80 rounded-lg flex gap-2 p-3 items-center w-full justify-center 
    transition-all duration-300 shadow-lg hover:shadow-2xl 
    hover:bg-opacity-90 hover:scale-105 
    before:content-[''] before:absolute before:inset-0 
    before:bg-gradient-to-r before:from-blue-500 before:via-purple-500 before:to-pink-500 
    before:opacity-0 before:transition-all before:duration-300 
    hover:before:opacity-100 hover:before:blur-lg
    focus:outline-none
    active:scale-95
    group
  "
  onClick={handleLoginWithGithub}
>
  <FaGithub className="w-5 h-5 group-hover:text-blue-400 transition-all duration-300 relative z-10" />
  <span className="relative z-10">Sign up with Github</span>

  {/* Pulse animation */}
  <div className="absolute w-full h-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 opacity-0 animate-pulse group-hover:opacity-20 rounded-lg"></div>
</button>



					<p className='text-gray-300'>
            By signing up, you will gain access to all the app's features.
						<span>
							<FaUnlockAlt className='w-4 h-4 inline mx-2' />
						</span>
					</p>

					<p className='text-sm font-light text-gray-500'>
						Already have an account?{" "}
						<Link to='/login' className='font-medium text-primary-600 hover:underline text-blue-600'>
							Login
						</Link>
					</p>     
               
				</div>
			</div>
		</div>
	);
};

export default SignUpPage;