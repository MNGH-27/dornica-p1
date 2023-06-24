import { useState, useEffect } from "react";

//react toastify
import { toast } from "react-toastify";

//component
import DornicaInput from "../../../../utils/input";
import Timer from "../../../../utils/timer";

//Svg
import { ReactComponent as MobileSvg } from "./../../../../../assets/svg/mobile.svg";
import { ReactComponent as ClipboardSvg } from "./../../../../../assets/svg/clipboard.svg";

export default function MobileVerification({
  phoneVerifyStatus,
  phoneError,
  prevPhoneNumber,
}) {
  //state
  const [isShowCodeValidationInput, setIsShowCodeValidationInput] =
    useState(false);

  const [phoneNumber, setPhoneNumber] = useState("");
  const [error, setError] = useState(phoneError);

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

  const onAddCodeHandler = (e) => {
    //check input to be number
    if (!/^\d+$/.test(e.target.value) && e.target.value !== "") {
      //it's not number return
      return;
    }

    //setting number to setcode state
    if (e.target.value.length <= 1) {
      setCodeNum((prevState) => ({
        ...prevState,
        [e.target.name]: e.target.value,
      }));
    }

    /**
     * check if we have next input
     * move to next input
     * else just unfocuse
     */

    const prevSibling = e.target.previousSibling;
    const nextSibling = e.target.nextSibling;

    //handle to move cursor to next or prev input
    movePointerHandler(e.target.value, nextSibling, prevSibling);
  };

  const movePointerHandler = (value, nextSibling, prevSibling) => {
    //check values length
    if (value.length > 0) {
      //check if we have next sibiling
      if (nextSibling === null) {
        //unfocus input
        document.activeElement.blur();
      }
      //go to next input
      else nextSibling.focus();
    } else {
      //we clear the input => focus previous input
      if (prevSibling !== null) {
        prevSibling.focus();
      }
    }
  };

  const onSendCodeHandler = async () => {
    //clear error
    setError("");

    //check phone number length
    if (phoneNumber.length !== 11) {
      //phone numner is not correct
      setError("شماره وارد شده باید صحیح باشد");
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

  const onVerifyPhoneHandler = async () => {
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
      phoneVerifyStatus(phoneNumber);
    } catch (error) {
      console.log("error in send code : ", error);
    }
  };

  const moverCursorPointertoEnd = (e) => {
    const end = e.target.value.length;
    e.target.setSelectionRange(end, end);
  };

  return (
    <div className="flex flex-col items-center justify-start w-full gap-5">
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
          error={error}
          target={""}
          Icon={MobileSvg}
          placeholder={"09112564798"}
          title={"شماره همراه"}
        />
        <button
          onClick={onSendCodeHandler}
          className={`${
            isShowCodeValidationInput ? "hidden" : "block"
          } text-[#388AEA] font-black absolute left-5 top-[22px]`}
        >
          ارسال کد
        </button>
      </div>
      {isShowCodeValidationInput && (
        <div className="w-full">
          <div className="flex items-center justify-start gap-5 bg-[#E8F4FF] w-full p-5 rounded-[50px]">
            <ClipboardSvg className="text-[#388AEA]" />
            <p className="font-medium text-sm">
              کد تائید به شماره {phoneNumber} ارسال شده است. این کد تا{" "}
              <Timer
                initialTime={120}
                onFinishTimeHandler={() => setIsShowCodeValidationInput(false)}
              />{" "}
              دقیقه دیگر معتبر است
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-5 my-5">
            <p className="font-semibold">کد تائید</p>
            <div className="flex items-center flex-row-reverse justify-center gap-2">
              <input
                type="text"
                value={codeNum.num1}
                onClick={moverCursorPointertoEnd}
                onChange={onAddCodeHandler}
                name="num1"
                className="outline-none rounded-2xl border text-lg w-16 h-16 text-center"
              />
              <input
                type="text"
                value={codeNum.num2}
                onClick={moverCursorPointertoEnd}
                onChange={onAddCodeHandler}
                name="num2"
                className="outline-none rounded-2xl border text-lg w-16 h-16 text-center"
              />
              <input
                type="text"
                value={codeNum.num3}
                onClick={moverCursorPointertoEnd}
                onChange={onAddCodeHandler}
                name="num3"
                className="outline-none rounded-2xl border text-lg w-16 h-16 text-center"
              />
              <input
                type="text"
                value={codeNum.num4}
                onClick={moverCursorPointertoEnd}
                onChange={onAddCodeHandler}
                name="num4"
                className="outline-none rounded-2xl border text-lg w-16 h-16 text-center"
              />
            </div>
            <button
              onClick={onVerifyPhoneHandler}
              className="bg-[#388AEA] text-white font-semibold px-5 py-3 rounded-2xl"
            >
              تائید شماره همراه
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
