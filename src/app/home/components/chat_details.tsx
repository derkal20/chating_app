import ChatInput from "~/components/constant_input";
import MessageBubble from "~/components/messenger_box";
import StickyNavbar from "~/components/sticky_navbar";

export default function ChatDetail(chatcontent: any) {
  return (
    <div className="size-full flex flex-col ">
      <StickyNavbar title={chatcontent.title} />
      <div className="size-full flex flex-col-reverse">
        <ChatInput />
        <div className="mx-2 h-full flex flex-col-reverse overflow-auto">
          <MessageBubble message="hellasdfasdfo 1" isSender={true} />
          <MessageBubble message="hello 2" isSender={true} />
          <MessageBubble message="helo 3" isSender={true} />
          <MessageBubble message="hello 4" isSender={true} />
          <MessageBubble message="hell" isSender={true} />
          <MessageBubble message="hello " isSender={true} />
          <MessageBubble message="hello 7 fas" isSender={true} />
          <MessageBubble message="hello 7 h" isSender={true} />
          <MessageBubble message="hello 7 adsf" isSender={true} />
          <MessageBubble message="hello 7asdfasdf" isSender={true} />
          <MessageBubble message="hello 7" isSender={true} />
          <MessageBubble message="hello 7 asdkjfbsdf" isSender={true} />
          <MessageBubble message={chatcontent.description} isSender={false} />
          <MessageBubble message={chatcontent.description} isSender={false} />
          <MessageBubble message={chatcontent.description} isSender={false} />
          <MessageBubble message={chatcontent.description} isSender={false} />
          <MessageBubble message={chatcontent.description} isSender={false} />
          <MessageBubble message={chatcontent.description} isSender={false} />
        </div>
      </div>
    </div>
  );
}
