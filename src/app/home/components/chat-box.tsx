import { faAdd } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ChatBox(props: any) {
  let chatData = props.chats;

  const handleClick = (chatContent: any) => {
    props.handleClickBox(chatContent);
  };

  return (
    <div className="overflow-auto basis-1/3 flex flex-col border h-full">
      {chatData.map((item: any, index: number) => (
        <div
          key={index}
          onClick={() => handleClick(item)}
          className={`p-4 ${
            item.unread ? "bg-gray-200" : "bg-white"
          } h-24 flex w-full items-center hover:bg-gray-300 cursor-pointer active:bg-gray-400`}
        >
          <div className="basis-1/6">
            <img
              src="/images/messenger.png"
              alt="Avatar"
              className="size-14 rounded-full"
            />
          </div>
          <div className="ml-4 basis-5/6">
            <div className="text-xl font-bold mb-1 text-black">{item.title}</div>
            <div
              className={`${
                item.unread ? "font-bold" : "font-normal"
              } flex items-center`}
            >
              <h1
                className={`${
                  item.unread ? "font-bold" : "font-normal"
                } text-sm text-black`}
              >
                {item.content[0].messenger}
              </h1>
            </div>
          </div>
        </div>
      ))}
      <button className="fixed left-56 bottom-4 transform -translate-x-1/2 bg-blue-500 text-white rounded-full p-4 text-lg cursor-pointer size-16 shadow-2xl active:bg-blue-700 hover:bg-blue-600 ">
        <FontAwesomeIcon icon={faAdd} />
      </button>
    </div>
  );
}
