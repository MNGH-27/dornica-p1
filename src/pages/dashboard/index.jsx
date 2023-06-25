//component
import CoinsSlider from "../../components/pages/dashboard/coinsSlider";
//HOC
import WithUser from "../../components/HOC/withUser";

function Dashboard() {
  return (
    <div className="w-full">
      <CoinsSlider />
    </div>
  );
}

export default WithUser(Dashboard);
