import { Error } from "@mui/icons-material";
import {
  Button,
  Card,
  Checkbox,
  Container,
  Grid,
  Input,
  Text,
} from "@nextui-org/react";
import { useTheme } from "@nextui-org/react";
import React, { useState } from "react";

export default function PoolCard({ data }) {
  const [expanded, setExpanded] = useState(false);
  const { isDark, type } = useTheme();
  const [tab, setTab] = useState(0);

  return (
    <div>
      <div
        className="d-flex justify-content-between card-container mt-3"
        style={{ background: isDark ? data.backgroundDark : data.background }}
      >
        <div className="d-flex align-items-center">
          <img className="icon-wraper" src={data.icon} alt="" />
          <Text className="card-heading">{data.name}</Text>
        </div>

        <div className="d-flex flex-column  justify-content-center align-items-center">
          <Text className="card-heading ">{data.apr}</Text>
          <Text className="card-subheading ">APR</Text>
        </div>

        <div className="d-flex flex-column  justify-content-center align-items-center">
          <Text className="card-heading ">{data.tvl}</Text>
          <Text className="card-subheading">TVL</Text>
        </div>

        <div className="d-flex flex-column  justify-content-center align-items-center">
          <Text className="card-heading ">{data.staked}</Text>
          <Text className="card-subheading">your Deposits</Text>
        </div>

        <div className="d-flex flex-column  justify-content-center align-items-center">
          <Text className="card-heading ">{data.rewards}</Text>
          <Text className="card-subheading ">Rewards</Text>
        </div>

        <Button light auto onClick={() => setExpanded(!expanded)}>
          <img src="images/arrow-down.png" alt="" />
        </Button>
      </div>
      {expanded && (
        <Container gap={0} css={{ bc: "$background", mb: 25 }}>
          <div
            style={{
              height: 42,
              display: "flex",
              justifyContent: "space-evenly",

              fontFamily: "Poppins",
            }}
          >
            <Container
              gap={0}
              css={{
                backgroundColor: "$backgroundLight",
                d: "flex",
                jc: "center",
                ai: "center",
                w: "100%",
                cursor: "pointer",
              }}
            >
              <Text>Convert</Text>
            </Container>
            <Container
              gap={0}
              css={{
                backgroundColor: "$background",
                d: "flex",
                jc: "center",
                ai: "center",
                w: "100%",
                cursor: "pointer",
              }}
            >
              <Text>Stake</Text>
            </Container>
            <Container
              gap={0}
              css={{
                backgroundColor: "$background",
                d: "flex",
                jc: "center",
                ai: "center",
                w: "100%",
                cursor: "pointer",
              }}
            >
              <Text>Unstake</Text>
            </Container>
          </div>

          <Grid.Container gap={3} wrap="wrap">
            <Grid sm={6} alignItems="center">
              <div>
                <Text css={{ fontSize: 14, color: "$colorPrimaryText" }}>
                  Convert WOM to mWOM and stake mWOM to earn Magpie protocol
                  revenue plus MGP tokens. Note: Converting WOM to mWOM is
                  irreversible. You may stake and unstake mWOM tokens, but not
                  convert them back to WOM. Secondary markets however exist to
                  allow the exchange of mWOM for WOM at varying market rates
                  (See PancakeSwap).
                </Text>
              </div>
            </Grid>

            <Grid sm={6} alignItems="center">
              <div className="d-flex flex-column justify-content-center   w-100">
                <div className="d-flex justify-content-between  w-80 mt-1 mb-2 ">
                  <Text css={{ fontSize: 14, color: "$colorPrimaryText" }}>
                    Amount to convert
                  </Text>
                  <Text css={{ fontSize: 14, color: "$colorPrimarySecondary" }}>
                    0.0
                  </Text>
                </div>

                <div
                  style={{
                    border: "1px solid #D6DFF2",
                  }}
                  className="d-flex justify-content-between align-items-center w-80 mb-4  "
                >
                  <Input placeholder="0.0" type="number" />
                  <div className="d-flex justify-content-center">
                    <Button css={{ height: 30, mr: 4 }} color={"primary"} auto>
                      Max
                    </Button>
                    <img
                      style={{ width: "auto", height: "25px" }}
                      src="images/wom.png"
                      alt="pie"
                    />
                  </div>
                </div>

                <div>
                  <Button css={{ width: "100%" }}>Approve</Button>
                </div>

                <div className="d-flex justify-content-start w-80 mt-4 ">
                  <Checkbox css={{ mr: 6 }} />
                  <Text css={{ mr: 6 }}> Approve infinity </Text>
                  <Error />
                </div>
              </div>
            </Grid>
          </Grid.Container>
          <Container
            gap={0}
            css={{ bc: "$backgroundLight", h: 45 }}
            className="d-flex justify-content-center align-items-center w-80"
          >
            <div className="d-flex">
              <Text css={{ fs: 14, color: "$secondaryText" }}>
                Total WOM Concerted
              </Text>
              <Text css={{ mr: 8, ml: 4 }} className="header-title3">
                $0.0 WOM
              </Text>
            </div>
            <div className="d-flex ml-4">
              <Text css={{ mr: 4, ml: 8, fs: 14, color: "$secondaryText" }}>
                Total veWOM Accrued
              </Text>
              <Text className="header-title3">$0.0 veWOM</Text>
            </div>
          </Container>
        </Container>
      )}
    </div>
  );
}
