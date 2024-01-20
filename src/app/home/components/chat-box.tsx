import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
interface User {
	_id: string;
	avatar: string;
	first_name: string;
	last_name: string;
	// Add other properties as needed
}
interface ChatBoxProps {
	chats: any[]; // Adjust the type according to your actual data structure
	currentId: string;
	handleClickBox: (chatContent: any) => void;
}

export default function ChatBox(props: any) {
	let conversations = props.chats;
	let currentId = props.currentId;

	const handleClick = (chatContent: any) => {
		props.handleClickBox(chatContent);
	};
	
	return (
		<div className="overflow-auto basis-1/3 flex flex-col border h-full">
			{conversations.map((item: any, index: number) => {
				const otherUsers: User[] = item.users.filter((user: User) => user._id !== currentId);
				const full_name = otherUsers[0].last_name + " " + otherUsers[0].first_name;
				const last_message = item.last_message_id;
				return (
					<div
						key={index}
						onClick={() => handleClick(item)}
						className={`p-4 bg-white h-24 flex w-full items-center hover:bg-gray-300 cursor-pointer active:bg-gray-400`}
					>
						<div className="basis-1/6">
							<img
								src={otherUsers.length > 0 ? otherUsers[0].avatar : ""}
								className="size-14 rounded-full"
							/>
						</div>
						<div className="ml-4 basis-5/6">
							<div className="text-xl font-bold mb-1 text-gray-600">{full_name}</div>
							<div
								className={`${last_message.unread ? "font-bold" : "font-normal"} flex items-center`}
							>
								<h1
									className={`${last_message.unread ? "font-bold" : "font-normal"} text-sm text-gray-500`}
								>
									{last_message.content}
								</h1>
							</div>
						</div>
						<div className={`size-2 rounded-full ${item.unread ? 'bg-blue-500' : 'bg-transparent'}`} />
					</div>
				);
			})}
			<button className="fixed left-56 bottom-4 transform -translate-x-1/2 bg-blue-500 text-white rounded-full p-4 text-lg cursor-pointer size-16 shadow-2xl active:bg-blue-700 hover:bg-blue-600 ">
				<FontAwesomeIcon icon={faAdd} />
			</button>
		</div>
	);
}
