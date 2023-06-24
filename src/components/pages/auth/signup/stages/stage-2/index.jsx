import { useState, useEffect } from "react";

//svg
import { ReactComponent as MessageSvg } from "./../../../../../../assets/svg/message.svg";

//component
import DornicaInput from "../../../../../utils/input";
import DornicaButton from "../../../../../utils/button";
import MobileVerification from "../../mobileVerification";
import { toast } from "react-toastify";

export default function SignupStage2({ onSetStageHandler }) {
  const [phoneIsVerified, setPhoneIsVerified] = useState(false);
  const [dataSchema, setDataScheam] = useState({
    phoneNumber: "",
    email: "",
  });

  const [error, setError] = useState({
    phoneNumber: "",
    email: "",
  });

  useEffect(() => {
    /**
     * * data is stored in sessionStorage and will added to dataSchema(state)
     * * in component mount
     */

    //loop on sessionStorage to get saved data and show in component
    Object.keys(sessionStorage).forEach(function (key) {
      setDataScheam((prevState) => {
        return {
          ...prevState,
          [key]: JSON.parse(sessionStorage.getItem(key)),
        };
      });
    });
  }, []);

  //this function will be called after user enter verify code successfully
  const phoneVerifyStatus = (phoneNumber) => {
    //set phone number as verified
    setPhoneIsVerified(true);

    //set phone number in dataScheama
    onSetDataScheamaHandler("phoneNumber", phoneNumber);
  };

  const onSetDataScheamaHandler = (target, value) => {
    setDataScheam((prevState) => ({
      ...prevState,
      [target]: value,
    }));
  };

  const onGoToNextStepHandler = () => {
    if (!checkInput()) {
      onSetStageHandler("next", dataSchema);
    }
  };

  const onGoToPrevStepHandler = () => {
    onSetStageHandler("prev");
  };

  const checkInput = () => {
    let errorFlag = false;

    //check if we have phone number
    if (dataSchema.phoneNumber.length === 0) {
      errorFlag = true;

      setError((prevState) => ({
        ...prevState,
        phoneNumber: "شماره تلفن خود را وارد کنید",
      }));
    } //check if phone is verified
    else if (!phoneIsVerified) {
      errorFlag = true;

      toast.error("شماره وارد شده تایید شده نیست لطفا ارسال کد را بزنید");
    }

    if (dataSchema.email.length === 0) {
      errorFlag = true;

      setError((prevState) => ({
        ...prevState,
        email: "وارد کردن ایمیل الزامی است",
      }));
    }

    return errorFlag;
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-8 px-32 py-16 w-full mb-auto">
        {/* verify mobile number */}
        <MobileVerification
          prevPhoneNumber={dataSchema.phoneNumber}
          phoneError={error.phoneNumber}
          phoneVerifyStatus={phoneVerifyStatus}
        />

        <DornicaInput
          error={error.email}
          target={"email"}
          value={dataSchema.email}
          onChangeHandler={onSetDataScheamaHandler}
          title={"ایمیل"}
          placeholder={"example@mail.com"}
          Icon={MessageSvg}
        />
      </div>
      <div className="border-t pt-8 w-full mt-10 flex items-center justify-between">
        <button
          onClick={onGoToPrevStepHandler}
          className="font-semibold text-[#388AEA]"
        >
          مرحله قبل
        </button>
        <DornicaButton
          clickHandler={onGoToNextStepHandler}
          buttonClass={"bg-[#388AEA]"}
        >
          مرحله بعد
        </DornicaButton>
      </div>
    </>
  );
}
