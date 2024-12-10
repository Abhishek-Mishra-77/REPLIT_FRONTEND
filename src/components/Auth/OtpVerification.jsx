import React, { useState } from "react";
import { GiCrossMark } from "react-icons/gi";

const OtpVerification = ({
    setIsForgot,
    SendOtpHandler,
    setIsOtpSent,
    loading,
    isOtpSent,
    VerifyOtpHandler
}) => {
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");

    const handleOtpChange = (e) => {
        const value = e.target.value;
        if (value.length <= 6 && /^[0-9]*$/.test(value)) {
            setOtp(value);
        }
    };


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80">
            <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 border border-sky-500 w-full max-w-md rounded-lg shadow-2xl p-6 relative animate-fade-in">
                <button
                    onClick={() => setIsForgot(false)}
                    className="absolute top-2 right-2 p-2 text-2xl cursor-pointer text-gray-400 hover:text-red-500 transition duration-300"
                >
                    <GiCrossMark />
                </button>

                <h2 className="text-3xl font-bold text-sky-400 text-center mb-4 drop-shadow-lg">
                    Verify OTP
                </h2>
                <p className="text-sm text-gray-300 text-center mb-6">
                    Enter your email and the OTP sent to verify your account.
                </p>

                <form onSubmit={VerifyOtpHandler} className="space-y-6">
                    <div>
                        <label className="block text-sm font-medium text-sky-300 mb-2">Email Address</label>
                        <div className="flex items-center">
                            <input
                                type="email"
                                className="w-full bg-transparent placeholder:text-gray-400 text-sm border border-gray-500 rounded-l-md px-4 py-2 text-white transition duration-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                                placeholder="Enter your email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <button
                                type="button"
                                className={`px-4 py-2 text-sm font-medium text-white rounded-r-md transition-all duration-300 ${email
                                    ? "bg-sky-600 hover:bg-sky-700 focus:ring-2 focus:ring-sky-400 shadow-lg"
                                    : "bg-gray-500 cursor-not-allowed"
                                    }`}
                                onClick={() => SendOtpHandler(email)}
                                disabled={!email || loading}
                            >
                                {loading ? (
                                    <svg
                                        className="w-5 h-5 text-white animate-spin mx-auto"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                    >
                                        <circle
                                            className="opacity-25"
                                            cx="12"
                                            cy="12"
                                            r="10"
                                            stroke="currentColor"
                                            strokeWidth="4"
                                        ></circle>
                                        <path
                                            className="opacity-75"
                                            fill="currentColor"
                                            d="M4 12a8 8 0 018-8v4a4 4 0 100 8v4a8 8 0 01-8-8z"
                                        ></path>
                                    </svg>
                                ) : isOtpSent ? (
                                    "Resend OTP"
                                ) : (
                                    "Send OTP"
                                )}
                            </button>

                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-sky-300 mb-2">6-Digit OTP</label>
                        <input
                            type="text"
                            className="w-full bg-transparent placeholder:text-gray-400 text-sm border border-gray-500 rounded-md px-4 py-2 text-white transition duration-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                            placeholder="Enter 6-digit OTP"
                            name="otp"
                            maxLength={6}
                            value={otp}
                            onChange={handleOtpChange}
                        />
                    </div>
                    <button
                        type="submit"
                        className={`w-full py-2 text-sm font-medium text-white rounded-md transition-all duration-300 ${otp.length === 6
                            ? "bg-gradient-to-r from-sky-500 to-blue-700 hover:from-blue-600 hover:to-sky-600 shadow-lg"
                            : "bg-gray-500 cursor-not-allowed"
                            }`}
                        disabled={otp.length !== 6}
                    >
                        Verify OTP
                    </button>
                </form>
            </div>
        </div>
    );
};

export default OtpVerification;
