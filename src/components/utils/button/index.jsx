import { ReactComponent as ArrowLeftSvg } from "./../../../assets/svg/arrowLeft.svg";

export default function DornicaButton({ children, clickHandler, buttonClass }) {
  return (
    <button
      onClick={clickHandler}
      className={`${buttonClass} flex items-center justify-center gap-2 rounded-2xl text-white px-5 py-3 font-semibold`}
    >
      {children}
      <ArrowLeftSvg />
    </button>
  );
}
