import { useState } from "react";

//component
import SignupStage1 from "./stages/stage_1";
import SignupStage2 from "./stages/stage-2";
import SignupStage3 from "./stages/stage-3";

import StageWrapper from "./stages/stageWrapper";
import SignupHeader from "./signupHeader";

export default function Signup() {
  //data
  const [signupStage, setSignupStage] = useState(1);
  const [dataSchema, setDataSchema] = useState({});

  /**
   * @param {onSetStageHandler} action => next | prev
   */
  const onSetStageHandler = (action, dataSchema) => {
    //check action status
    if (action === "prev") {
      setSignupStage(signupStage - 1);
    } else {
      //set data to dataSchema
      setDataSchema({ ...dataSchema });
      //go to next step
      setSignupStage(signupStage + 1);
    }
  };

  return (
    <div className="grid grid-cols-12 bg-white rounded-xl min-h-screen">
      <SignupHeader
        containerClass={"col-span-12 lg:col-span-3"}
        stage={signupStage}
      />

      <StageWrapper
        containerClass={"col-span-12 lg:col-span-9"}
        stage={signupStage}
      >
        {
          //check current stage to show component
          signupStage === 1 ? (
            <SignupStage1
              parentData={dataSchema}
              onSetStageHandler={onSetStageHandler}
            />
          ) : signupStage === 2 ? (
            <SignupStage2
              parentData={dataSchema}
              onSetStageHandler={onSetStageHandler}
            />
          ) : (
            <SignupStage3 onSetStageHandler={onSetStageHandler} />
          )
        }
      </StageWrapper>
    </div>
  );
}
