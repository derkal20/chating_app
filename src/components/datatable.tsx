// components/Table.tsx
import React, { useState } from "react";

type User = {
  id: number;
  name: string;
  email: string;
};

const Table: React.FC = () => {
  const pageSize = 4; // Số lượng người dùng hiển thị trên mỗi trang
  const initialData: User[] = [
    { id: 1, name: "John Doe", email: "john@example.com" },
    { id: 2, name: "Jane Doe", email: "jane@example.com" },
    { id: 3, name: "Bob Smith", email: "bob@example.com" },
    { id: 4, name: "Alice Johnson", email: "alice@example.com" },
    { id: 4, name: "Alice Johnson", email: "alice@example.com" },
    { id: 4, name: "Alice Johnson", email: "alice@example.com" },
    { id: 4, name: "Alice Johnson", email: "alice@example.com" },
    { id: 4, name: "Alice Johnson", email: "alice@example.com" },
    { id: 5, name: "Charlie Brown", email: "charlie@example.com" },
    { id: 6, name: "David Williams", email: "david@example.com" },
    { id: 6, name: "David Williams", email: "david@example.com" },
    { id: 6, name: "David Williams", email: "david@example.com" },
    { id: 6, name: "David Williams", email: "david@example.com" },
  ];

  const [users, setUsers] = useState<User[]>(initialData);
  const [editingId, setEditingId] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("");
  const [currentPage, setCurrentPage] = useState<number>(1);

  const handleEdit = (id: number) => {
    setEditingId(id);
  };

  const handleDelete = (id: number) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  const handleSave = (id: number, newName: string, newEmail: string) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === id ? { ...user, name: newName, email: newEmail } : user
      )
    );
    setEditingId(null);
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
    setCurrentPage(1); 
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(filter.toLowerCase())
  );

  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  const usersOnCurrentPage = filteredUsers.slice(startIndex, endIndex);


  const totalPages = Math.ceil(filteredUsers.length / pageSize);

  return (
    <div>
      <input
        className="border rounded w-full py-2 px-4 mb-4"
        type="text"
        placeholder="Filter"
        value={filter}
        onChange={handleFilterChange}
      />
      <table className="min-w-full bg-white border border-gray-300">
        <thead>
          <tr className="bg-gray-100">
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Email</th>
            <th className="py-2 px-4 border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {usersOnCurrentPage.map((user) => (
            <tr key={user.id} className="text-center">
              <td className="py-2 px-4 border-b">
                {editingId === user.id ? (
                  <input
                    className="border rounded w-full py-1 px-2"
                    type="text"
                    value={user.name}
                    onChange={(e) =>
                      handleSave(user.id, e.target.value, user.email)
                    }
                  />
                ) : (
                  user.name
                )}
              </td>
              <td className="py-2 px-4 border-b">
                {editingId === user.id ? (
                  <input
                    className="border rounded w-full py-1 px-2"
                    type="text"
                    value={user.email}
                    onChange={(e) =>
                      handleSave(user.id, user.name, e.target.value)
                    }
                  />
                ) : (
                  user.email
                )}
              </td>
              <td className="py-2 px-4 border-b">
                {editingId === user.id ? (
                  <button
                    className="bg-green-500 text-white px-3 py-1 rounded mr-2"
                    onClick={() => handleSave(user.id, user.name, user.email)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="bg-blue-500 text-white px-3 py-1 rounded mr-2"
                    onClick={() => handleEdit(user.id)}
                  >
                    Edit
                  </button>
                )}
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded"
                  onClick={() => handleDelete(user.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Phân trang */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            className={`mx-2 px-3 py-1 ${
              currentPage === index + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-300 text-black"
            } rounded`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Table;
