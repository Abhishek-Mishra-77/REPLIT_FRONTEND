import React, { useState } from "react";
import { Link, Outlet, useLocation, useNavigate } from "react-router-dom";
import { LuPlus } from "react-icons/lu";
import { logout } from "../../store/slices/authSlice";
import { openProfileModal } from "../../store/slices/profileSlice";
import { useDispatch, useSelector } from "react-redux";

const Sidebar = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { userDetails } = useSelector((state) => state.auth);

  return (
    <section>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clipRule="evenodd"
            fillRule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen border-r-2 border-gray-200  dark:border-gray-700 transition-transform -translate-x-full sm:translate-x-0 max-[768px]:hidden"
        aria-label="Sidenav"
      >
        <div className="overflow-y-auto py-5 px-3 h-full  bg-[#1C2333] dark:border-gray-700">
          <ul className="space-y-2">
            <li>
              <Link
                to="/"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg border border-transparent dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 active:border-sky-300 group"
              >
                <svg
                  aria-hidden="true"
                  className="w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                  <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
                </svg>
                <span className="ml-3">REPLIT</span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className="flex items-center text-center p-1 font-normal border text-gray-900 border-gray-200 dark:border-gray-700 active:border-sky-300 rounded-md dark:text-white hover:bg-gray-800 dark:hover:bg-gray-800 group "
              >
                <span className="ml-8 flex justify-center items-center text-center gap-2">
                  <LuPlus />
                  <p className="text-center"> Create Repl</p>
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="/"
                className={`flex items-center p-2 w-full text-base font-normal text-white  rounded-lg transition duration-75 group active:border-sky-300
                              ${location?.pathname === "/"
                    ? "bg-gray-200 text-white dark:bg-gray-700 border-sky-300"
                    : "hover:bg-gray-200 dark:hover:bg-gray-700"
                  }`}
                aria-controls="dropdown-pages"
                data-collapse-toggle="dropdown-pages"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-text-200 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3.293l6 6A1 1 0 0115.707 10H14v5a1 1 0 01-1 1H7a1 1 0 01-1-1v-5H4.293A1 1 0 014 9.293l6-6a1 1 0 011.414 0zM6 11v4h8v-4h2.293l-6-6-6 6H6z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 text-xs text-left whitespace-nowrap">
                  Home
                </span>

              </Link>
            </li>
            <li>
              <Link
                to="/editor"
                className={`flex items-center p-2 w-full text-base font-normal text-white rounded-lg transition duration-75   group  
                        ${location?.pathname === "/editor"
                    ? "bg-gray-200 text-white dark:bg-gray-700 active:border-sky-300"
                    : "hover:bg-gray-200 dark:hover:bg-gray-700 "
                  }
                             `}
                aria-controls="dropdown-sales"
                data-collapse-toggle="dropdown-sales"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 text-xs text-left whitespace-nowrap">
                  Repls
                </span>
              </Link>
            </li>
            <li>
              <Link
                to={"/admin"}
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 2a1 1 0 01.832.445l5 7A1 1 0 0115 11h-1v3a4 4 0 01-8 0v-3H5a1 1 0 01-.832-1.555l5-7A1 1 0 0110 2zm0 2.618L6.763 9h6.474L10 4.618zM11 11v3a2 2 0 11-4 0v-3h4z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 text-xs ml-3 whitespace-nowrap">
                  Admin
                </span>

              </Link>
            </li>
            <li>
              <a
                href="#"
                className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M13 10V7a1 1 0 10-2 0v3H9a1 1 0 00-.707 1.707l3 3a1 1 0 001.414 0l3-3A1 1 0 0015 10h-2z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    d="M4 12a4 4 0 011.33-7.748A6 6 0 0118 7a4 4 0 01-2 7h-1a1 1 0 110-2h1a2 2 0 10-.633-3.897 1 1 0 01-1.233-.986 4 4 0 10-7.13 2.813 1 1 0 01-.6 1.57A2 2 0 104 12z"
                  ></path>
                </svg>
                <span className="flex-1 text-xs ml-3 whitespace-nowrap">
                  Deployments
                </span>

              </a>
            </li>
            <li>
              <button
                type="button"
                className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                aria-controls="dropdown-authentication"
                data-collapse-toggle="dropdown-authentication"
              >
                <svg
                  aria-hidden="true"
                  className="flex-shrink-0 w-6 h-6 text-gray-400 transition duration-75 group-hover:text-gray-900 dark:text-gray-400 dark:group-hover:text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                <span className="flex-1 ml-3 text-xs text-left whitespace-nowrap">
                  Authentication
                </span>
              </button>
            </li>
          </ul>
        </div>

        <div className="hidden absolute bottom-0 left-0 border-t-2  justify-center p-4 space-x-4 w-full lg:flex bg-[#1C2333]  z-20  border-gray-200 dark:border-gray-700">
          <button className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600">
            <svg
              aria-hidden="true"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z"></path>
            </svg>
          </button>
          <button
            data-tooltip-target="tooltip-settings"
            className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600"
          >
            <svg
              aria-hidden="true"
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
          <div className="relative">
            <button
              className="w-12 h-12 rounded-full bg-gray-700 dark:bg-gray-700 border border-transparent hover:border-sky-300 focus:border-sky-300 text-white shadow-lg flex items-center justify-center focus:outline-none hover:scale-105 transition-all duration-200"
              onClick={() => setIsMenuOpen((prev) => !prev)}
            >
              <span
                alt="User Icon"
                className="w-10 h-10 rounded-full text-xl bg-purple-800 text-white flex items-center justify-center font-bold"
              >
                {userDetails?.email?.toUpperCase().charAt(0) || "G"}
              </span>
            </button>

            {isMenuOpen && (
              <div className="absolute bottom-12 left-6 w-48 bg-[#1C2333] text-white rounded-lg shadow-xl border border-gray-700 z-10">
                <div className="p-4 text-white">
                  <p className="text-sm font-medium">
                    {userDetails?.name || "Guest"}
                  </p>
                  <p className="text-xs text-gray-400">{userDetails?.email}</p>
                </div>
                <hr className="my-2 border-gray-600" />
                <button
                  onClick={() => {
                    dispatch(openProfileModal())
                    setIsMenuOpen(false)
                  }}
                  className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-[#2C3541] hover:text-white transition-all">
                  Profile
                </button>
                <button
                  className="w-full text-left px-4 py-2 text-sm text-gray-300 hover:bg-red-600 hover:text-white transition-all"
                  onClick={() => {
                    dispatch(logout());
                    navigate("/auth");
                  }}
                >
                  Sign Out
                </button>
              </div>
            )}

            {isMenuOpen && (
              <div
                className="fixed inset-0 z-0 bg-black opacity-50"
                onClick={() => setIsMenuOpen(false)}
              ></div>
            )}
          </div>
        </div>
      </aside>
      <div className="md:ml-64">
        <Outlet />
      </div>
    </section>
  );
};

export default Sidebar;
