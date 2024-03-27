import { useEffect, useState } from "react";
import {
  Hero,
  Schedule,
  EventCards,
  Sponsors,
  InCTeamsSection,
} from "../components";
import AboutUs from "../components/aboutUs";
import Popup from "../components/popup";
import "./styles/homepage.css";

function Homepage() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const popupShown = localStorage.getItem("popupShown");
    if (!popupShown) {
      // setShowPopup(true);
      localStorage.setItem("popupShown", true);
    }
  }, []);

  const handleClosePopup = () => {
    setShowPopup(false);
  };
  return (
    <div className="homepage">
      {showPopup && <Popup handleClose={handleClosePopup} />}
      <div className="notice">
        <div className="notice-content">
<<<<<<< HEAD
         <span >🛑 Last date of registration is 26th March 2024 (Tuesday) </span>
=======
         <span >⚠️ Extended Registration deadline: March 29, 2024 (Friday) until 11:59 PM 🕛 </span>
>>>>>>> 077f723282167f105de61478640d7955765b456e
        </div>
      </div>
      <Hero />
      <AboutUs />
      {/* <Schedule /> */}
      <EventCards />
      <Sponsors />
      <InCTeamsSection />
    </div>
  );
}

export default Homepage;
