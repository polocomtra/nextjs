import Head from "next/head";
import { useState } from "react";
import Header from "../components/Header/Header";
import Main from "../components/Main/Main";
import LocationPopup from "../components/Modal/LocationPopup";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [showLocationPopup,setShowLocationPopup]=useState(false)
  const [location,setLocation]=useState('')
  const handleShowLocationPopup=(stateFromChild)=>{
    setShowLocationPopup(stateFromChild)
  }
  const handleLocationClick=(locationFromPopup)=>{
    setLocation(locationFromPopup)
  }
  
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Meete by NextJS</title>
        </Head>

        <Header location={location}  showLocationPopup={handleShowLocationPopup} />
        <Main />
      </div>
      {showLocationPopup && <LocationPopup locationClick={handleLocationClick} />}
    </>
  );
}
