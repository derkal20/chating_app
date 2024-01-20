import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SearchBar() {
  return (
    <div className="flex items-center h-full justify-center ">
      <form className="max-w-md h-4 px-4 mb-5">
        <div className="relative">
          <FontAwesomeIcon
            icon={faSearch}
            className="absolute top-0 bottom-0 w-4 h-4 my-auto text-gray-400 left-3 cursor-pointer"
          />
          <input
            type="text"
            placeholder="Search"
            className="w-full p-2 pl-12 pr-4 text-gray-500 border rounded-full outline-none bg-gray-50 focus:bg-white focus:border-gray-300"
          />
        </div>
      </form>
    </div>
  );
}
