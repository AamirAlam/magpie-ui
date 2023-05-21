import React from "react";
import PoolCard from "./PoolCard";
import { Text } from "@nextui-org/react";

const pool = [
  {
    id: 1,
    icon: "images/Wom.png",
    name: "Convert WOM",
    apr: "10%",
    tvl: "100M",
    staked: "10M BUSD",
    rewards: "1M",
    details:
      "Convert WOM to mWOM and stake mWOM to earn Magpie protocol revenue plus MGP tokens. Note: Converting WOM to mWOM is irreversible. You may stake and unstake mWOM tokens, but not convert them back to WOM. Secondary markets however exist to allow the exchange of mWOM for WOM at varying market rates (See PancakeSwap).",
    background:
      "radial-gradient(39.75% 7610.81% at -12.21% 50%, #FDDD5E 0%, #FFFFFF 100%)",
    backgroundDark:
      "linear-gradient(90deg, rgba(255,237,0,1) 0%, rgba(251,233,1,1) 0%, rgba(160,148,14,1) 0%, rgba(2,0,36,1) 36%)",
  },
  {
    id: 2,
    icon: "images/Mgk.png",
    name: "Stake MGP",
    apr: "30%",
    tvl: "2M",
    staked: "100K USDC",
    rewards: "20K",
    background:
      "radial-gradient(29.88% 5722.13% at -1.17% 50%, #288CFC 0%, #FFFFFF 100%)",
    backgroundDark:
      "linear-gradient(90deg, rgba(255,237,0,1) 0%, rgba(160,148,14,1) 0%, rgba(1,126,251,1) 0%, rgba(5,0,36,1) 33%)",
  },
];

const Pools = () => {
  return (
    <div>
      <div style={{ marginTop: "2%", position: "relative" }}>
        <div style={{ zIndex: 2 }}>
          <Text css={{ color: "$primaryColorText" }} className="main-heading">
            MAGPIE POOLS
          </Text>
        </div>
      </div>

      <div>
        {pool.map((item) => (
          <PoolCard data={item} />
        ))}
      </div>
    </div>
  );
};

export default Pools;
