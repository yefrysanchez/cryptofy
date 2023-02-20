import React from "react";
import TableRow from "./TableRow";

const CoinTable = () => {
  return (
    <section className="bg rounded-lg px-4 pb-8">
      <table className="w-full mt-4 ">
        <thead className="border-b-2">
          <tr className="lg:text-lg">
            <th className="py-4">Watch</th>
            <th>Rank</th>
            <th>Name</th>
            <th>Price</th>
            <th className="hidden md:table-cell">24h %</th>
            <th className="hidden lg:table-cell">Today's High</th>
            <th className="hidden lg:table-cell">Today's Low</th>
            <th className="hidden md:table-cell">Market Cap</th>
          </tr>
        </thead>
        <tbody>
          <TableRow />
          <TableRow />
        </tbody>
      </table>
    </section>
  );
};

export default CoinTable;
