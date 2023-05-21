import React from "react";
import BalanceCard from "./BalanceCard";

export default function Balances() {
  const balances = [
    {
      type: "Your Deposit",
      value: "12.4",
    },

    {
      type: "Your Rewards",
      value: "343.23",
    },

    {
      type: "Magpie Total TVL",
      value: "122.32M",
    },
  ];

  return (
    <div
      className="row d-flex flex-wrap top-card-wrapper"
      style={{ marginTop: "2%" }}
    >
      {balances.map((item) => (
        <BalanceCard data={item} />
      ))}
    </div>
  );
}
