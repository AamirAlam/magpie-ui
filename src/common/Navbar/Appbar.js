import React, { useCallback } from "react";
import { Navbar, Link, Text, Button } from "@nextui-org/react";
import { Layout } from "./Layout.js";
import NetworkSelect from "./NetworkSelect.js";
import LanguageSelect from "./LaunguageSelect.js";
import { Brightness3, ExpandMore } from "@mui/icons-material";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { useTheme as useNextTheme } from "next-themes";
import { useTheme } from "@nextui-org/react";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

export default function Appbar() {
  const collapseItems = ["Pendle", "Stake", "Claim", "Lock"];

  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  const handleDarkMode = useCallback(() => {
    // isDark

    setTheme(isDark ? "light" : "dark");
  }, [isDark, setTheme]);

  return (
    <Layout>
      <Navbar variant="sticky">
        <Navbar.Toggle showIn="md" />
        <Navbar.Brand
          css={{
            "@mdMax": {
              w: "100%",
              ai: "start",
              // border: "1px solid red",
            },
          }}
        >
          <img src="images/magpie.png" alt="" />
        </Navbar.Brand>
        {/* <Navbar.Content
          css={{
            "@md": {
              // w: "100%",
              // ml: 40,
              jc: "flex-start",
            },
          }}
        >
       
        </Navbar.Content> */}
        <Navbar.Content
          css={{
            "@md": {
              w: "100%",
              ml: 40,
              jc: "flex-start",
            },
          }}
          enableCursorHighlight={false}
          activeColor="primary"
          hideIn="md"
        >
          <Navbar.Link
            css={{
              border: "2px solid #137CE7",
              borderRadius: 6,
              padding: 10,
              height: 18,
            }}
            href="#"
          >
            <img src="images/pendle.png" alt="" />
            <Text css={{ ml: 5, mr: 5 }} className="navList">
              Pendle
            </Text>
            <img src="images/arrow-down.png" alt="" />
          </Navbar.Link>
          <Navbar.Link isActive href="#">
            Stake
          </Navbar.Link>
          <Navbar.Link href="#">Claim</Navbar.Link>
          <Navbar.Link href="#">Lock</Navbar.Link>
          <Navbar.Link href="#">
            More <ArrowDropDownIcon />{" "}
          </Navbar.Link>
        </Navbar.Content>
        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >
          <Navbar.Item hideIn={"xs"}>
            <LanguageSelect />
          </Navbar.Item>
          <Navbar.Item hideIn={"xs"}>
            <NetworkSelect />
          </Navbar.Item>
          <Navbar.Item>
            <Button
              css={{ height: 35, "@xsMax": { minWidth: 160 } }}
              iconRight
              icon={<ExpandMore />}
            >
              Connect Wallet
            </Button>
          </Navbar.Item>
          <Navbar.Item>
            <Button
              onClick={handleDarkMode}
              light
              auto
              color={"black"}
              icon={isDark ? <WbSunnyIcon /> : <Brightness3 />}
            ></Button>
          </Navbar.Item>
        </Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="secondary"
              // css={{
              //   color: index === collapseItems.length - 1 ? "$error" : "",
              // }}
              // isActive={index === 2}
            >
              <Link
                color="inherit"
                css={{
                  minWidth: "100%",
                }}
                href="#"
              >
                {item}
              </Link>
            </Navbar.CollapseItem>
          ))}
          <Navbar.CollapseItem
            key={"lang"}
            css={{ alignSelf: "flex-start" }}
            showIn={"xs"}
          >
            <LanguageSelect />
          </Navbar.CollapseItem>

          <Navbar.CollapseItem key={"network"} css={{ mt: 20 }} showIn={"xs"}>
            <NetworkSelect />
          </Navbar.CollapseItem>
        </Navbar.Collapse>
      </Navbar>
    </Layout>
  );
}
