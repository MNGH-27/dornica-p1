import { useState } from "react";

//svg
import { ReactComponent as EyeSvg } from "./../../../assets/svg/eye.svg";

/**
 *
 * default function is regular Input
 *
 * other exports => {DornicaPasswordInput}
 */

export default function DornicaInput({
  type = "text",
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
        } w-full flex items-center justify-start gap-5 p-3 sm:p-5 border border-[#D6D6D6] rounded-[50px] relative`}
      >
        <span className="absolute bg-white -top-3 right-6 px-2 font-medium">
          {title}
        </span>
        <Icon />
        <input
          type={type}
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

export function DornicaPasswordInput({
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
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setIsShowPassword((prevState) => !prevState);
  };

  return (
    <div className="w-full">
      <div
        className={`${containerClass} ${
          error ? "border-red-700" : ""
        } w-full flex items-center justify-start gap-5 p-3 sm:p-5 border border-[#D6D6D6] rounded-[50px] relative`}
      >
        <span className="absolute bg-white -top-3 right-6 px-2 font-medium">
          {title}
        </span>
        <Icon />
        <input
          autoComplete="new-password"
          type={isShowPassword ? "text" : "password"}
          value={value}
          onChange={(e) => onChangeHandler(target, e.target.value)}
          className={`${inputClass} w-full border-r outline-none px-5 font-medium placeholder:font-normal`}
          placeholder={placeholder}
        />
        <button
          onClick={toggleShowPassword}
          className="absolute bg-white top-4 sm:top-6 left-2.5 sm:left-5 text-[#D6D6D6]"
        >
          <EyeSvg />
        </button>
      </div>
      {error && <p className="text-red-700 m-2">{error}</p>}
    </div>
  );
}
