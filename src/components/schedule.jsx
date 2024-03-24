import './styles/schedule.css';
import { Fade } from 'react-awesome-reveal';
import "./styles/eventCards.css";
import concepts_logo from "../assets/images/concepts_logo.png";
import pradnya_logo from "../assets/images/pradnya_logo.png";
import day2 from "../assets/images/winners_trophy.png";



const eventData = [
  {
    id: 1,
    name: "DAY 1",
    members: "5th April, 2024",
    t1 : "🔷9:30 AM",
    ct: "Registration & Reporting to Shamiyana",
    t2 : "🔷10:00 AM to 11:00 AM",
    ct2: "Inauguration of InC'24",
    t3 : "🔷11:30 AM to 7:00 PM",
    ct3 : "Impetus & Concepts: Judging & Exhibition of projects",
    t5 : "🔷11:30 AM to 7:00 PM",
    ct5 : "Pradnya : Round 1",
    logo: pradnya_logo,
  },

  {
    id: 2,
    name: "Day 2",
    members: "6th April, 2024",
    t2 : "🔷9:00 AM to 7:00 PM",
    ct2: "Impetus & Concepts: Judging & Exhibition of projects",
    t4 : "🔷9:00 AM to 7:00 PM",
    ct4 : "Pradnya : Round 2",

    logo: concepts_logo,
  },

  {
    id: 3,
    name: "Day 3",
    members: "7th April, 2024",
    t1 : "🔷9:30 AM",
    ct: "Consolidation and preparation of winner's list",
    t2 : "🔷4:30 PM",
    ct2: "Reporting to Shamiyana",
    t3 : "🔷5:00 PM to 7:20 PM",
    ct3 : "Valedictory & Closing Ceremony",
    logo: day2,
  },
  
];



function Card(props) {
  return (
    <div>
      {/* my card*/}
      <div className="py-10 mx-5 md:mx-0 ">
        <div className="md:h-[600px] shadow-md shadow-light_blue/20 hover:bg-light_blue hover:scale-105 transition ease-in-out bg-light_blue/30 rounded-xl border-light_blue items-center p-4 md:p-8 border md:mx-5 mt-10">
          <div className="flex items-center justify-evenly">
            {/* <div className="my-4">
              <img src={props.logo} alt="" className="w-10" />
            </div> */}
            <div className="my-auto text-xl mr-10 md:text-3xl font-poppins group text-gold font-bold tracking-wider decoration-1 decoration-light_blue uppercase">
              {props.name}
            </div>
          </div>

          <div className="px-6">
            <hr className="mt-2 mb-2 text-light_blue" />
            <p className="my-4 text-xl md:text-2xl border-l-2 border-gold md:font-light md:leading-6 pl-2 ">
              {" "}
              <div className="flex">
                <span className="font-bold"> Date </span>
                <div className="border-dotted border-l-2 border-light_blue/20 ml-9 pl-2">
                  {props.team}
                </div>
              </div>
            </p>

            <p className="my-4 text-lg md:text-xl border-l-2 border-gold md:font-light md:leading-6 pl-2 ">
              {" "}
              <div>
                <h1 className="font-bold mb-2 text-2xl"> {props.t1}</h1>
                <div className="border-dotted border-l-2 border-light_blue/20">
                  {props.ct}
                </div>{" "}
              </div>
            </p>
            <p className="my-4 text-lg md:text-xl border-l-2 border-gold md:font-light md:leading-6 pl-2 ">
              {" "}
              <div>
                <h1 className="font-bold mb-2 text-2xl"> {props.t2}</h1>
                <div className="border-dotted border-l-2 border-light_blue/20">
                  {props.ct2}
                </div>{" "}
              </div>
            </p>

            <p className="my-4 text-lg md:text-xl border-l-2 border-gold md:font-light md:leading-6 pl-2 ">
              {" "}
              <div>
                <h1 className="font-bold mb-2 text-2xl"> {props.t3}</h1>
                <div className="border-dotted border-l-2 border-light_blue/20">
                  {props.ct3}
                </div>{" "}
              </div>
            </p>
            <p className="my-4 text-lg md:text-xl border-l-2 border-gold md:font-light md:leading-6 pl-2 ">
              {" "}
              <div>
                <h1 className="font-bold mb-2 text-2xl"> {props.t4}</h1>
                <div className="border-dotted border-l-2 border-light_blue/20">
                  {props.ct4}
                </div>{" "}
              </div>
            </p>
            <p className="my-4 text-lg md:text-xl border-l-2 border-gold md:font-light md:leading-6 pl-2 ">
              {" "}
              <div>
                <h1 className="font-bold mb-2 text-2xl"> {props.t5}</h1>
                <div className="border-dotted border-l-2 border-light_blue/20">
                  {props.ct5}
                </div>{" "}
              </div>
            </p>
            <br />
            <br />
            <div className="flex justify-center text-[#ff0000] font-bold text-2xl">
              {props.closed ? <h1>{props.closed}</h1> : <></>}
            </div>
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}





function Schedule() {
  return (
    <div id="events" className="eventCards my-10 ">
      <span className='w-full text-center text-4xl md:text-5xl text-white my-10 drop-shadow-xl font-poppins '>
        <Fade delay={100} duration={1000}>
          Schedule
        </Fade>
        <hr className="w-1/5 mx-auto mt-3 mb-2 " />
      </span>
      <div className="grid md:grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 lg:gap-2">
        {eventData.map((eva) => {
          return (
            <Card
              key={eva.id}
              name={eva.name}
              logo={eva.logo}
              team={eva.members}
              ct={eva.ct}
              t1={eva.t1}
              ct2={eva.ct2}
              t2={eva.t2}
              ct3={eva.ct3}
              t3={eva.t3}
              ct4={eva.ct4}
              t4={eva.t4}
              ct5={eva.ct5}
              t5={eva.t5}
            />
          );
        })}
      </div>
    </div>
  );
}


export default Schedule;