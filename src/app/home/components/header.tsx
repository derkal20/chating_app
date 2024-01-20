"use client";

import { useState } from "react";
import SearchBar from "~/components/search_bar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faMoon } from "@fortawesome/free-solid-svg-icons";
import Modal from "./modal";

export default function Header({ children }: { children: React.ReactNode }) {
  const [showModal, setShowModal] = useState(false);

  const handleAvatarClick = () => {
    setShowModal(!showModal);
  };

  return (
    <div className="size-full flex flex-col ">
      <header className=" w-full h-36 border flex justify-between items-center">
        <div className="relative">
          <img
            src="/images/user.png"
            alt="Avatar"
            className="ml-10 rounded-full size-16 hover:bg-gray-400 cursor-pointer"
            onClick={handleAvatarClick}
          />
          {showModal && (
            <Modal />
          )}
        </div>
        <SearchBar />
        <div className="flex items-center mr-10">
          <FontAwesomeIcon className="px-2 size-6" icon={faGear} />
          <FontAwesomeIcon className="px-2 size-6" icon={faMoon} />
        </div>
      </header>
      {children}
    </div>
  );
}
