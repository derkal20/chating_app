import Chart from "./chart";

export default function MessageManager() {
  return (
    <div className="flex flex-grow">
      <div className="bg-white p-20 rounded-lg shadow-lg mt-5 flex-grow">
        <h2 className="text-xl font-bold text-gray-800 mb-5">Dashboard: <b>MESSAGE</b></h2>
        <div className="flex">
          <Chart users="1" messages="2" posts="3" />
          <div className="w-2/3">
            <table className="w-full table-auto">
              <thead>
                <tr>
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Role</th>
                  <th className="px-4 py-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2">1</td>
                  <td className="border px-4 py-2">John Doe</td>
                  <td className="border px-4 py-2">john@example.com</td>
                  <td className="border px-4 py-2">Admin</td>
                  <td className="border px-4 py-2">
                    <button className="bg-blue-500 text-white py-1 px-3 rounded">
                      Edit
                    </button>
                    <button className="bg-red-500 text-white py-1 px-3 rounded ml-2">
                      Delete
                    </button>
                  </td>
                </tr>
                {/* Add more rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
