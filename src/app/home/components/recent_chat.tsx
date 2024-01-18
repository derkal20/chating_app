import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import SearchBar from "../../../components/search_bar";
import ChatBox from "./chat-box";
import { useEffect, useState } from "react";
import ChatDetail from "./chat_details";

export default function RecentChat({ recentChat }: any) {
  useEffect(() => {
  }, []);
  const [recentTitle, setRecentTitle] = useState('')
  const [recentDescriptin, setRecentDescription] = useState('')


  const handleChatBoxClick = ({ title, description }: { title: string, description: string }) => {
    setRecentTitle(title)
    setRecentDescription(description)
  };

  return (
    <div className="size-full flex flex-row">
      <div className="flex flex-col border ">
        <div className="flex flex-row basis-1/12 m-3 ">
          <div className="basis-5/6 items-center ">
            <h1 className="text-2xl font-bold">Đoạn Chat</h1>
          </div>
          <button className="flex items-center basis-1/6 px-3 rounded-full">
            <FontAwesomeIcon icon={faPenToSquare} />
          </button>
        </div>
        <div className=" mt-3 basis-1/12 w-full">
          <SearchBar />
        </div>
        <div className="my-6 w-full h-100 overflow-auto">
          <div className="px-3 h-auto">
            {recentChat.map((chat: any, index: number) => (
              <ChatBox
                key={index}
                title={chat.title}
                description={chat.description}
                isread={chat.isRead}
                onItemClick={handleChatBoxClick}
              />
            ))}
          </div>
        </div>
      </div>
      <ChatDetail
        title = {recentTitle}
        description = {recentDescriptin}
      />
    </div>
  );
}
