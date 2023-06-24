//pic
import Logo from "./../../../../../assets/img/Logo.png";

export default function SignupHeader({ stage }) {
  return (
    <div className="col-span-3 flex flex-col items-center justify-start gap-5 p-7 rounded-r-xl text-white bg-[#388AEA]">
      <img src={Logo} alt="logo" />

      <span className="text-4xl font-black">ثبت نام</span>

      <div className="flex flex-col items-start w-full mt-16">
        <div className="flex items-center justify-start gap-7">
          <i
            className={`w-7 h-7 ${
              stage > 1 ? "bg-white" : "bg-[#9CC4F2]"
            } border-[3px] rounded-full`}
          />
          <span className="font-semibold text-xl">اطلاعات فردی</span>
        </div>
        <i className="w-[2px] bg-white h-10 mr-3 my-2" />

        <div className="flex items-center justify-start gap-7">
          <i
            className={`w-7 h-7 ${stage > 2 ? "bg-white" : "bg-[#9CC4F2]"} ${
              stage > 1 ? "border-[3px]" : ""
            } rounded-full`}
          />
          <span className="font-semibold text-xl">اطلاعات ارتباطی</span>
        </div>
        <i className="w-[2px] bg-white h-10 mr-3 my-2" />

        <div className="flex items-center justify-start gap-7">
          <i
            className={`w-7 h-7 ${
              stage > 2 ? "border-[3px]" : ""
            } bg-[#9CC4F2] rounded-full`}
          />
          <span className="font-semibold text-xl">اطلاعات مکانی</span>
        </div>
      </div>
    </div>
  );
}
