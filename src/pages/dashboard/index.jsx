//component
import CoinsSlider from "../../components/pages/dashboard/coinsSlider";
import WalletAsset from "../../components/pages/dashboard/walletAsset";
import FavoriteCoin from "../../components/pages/dashboard/favoriteCoins";
import TransactionValue from "../../components/pages/dashboard/transactionValue";
import TradingView from "../../components/pages/dashboard/tradingView";

//HOC
import WithUser from "../../components/HOC/withUser";

function Dashboard() {
  return (
    <div className="w-full">
      <CoinsSlider />

      <div className="grid grid-cols-12 w-full mt-5 gap-5">
        <div className="col-span-12 sm:col-span-6 md:col-span-8 grid grid-cols-12 gap-5">
          <div className="col-span-12 xl:col-span-6 bg-white p-5 rounded-xl max-h-[300px] overflow-hidden">
            <WalletAsset />
          </div>

          <div className="col-span-12 xl:col-span-6 bg-white p-5 rounded-xl space-y-3 max-h-[300px] overflow-hidden">
            <TransactionValue />
          </div>

          <div className="col-span-12 bg-white p-5 rounded-xl min-h-[450px]">
            <TradingView />
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4">
          <FavoriteCoin />
        </div>
      </div>
    </div>
  );
}

//return Dashboard to have user with it
export default WithUser(Dashboard);
