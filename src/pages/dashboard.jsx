import "./styles/dashboard.css";
import bg from "../assets/images/alBG.jpg";
import AdminData from "../components/adminData";

function Dashboard() {
  
  return (
    <div
      className="w-full min-h-screen bg-cover bg-fixed"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* <div className="flex flex-wrap md:flex-nowrap space-y-4 md:space-y-0 px-6 backdrop-blur-sm rounded-3xl mx-3 my-4 py-4 items-center bg-[#31536a]/50 justify-center md:justify-start">
        <div className="inclogo w-full md:w-auto flex justify-center items-center md:block">
          <img src={logo} alt="" className="h-16 w-16 object-contain" />
        </div>
        <div className="operation-selector md:ml-6 w-full md:w-auto">
          <select
            name="operations"
            id=""
            className="px-5 py-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 md:w-40 bg-indigo-100 w-full text-black"
            defaultValue={1}
          >
            <option value="1">Print Sheet</option>
            <option value="2">Sub Events</option>
            <option value="3">Sub Events - FULL</option>
            <option value="4">Concepts</option>
            <option value="5">Excel Export</option>
          </select>
        </div>
        <div className="operation-selector md:ml-3 w-full md:w-auto">
          <select
            name="operations"
            id=""
            className="px-5 py-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-500 md:w-56 bg-indigo-100 min-w-52 w-full text-black"
            defaultValue={0}
          >
            <option value="0">Select Events</option>
            <option value="1">All</option>
            <option value="2">Pratibha</option>
            <option value="3">Naipunya</option>
            <option value="4">Tantra Yukti</option>
            <option value="5">Daksh</option>
            <option value="6">Laksh</option>
            <option value="7">Pradnya</option>
          </select>
        </div>
        <div className="operation-selector md:ml-3 w-full md:w-auto">
          <input
            type="date"
            name="event-date"
            id="event-date"
            className="px-5 py-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-indigo-100 w-full md:w-auto text-black"
          />
        </div>
        <button className="px-5 py-2 rounded-2xl focus:outline-none focus:ring-2 focus:ring-indigo-400 bg-indigo-100 md:w-26 h-10 md:ml-auto ">
          Logout
        </button>
      </div> */}

      <div className="bg-slate-500/50 rounded-2xl mx-5  mb-5 px-5 py-4">
        <AdminData />
      </div>
    </div>
  );
}

export default Dashboard;
