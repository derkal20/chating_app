export default function Modal() {
  return (
    <div className="absolute top-2 left-16 mt-16 w-40 shadow-lg border rounded-lg">
      <div className="bg-white p-4 rounded-md">
        <ul>
          <li className="hover:bg-gray-200 cursor-pointer h-10 items-center flex rounded-lg font-bold active:bg-gray-300 border-b">
            <h1 className="p-2">PROFILE</h1>
          </li>
          <li className="hover:bg-gray-200 cursor-pointer h-10 items-center flex rounded-lg font-bold active:bg-gray-300 border-b">
            <h1 className="p-2">SETTINGS</h1>
          </li>
          <li className="hover:bg-gray-200 cursor-pointer h-10 items-center flex rounded-lg font-bold active:bg-gray-300">
            <h1 className="p-2">LOGOUT</h1>
          </li>
        </ul>
      </div>
    </div>
  );
}
