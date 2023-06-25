//react cookies
import { useCookies } from "react-cookie";

//react router dom
import { useNavigate } from "react-router-dom";

//Svg
import { ReactComponent as HomeSvg } from "./../../../../assets/svg/home3.svg";
import { ReactComponent as ArrangeSvg } from "./../../../../assets/svg/arrangehorizontalsquare.svg";
import { ReactComponent as ActivitySvg } from "./../../../../assets/svg/activity.svg";
import { ReactComponent as EmptyWalletSvg } from "./../../../../assets/svg/emptyWallet.svg";
import { ReactComponent as LogoutSvg } from "./../../../../assets/svg/logout.svg";

//pic
import Logo from "./../../../../assets/img/Logo.png";

export default function SideBar() {
  //navigation
  const navigate = useNavigate();
  //cookie
  const [cookies, setCookie, removeCookie] = useCookies(["token"]);

  //logout user from panel
  function logoutHandler() {
    //remove token from cookie
    removeCookie("token");

    //navigate to authentication page
    navigate("/auth?state=login");
  }

  return (
    <>
      <div className="border-b pb-5 flex flex-col items-center justify-start w-full">
        <img src={Logo} alt="logo" />
        <span className="font-black">نیوکوین اسپیس</span>
      </div>
      <div className="flex flex-col items-start justify-start gap-2 w-full py-5">
        <div className="flex items-center justify-start gap-5 w-full p-4 bg-[#388AEA] text-white rounded-2xl">
          <HomeSvg />
          <span className="font-semibold">داشبورد</span>
        </div>
        <div className="flex items-center justify-start gap-5 w-full p-4 rounded-2xl">
          <ArrangeSvg />
          <span className="font-semibold">خرید و فروش</span>
        </div>
        <div className="flex items-center justify-start gap-5 w-full p-4 rounded-2xl">
          <ActivitySvg />
          <span className="font-semibold">گزارش بازار</span>
        </div>
        <div className="flex items-center justify-start gap-5 w-full p-4 rounded-2xl">
          <EmptyWalletSvg />
          <span className="font-semibold">کیف پول</span>
        </div>
        <button
          onClick={logoutHandler}
          className="flex items-center justify-start gap-5 w-full p-4 text-[#EA3838] rounded-2xl"
        >
          <LogoutSvg />
          <span className="font-semibold">خروج</span>
        </button>
      </div>
    </>
  );
}
