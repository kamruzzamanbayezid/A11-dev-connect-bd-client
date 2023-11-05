import SocialLogin from "./Home/SocialLogin";

const Login = () => {
      return (

            <div className="w-full  mx-auto p-4 dark:bg-gray-800 dark:border-gray-700">
                  <form className="space-y-6" action="#">
                        <h5 className="text-4xl font-medium text-center text-[#244034] dark:text-white">Hi, Welcome Back!</h5>
                        <div>
                              <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                              <input type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" placeholder="name@company.com" required />
                        </div>
                        <div>
                              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                              <input type="password" name="password" id="password" placeholder="Enter Your Password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full px-2.5 py-4 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white" required />
                        </div>
                        
                        <button type="submit" className="w-full text-white bg-[#244034] hover:bg-emerald-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Login to your account</button>
                        
                        <SocialLogin></SocialLogin>

                        <div className="text-base text-center font-medium text-gray-500 dark:text-gray-300">
                        Do not have an account? <a href="#" className="text-[#244034] hover:no-underline underline dark:text-blue-500">Create account</a>
                        </div>
                  </form>
            </div>

      );
};

export default Login;