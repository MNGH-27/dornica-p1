import React, { useState, useEffect } from "react";

export default function Timer({ initialTime, onFinishTimeHandler }) {
  const [count, setCount] = useState(initialTime);

  useEffect(() => {
    if (count !== 0) {
      const timer = setTimeout(() => {
        setCount(count - 1);
      }, 1000);

      return () => {
        clearTimeout(timer);
      };
    } else {
      //tell parent that time is finished
      onFinishTimeHandler();
    }
  }, [count]);

  return (
    <>
      <span>
        {Math.floor(count / 60)
          .toString()
          .padStart(2, "0")}
      </span>
      :<span>{(count % 60).toString().padStart(2, "0")}</span>
    </>
  );
}
