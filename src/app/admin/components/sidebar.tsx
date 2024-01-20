import { faBlog, faMessage, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";


const Sidebar = (props: any) => {

  function handleClickIcon(option: string) {
    props.handleSwitch(option);
  }

  return (
    <div
      className={`shadow-xl w-16 rounded-br-3xl rounded-tr-3xl mr-10 mt-52 h-60 flex items-center justify-center fixed inset-y-0 left-0  bg-blue-500 transform transition-transform ease-in-out duration-300 ${
        props.isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex items-center justify-between p-4"></div>
      <ul className="py-4 ">
        <li className="text-black flex items-center    cursor-pointer">
          <FontAwesomeIcon
            onClick={() => handleClickIcon("users")}
            icon={faUser}
            className="hover:bg-blue-500 p-4 rounded-full transition-transform transform hover:scale-105 duration-500"
          />
        </li>
        <li className="text-black flex items-center cursor-pointer">
          <FontAwesomeIcon
            onClick={() => handleClickIcon("messages")}
            icon={faMessage}
            className="hover:bg-blue-500 p-4 rounded-full transition-transform transform hover:scale-105 duration-500"
          />
        </li>
        <li className="text-black flex items-center cursor-pointer">
          <FontAwesomeIcon
            onClick={() => handleClickIcon("posts")}
            icon={faBlog}
            className="hover:bg-blue-500 p-4 rounded-full transition-transform transform hover:scale-105 duration-500"
          />
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
