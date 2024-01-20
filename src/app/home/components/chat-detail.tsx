"use client";

import { useEffect, useState } from "react";
import ChatInput from "~/components/constant_input";
import MessageBubble from "~/components/messenger_box";
import { ChatSettings } from "./chat_settings";

export default function ChatDetail({ chatdetail, currentId }: { chatdetail: any; currentId: string | null }) {
    const [chatContent, setChatContent] = useState([]);
    useEffect(() => {
        console.log(chatdetail);
    }, [chatdetail]);

    return (
        <div className="h-full basis-2/3 flex ">
            <div className="h-full basis-7/12 border flex flex-col">
                <header className="flex items-center border-b h-14 justify-center">
                    {/* <h1 className="font-bold text-xl">{chatdetail.title}</h1> */}
                </header>
                <div className="flex-grow overflow-auto flex flex-col-reverse">
                    <div className="border-t">
                        <ChatInput />
                    </div>
                    <div className="mx-4 my-1 items-center overflow-auto flex-grow">
                        {chatdetail.map((item: any, index: number) => {
                            return (
                                <MessageBubble
                                    key={index}
                                    message={item.content}
                                    isSender={currentId === item.user_id._id}
                                    avatar = {item.user_id.avatar}
                                />

                            )
                        })}
                    </div>
                </div>
            </div>
            <ChatSettings title={chatdetail.title} />
        </div>
    );
}
