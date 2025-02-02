import React from "react";
import './Main.css';
import { CiClock2 } from "react-icons/ci";
import { FaCarSide } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { IoMdArrowRoundBack } from "react-icons/io";
import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%", // Set width to 100%
  height: "100vh", // Make map cover the full height of the viewport
  position: "absolute", 
  top: 0,
  left: 0,
  zIndex: -1, // Keeps the map in the background (ensure other elements appear on top)
};

const center = {
  lat: 53.350140, // Default latitude (e.g., New York)
  lng: -6.266155, // Default longitude
};

const Main = () => {
  return (
    <>
      {/* Google Map Component */}
      <LoadScript googleMapsApiKey={process.env.REACT_APP_GOOGLE_MAPS_API_KEY}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
        />
      </LoadScript>

      {/* UI Elements */}
      <div className="header">
        <span id="back_arrow">
          <a href="http://localhost:3000/login">
            <button id="btn_backarrow"><IoMdArrowRoundBack /></button>
          </a>
        </span>
      </div>

      <div className="container">
        <div className="from"><span id="circle_icon"><FaRegCircle /></span><input id="from_field" type="text" /></div>
        <div className="to"><span id="location_icon"><FaLocationDot /></span><input id="to_field" type="text" /></div>
        <div className="thirdcolumn">
          <div className="time"><span id="clock_icon"><CiClock2 /></span>
            <select id="time_option">
              <option>now</option>
            </select>
          </div>
          <div className="vehicle"><span id="car_icon"><FaCarSide /></span>
            <select id="vehicle_option">
              <option>Train</option>
              <option>Bus</option>
              <option>Car</option>
            </select>
          </div>
        </div>

        <div className="train_container">
          <div className="title_train">Train</div>
          <div className="time">
            <span id="time_train">time</span>
            <span id="km_train">km</span>
            <span id="via_train">via</span>
          </div>
          <div className="go_train"><button id="gobtn">Go</button></div>
        </div>

        <div className="bus_container">
          <div className="title_bus">Bus</div>
          <div className="time">
            <span id="time_bus">time</span>
            <span id="km_bus">km</span>
            <span id="via_bus">via</span>
          </div>
          <div className="go_bus"><button id="gobtn">Go</button></div>
        </div>

        <div className="car_container">
          <div className="title_car">Car</div>
          <div className="time">
            <span id="time_car">time</span>
            <span id="km_car">km</span>
            <span id="via_car">via</span>
          </div>
          <div className="go_car"><button id="gobtn">Go</button></div>
        </div>

      </div>
    </>
  );
}

export default Main;
