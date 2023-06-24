import { useState, useEffect } from "react";

//react toastify
import { toast } from "react-toastify";

//component
import DornicaInput from "../../../../utils/input";
import Timer from "../../../../utils/timer";
import SmsCodeContainer from "./smsCodeContainer";
//Svg
import { ReactComponent as MobileSvg } from "./../../../../../assets/svg/mobile.svg";
import { ReactComponent as ClipboardSvg } from "./../../../../../assets/svg/clipboard.svg";

export default function MobileVerification({
  onSetPhoneNumber,
  phoneError,
  prevPhoneNumber,
}) {
  //state
  const [isShowCodeValidationInput, setIsShowCodeValidationInput] =
    useState(false);
  const [phoneNumber, setPhoneNumber] = useState("");

  const [codeNum, setCodeNum] = useState({
    num1: "",
    num2: "",
    num3: "",
    num4: "",
  });

  //set phone number prevPhoneNumber in changeing
  useEffect(() => {
    setPhoneNumber(prevPhoneNumber);
  }, [prevPhoneNumber]);

  const httpSendCodeHandler = async () => {
    //check phone number length
    if (phoneNumber.length !== 11) {
      //phone numner is not correct
      toast.error("شماره وارد شده باید صحیح باشد");
      return;
    }

    try {
      /**
       * TODO: need api to send code
       */

      //show code validation to user
      setIsShowCodeValidationInput(true);
    } catch (error) {
      console.log("error in send code : ", error);
    }
  };

  const httpVerifyPhoneHandler = async () => {
    //check varify code
    if (
      codeNum.num1.length === 0 ||
      codeNum.num2.length === 0 ||
      codeNum.num3.length === 0 ||
      codeNum.num4.length === 0
    ) {
      //show error to user to enter vrify code
      toast("باید کد ارسال شده به شماره همراه را وارد کند");
    }
    try {
      /**
       * TODO: need api to send code
       */
      /**
       * ! after user enter verify code successfully we will send phone numeber to parent
       */
      //set phone number in parent dataSchema
      onSetPhoneNumber("phoneNumber", phoneNumber);
    } catch (error) {
      console.log("error in send code : ", error);
    }
  };

  const onSetCodeHandler = (target, value) => {
    setCodeNum((prevState) => ({
      ...prevState,
      [target]: value,
    }));
  };

  return (
    <div className="flex flex-col items-center justify-start w-full gap-5">
      {/* phone number input */}
      <div className="relative w-full">
        <DornicaInput
          value={phoneNumber}
          onChangeHandler={(target, value) => {
            //check input to be number
            if (!/^\d+$/.test(value) && value !== "") {
              //it's not number return
              return;
            }
            setPhoneNumber(value);
          }}
          error={phoneError}
          target={""}
          Icon={MobileSvg}
          placeholder={"09112564798"}
          title={"شماره همراه"}
        />
        <button
          onClick={httpSendCodeHandler}
          className={`${
            isShowCodeValidationInput ? "hidden" : "block"
          } text-[#388AEA] font-black absolute left-5 top-3.5 sm:top-[22px]`}
        >
          ارسال کد
        </button>
      </div>

      {/* code verification */}
      {
        //check if we show smsCodeValidation
        isShowCodeValidationInput && (
          <div className="w-full">
            <div className="flex flex-col sm:flex-row items-center justify-start gap-2 md:gap-5 bg-[#E8F4FF] w-full p-5 rounded-[50px]">
              <ClipboardSvg className="text-[#388AEA]" />
              <p className="font-medium text-xs sm:text-sm text-center">
                کد تائید به شماره {phoneNumber} ارسال شده است. این کد تا{" "}
                <Timer
                  initialTime={120}
                  onFinishTimeHandler={() =>
                    setIsShowCodeValidationInput(false)
                  }
                />{" "}
                دقیقه دیگر معتبر است
              </p>
            </div>
            <div className="flex flex-col items-center justify-center gap-5 my-5">
              <p className="font-semibold">کد تائید</p>

              <SmsCodeContainer
                setCodeHandler={onSetCodeHandler}
                codeNum={codeNum}
              />

              <button
                onClick={httpVerifyPhoneHandler}
                className="bg-[#388AEA] text-white font-semibold px-5 py-3 rounded-2xl"
              >
                تائید شماره همراه
              </button>
            </div>
          </div>
        )
      }
    </div>
  );
}
