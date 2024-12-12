import React from "react";
import { BiError } from "react-icons/bi";
import { CiFolderOn } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { useParams, Link } from "react-router-dom";

const Header = ({ data, name }) => {
  const { id } = useParams();

  const dataDetails = data?.find((item) => item._id === id);

  return (
    <>
      <div className="flex justify-between bg-gray-800 items-center p-4   rounded-t-lg">
        <div className="flex items-center gap-2">
          <span className="text-sky-400 text-2xl">
            <CiFolderOn />
          </span>
          <h3 className="text-lg font-semibold">{name}</h3>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <BiError className="text-yellow-400" />
            <p>({data ? data?.length : 0}) {name}</p>
          </div>
        </div>
        <div className="flex items-center gap-2 px-5 py-2 justify-center button">
          <FaPlus className="text-white text-lg cursor-pointer hover:scale-110 transition-transform duration-200" />
          <button className=" text-sm font-medium text-white  shadow transition-transform transform hover:-translate-y-1">
            Create
          </button>
        </div>
      </div>

      <div className="p-4 text-sm text-gray-300">
        <Link to={"/"} className="flex items-center gap-2 hover:underline">
          <span className="text-white font-medium">All</span>
          <span className="text-white-500">
            {dataDetails ? "/ " + dataDetails?.name : ""}
          </span>
        </Link>
      </div>
    </>
  );
};

export default Header;
