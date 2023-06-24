import { useState, useEffect } from "react";

//svg
import { ReactComponent as MessageSvg } from "./../../../../../../assets/svg/message.svg";

//component
import DornicaInput from "../../../../../utils/input";
import DornicaButton from "../../../../../utils/button";
import MobileVerification from "../../mobileVerification";
import { toast } from "react-toastify";

export default function SignupStage2({ parentData, onSetStageHandler }) {
  const [dataSchema, setDataScheam] = useState({
    phoneNumber: "",
    email: "",
  });

  const [error, setError] = useState({
    phoneNumber: "",
    email: "",
  });

  //set parentData if we have to dataSchema
  useEffect(() => {
    if (parentData.email && parentData.phoneNumber) {
      setDataScheam({
        ...parentData,
      });
    }
  }, [parentData]);

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
    //clear error
    setError({});

    let errorFlag = false;

    //check if we have phone number
    if (dataSchema.phoneNumber.length === 0) {
      errorFlag = true;

      setError((prevState) => ({
        ...prevState,
        phoneNumber: "شماره تلفن خود را وارد کنید",
      }));
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

  console.log("error :", error);

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-8 sm:px-20 md:px-32 w-full mb-auto">
        {/* verify mobile number */}
        <MobileVerification
          prevPhoneNumber={dataSchema.phoneNumber}
          phoneError={error.phoneNumber}
          onSetPhoneNumber={onSetDataScheamaHandler}
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
