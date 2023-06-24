import { useState } from "react";

//react router dom
import { Link, useNavigate } from "react-router-dom";

//service
import { LoginUser } from "../../../../service/auth";

//component
import DornicaInput from "./../../../utils/input";
import DornicaButton from "./../../../utils/button";

//Pic
import Astronaut from "./../../../../assets/img/Astronaut.png";
import Logo from "./../../../../assets/img/Logo.png";

//svg
import { ReactComponent as MessageSvg } from "./../../../../assets/svg/message.svg";
import { ReactComponent as LockSvg } from "./../../../../assets/svg/lock.svg";
import { toast } from "react-toastify";

export default function Login() {
  //navigation
  const navigation = useNavigate();

  //data
  const [dataSchema, setDataSchema] = useState({
    email: "",
    password: "",
  });

  const httpLoginUser = async () => {
    try {
      const response = await LoginUser(navigation, { ...dataSchema });

      if (response.status === 200) {
      } else {
        //there is error => show error
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log("error in login user => ", error);
    }
  };

  const onChangeDataSchemaHandler = (target, value) => {
    setDataSchema((prevState) => ({
      ...prevState,
      [target]: value,
    }));
  };

  return (
    <div className="grid grid-cols-12 bg-white rounded-xl">
      <div className="col-span-6 bg-[#388AEA] text-white rounded-r-xl py-11 flex flex-col items-center justify-center gap-y-5">
        <p className="font-black text-4xl">صرافی ارز دیجیتال نیوکوین اسپیس</p>
        <p className="font-medium text-xl w-1/2 text-center">
          خرید و فروش امن بیت‌کوین و ارزهای دیجیتال به بزرگترین بازار ارز
          دیجیتال ایران بپیوندید
        </p>
        <img src={Astronaut} alt="astronaut" />
      </div>

      <div className="col-span-6 px-16 flex items-center justify-start flex-col">
        <img src={Logo} alt="Logo" className="mb-7" />
        <p className="font-black text-[40px] mb-2">ورود به داشبورد</p>
        <Link
          to="/auth?status=signup"
          className="font-semibold text-[#388AEA] text-xl mb-10"
        >
          هنوز ثبت نام نکرده‌اید؟
        </Link>

        <div className="flex flex-col items-center justify-center gap-10 w-full">
          <DornicaInput
            target={"email"}
            value={dataSchema.email}
            onChangeHandler={onChangeDataSchemaHandler}
            Icon={MessageSvg}
            title={"ایمیل"}
            placeholder={"example@mail.com"}
          />
          <DornicaInput
            target={"password"}
            value={dataSchema.password}
            onChangeHandler={onChangeDataSchemaHandler}
            Icon={LockSvg}
            title={"رمز عبور"}
            placeholder={"حداقل 8 کاراکتر"}
          />
          <DornicaButton
            clickHandler={httpLoginUser}
            buttonClass={"bg-[#388AEA]"}
          >
            ورود به حساب
          </DornicaButton>
        </div>
      </div>
    </div>
  );
}
