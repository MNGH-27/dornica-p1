export default function DornicaInput({
  Icon,
  title,
  placeholder,
  containerClass,
  inputClass,
  onChangeHandler,
  target,
  value,
  error,
}) {
  return (
    <div className="w-full">
      <div
        className={`${containerClass} ${
          error ? "border-red-700" : ""
        } w-full flex items-center justify-start gap-5 p-5 border border-[#D6D6D6] rounded-[50px] relative`}
      >
        <span className="absolute bg-white -top-3 right-6 px-2 font-medium">
          {title}
        </span>
        <Icon />
        <input
          value={value}
          onChange={(e) => onChangeHandler(target, e.target.value)}
          className={`${inputClass} w-full border-r outline-none px-5 font-medium placeholder:font-normal`}
          placeholder={placeholder}
        />
      </div>
      {error && <p className="text-red-700 m-2">{error}</p>}
    </div>
  );
}
