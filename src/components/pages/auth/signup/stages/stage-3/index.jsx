import { useState, useEffect } from "react";

//react router dom
import { useNavigate } from "react-router-dom";

//svg
import { ReactComponent as LocationSvg } from "./../../../../../../assets/svg/location.svg";
import { ReactComponent as MapSvg } from "./../../../../../../assets/svg/map.svg";

//service
import { SignupUser } from "../../../../../../service/auth";

//cookies
import { useCookies } from "react-cookie";

//component
import DornicaDropBox from "../../../../../utils/dropBox";
import DornicaButton from "../../../../../utils/button";
import DornicaInput from "../../../../../utils/input";
import LocationModal from "../../locationModal";

//static data
import { staticCity } from "../../../../../../data/city";
import { staticState } from "../../../../../../data/state";
import { toast } from "react-toastify";

export default function SignupStage3({ parentData, onSetStageHandler }) {
  //cookies
  const [cookies, setCookies] = useCookies(["token"]);

  //navigation
  const navigation = useNavigate();

  //data
  const [dataSchema, setDataSchema] = useState({
    city: {},
    state: {},
    address: "",
    lat: "",
    lng: "",
  });
  const [error, setError] = useState({
    city: "",
    state: "",
    address: "",
    lat: "",
    lng: "",
  });
  const [filtredCity, setFiltredCity] = useState([]);
  const [isShowLocationModal, setIsShowLocationModal] = useState(false);

  //set parentData if we have to dataSchema
  useEffect(() => {
    //set other stages states to this dataSchema
    setDataSchema((prevState) => ({
      ...prevState,
      ...parentData,
    }));
  }, [parentData]);

  const onSetDataSchemaHandler = (target, value) => {
    //check if we are changing state
    if (target === "state") {
      //clear selected city
      setDataSchema((prevState) => ({
        ...prevState,
        city: {},
      }));

      //filter city of selected city
      setFiltredCity([
        ...staticCity.filter((singleCity) => singleCity.stateId === value.id),
      ]);
    }

    setDataSchema((prevState) => ({
      ...prevState,
      [target]: value,
    }));
  };

  //get loocation from map
  const onSendLocationHandler = (markerLocation) => {
    //set data from marker in LocationModal
    setDataSchema((prevState) => ({
      ...prevState,
      lat: markerLocation.lat,
      lng: markerLocation.lng,
    }));
  };

  const httpSignupHandler = async () => {
    //check inputs
    if (checkInput()) {
      //there is error in inputs
      return;
    }

    try {
      const { name, email, phoneNumber } = dataSchema;
      const response = await SignupUser(navigation, {
        name,
        email,
        //send phone number with slice zero from the first of number
        phone: phoneNumber.slice(1),
        password: "12345678",
        passwordConfirmation: "12345678",
      });

      //check response status
      if (response.status === 200) {
        //user rregister successfully
        toast.success("حساب جدید با موفقیت ایجاد شد");
        //set cookie
        setCookies("token", response.data.token, { path: "/" });
        //navigate to dashboard
        navigation("/dashboard");
      } else {
        //show error in toast
        toast.error(response.data.message);
      }
    } catch (error) {
      console.log("error in signup => ", error);
    }
  };

  const checkInput = () => {
    //clear error
    setError({});

    let errorFlag = false;

    if (!dataSchema.city.title) {
      errorFlag = true;

      onSetErrorHandler("city", "باید یک شهر را انتخاب کنید");
    }

    if (!dataSchema.state.title) {
      errorFlag = true;

      onSetErrorHandler("state", "باید یک استان را انتخاب کنید");
    }

    if (dataSchema.address.length === 0) {
      errorFlag = true;

      onSetErrorHandler("address", "باید آدرس را وارد کنید");
    }

    if (dataSchema.lat === "") {
      errorFlag = true;

      onSetErrorHandler("lat", "طول جغرافیایی را وارد کنید");
    }

    if (dataSchema.lng === "") {
      errorFlag = true;

      onSetErrorHandler("lng", "عرض جغرافیایی را وارد کنید");
    }

    return errorFlag;
  };

  const onSetErrorHandler = (target, value) => {
    setError((prevState) => ({
      ...prevState,
      [target]: value,
    }));
  };

  const onGoToPrevStepHandler = () => {
    onSetStageHandler("prev");
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center gap-8 sm:px-16 xl:px-32 py-16 w-full mb-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5">
          <DornicaDropBox
            value={dataSchema.state}
            target={"state"}
            error={error.state}
            onChangeHandler={onSetDataSchemaHandler}
            placeholder={"استان مورد نظر را انتخاب کنید"}
            options={staticState}
            Icon={LocationSvg}
            title={"استان"}
          />
          <DornicaDropBox
            value={dataSchema.city}
            target={"city"}
            error={error.city}
            onChangeHandler={onSetDataSchemaHandler}
            placeholder={"شهر مورد نظر را انتخاب کنید"}
            options={filtredCity}
            Icon={LocationSvg}
            title={"شهر"}
          />
        </div>

        <DornicaInput
          value={dataSchema.address}
          target={"address"}
          error={error.address}
          onChangeHandler={onSetDataSchemaHandler}
          placeholder={"ایران مازندران ساری"}
          Icon={MapSvg}
          title={"آدرس"}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 w-full gap-5">
          <DornicaInput
            value={dataSchema.lng}
            target={"lng"}
            error={error.lng}
            onChangeHandler={onSetDataSchemaHandler}
            placeholder={"36.7589"}
            Icon={LocationSvg}
            title={"طول جغرافیایی"}
          />
          <DornicaInput
            value={dataSchema.lat}
            target={"lat"}
            error={error.lat}
            onChangeHandler={onSetDataSchemaHandler}
            placeholder={"64.5691"}
            Icon={LocationSvg}
            title={"عرض جغرافیایی"}
          />
        </div>

        <button
          onClick={() => setIsShowLocationModal(true)}
          className="text-[#388AEA] font-black"
        >
          انتخاب طول و عرض جغرافیایی از روی نقشه
        </button>
      </div>
      <div className="border-t pt-8 w-full mt-10 flex items-center justify-between">
        <button
          onClick={onGoToPrevStepHandler}
          className="font-semibold text-[#388AEA]"
        >
          مرحله قبل
        </button>
        <DornicaButton
          clickHandler={httpSignupHandler}
          buttonClass={"bg-[#388AEA]"}
        >
          ثبت نام
        </DornicaButton>
      </div>

      {isShowLocationModal && (
        <LocationModal
          defaultLocation={{ lat: dataSchema.lat, lng: dataSchema.lng }}
          onSendLocationHandler={onSendLocationHandler}
          closeModalHandler={() => setIsShowLocationModal(false)}
        />
      )}
    </>
  );
}
