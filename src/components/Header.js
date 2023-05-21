import React from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { Button, Text } from "@nextui-org/react";
import useBreakpoint from "../hooks/useBreakPoint";

function Header() {
  const breakPoint = useBreakpoint();
  return (
    <div className="row">
      <div className="col-md-8  mt-4 mb-4">
        <div className="d-flex w-100">
          <div className="d-flex flex-row justify-content-start align-items-center title1-title2-wrapper">
            <div className="d-flex align-items-center">
              <img
                style={{ width: "auto", height: "20px" }}
                src="images/pie.png"
                alt="pie"
              />
              <Text
                css={{
                  ml: 5,
                  mr: 25,
                  color: "$primaryColorText",
                  fontSize: "16px",
                }}
              >
                $0.0
              </Text>
            </div>
            <div className="d-flex align-items-center">
              <img
                style={{ width: "auto", height: "25px" }}
                src="images/wom.png"
                alt="pie"
              />
              <Text
                css={{
                  ml: 5,

                  color: "$primaryColorText",
                  fontSize: "16px",
                }}
              >
                $0.0
              </Text>
            </div>
          </div>
        </div>
      </div>

      <div className="col-md-8">
        <div className="d-flex w-100">
          <div className="d-flex flex-row justify-content-start align-items-center title1-title2-wrapper">
            <Text
              css={{ color: "$primaryColorText", "@smMax": { fs: 10 } }}
              className="main-heading"
            >
              STAKE FUNDS
            </Text>
            <Text
              css={{ color: "$primaryColorText", "@smMax": { fs: 10 } }}
              className="header-title2"
            >
              Change Protocol
            </Text>
            <div className="title3-wrapper">
              <img
                src="images/coin.png"
                alt="Wombat Exchange"
                className="icon-wombat"
              />
              <Text
                css={{ color: "$primaryColorText" }}
                className="header-title3"
              >
                Wombat Exchange{" "}
                {<KeyboardArrowDownIcon className="drawer-downArrow" />}
              </Text>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4 col-sm-12 col-lg-4 column-purchase-btn">
        <Button
          css={{
            height: 35,
            borderRadius: 5,
            minWidth: 100,
            marginTop: breakPoint === "sm" ? 35 : 0,
          }}
        >
          Purchase Insurance
        </Button>
      </div>
    </div>
  );
}

export default Header;
