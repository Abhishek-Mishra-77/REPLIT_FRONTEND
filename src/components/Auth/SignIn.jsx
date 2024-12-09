import React from "react";
import { FaRegEye, FaEyeSlash } from "react-icons/fa";

const SignIn = ({
  setIsLogin,
  setIsForgot,
  userDetails,
  setUserDetails,
  onLoginHandler,
  showPassword,
  setShowPassoword
}) => {
  return (
    <>
      <div className="font-[sans-serif] bg-gradient-to-br from-gray-800 to-gray-900 text-gray-100 min-h-screen flex items-center justify-center px-4 py-6">
        <div className="flex justify-center items-center gap-6 max-w-6xl w-full">
          <div className="bg-gray-800 border border-gray-700 rounded-lg p-8 shadow-lg max-md:mx-auto w-full max-w-md">
            <form onSubmit={onLoginHandler} className="space-y-6">
              <div className="mb-8">
                <h3 className="text-3xl font-extrabold text-blue-500">
                  Sign in
                </h3>
                <p className="text-gray-400 text-sm mt-4">
                  Sign in to your account and explore a world of possibilities.
                  Your journey begins here.
                </p>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Username
                </label>
                <div className="relative flex items-center">
                  <input
                    name="username"
                    type="text"
                    value={userDetails.email}
                    onChange={(e) =>
                      setUserDetails((prev) => ({
                        ...prev,
                        email: e.target.value,
                      }))
                    }
                    required
                    className="w-full bg-transparent placeholder:text-gray-400 text-sm border border-gray-500 rounded-md px-4 py-2 text-white transition duration-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    placeholder="Enter username"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    className="w-5 h-5 absolute right-4"
                    viewBox="0 0 24 24"
                  >
                    <circle cx="10" cy="7" r="6"></circle>
                    <path d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"></path>
                  </svg>
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">
                  Password
                </label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type={!showPassword ? "password" : "text"}
                    value={userDetails.password}
                    onChange={(e) =>
                      setUserDetails((prev) => ({
                        ...prev,
                        password: e.target.value,
                      }))
                    }
                    required
                    className="w-full bg-transparent placeholder:text-gray-400 text-sm border border-gray-500 rounded-md px-4 py-2 text-white transition duration-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                    placeholder="Enter password"
                  />
                  <span
                    onClick={() => setShowPassoword(!showPassword)}
                    className="w-5 h-5 absolute right-4 cursor-pointer"
                  >
                    {showPassword ? (
                      <FaRegEye className="text-xl" />
                    ) : (
                      <FaEyeSlash className="text-xl" />
                    )}
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-between gap-4">
                <label className="flex items-center">
                  <input
                    id="remember-me"
                    type="checkbox"
                    className="h-4 w-4 text-blue-500 border-gray-600 bg-gray-700 rounded focus:ring-blue-500"
                  />
                  <span className="ml-2 text-sm">Remember me</span>
                </label>
                <span
                  onClick={() => setIsForgot(true)}
                  className="text-blue-500 text-sm cursor-pointer hover:underline"
                >
                  login with otp
                </span>
              </div>
              <div>
                <button
                  type="submit"
                  className="w-full py-3 px-4 bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg focus:ring focus:ring-blue-500 focus:ring-opacity-50 shadow-lg"
                >
                  Log in
                </button>
              </div>
              <p className="text-sm text-center">
                Don't have an account?{" "}
                <span
                  onClick={() => {
                    setIsLogin(false)
                    setUserDetails({
                      name: "Abhishek",
                      role: "operator",
                      email: "",
                      password: "",
                    })
                  }}
                  className="text-blue-500 cursor-pointer font-semibold hover:underline"
                >
                  Register here
                </span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignIn;
