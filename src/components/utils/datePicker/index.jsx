import React, { useState, useRef, useEffect } from "react";
import moment from "moment-jalaali";

//svg
import { toast } from "react-toastify";

const weekdays = [
  "شنبه",
  "یک‌شنبه",
  "دوشنبه",
  "سه‌شنبه",
  "چهارشنبه",
  "پنج‌شنبه",
  "آدینه",
];

const DornicaDatePicker = ({
  containerClass,
  title,
  error,
  Icon,
  target,
  selectedDay,
  selectDayHandler,
}) => {
  moment.loadPersian({ usePersianDigits: true });

  const calendarRef = useRef();
  const newYearContainer = useRef(HTMLInputElement);

  const [isShowYears, setIsShowYears] = useState(false);

  const [date, setDate] = useState(moment());
  const [isShowCalendar, setIsShowCalendar] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      //check if use clicked outside of component
      if (calendarRef.current && !calendarRef.current.contains(event.target)) {
        //check if we show calendar then close it
        if (isShowCalendar === true) {
          //we are showing calendar , close it !!
          setIsShowCalendar(false);
        }
      }
    }

    //add this event to main document
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      //remove it in umount component
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isShowCalendar]);

  useEffect(() => {
    if (selectedDay) {
      setDate(moment(selectedDay));
    }
  }, [selectedDay]);

  const renderCells = () => {
    let currentDay = date.clone().startOf("jMonth");
    const endDate = date.clone().endOf("jMonth");

    const days = [];

    //loop until reach to end day of that month
    while (currentDay.jDate() !== endDate.jDate()) {
      //loop on weeks , to find current days name
      for (let i = 0; i < 7; i++) {
        //check if we be in weekdays[i]
        if (weekdays[i] === currentDay.format("ddd")) {
          //we are in weekdays[i] add to days list with handler
          const day = (
            <div
              datavalue={currentDay.clone()}
              className={`flex items-center justify-center h-7 w-7 rounded-md col-span-1 duration-200 ${
                moment(selectedDay).format("YYYY/MM/DD") ===
                moment(currentDay).format("YYYY/MM/DD")
                  ? "bg-[#4B429F] text-white"
                  : "hover:bg-[#4B429F]/10"
              }`}
            >
              {currentDay.jDate()}
            </div>
          );
          days.push(day);
          //check if we have reached to endDate
          if (currentDay.jDate() === endDate.jDate()) {
            break;
          }
          //go to next day
          currentDay = currentDay.add(1, "day");
        } else {
          //we dont have day in this month in this selected day of week ,
          //create empty div , add to days list
          const day = <div className="col-span-1"></div>;
          days.push(day);
        }
      }
    }

    return days.map((item, index) => (
      <button
        className="w-fit mx-auto"
        key={index}
        onClick={(e) => {
          selectDayHandler(target, item.props.datavalue);
        }}
      >
        {item}
      </button>
    ));
  };

  const submitNewYear = () => {
    const targetYear = newYearContainer.current.value;

    const targetDate = moment(`${targetYear}/1/1`);

    if (targetDate._isValid && targetYear.trim().length !== 0) {
      const newDate = moment(targetYear, "jYYYY");

      setDate(newDate);
      setIsShowYears(false);
    } else {
      toast.error("لطفا تاریخ را درست وارد کنید");
    }
  };

  return (
    <div ref={calendarRef} className="relative w-full font-['IRANSansX']">
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
          <button
            onClick={(e) => {
              //check datePicker status
              if (!isShowCalendar) {
                //Viewing the calendar close calender
                setIsShowCalendar(true);
              }
            }}
            className="border-r px-5"
          >
            {selectedDay ? (
              moment(selectedDay).format("dddd, jDD jMMMM ماه, jYYYY")
            ) : (
              <span className="text-gray-400 truncate">1370/06/31</span>
            )}
          </button>
        </div>
        {error && <p className="text-red-700 m-2">{error}</p>}
      </div>

      <div
        className={`bg-white z-20 absolute w-[250px] rounded-xl shadow-2xl overflow-hidden duration-500 bottom-0 ${
          isShowCalendar ? "h-fit" : "h-0"
        }`}
      >
        {/* calender header */}
        <div className="flex items-center justify-between w-full p-3">
          <button
            className="text-[#4B429F]"
            onClick={() => {
              //get prev month to go
              const prevDate = moment(date.subtract(1, "jMonth"));

              setDate(prevDate);
            }}
          >
            ماه قبل
          </button>
          <button onClick={() => setIsShowYears((prevState) => !prevState)}>
            {date.format("jMMMM ماه jYYYY")}
          </button>
          <button
            className="text-[#4B429F]"
            onClick={() => {
              //get next month to go
              const nextDate = moment(date.add(1, "jMonth"));

              setDate(nextDate);
            }}
          >
            ماه بعد
          </button>
        </div>

        <hr />

        {/* calender body */}
        <div className="flex flex-col p-3 gap-1">
          {
            //check body status
            isShowYears ? (
              //showing year to go to certain year
              <div className="flex items-center justify-center gap-1">
                <span>سال : </span>
                <input
                  ref={newYearContainer}
                  onKeyDown={(e) => {
                    if (e.keyCode === 13) submitNewYear();
                  }}
                  type={"text"}
                  placeholder="سال را وارد کنید"
                  className="placeholder:text-sm text-center border-2 rounded-md w-1/2 px-1 outline-none"
                />
                <button
                  className="bg-blue-900 text-white px-2 rounded-md"
                  onClick={submitNewYear}
                >
                  تایید
                </button>
              </div>
            ) : (
              //showing months days in cells
              <>
                {/* header of days of month */}
                <div className="grid grid-cols-7 gap-2 text-[#B9B9B9] text-[9px]">
                  {weekdays.map((day) => (
                    <div className="text-center" key={day}>
                      {day}
                    </div>
                  ))}
                </div>
                <div className="w-full grid grid-cols-7 gap-y-2 text-xs">
                  {
                    //render days with function
                    renderCells()
                  }
                </div>
              </>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default DornicaDatePicker;
