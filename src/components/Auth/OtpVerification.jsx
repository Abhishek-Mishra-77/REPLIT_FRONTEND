import React, { useState } from "react";
import { GiCrossMark } from "react-icons/gi";

const OtpVerification = ({ setIsForgot }) => {
    const [email, setEmail] = useState("");
    const [otp, setOtp] = useState("");
    const [isOtpSent, setIsOtpSent] = useState(false);

    const handleSendOtp = () => {
        if (email) {
            setIsOtpSent(true);
            alert("OTP sent to your email!");
        } else {
            alert("Please enter a valid email!");
        }
    };

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

                <form className="space-y-6">
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
                                onClick={handleSendOtp}
                                disabled={!email}
                            >
                                {isOtpSent ? "Resend OTP" : "Send OTP"}
                            </button>
                        </div>
                    </div>

                    {/* OTP Input */}
                    <div>
                        <label className="block text-sm font-medium text-sky-300 mb-2">6-Digit OTP</label>
                        <input
                            type="text"
                            className="w-full bg-transparent placeholder:text-gray-400 text-sm border border-gray-500 rounded-md px-4 py-2 text-white transition duration-300 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:border-sky-500"
                            placeholder="Enter 6-digit OTP"
                            maxLength={6}
                            value={otp}
                            onChange={handleOtpChange}
                        />
                    </div>

                    {/* Verify Button */}
                    <button
                        type="button"
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
