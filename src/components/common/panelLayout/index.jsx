import { useState } from "react";

//react router dom
import { Outlet } from "react-router-dom";

//component
import SideBar from "./sideBar";

//svg
import { ReactComponent as HamburgerSvg } from "./../../../assets/svg/hamburgermenu.svg";
import { ReactComponent as NotificationSvg } from "./../../../assets/svg/notificationbing.svg";

//pic
import UserAvatar from "./../../../assets/img/userAvatar.png";

export default function PanelLayout() {
  const [isShowSideBar, setIsShowSideBar] = useState(false);

  const onToggleSideBarStatusHandler = () => {
    setIsShowSideBar((prevState) => !prevState);
  };

  return (
    <div className="relative grid grid-cols-12 gap-5 w-full min-h-screen p-5">
      {/* side bar */}
      {isShowSideBar && (
        <>
          <div
            onClick={onToggleSideBarStatusHandler}
            className="absolute lg:hidden w-full h-full top-0 right-0 bg-black/50 z-10"
          ></div>
          <div
            className={`${
              isShowSideBar
                ? "absolute z-20 lg:relative w-3/4 sm:w-1/2 lg:w-full col-span-3 px-7"
                : " w-0"
            } duration-200 overflow-hidden h-full bg-white lg:rounded-2xl flex flex-col items-center justify-start`}
          >
            <SideBar />
          </div>
        </>
      )}

      <div
        className={`${
          isShowSideBar ? "col-span-12 lg:col-span-9" : "col-span-12"
        } duration-200 w-full flex flex-col justify-start items-start gap-7`}
      >
        <div className="flex items-center justify-between w-full bg-white rounded-2xl p-5">
          <button onClick={onToggleSideBarStatusHandler}>
            <HamburgerSvg />
          </button>

          <div className="flex items-center justify-end gap-5">
            <button className="relative">
              <NotificationSvg />
              <i className="w-3 h-3 absolute bg-[#29C57A] rounded-full -top-1 -right-1" />
            </button>
            <img
              src={UserAvatar}
              alt="user avatar"
              className="w-12 h-12 rounded-full"
            />
          </div>
        </div>
        <Outlet />
      </div>
    </div>
  );
}
