import { useRef, useEffect, useState } from "react";

//react-leaflet
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import "leaflet/dist/leaflet.css";

//component
import ModalWrapper from "../../../../common/modalWrapper";
import DornicaButton from "../../../../utils/button";

export default function LocationModal({
  defaultLocation,
  closeModalHandler,
  onSendLocationHandler,
}) {
  //ref
  const markerRef = useRef(null);

  //position
  const [position, setPosition] = useState([36.5659, 53.0586]);

  useEffect(() => {
    //check if we have location from parent
    if (defaultLocation.lng === "" && defaultLocation.lat === "") {
      setPosition([36.5659, 53.0586]);
    } else {
      //we have postion of marker for parent => set to marker this position
      setPosition([defaultLocation.lat, defaultLocation.lng]);
    }
  }, [defaultLocation]);

  //on submit marker postion to parent element
  const onSubmitMarkerHadler = () => {
    onSendLocationHandler(markerRef.current._latlng);
    //close modal
    closeModalHandler();
  };

  return (
    <ModalWrapper
      modalContainer={"relative"}
      closeModalHandler={closeModalHandler}
    >
      <div className="relative z-10 overflow-hidden w-[250px] h-[200px] sm:w-[420px] sm:h-[280px] md:w-[500px] md:h-[300px] lg:w-[720px] lg:h-[420px]">
        <MapContainer center={position} zoom={13} style={{ height: "100%" }}>
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <DraggableMarker position={position} markerRef={markerRef} />
        </MapContainer>
      </div>
      <div className="absolute w-full flex items-center justify-center gap-2 sm:gap-4 md:gap-6 z-20 bottom-7">
        <button
          onClick={closeModalHandler}
          className="rounded-2xl text-white px-5 py-3 text-xs sm:text-sm md:text-base font-semibold bg-[#B4B4B4]"
        >
          بستن
        </button>
        <DornicaButton
          btnClass={"text-xs sm:text-sm md:text-base"}
          bgColor={"#EA8E38"}
          textColor={"#fff"}
          clickHandler={onSubmitMarkerHadler}
        >
          ثبت موقعیت
        </DornicaButton>
      </div>
    </ModalWrapper>
  );
}

function DraggableMarker({ markerRef, position }) {
  return (
    <Marker position={position} draggable={true} ref={markerRef}>
      <Tooltip>مارکر را به موقعیت خود ببرید</Tooltip>
    </Marker>
  );
}
