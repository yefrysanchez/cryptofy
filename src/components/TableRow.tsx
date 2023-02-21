import React from "react";
import Watch from "./Watch";

const TableRow = () => {
  return (
    <tr className="border-b-2 duration-200 hover:bg-indigo-500 shadow-md hover:shadow-indigo-700">
      <td className="py-4 text-center "><Watch/></td>
      <td className="py-4 text-center ">1</td>
      <td className="py-4 text-center flex justify-around ">
        <div className="w-6 h-6 rounded-full overflow-hidden">
          <img
            className="h-full w-full object-cover'"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png"
            alt=""
          />
        </div>
        <span className="font-bold">Bitcoin</span>
        <span className="font-light">BTC</span>
      </td>
      <td className="py-4 text-center ">24,154</td>
      <td className="py-4 text-center hidden md:table-cell">-0.72%</td>
      <td className="py-4 text-center hidden lg:table-cell">$25,113</td>
      <td className="py-4 text-center hidden lg:table-cell">$24,390</td>
      <td className="py-4 text-center hidden md:table-cell">$471,880,760,376</td>
    </tr>
  );
};

export default TableRow;
