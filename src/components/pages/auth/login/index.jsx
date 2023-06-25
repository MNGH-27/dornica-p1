import { useState } from "react";

//react-toastify
import { toast } from "react-toastify";

//react router dom
import { Link, useNavigate } from "react-router-dom";

//service
import { LoginUser } from "../../../../service/auth";

//component
import DornicaInput, { DornicaPasswordInput } from "./../../../utils/input";
import DornicaButton from "./../../../utils/button";

//cookies
import { useCookies } from "react-cookie";

//Pic
import Astronaut from "./../../../../assets/img/Astronaut.png";
import Logo from "./../../../../assets/img/Logo.png";

//svg
import { ReactComponent as MessageSvg } from "./../../../../assets/svg/message.svg";
import { ReactComponent as LockSvg } from "./../../../../assets/svg/lock.svg";

export default function Login() {
  //cookies
  const [cookies, setCookies] = useCookies(["token"]);

  //navigation
  const navigation = useNavigate();

  //data
  const [dataSchema, setDataSchema] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    email: "",
    password: "",
  });

  const httpLoginUser = async () => {
    //check if we have error
    if (checkInput()) {
      //there is error in inputs
      return;
    }

    try {
      const response = await LoginUser(navigation, { ...dataSchema });

      //check response status
      if (response.status === 200) {
        //login successfully
        toast.success("با موفقیت وارد شدید");
        //add cookies
        setCookies("token", response.data.token, { path: "/" });
        //navigate to dashboard
        navigation("/dashboard");
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

  const checkInput = () => {
    //clear error
    setError({});

    let errorFlag = false;

    //check email
    if (dataSchema.email.length === 0) {
      errorFlag = true;

      onSetErrorHandler("email", "مقدار ایمیل را باید وارد کنید");
    }
    //check email be in correct way
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(dataSchema.email)) {
      errorFlag = true;

      onSetErrorHandler("email", "ایمیل را به درستی وارد کنید");
    }

    //check password
    if (dataSchema.password.length < 8) {
      errorFlag = true;

      onSetErrorHandler("password", "رمز عبور باید حداقل 8 رقمی باشد");
    }

    return errorFlag;
  };

  const onSetErrorHandler = (target, value) => {
    setError((prevState) => ({
      ...prevState,
      [target]: value,
    }));
  };

  return (
    <div className="grid grid-cols-12 bg-white rounded-xl">
      <div className="col-span-6 hidden lg:flex flex-col items-center justify-center gap-y-5 bg-[#388AEA] text-white rounded-r-xl py-11 px-6">
        <p className="font-black text-center text-4xl">
          صرافی ارز دیجیتال نیوکوین اسپیس
        </p>
        <p className="font-medium text-xl w-1/2 text-center">
          خرید و فروش امن بیت‌کوین و ارزهای دیجیتال به بزرگترین بازار ارز
          دیجیتال ایران بپیوندید
        </p>
        <img src={Astronaut} alt="astronaut" />
      </div>

      <div className="col-span-12 lg:col-span-6 p-7 sm:p-10 flex items-center justify-between flex-col min-h-screen">
        <img src={Logo} alt="Logo" className="mb-7" />
        <p className="font-black text-3xl md:text-[40px] mb-2">
          ورود به داشبورد
        </p>
        <Link
          to="/auth?status=signup"
          className="font-semibold text-[#388AEA] text-base md:text-xl mb-10"
        >
          هنوز ثبت نام نکرده‌اید؟
        </Link>

        <div className="flex flex-col items-center justify-center gap-10 w-full">
          <DornicaInput
            error={error.email}
            target={"email"}
            value={dataSchema.email}
            onChangeHandler={onChangeDataSchemaHandler}
            Icon={MessageSvg}
            title={"ایمیل"}
            placeholder={"example@mail.com"}
          />

          <DornicaPasswordInput
            error={error.password}
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
