import { FC } from "react";
import { BsPlus, BsGearFill } from "react-icons/bs";
import {
  FiDownload,
  FiSettings,
  FiStar,
  FiTrash,
  FiUser,
} from "react-icons/fi";

const SideBar = () => {
  return (
    <div
      className="fixed top-0 left-0 h-screen w-16 flex flex-col
                  bg-white dark:bg-gray-900 shadow-lg"
    >
      <div>
        <SideBarIcon icon={<FiUser size="24" />} text="Your Account" />
        <Divider />
        <SideBarIcon icon={<BsPlus size="32" />} text="Add a page" />
        <SideBarIcon icon={<FiDownload size="20" />} text="Import" />
        <SideBarIcon icon={<FiStar size="22" />} text="Stars" />
        <Divider />
        <SideBarIcon icon={<FiTrash size="20" />} text="Trash" />
      </div>
      <div className="mt-auto">
        <SideBarIcon icon={<FiSettings size="22" />} text="Settings" />
      </div>
    </div>
  );
};

const SideBarIcon: FC<siderBarPropsType> = ({ icon, text }) => (
  <div
    className="relative flex items-center justify-center 
    h-12 w-12 mt-2 mb-2 mx-auto  
  bg-gray-400 hover:bg-green-600 dark:bg-gray-800 
  text-green-500 hover:text-white
    hover:rounded-xl rounded-3xl
    transition-all duration-300 ease-linear
    cursor-pointer shadow-lg group"
  >
    {icon}
    <span
      className="absolute w-auto p-2 m-2 min-w-max left-14 rounded-md shadow-md
    text-white bg-gray-900 
    text-xs font-bold 
    transition-all duration-100 scale-0 origin-left group-hover:scale-100"
    >
      {text}
    </span>
  </div>
);

const Divider = () => <hr className="sidebar-hr" />;

type siderBarPropsType = { icon: JSX.Element; text?: string };

export default SideBar;
