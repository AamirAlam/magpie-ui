import { Dropdown, Text } from "@nextui-org/react";
import { useState } from "react";

export default function LanguageSelect() {
  const menuItems = [
    { key: "en", name: "EN", icon: "" },
    { key: "ch", name: "HI", icon: "" },
    { key: "fr", name: "FR", icon: "" },
  ];
  const [selectedItem, setSelected] = useState(menuItems[0]);

  return (
    <Dropdown>
      <Dropdown.Button color={"#f9f9f9"} css={{ borderRadius: 5 }} flat>
        {selectedItem.name}
      </Dropdown.Button>
      <Dropdown.Menu
        variant="light"
        aria-label="Dynamic Actions"
        items={menuItems}
      >
        {(item) => (
          <Dropdown.Item key={item.key}>
            <Text onClick={() => setSelected(item)}>{item.name}</Text>
          </Dropdown.Item>
        )}
      </Dropdown.Menu>
    </Dropdown>
  );
}
