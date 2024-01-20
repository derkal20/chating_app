"use client";

import { useEffect, useState } from "react";
import SearchBar from "~/components/search_bar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faMoon } from "@fortawesome/free-solid-svg-icons";
import Modal from "./modal";
interface User {
	id?: string;
	avatar?: string;
	full_name?: string;
}
export default function Header({ children }: { children: React.ReactNode }) {
	const [showModal, setShowModal] = useState(false);
	const [currentUser, setCurrentUser] = useState<User | null>(null);
	const handleAvatarClick = () => {
		setShowModal(!showModal);
		console.log(currentUser);

	};
	useEffect(() => {
		// Check if the token exists in localStorage
		const storedUserData = localStorage.getItem("user_data");
		if (storedUserData) {
			const user = JSON.parse(storedUserData);
			setCurrentUser(user);

		}
	}, []);
	
	return (
		<div className="size-full flex flex-col ">
			<header className=" w-full h-36 border flex justify-between items-center">
				<div className="relative">
					<img
						src={currentUser?.avatar || "/images/default-avatar.png"} alt="Avatar"
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
