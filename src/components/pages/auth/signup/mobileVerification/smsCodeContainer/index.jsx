export default function SmsCodeContainer({ codeNum, setCodeHandler }) {
  const onAddCodeHandler = (e) => {
    //check input to be number
    if (!/^\d+$/.test(e.target.value) && e.target.value !== "") {
      //it's not number return
      return;
    }

    //setting number to setcode state
    if (e.target.value.length <= 1) {
      setCodeHandler(e.target.name, e.target.value);
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

  const moverCursorPointertoEnd = (e) => {
    const end = e.target.value.length;
    e.target.setSelectionRange(end, end);
  };

  return (
    <div className="flex items-center flex-row-reverse justify-center gap-2">
      <input
        type="text"
        value={codeNum.num1}
        onClick={moverCursorPointertoEnd}
        onChange={onAddCodeHandler}
        name="num1"
        className="outline-none rounded-2xl border text-lg w-12 sm:w-16 h-12 sm:h-16 text-center"
      />
      <input
        type="text"
        value={codeNum.num2}
        onClick={moverCursorPointertoEnd}
        onChange={onAddCodeHandler}
        name="num2"
        className="outline-none rounded-2xl border text-lg w-12 sm:w-16 h-12 sm:h-16 text-center"
      />
      <input
        type="text"
        value={codeNum.num3}
        onClick={moverCursorPointertoEnd}
        onChange={onAddCodeHandler}
        name="num3"
        className="outline-none rounded-2xl border text-lg w-12 sm:w-16 h-12 sm:h-16 text-center"
      />
      <input
        type="text"
        value={codeNum.num4}
        onClick={moverCursorPointertoEnd}
        onChange={onAddCodeHandler}
        name="num4"
        className="outline-none rounded-2xl border text-lg w-12 sm:w-16 h-12 sm:h-16 text-center"
      />
    </div>
  );
}
