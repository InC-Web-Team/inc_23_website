import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation, Link } from "react-router-dom";
import inc_logo from "../assets/images/logo.png";
import "./styles/navbar.css";

function Navbar() {
  const [selected, setSelected] = useState("#home");
  const mobileMenuRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setSelected(location?.hash || "#home");
  }, [location]);

  function toggleMenu() {
    mobileMenuRef.current.classList.toggle("hidden");
  }

  const handleSelect = (e) => {
    if (e.target.value === "Register") return;
    if (e.target.value === "Judge") {
      navigate('/register/judge')
      return
    };
    if (e.target.value === "Hackathon") {
      window.location.href = "https://techfiesta.pict.edu/register"
      return
    };
    navigate(`/register/events/${e.target.value.toLowerCase()}`);
  };

  return (
    <>
      {/* <div className="z-999 w-full bg-[#000] text-center p-4">
        <span className="text-gold font-bold text-xl">Notice: </span><Link to='/allocations/labs' className="underline decoration-dotted decoration-gold underline-offset-4 text-2xl">Click Here for Lab Allocations</Link>
      </div> */}
      <nav className="navbar sticky w-full ">
        <div className="shadow-lg shadow-light_blue/20  w-full  border border-light_blue/50 bg-light_blue/30 backdrop-blur">
          <div className="max-w-full mx-auto px-4 py-2 text-white">
            <div className="flex justify-between text-lg">
              <div className="flex space-x-7">
                <a
                  href="https://pictinc.org"
                  className="flex items-center py-4 px-2"
                >
                  <img src={inc_logo} alt="inc_Logo" className="h-12 w-12 mr-2" />
                  <span className="font-black text-white text-2xl">
                    PICT InC 2024
                  </span>
                </a>
              </div>
              <div className="hidden lg:flex items-center justify-content space-x-3">
                <a
                  href="/#home"
                  className={`py-4 px-2 border-b-4 font-semibold transition duration-300 ${selected === "#home"
                    ? "border-light_blue/80 text-gold"
                    : "hover:text-gold border-transparent"
                    }`}
                >
                  Home
                </a>
                <a
                  href="/#about"
                  className={`py-4 px-2 border-b-4 font-semibold transition duration-300 ${selected === "#about"
                    ? "border-light_blue/80 text-gold"
                    : "hover:text-gold border-transparent"
                    }`}
                >
                  About
                </a>
                <a
                  href="/#schedule"
                  className={`py-4 px-2 border-b-4 font-semibold transition duration-300 ${selected === "#schedule"
                    ? "border-light_blue/80 text-gold"
                    : "hover:text-gold border-transparent"
                    }`}
                >
                  Schedule
                </a>
                <a
                  href="/#events"
                  className={`py-4 px-2 border-b-4 font-semibold transition duration-300 ${selected === "#events"
                    ? "border-light_blue/80 text-gold"
                    : "hover:text-gold border-transparent"
                    }`}
                >
                  Events
                </a>
                {/* <a
                  href="https://techfiesta.pict.edu/"
                  className={`py-2 px-2 border-b-4 font-semibold transition duration-300 ${selected === "#winners"
                    ? "border-sky-800/80 text-gold"
                    : "hover:text-gold border-transparent"
                    }`}
                >
                  Hackathon
                </a> */}

                <a
                  href="/#sponsors"
                  className={`py-4 px-2 border-b-4 font-semibold transition duration-300 ${selected === "#contact"
                    ? "border-light_blue/80 text-gold"
                    : "hover:text-gold border-transparent"
                    }`}
                >
                  Sponsors
                </a>
                <a
                  href="/#team"
                  className={`py-4 px-2 border-b-4 font-semibold transition duration-300 ${selected === "#team"
                    ? "border-light_blue/80 text-gold"
                    : "hover:text-gold border-transparent"
                    }`}
                >
                  Committees
                </a>
                <a
                  href="/register/events/winners"
                  className={`py-2 px-2 border-b-4 font-semibold transition duration-300 ${selected === "#winners"
                    ? "border-sky-800/80 text-gold"
                    : "hover:text-gold border-transparent"
                    }`}
                >
                  Winners
                </a>
                <select
                  className="py-4 px-6 text-white font-semibold hover:text-gold border-transparent hover:border-light_blue/80 bg-faint_blue/30 hover:bg-faint_blue/10 rounded-xl border transition duration-300"
                  defaultValue={"Register"}
                  onClick={handleSelect}
                >
                  <option disabled>Register</option>
                  <option>Impetus</option>
                  <option>Concepts</option>
                  <option>Pradnya</option>
                  <option>Judge</option>
                  {/* <option>Hackathon</option> */}

                  {/* <option>Winners</option> */}

                </select>
              </div>

              <div className="lg:hidden flex items-center">
                <button
                  className="outline-none menu-button"
                  onClick={(_) => toggleMenu()}
                >
                  <svg
                    className="w-8 h-8 text-light_blue/80"
                    x-show="! showMenu"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 00 24 24"
                    stroke="currentColor"
                  >
                    <path d="m4 6h16M4 12h16M4 18h16"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div
              className="hidden lg:hidden mobile-menu text-center flex item-center flex-col m-auto w-1/2"
              ref={mobileMenuRef}
            >
              <a
                href="/#home"
                className={`py-2 px-2 border-b-4 font-semibold transition duration-300 ${selected === "#home"
                  ? "border-sky-800/80 text-gold"
                  : "hover:text-gold border-transparent"
                  }`}
              >
                Home
              </a>
              <a
                href="#about"
                className={`py-2 px-2 border-b-4 font-semibold transition duration-300 ${selected === "#about"
                  ? "border-sky-800/80 text-gold"
                  : "hover:text-gold border-transparent"
                  }`}
              >
                About
              </a>
              <a
                href="#schedule"
                className={`py-2 px-2 border-b-4 font-semibold transition duration-300 ${selected === "#schedule"
                  ? "border-sky-800/80 text-gold"
                  : "hover:text-gold border-transparent"
                  }`}
              >
                Schedule
              </a>
              <a
                href="#events"
                className={`py-2 px-2 border-b-4 font-semibold transition duration-300 ${selected === "#events"
                  ? "border-sky-800/80 text-gold"
                  : "hover:text-gold border-transparent"
                  }`}
              >
                Events
              </a>

              <a
                href="#sponsors"
                className={`py-2 px-2 border-b-4 font-semibold transition duration-300 ${selected === "#contact"
                  ? "border-sky-800/80 text-gold"
                  : "hover:text-gold border-transparent"
                  }`}
              >
                Sponsors
              </a>

              <a
                href="#team"
                className={`py-2 px-2 border-b-4 font-semibold transition duration-300 ${selected === "#team"
                  ? "border-sky-800/80 text-gold"
                  : "hover:text-gold border-transparent"
                  }`}
              >
                Team
              </a>
              <a
                href="/register/events/winners"
                className={`py-2 px-2 border-b-4 font-semibold transition duration-300 ${selected === "#winners"
                  ? "border-sky-800/80 text-gold"
                  : "hover:text-gold border-transparent"
                  }`}
              >
                Winners
              </a>
              <select
                className="mt-2 py-4 px-4 font-semibold hover:text-gold border-transparent hover:border-sky-800/80 bg-blue-600/30 hover:bg-blue-600/10 rounded-xl border transition duration-300"
                defaultValue={"Register"}
                onClick={handleSelect}
              >
                <option disabled>Register</option>
                <option >Impetus</option>
                <option>Concepts</option>
                <option>Pradnya</option>
                <option>Judges</option>
              </select>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

// import { useEffect, useRef, useState } from "react";
// import { useNavigate, useLocation, Link } from "react-router-dom";
// import inc_logo from "../assets/images/logo.png";
// import "./styles/navbar.css";
// import Winners from "../pages/winners_inc23";
// function Navbar() {
//   const [selected, setSelected] = useState("#home");
//   const mobileMenuRef = useRef(null);
//   const navigate = useNavigate();
//   const location = useLocation();


//   // const handleWinnersClick = () => {
//   //   // Navigate to the Winners page
//   //   history.push('/events/Winners');
//   // };

//   useEffect(() => {
//     setSelected(location?.hash || "#home");
//   }, [location]);

//   function toggleMenu() {
//     mobileMenuRef.current.classList.toggle("hidden");
//   }
//   const handleclick = (e) => {
//     if (e.target.value === "Register") return;
//     navigate(`/register/events/winners`);
//   };

//   const handleSelect = (e) => {
//     if (e.target.value === "Register") return;
//     if (e.target.value === "Judge") {
//       navigate('/register/judge')
//       return
//     };
//     navigate(`/register/events/${e.target.value.toLowerCase()}`);
//   };

//   return (
//     <>
//       {/* <div className="z-999 w-full bg-[#000] text-center p-4">
//         <span className="text-gold font-bold text-xl">Notice: </span><Link to='/allocations/labs' className="underline decoration-dotted decoration-gold underline-offset-4 text-2xl">Click Here for Lab Allocations</Link>
//       </div> */}
//       <nav className="navbar sticky w-full ">
//         <div className="shadow-lg shadow-light_blue/20  w-full  border border-light_blue/50 bg-light_blue/30 backdrop-blur">
//           <div className="max-w-full mx-auto px-4 py-2 text-white">
//             <div className="flex justify-between text-lg">
//               <div className="flex space-x-7">
//                 <a
//                   href="https://pictinc.org"
//                   className="flex items-center py-4 px-2"
//                 >
//                   <img
//                     src={inc_logo}
//                     alt="inc_Logo"
//                     className="h-12 w-12 mr-2"
//                   />
//                   <span className="font-black text-white text-2xl">
//                     PICT InC 2024
//                   </span>
//                 </a>
//               </div>
//               <div className="hidden lg:flex items-center justify-content space-x-3">
//                 <a
//                   href="/#home"
//                   className={`py-4 px-2 border-b-4 font-semibold transition duration-300 ${
//                     selected === "#home"
//                       ? "border-light_blue/80 text-gold"
//                       : "hover:text-gold border-transparent"
//                   }`}
//                 >
//                   Home
//                 </a>
//                 <a
//                   href="/#about"
//                   className={`py-4 px-2 border-b-4 font-semibold transition duration-300 ${
//                     selected === "#about"
//                       ? "border-light_blue/80 text-gold"
//                       : "hover:text-gold border-transparent"
//                   }`}
//                 >
//                   About
//                 </a>
//                 <a
//                   href="/#events"
//                   className={`py-4 px-2 border-b-4 font-semibold transition duration-300 ${
//                     selected === "#events"
//                       ? "border-light_blue/80 text-gold"
//                       : "hover:text-gold border-transparent"
//                   }`}
//                 >
//                   Events
//                 </a>

//                 <a
//                   href="/#schedule"
//                   className={`py-4 px-2 border-b-4 font-semibold transition duration-300 ${
//                     selected === "#schedule"
//                       ? "border-light_blue/80 text-gold"
//                       : "hover:text-gold border-transparent"
//                   }`}
//                 >
//                   Schedule
//                 </a>

//                 <a
//                   href="/#sponsors"
//                   className={`py-4 px-2 border-b-4 font-semibold transition duration-300 ${
//                     selected === "#contact"
//                       ? "border-light_blue/80 text-gold"
//                       : "hover:text-gold border-transparent"
//                   }`}
//                 >
//                   Sponsors
//                 </a>
//                 <a
//                   href="/#team"
//                   className={`py-4 px-2 border-b-4 font-semibold transition duration-300 ${
//                     selected === "#team"
//                       ? "border-light_blue/80 text-gold"
//                       : "hover:text-gold border-transparent"
//                   }`}
//                 >
//                   Team
//                 </a>
//                 {/* <button
//         onClick={handleWinnersClick}
//         className={`py-4 px-2 border-b-4 font-semibold transition duration-300`}
//       >
//         Winners
//       </button> */}
//                 {/* <Link
//   to="/register/events/winners"
//   className={`py-4 px-2 border-b-4 font-semibold transition duration-300 ${selected === "/Winners"
//     ? "border-light_blue/80 text-gold"
//     : "hover:text-gold border-transparent"
//   }`} */}
//                 <select
//                   className="py-4 px-6 text-white font-semibold hover:text-gold border-transparent hover:border-light_blue/80 bg-faint_blue/30 hover:bg-faint_blue/10 rounded-xl border transition duration-300"
//                   defaultValue={"Register"}
//                   onClick={handleSelect}
//                 >
//                   <option disabled>Register</option>
//                   <option>Impetus</option>
//                   <option>Concepts</option>
//                   <option>Pradnya</option>
//                   <option>Winners</option>
//                 </select>
//               </div>

//               <div className="lg:hidden flex items-center">
//                 <button
//                   className="outline-none menu-button"
//                   onClick={(_) => toggleMenu()}
//                 >
//                   <svg
//                     className="w-8 h-8 text-light_blue/80"
//                     x-show="! showMenu"
//                     fill="none"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     viewBox="0 00 24 24"
//                     stroke="currentColor"
//                   >
//                     <path d="m4 6h16M4 12h16M4 18h16"></path>
//                   </svg>
//                 </button>
//               </div>
//             </div>
//             <div
//               className="hidden lg:hidden mobile-menu text-center flex item-center flex-col m-auto w-1/2"
//               ref={mobileMenuRef}
//             >
//               <a
//                 href="/#home"
//                 className={`py-2 px-2 border-b-4 font-semibold transition duration-300 ${
//                   selected === "#home"
//                     ? "border-sky-800/80 text-gold"
//                     : "hover:text-gold border-transparent"
//                 }`}
//               >
//                 Home
//               </a>
//               <a
//                 href="#about"
//                 className={`py-2 px-2 border-b-4 font-semibold transition duration-300 ${
//                   selected === "#about"
//                     ? "border-sky-800/80 text-gold"
//                     : "hover:text-gold border-transparent"
//                 }`}
//               >
//                 About
//               </a>
//               <a
//                 href="#schedule"
//                 className={`py-2 px-2 border-b-4 font-semibold transition duration-300 ${
//                   selected === "#schedule"
//                     ? "border-sky-800/80 text-gold"
//                     : "hover:text-gold border-transparent"
//                 }`}
//               >
//                 Schedule
//               </a>
//               <a
//                 href="#events"
//                 className={`py-2 px-2 border-b-4 font-semibold transition duration-300 ${
//                   selected === "#events"
//                     ? "border-sky-800/80 text-gold"
//                     : "hover:text-gold border-transparent"
//                 }`}
//               >
//                 Events
//               </a>

//               <a
//                 href="#sponsors"
//                 className={`py-2 px-2 border-b-4 font-semibold transition duration-300 ${
//                   selected === "#contact"
//                     ? "border-sky-800/80 text-gold"
//                     : "hover:text-gold border-transparent"
//                 }`}
//               >
//                 Sponsors
//               </a>

//               <a
//                 href="#team"
//                 className={`py-2 px-2 border-b-4 font-semibold transition duration-300 ${
//                   selected === "#team"
//                     ? "border-sky-800/80 text-gold"
//                     : "hover:text-gold border-transparent"
//                 }`}
//               >
//                 Team
//               </a>

//               <select
//                 className="mt-2 py-4 px-4 font-semibold hover:text-gold border-transparent hover:border-sky-800/80 bg-blue-600/30 hover:bg-blue-600/10 rounded-xl border transition duration-300"
//                 defaultValue={"Register"}
//                 onClick={handleSelect}
//               >
//                 <option disabled>Register</option>
//                 <option>Impetus</option>
//                 <option>Concepts</option>
//                 <option>Pradnya</option>
//                 <option>Hakton</option>
//                 <option>Judges</option>
//               </select>
//             </div>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;
