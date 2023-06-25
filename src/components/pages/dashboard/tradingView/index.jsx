import TradingViewWidget, { Themes } from "react-tradingview-widget";

export default function TradingView() {
  return (
    <>
      <TradingViewWidget
        symbol="NASDAQ:AAPL"
        theme={Themes.Light}
        locale="fr"
        autosize
      />
    </>
  );
}
