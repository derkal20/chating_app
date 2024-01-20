import BasicFilterDemo from "~/components/datatable";
import Chart from "./chart";
import Table from "~/components/datatable";

export default function UserManager() {
  return (
    <div className="flex flex-grow">
      <div className="bg-white p-20 rounded-lg shadow-lg mt-5 flex-grow">
        <h2 className="text-xl font-bold text-gray-800 mb-5">
          Dashboard: <b>USER</b>
        </h2>
        <div className="flex">
          <Chart users="1" messages="2" posts="3" />
          <div className="w-2/3 border-2 p-5">
            <Table />
          </div>
        </div>
      </div>
    </div>
  );
}
