import React from "react";
import TradingViewWidget, { Themes } from "react-tradingview-widget";



export default function Trading() {
  return (

    <TradingViewWidget
      symbol={"ETHUSD"}
      theme={Themes.DARK}
      interval="D"
      locale="en"
      timezone="America/New York"
      hideSideToolbar={true}
      details
      news={["headlines"]}

    />
  );
}


