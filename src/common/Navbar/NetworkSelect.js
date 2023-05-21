import { Dropdown } from "@nextui-org/react";
import { useState } from "react";

export default function NetworkSelect() {
  const menuItems = [
    {
      key: "arbitrum",
      name: "Arbitrum One",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/11841.png",
    },
    {
      key: "polygon",
      name: "Polygon",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/3890.png",
    },
    {
      key: "bsc",
      name: "BNB Chain",
      icon: "https://s2.coinmarketcap.com/static/img/coins/64x64/1839.png",
    },
  ];
  const [selectedItem, setSelected] = useState(menuItems[0]);

  return (
    <Dropdown>
      <Dropdown.Button
        // icon={<img src={selectedItem.icon} alt="icon" />}
        color={"#f9f9f9"}
        // flat
        onSelect={(e) => console.log("selected ", e)}
        css={{ minWidth: 170, borderRadius: 5 }}
      >
        <img
          style={{ height: 20, marginRight: 5 }}
          src={selectedItem.icon}
          alt="icon"
        />{" "}
        {selectedItem.name}
      </Dropdown.Button>
      <Dropdown.Menu aria-label="Dynamic Actions" items={menuItems}>
        {(item) => (
          <Dropdown.Item key={item.key}>
            <div onClick={() => setSelected(item)}>
              <img style={{ height: 20 }} src={item.icon} alt={item.key} />{" "}
              {item.name}
            </div>
          </Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
}
