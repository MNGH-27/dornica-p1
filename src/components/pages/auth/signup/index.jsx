import { useState } from "react";

//component
import SignupStage1 from "./stages/stage_1";
import SignupStage2 from "./stages/stage-2";
import SignupStage3 from "./stages/stage-3";

import SignupHeader from "./signupHeader";

export default function Signup() {
  const [signupStage, setSignupStage] = useState(1);

  /**
   * @param {onSetStageHandler} action => next | prev
   */
  const onSetStageHandler = (action, dataSchema) => {
    //check action status
    if (action === "prev") {
      setSignupStage(signupStage - 1);
    } else {
      /**
       * * action is to go to next step,
       * * save data in sessionStorage
       */

      //loop on data
      for (const data in dataSchema) {
        //convert data to stringify and then save it
        sessionStorage.setItem(data, JSON.stringify(dataSchema[data]));
      }

      setSignupStage(signupStage + 1);
    }
  };

  return (
    <div className="grid grid-cols-12 bg-white rounded-xl">
      {/* col span 3 */}
      <SignupHeader stage={signupStage} />

      {/* col span 9 */}
      <div className="col-span-9 flex flex-col items-center justify-between w-full p-7">
        <div className="text-center">
          <p className="font-semibold text-[#388AEA] mb-5">
            مرحله {signupStage} از 3
          </p>
          <p className="text-[#1E1E1E] text-xl font-semibold mb-16">
            لطفا اطلاعات خود را با دقت وارد نمائید
          </p>
        </div>

        {
          //check current stage to show component
          signupStage === 1 ? (
            <SignupStage1 onSetStageHandler={onSetStageHandler} />
          ) : signupStage === 2 ? (
            <SignupStage2 onSetStageHandler={onSetStageHandler} />
          ) : (
            <SignupStage3 onSetStageHandler={onSetStageHandler} />
          )
        }
      </div>
    </div>
  );
}
