import { useState } from "react";

const LocationPopup = ({locationClick}) => {
    const [locationHN,setLocationHN]=useState('Hà Nội');
    const [locationHCM,setLocationHCM]=useState('Hồ Chí Minh');
    const handleClickHN=()=>{
        locationClick(locationHN)
    }
    const handleClickHCM=()=>{
        locationClick(locationHCM)
    }
  return (
    <div
      className="paper-root popover-paper paper-elevation paper-rounded"
      id="forToggle"
      tabIndex={-1}
      style={{
        opacity: 1,
        transform: `none`,
        transition: `opacity 212ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
        transform 141ms cubic-bezier(0.4, 0, 0.2, 1) 0ms`,
        top: "64px",
        left: "248px",
        transformOrigin: "63px 0px",
        zIndex: 9999,
        display: "block",
      }}
    >
      <a className="dropdown-item" href="#" id="location-HaNoi" onClick={handleClickHN}>
        {locationHN}
      </a>
      <a className="dropdown-item" href="#" id="location-HCM" onClick={handleClickHCM}>
        {locationHCM}
      </a>
    </div>
  );
};

export default LocationPopup;
