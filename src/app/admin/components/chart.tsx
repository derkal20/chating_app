export default function Chart({
  users,
  messages,
  posts,
}: {
  users: any;
  messages: any;
  posts: any;
}) {
  return (
    <div className="w-1/3 mr-5">
      <div className="bg-blue-500 text-white p-5 rounded-lg mb-5">
        <h3 className="text-xl font-bold mb-3">Total Users</h3>
        <p className="text-2xl font-bold">123</p>
      </div>
      <div className="bg-green-500 text-white p-5 rounded-lg mb-5">
        <h3 className="text-xl font-bold mb-3">Total Mesages</h3>
        <p className="text-2xl font-bold">456</p>
      </div>
      <div className="bg-red-500 text-white p-5 rounded-lg">
        <h3 className="text-xl font-bold mb-3">Total Posts</h3>
        <p className="text-2xl font-bold">789</p>
      </div>
    </div>
  );
}
