import { useState, useEffect } from "react";

//component
import DornicaInput from "../../../../../utils/input";
import DornicaButton from "../../../../../utils/button";
import DornicaDatePicker from "../../../../../utils/datePicker";
//svg
import { ReactComponent as UserSvg } from "./../../../../../../assets/svg/user.svg";
import { ReactComponent as CardSvg } from "./../../../../../../assets/svg/card.svg";
import { ReactComponent as CalenderSvg } from "./../../../../../../assets/svg/calender.svg";

export default function SignupStage1({ parentData, onSetStageHandler }) {
  //data
  const [dataSchema, setDataScheam] = useState({
    name: "",
    nationalCode: "",
    date: "",
  });
  const [error, setError] = useState({
    name: "",
    nationalCode: "",
    date: "",
  });

  //set parentData if we have to dataSchema
  useEffect(() => {
    if (parentData.name && parentData.nationalCode && parentData.date) {
      setDataScheam({
        ...parentData,
      });
    }
  }, [parentData]);

  const onSetDataScheamaHandler = (target, value) => {
    //check if input value is national code
    if (target === "nationalCode") {
      //check input to be number
      if (!/^\d+$/.test(value) && value !== "") {
        //it's not number return
        return;
      }
    }

    setDataScheam((prevState) => ({
      ...prevState,
      [target]: value,
    }));
  };

  const checkInputs = () => {
    //claer error
    setError({});

    let errorFlag = false;

    //check name
    if (dataSchema.name.length === 0) {
      errorFlag = true;
      onSetErrorHandler("name", "نام الزامی است");
    }

    //check national code
    if (dataSchema.nationalCode.length === 0) {
      errorFlag = true;
      onSetErrorHandler("nationalCode", "کد ملی الزامی است");
    } else if (dataSchema.nationalCode.length !== 10) {
      errorFlag = true;
      onSetErrorHandler("nationalCode", "کد ملی را به درستی وارد کنید");
    }
    //check date
    if (dataSchema.date.length === 0) {
      errorFlag = true;
      onSetErrorHandler("date", "تاریخ تولد الزامی است");
    }

    return errorFlag;
  };

  const onSetErrorHandler = (target, value) => {
    setError((prevState) => ({
      ...prevState,
      [target]: value,
    }));
  };

  const onGoNextStageHandler = () => {
    //check user inputs
    if (!checkInputs()) {
      //there is no any erro in inputs
      onSetStageHandler("next", dataSchema);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-8 pb-10 sm:px-20 md:px-32 w-full mb-auto">
        <DornicaInput
          error={error.name}
          target={"name"}
          value={dataSchema.name}
          onChangeHandler={onSetDataScheamaHandler}
          title={"نام و نام خانوادگی"}
          placeholder={"محمد حسین رحمتی"}
          Icon={UserSvg}
        />
        <DornicaInput
          error={error.nationalCode}
          target={"nationalCode"}
          value={dataSchema.nationalCode}
          onChangeHandler={onSetDataScheamaHandler}
          title={"کد ملی"}
          placeholder={"208-1235-456"}
          Icon={CardSvg}
        />
        <DornicaDatePicker
          error={error.date}
          target={"date"}
          selectedDay={dataSchema.date}
          selectDayHandler={onSetDataScheamaHandler}
          title={"تاریخ تولد"}
          Icon={CalenderSvg}
        />
      </div>
      <div className="border-t pt-8 w-full">
        <DornicaButton
          bgColor={"#388AEA"}
          textColor={"#fff"}
          btnContainerClass={"mr-auto"}
          clickHandler={onGoNextStageHandler}
        >
          مرحله بعد
        </DornicaButton>
      </div>
    </>
  );
}
