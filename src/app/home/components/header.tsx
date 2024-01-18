"use client";

import Image from "next/image";
import { useState } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBoxArchive,
  faComment,
  faUser,
} from "@fortawesome/free-solid-svg-icons";

import ChatManager from "./chat-manager";
import RecentChat from "./recent_chat";
import FriendListChat from "./friend_list";
import StorageChat from "./storage_chat";
import Spinner from "~/components/spinner";

export default function Header({ children }: { children: React.ReactNode }) {
  const [options, setOptions] = useState("recent");

  let RecentChatContent = [
    {
      title: "Chat 1",
      description: "Chat 1 Description",
      isRead: true
    },
    {
      title: "Chat 2",
      description: "Chat 2 Description",
      isRead: true
    },
    {
      title: "Chat 3",
      description: "Chat 3 Description",
      isRead: true
    },
    {
      title: "Chat 3",
      description: "Chat 3 Description",
      isRead: false
    },
    {
      title: "Chat 3",
      description: "Chat 3 Description",
      isRead: false
    },
    {
      title: "Chat 3",
      description: "Chat 3 Description",
      isRead: false
    },
    {
      title: "Chat 3",
      description: "Chat 3 Description",
      isRead: false
    },
    {
      title: "Chat 3",
      description: "Chat 3 Description",
      isRead: false
    },
  ];

  const renderContent = () => {
    switch (options) {
      case "recent":
        return <RecentChat recentChat={RecentChatContent} />;
      case "listfriend":
        return <FriendListChat FriendList={RecentChatContent} />;
      case "storage":
        return <StorageChat StorageChat={RecentChatContent} />;
    }
  };

  return (
    <div className="size-full flex flex-row">
        <div className="flex flex-col h-full w-14 bg-slate relative border">
          <div className="flex flex-col items-center justify-center w-full h-1/3 absolute top-0 p-3">
            <div
              onClick={() => setOptions("recent")}
              className="w-10 basis-1/3 flex justify-center items-center bg-white my-4 rounded-lg hover:bg-gray-200 "
            >
              <FontAwesomeIcon className="w-2/3 h-2/3" icon={faComment} />
            </div>
            <div
              onClick={() => setOptions("listfriend")}
              className="w-10 basis-1/3 flex justify-center items-center bg-white my-4 rounded-lg hover:bg-gray-200 "
            >
              <FontAwesomeIcon className="w-2/3 h-2/3" icon={faUser} />
            </div>
            <div
              onClick={() => setOptions("storage")}
              className="w-10 basis-1/3 flex justify-center items-center bg-white my-4 rounded-lg hover:bg-gray-200"
            >
              <FontAwesomeIcon className="w-2/3 h-2/3" icon={faBoxArchive} />
            </div>
          </div>
          <div className="flex w-10 h-10 bg-gray-700 absolute bottom-3 left-1 rounded-full hover:bg-gray-800 ">
            <Image
              width="50"
              height="50"
              className="w-full h-full rounded-full hover:bg-gray-800 border-2"
              src="/images/user.png"
              alt="User Image"
            />
          </div>
        </div>
        <ChatManager>{renderContent()}</ChatManager>
    </div>
  );
}
