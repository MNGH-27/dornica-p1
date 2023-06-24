export default function ModalWrapper({
  children,
  closeModalHandler,
  modalContainer,
}) {
  return (
    <div className="fixed w-full h-full top-0 left-0 flex items-center justify-center">
      <div
        onClick={closeModalHandler}
        className="absolute w-full h-full top-0 left-0 bg-[#1C1F27]/70"
      ></div>
      <div
        className={`${modalContainer} flex flex-col z-10 gap-5 bg-white p-5 rounded-md`}
      >
        {children}
      </div>
    </div>
  );
}
