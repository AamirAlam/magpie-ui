import { useTheme } from "@emotion/react";
import { Container, Text } from "@nextui-org/react";
import React from "react";

export default function BalanceCard({ data }) {
  const { isDark, type } = useTheme();

  return (
    <div className="col-md-4 ">
      <Container
        gap={0}
        css={{
          backgroundColor: "$background",
          w: "96%",
          mt: 10,
          mb: 10,
          p: 5,
          paddingLeft: 15,
          d: "flex",
          ai: "center",
          jc: "center",
          borderRadius: 5,
        }}
      >
        {/* <div className="card p-2"> */}
        <div className="card-body">
          <Text className="card-title">${data?.value}</Text>

          <h5 className="card-secondary-text">{data?.type}</h5>
        </div>
        <div className="text-right">
          <img src="images/deposit.png" className="top-card-left-image" />
        </div>
      </Container>
      {/* </div> */}
    </div>
  );
}
