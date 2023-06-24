import { useState, useEffect } from "react";

//component
import DornicaInput from "../../../../../utils/input";
import DornicaButton from "../../../../../utils/button";

//svg
import { ReactComponent as UserSvg } from "./../../../../../../assets/svg/user.svg";
import { ReactComponent as CardSvg } from "./../../../../../../assets/svg/card.svg";
import { ReactComponent as CalenderSvg } from "./../../../../../../assets/svg/calender.svg";

export default function SignupStage1({ onSetStageHandler }) {
  const [dataSchema, setDataScheam] = useState({
    name: "",
    nationalCode: "",
    date: "",
  });

  const [error, setError] = useState({});

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

  const onSetDataScheamaHandler = (target, value) => {
    //check if input value is national code
    if (target === "nationalCode") {
      if (!/^\d+$/.test(value) && value !== "") {
        //check input to be number
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

      setError((prevState) => ({
        ...prevState,
        name: "نام الزامی است",
      }));
    }

    //check national code
    if (dataSchema.nationalCode.length === 0) {
      errorFlag = true;

      setError((prevState) => ({
        ...prevState,
        nationalCode: "کد ملی الزامی است",
      }));
    } else if (dataSchema.nationalCode.length !== 10) {
      errorFlag = true;

      setError((prevState) => ({
        ...prevState,
        nationalCode: "کد ملی را به درستی وارد کنید",
      }));
    }

    //check date
    if (dataSchema.date.length === 0) {
      errorFlag = true;

      setError((prevState) => ({
        ...prevState,
        date: "تاریخ تولد الزامی است",
      }));
    }

    return errorFlag;
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
      <div className="flex flex-col items-center justify-center gap-8 px-32 w-full mb-auto">
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
        <DornicaInput
          error={error.date}
          target={"date"}
          value={dataSchema.date}
          onChangeHandler={onSetDataScheamaHandler}
          title={"تاریخ تولد"}
          placeholder={"1370/06/31"}
          Icon={CalenderSvg}
        />
      </div>
      <div className="border-t pt-8 w-full">
        <DornicaButton
          clickHandler={onGoNextStageHandler}
          buttonClass={"bg-[#388AEA] mr-auto"}
        >
          مرحله بعد
        </DornicaButton>
      </div>
    </>
  );
}
