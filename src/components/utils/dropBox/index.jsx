export default function DornicaDropBox({
  Icon,
  title,
  options,
  placeholder,
  containerClass,
  inputClass,
  onChangeHandler,
  target,
  value,
  error,
}) {
  return (
    <div>
      <div
        className={`${containerClass} ${
          error ? "border-red-700" : ""
        } w-full flex items-center justify-start gap-5 p-5 border border-[#D6D6D6] rounded-[50px] relative`}
      >
        <span className="absolute bg-white -top-3 right-6 px-2 font-medium">
          {title}
        </span>
        <Icon />
        <select
          value={value.id ? JSON.stringify({ ...value }) : "DEFAULT"}
          onChange={(e) => onChangeHandler(target, JSON.parse(e.target.value))}
          className="w-full outline-none text-lg border-r px-5"
        >
          <option value="DEFAULT" disabled hidden>
            {placeholder}
          </option>

          {options.length === 0 ? (
            <option disabled>لیست خالی است</option>
          ) : (
            options.map((singleOption, index) => (
              <option key={index} value={JSON.stringify(singleOption)}>
                {singleOption.title}
              </option>
            ))
          )}
        </select>
      </div>
      {error && <p className="text-red-700 m-2">{error}</p>}
    </div>
  );
}
