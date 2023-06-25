//component
import CoinsSlider from "../../components/pages/dashboard/coinsSlider";
import WalletAsset from "../../components/pages/dashboard/walletAsset";
import FavoriteCoin from "../../components/pages/dashboard/favoriteCoins";
//HOC
import WithUser from "../../components/HOC/withUser";

//pic
import NBChartColumn from "./../../assets/img/chart/NBcharts-columnChats.png";
import ChartPic from "./../../assets/img/chart/chartPic.png";

function Dashboard() {
  return (
    <div className="w-full">
      <CoinsSlider />

      <div className="grid grid-cols-12 w-full mt-5 gap-5">
        <div className="col-span-12 sm:col-span-6 md:col-span-8 grid grid-cols-12 gap-5">
          <div className="col-span-12 xl:col-span-6 bg-white p-5 rounded-xl">
            <WalletAsset />
          </div>

          <div className="col-span-12 xl:col-span-6 bg-white p-5 rounded-xl space-y-3">
            <span className="font-semibold">ارزش معاملات هفته گذشته</span>
            <img alt="chart" src={NBChartColumn} className="w-full" />
          </div>

          <div className="col-span-12 bg-white p-5 rounded-xl">
            <img alt="chart" src={ChartPic} className="w-full" />
          </div>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-4">
          <FavoriteCoin />
        </div>
      </div>
    </div>
  );
}

export default WithUser(Dashboard);
