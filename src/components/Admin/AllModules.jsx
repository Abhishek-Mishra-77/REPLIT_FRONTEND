import { LuUsersRound } from "react-icons/lu";
import { CiFolderOn } from "react-icons/ci";

const AllModules = ({ modules }) => {


    return (
        <div className="flex justify-between items-center gap-1 flex-wrap">
            <div className="p-2 flex w-[30%] mt-4 items-center gap-3 bg-gray-800 borderStyle cursor-pointer transition-colors duration-300 outline-none" tabIndex={0}>
                <LuUsersRound className="text-sky-400 text-lg" />
                <p className="text-sm font-medium text-gray-300">Share with me</p>
            </div>

            {modules?.map((module, i) => (
                <div
                    key={module._id}
                    tabIndex={i + 1}
                    className="p-2 flex justify-between w-[30%] mt-4 items-center borderStyle gap-3 bg-gray-800 rounded-md cursor-pointer transition-colors duration-300 relative"
                >
                    <div className="flex gap-2">
                        <CiFolderOn className="text-sky-400 text-lg" />
                        <p className="text-sm font-medium text-gray-300">{module.name}</p>
                    </div>

                </div>
            ))}
        </div>
    );
};

export default AllModules;
