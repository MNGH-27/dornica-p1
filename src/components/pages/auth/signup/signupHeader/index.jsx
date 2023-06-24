//react router dom
import { Link } from "react-router-dom";

//pic
import Logo from "./../../../../../assets/img/Logo.png";

export default function SignupHeader({ containerClass, stage }) {
  return (
    <div
      className={`${containerClass} flex flex-col items-center justify-start gap-5 p-4 sm:p-7 rounded-t-xl lg:rounded-r-xl text-white bg-[#388AEA]`}
    >
      <Link to={"/auth?status=login"}>
        <img src={Logo} alt="logo" />
      </Link>

      <span className="text-3xl sm:text-4xl font-black">ثبت نام</span>

      <div className="hidden sm:flex flex-row lg:flex-col justify-center items-start w-full mt-16">
        <div className="flex items-center justify-start gap-3 md:gap-7">
          <i
            className={`w-5 lg:w-7 h-5 lg:h-7 ${
              stage > 1 ? "bg-white" : "bg-[#9CC4F2]"
            } border-[3px] rounded-full`}
          />
          <span className="font-semibold text-base sm:text-lg md:text-xl">
            اطلاعات فردی
          </span>
        </div>
        <i className="w-10 lg:w-[2px] h-[2px] lg:h-10 bg-white mx-3 mt-3 lg:my-2" />

        <div className="flex items-center justify-start gap-3 md:gap-7">
          <i
            className={`w-5 lg:w-7 h-5 lg:h-7 ${
              stage > 2 ? "bg-white" : "bg-[#9CC4F2]"
            } ${stage > 1 ? "border-[3px]" : ""} rounded-full`}
          />
          <span className="font-semibold text-base sm:text-lg md:text-xl">
            اطلاعات ارتباطی
          </span>
        </div>
        <i className="w-10 lg:w-[2px] h-[2px] lg:h-10 bg-white mx-3 mt-3 lg:my-2" />

        <div className="flex items-center justify-start gap-3 md:gap-7">
          <i
            className={`w-5 lg:w-7 h-5 lg:h-7 ${
              stage > 2 ? "border-[3px]" : ""
            } bg-[#9CC4F2] rounded-full`}
          />
          <span className="font-semibold text-base sm:text-lg md:text-xl">
            اطلاعات مکانی
          </span>
        </div>
      </div>
    </div>
  );
}
