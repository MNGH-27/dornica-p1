export default function StageWrapper({ children, stage, containerClass }) {
  return (
    <div
      className={`${containerClass} flex flex-col items-center justify-between w-full p-7`}
    >
      <div className="text-center">
        <p className="font-semibold text-[#388AEA] mb-5">مرحله {stage} از 3</p>
        <p className="text-[#1E1E1E] text-xl font-semibold mb-16">
          لطفا اطلاعات خود را با دقت وارد نمائید
        </p>
      </div>
      {children}
    </div>
  );
}
