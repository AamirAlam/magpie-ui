import React from "react";
import Header from "../components/Header";
import Balances from "../components/Balances/Balances";
import Pools from "../components/Pools/Pools";
import { useTheme } from "@nextui-org/react";
import useBreakpoint from "../hooks/useBreakPoint";
export default function HomePage() {
  const { isDark, type } = useTheme();

  const breakPoint = useBreakpoint();
  console.log("theme ", { isDark, type, breakPoint });
  return (
    <div
      style={{
        backgroundPosition: "center center, center center",
        backgroundRepeat: "no-repeat, no-repeat",
        backgroundSize: "cover",
        width: "100%",
        minHeight: "100vh",
        backgroundImage: isDark
          ? `url("images/bkg-dark.png")`
          : `url("images/bkg.png")`,

        paddingLeft: breakPoint === "sm" ? "2%" : "10%",
        paddingRight: breakPoint === "sm" ? "2%" : "10%",
      }}
    >
      <Header />
      <Balances />
      <Pools />
    </div>
  );
}
