import React, { useEffect, useState } from "react";
import SignIN from "./scenes/signIN-signUP/SignIN";
import SignUP from "./scenes/signIN-signUP/SignUP";
import ResetPassword from "./scenes/signIN-signUP/ResetPassword";
import VerifyOTP from "./scenes/signIN-signUP/VerifyOTP";
import Navbar from "./scenes/global/Navbar";
import Footer from "./scenes/global/Footer";
import Home from "./scenes/home/Home";
import Error from "./scenes/ErrorPage/Error";

import { Route, Routes, Navigate } from "react-router-dom";
import Appointment from "./scenes/Appointment/Appointment";
import ChartsMaps from "./scenes/Charts-Maps/ChartsMaps";

function App() {
  const [marginLeft, setMarginLeft] = useState("240px");

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth <= 768) {
        setMarginLeft("0px");
      } else {
        setMarginLeft("240px");
      }
    }

    window.addEventListener("resize", handleResize);
    handleResize(); // Call it initially

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <Navbar />
      <div style={{ marginLeft }}>
        <Routes>
          <Route path="/" element={<Navigate to="/Home" />} />
          <Route path="/Home" element={<Home />} />
          <Route path="/Appointment" element={<Appointment />} />
          <Route path="/LogIN" element={<SignIN />} />
          <Route path="/SignUP" element={<SignUP />} />
          <Route path="/ResetPassword" element={<ResetPassword />} />
          <Route path="/VerifyOTP" element={<VerifyOTP />} />
          <Route path="/SignUP" element={<SignUP />} />
          <Route path="/Error" element={<Error />} />
          <Route path="/ChartsMaps" element={<ChartsMaps />} />
          {/* <Route path="/News&Updates" element={<NewsUpdates />} /> */}
          {/* <Route path="/Records" element={<Records />} /> */}
          {/* <Route path="/Setting" element={<Setting />} /> */}
        </Routes>
        <Footer />
      </div>
    </>
  );
}

export default App;
