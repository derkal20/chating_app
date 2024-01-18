import React, { useState, ChangeEvent, FormEvent } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";

const ChatInput: React.FC = () => {
  const [message, setMessage] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(`message: ${message}`);
    setMessage("");
  };

  const handleAttachmentClick = () => {
    console.log("clicked");
  };

  return (
    <div className="flex items-center justify-between  p-3">
      <div className="flex items-center">
        <button
          type="button"
          onClick={handleAttachmentClick}
          className="text-blue-500 focus:outline-none hover:text-blue-600"
        >
          <FontAwesomeIcon icon={faImage} />
        </button>
        <form className="flex-grow" onSubmit={handleSubmit}>
          <input
            type="text"
            value={message}
            onChange={handleChange}
            placeholder="Type a message..."
            className="w-1000 px-4 py-2 rounded-full focus:outline-none focus:shadow-outline-gray ml-3 border"
          />
        </form>
      </div>
      <button
        disabled={message != "" ? false : true}
        type="submit"
        onClick={handleSubmit}
        className={`ml-3 px-4 py-2 bg-blue-500 text-white rounded-full focus:outline-none hover:bg-blue-600`}
      >
        Send
      </button>
    </div>
  );
};

export default ChatInput;
