import Image from "next/image";
import React from "react";

const MessageBubble = ({
  message,
  isSender,
}: {
  message: string;
  isSender: boolean;
}) => {
  return (
    <div className={`flex ${isSender ? "justify-end" : "justify-start"} mb-4`}>
      {isSender ? (
        <div className="flex items-center">
          <div
            className={`mx-4 p-4 rounded-full shadow-md bg-blue-500 text-white justify-start`}
          >
            <p className="text-sm">{message}</p>
          </div>
          <div className="size-10 rounded-full">
            <Image
              src={"/images/messenger.png"}
              alt="user"
              width={48}
              height={48}
              className="rounded-full"
            />
          </div>
        </div>
      ) : (
        <div className="flex items-center">
          <div className="size-10 rounded-full">
            <Image
              src={"/images/messenger.png"}
              alt="user"
              width={48}
              height={48}
              className="rounded-full"
            />
          </div>
          <div className={`mx-4 p-4 rounded-full shadow-md bg-gray-200`}>
            <p className="text-sm">{message}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default MessageBubble;
