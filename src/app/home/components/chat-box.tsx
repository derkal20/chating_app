import Image from "next/image";
import { useEffect } from "react";

// interface ChatBox {
//   title: string;
//   description: string;
// }

export default function ChatBox(data: any) {
  const formatTextLong = (text: String) => {
    let maxLength = 8;
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.slice(0, maxLength) + "...";
    }
  };

  const onClickHandle = (chatdata: any) => {
    data.onItemClick(chatdata);
  };

  return (
    <div
      onClick={() => onClickHandle(data)}
      className="flex flex-row items-center w-full h-20 rounded-lg m-1 hover:bg-gray-100 hover:cursor-pointer"
    >
      <img
        className="ml-3 rounded-full"
        width={48}
        height={48}
        alt="chat box avatar"
        src="images/messenger.png"
      />
      <div className="w-full h-full m-2 ">
        <div className="p-2 flex flex-col">
          <div className="basis-1/2 flex items-center">
            <h1 className="p-1 text-xl font-bold">{data.title}</h1>
            <div
              className={`ml-3 w-1 h-1 ${
                data.isread ? "bg-blue-600" : "bg-white"
              } rounded-full`}
            ></div>
          </div>
          <div className="flex items-center basis-1/2">
            <h1
              className={`p-2 text-xs ${
                data.isread ? "font-bold" : "font-normal"
              }`}
            >
              {formatTextLong(data.description)}
            </h1>
            <p className="text-xs font-light">⋅57min</p>
          </div>
        </div>
      </div>
    </div>
  );
}
