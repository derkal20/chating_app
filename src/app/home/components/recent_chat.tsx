"use client";

import { useEffect, useState } from "react";
import ChatBox from "./chat-box";
import ChatDetail from "./chat-detail";

export default function RecentChat() {
    const [userId, setUserId] = useState(null)
    const [conversations, setConversations] = useState([])
    const [recentChat, setRecentChat] = useState([]);

    interface ChatDetailProps {
        conversationId: string;
    }
    useEffect(() => {
        const fetchData = async () => {
            try {
                // Check if the token exists in localStorage
                const storedUserData = localStorage.getItem("user_data");
                if (storedUserData) {
                    const user = JSON.parse(storedUserData);
                    setUserId(user.userId);
                    const response = await fetch(`http://127.0.0.1:8080/api/v1/conversations/user/${user.userId}`, {
                        method: "GET",
                        headers: { "Content-Type": "application/json" },
                    });

                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    const data = await response.json();
                    setConversations(data.conversations)
                    const conver = data.conversations[0];
                    fetchMessage(conver._id);

                }
                // console.log(userId);
            } catch (error) {
                console.error("Error fetching data:", (error as Error).message);
            }
        };
        const fetchMessage = async (converId: any) => {
            try {
                // Check if the token exists in localStorage
                const response = await fetch(`http://127.0.0.1:8080/api/v1/conversations/${converId}`, {
                    method: "GET",
                    headers: { "Content-Type": "application/json" },
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();
                setRecentChat(data.data.messages);
            } catch (error) {
                console.error("Error fetching data:", (error as Error).message);
            }
        };

        fetchData();
    }, [userId]);


    const handleOpenChat = (chat: any) => {
        setRecentChat(chat);
    };

    return (
        <div className="flex-grow w-full flex flex-row overflow-auto">
            <ChatBox chats={conversations} currentId={userId} handleClickBox={handleOpenChat} />
            <ChatDetail chatdetail={recentChat} currentId={userId} />
        </div>
    );
}
