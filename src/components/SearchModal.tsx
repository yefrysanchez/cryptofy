import React from "react";
import Watch from "./Watch";

const SearchModal = ({close}:boolean) => {
  return (
    <section className="absolute flex bg-black bg-opacity-70 flex-col items-center h-full w-full top-0 left-1/2 translate-x-[-50%] ">
      <table className="relative w-3/4 mt-48 bg-indigo-900 rounded-lg px-4 pb-8">
      <button onClick={() => close(false)} className="absolute top-0 right-0 bg-red-700 px-3 rounded-lg">X</button>
        <thead className="border-b-2">
          <tr className="lg:text-lg">
            <th className="py-4">Watch</th>
            <th>Rank</th>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b-2 duration-200 hover:bg-indigo-500 shadow-md hover:shadow-indigo-700">
            <td className="py-4 text-center "><Watch /></td>
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
           
          </tr>
        </tbody>
      </table>
    </section>
  );
};

export default SearchModal;
