"use client";

import { useEffect, useState } from "react";
import ChatBox from "./chat-box";
import ChatDetail from "./chat-detail";

export default function RecentChat() {
  const chatData = [
    {
      id: 1,
      title: "Chat 1",
      content: [
        {
          messenger: "hello there",
          isSender: true,
        },
        {
          messenger: "what's up, how it's going?",
          isSender: false,
        },
        {
          messenger: "i'm good, wanna hangout?",
          isSender: true,
        },
        {
          messenger: "of course, where will we go?",
          isSender: false,
        },
        {
          messenger: "hotel :3",
          isSender: true,
        },
      ],
      unread: true,
    },
    {
      id: 2,
      title: "Chat 2",
      content: [
        {
          messenger: "hello there",
          isSender: true,
        },
        {
          messenger: "what's up, how it's going?",
          isSender: false,
        },
        {
          messenger: "i'm good, wanna hangout?",
          isSender: true,
        },
        {
          messenger: "of course, where will we go?",
          isSender: false,
        },
        {
          messenger: "hotel :3",
          isSender: true,
        },
      ],
      unread: false,
    },
    {
      id: 3,
      title: "Chat 3",
      content: [
        {
          messenger: "hello there",
          isSender: true,
        },
        {
          messenger: "what's up, how it's going?",
          isSender: false,
        },
        {
          messenger: "i'm good, wanna hangout?",
          isSender: true,
        },
        {
          messenger: "of course, where will we go?",
          isSender: false,
        },
        {
          messenger: "hotel :3",
          isSender: true,
        },
      ],
      unread: true,
    },
    {
        id: 1,
        title: "Chat 1",
        content: [
          {
            messenger: "hello there",
            isSender: true,
          },
          {
            messenger: "what's up, how it's going?",
            isSender: false,
          },
          {
            messenger: "i'm good, wanna hangout?",
            isSender: true,
          },
          {
            messenger: "of course, where will we go?",
            isSender: false,
          },
          {
            messenger: "hotel :3",
            isSender: true,
          },
        ],
        unread: true,
      },
      {
        id: 1,
        title: "Chat 1",
        content: [
          {
            messenger: "hello there",
            isSender: true,
          },
          {
            messenger: "what's up, how it's going?",
            isSender: false,
          },
          {
            messenger: "i'm good, wanna hangout?",
            isSender: true,
          },
          {
            messenger: "of course, where will we go?",
            isSender: false,
          },
          {
            messenger: "hotel :3",
            isSender: true,
          },
        ],
        unread: true,
      },
      {
        id: 1,
        title: "Chat 1",
        content: [
          {
            messenger: "hello there",
            isSender: true,
          },
          {
            messenger: "what's up, how it's going?",
            isSender: false,
          },
          {
            messenger: "i'm good, wanna hangout?",
            isSender: true,
          },
          {
            messenger: "of course, where will we go?",
            isSender: false,
          },
          {
            messenger: "hotel :3",
            isSender: true,
          },
        ],
        unread: true,
      },
      {
        id: 1,
        title: "Chat 1",
        content: [
          {
            messenger: "hello there",
            isSender: true,
          },
          {
            messenger: "what's up, how it's going?",
            isSender: false,
          },
          {
            messenger: "i'm good, wanna hangout?",
            isSender: true,
          },
          {
            messenger: "of course, where will we go?",
            isSender: false,
          },
          {
            messenger: "hotel :3",
            isSender: true,
          },
        ],
        unread: true,
      },
      {
        id: 1,
        title: "Chat 1",
        content: [
          {
            messenger: "hello there",
            isSender: true,
          },
          {
            messenger: "what's up, how it's going?",
            isSender: false,
          },
          {
            messenger: "i'm good, wanna hangout?",
            isSender: true,
          },
          {
            messenger: "of course, where will we go?",
            isSender: false,
          },
          {
            messenger: "hotel :3",
            isSender: true,
          },
        ],
        unread: true,
      },
      {
        id: 1,
        title: "Chat 1",
        content: [
          {
            messenger: "hello there",
            isSender: true,
          },
          {
            messenger: "what's up, how it's going?",
            isSender: false,
          },
          {
            messenger: "i'm good, wanna hangout?",
            isSender: true,
          },
          {
            messenger: "of course, where will we go?",
            isSender: false,
          },
          {
            messenger: "hotel :3",
            isSender: true,
          },
        ],
        unread: true,
      },
      {
        id: 1,
        title: "Chat 1",
        content: [
          {
            messenger: "hello there",
            isSender: true,
          },
          {
            messenger: "what's up, how it's going?",
            isSender: false,
          },
          {
            messenger: "i'm good, wanna hangout?",
            isSender: true,
          },
          {
            messenger: "of course, where will we go?",
            isSender: false,
          },
          {
            messenger: "hotel :3",
            isSender: true,
          },
        ],
        unread: true,
      },
      {
        id: 1,
        title: "Chat 1",
        content: [
          {
            messenger: "hello there",
            isSender: true,
          },
          {
            messenger: "what's up, how it's going?",
            isSender: false,
          },
          {
            messenger: "i'm good, wanna hangout?",
            isSender: true,
          },
          {
            messenger: "of course, where will we go?",
            isSender: false,
          },
          {
            messenger: "hotel :3",
            isSender: true,
          },
        ],
        unread: true,
      },
  ];

  //   useEffect(() => {
  //     console.log(chatData[0].content[0].messenger);
  //   }, []);

  const [recentChat, setRecentChat] = useState({});

  const handleOpenChat = (chat: any) => {
    setRecentChat(chat);
  };

  return (
    <div className="flex-grow w-full flex flex-row overflow-auto">
      <ChatBox chats={chatData} handleClickBox={handleOpenChat} />
      <ChatDetail chatdetail={recentChat} />
    </div>
  );
}
