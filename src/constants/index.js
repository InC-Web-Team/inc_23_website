import {
  logo,
  impetus,
  concepts,
  pradnya,
  techfiesta,
} from "../assets";

const notifications = [
  "🔴 Impetus registrations are now closed.",
  "🔴 Concepts registrations are now closed.",
]

//   export const navItems = [
//   { id: "about", isHome: true, title: "About" },
//   { id: "events", isHome: true, title: "Events" },
//   { id: "committee/core", isHome: false, title: "Committee", path: "/committee/core" },
//   { id: "register", isHome: false, title: "Register" },
// ];


export const navItems = [
  { id: "home", title: "Home", type: "hash" },
  { id: "about", title: "About", type: "hash" },
  { id: "events", title: "Events", type: "hash" },
  { id: "committee", title: "Committee", type: "route", path: "/committee/core" },
  { id: "register", title: "Register", type: "route", path: "/register" },
  { id: "schedule", title: "Schedule", type: "route", path: "/schedule" }
];




const navLinks = [
  // {
  //   id: "results/impetus",
  //   isHome: false,
  //   title: "Results",
  // },
  {
    id: "about",
    isHome: true,
    title: "About",
  },
  {
    id: "events",
    isHome: true,
    title: "Events",
  },
  // {
  //   id: "results/concepts",
  //   isHome: false,
  //   title: "Results",
  // },
  {
    id: "committee/core",
    isHome: false,
    title: "Committee",
  },
  {
    id: "schedule",
    isHome: false,
    title: "Schedule",
  },
  {
    id: "register",
    isHome: false,
    title: "Register",
  },
];

const adminNavlinks = [
  {
    id: "admin",
    isHome: false,
    title: "Dashboard",
  },
  {
    id: "admin/verify/impetus",
    isHome: false,
    title: "Verify",
  },
  {
    id: "admin/incomplete-registrations/impetus",
    isHome: false,
    title: "Follow-up",
  },
  {
    id: "admin/registrations/impetus",
    isHome: false,
    title: "Teams",
  },
  {
    id: "admin/allocate/impetus",
    isHome: false,
    title: "Allocate",
  },
  {
    id: "admin/deallocate/impetus",
    isHome: false,
    title: "Deallocate",
  },
  // {
  //   id: "admin/results/imp_project_score",
  //   isHome: false,
  //   title: "Results",
  // },
  {
    id: "admin/view/allocation",
    isHome: false,
    title: "View Allocations",
  },
  {
    id: "admin/view/project-judge",
    isHome: false,
    title: "Project Judges",
  },
  {
    id: "admin/view/analytics",
    isHome: false,
    title: "Analytics",
  },
  {
    id: "admin/reallocate",
    isHome: false,
    title: "Reallocate",
  },
  {
    id: "admin/logout",
    isHome: false,
    title: "Logout",
  },
];

const judgeNavLinks = [
  {
    id: "judge",
    isHome: false,
    title: "Home",
  },
  {
    id: "judge/evaluate",
    isHome: false,
    title: "Evaluate",
  },
  {
    id: "judge/profile",
    isHome: false,
    title: "Profile",
  },
  {
    id: "admin/logout",
    isHome: false,
    title: "Logout",
  },
];

const about_text = "Impetus and Concepts (InC) is a flagship technical event of SCTR's Pune Institute of Computer Technology (PICT), Pune , which will be held during the 1st week of April 2024. InC is an intercollegiate international level competition that has been catching the attention of corporate giants for the quality of projects and an opportunity to recruit/mentor young talented budding entrepreneurs. Every year InC sets a new benchmark and provides an opportunity for students to realize their ideas into effective products. Over the years, it has become the most popular and awaited event with continuous improvement in footfall, the number and quality of projects/papers, etc. This event also sets a platform for students to design, exhibit, and watch their ideas come true. This technical fest has inventive events namely - Impetus, Concepts, Pradnya.Impetus is a Project Competition for FE to TE students, all engineering branches confined to specific domains ; Concepts is a Project Competition for Final Year Students, all engineering branches confined to specific domains ; and Pradnya - An International Coding Competition. Students are invited with projects addressing the societal needs like Health, Agriculture, Kids/Women Safety, Education, etc. and the best project judged by the juries will be awarded with a cash prize of ₹ 1 Lakh Cash Prize from PICT."

const sponsors = {
  title: [
    { src: 'https://drive.google.com/uc?export=view&id=1l9n1YpXyvmqCcRD5-5c3phnO2DvLwaIv', name: 'eq' },
  ],
  co: [
    { src: 'https://drive.google.com/uc?export=view&id=189x5iaVfKM3RMDwRf1QucG1o_jyyRXs6', name: 'agribid' },
    { src: 'https://drive.google.com/uc?export=view&id=1HVESZDWB04QUZqqmDXsprh0JTBRNQIpG', name: 'intangles' },
    { src: 'https://drive.google.com/uc?export=view&id=1cYUspMi6FjbNwnqo1f1Ur_3GSvU7jL4D', name: 'cloudhedge' },
    { src: 'https://drive.google.com/uc?export=view&id=1ELGrezaLTZaFDQ2VReIjQFt_j1PQMjnA', name: 'imocha' },
  ],
  other: [
    { src: 'https://drive.google.com/uc?export=view&id=1PAGEoTMV2oOtFlpYPxICcI7JWSa34_ud', name: 'fold_health' },
    { src: 'https://drive.google.com/uc?export=view&id=1xAkmfOZyx0zukYdLYvMU1LdXpqXJPQZM', name: 'josh' },
    { src: 'https://drive.google.com/uc?export=view&id=1ZfdsT68VDmufopg-L1Z85dBtj4AIcxeZ', name: 'zetakode' },
    { src: 'https://drive.google.com/uc?export=view&id=18olvNpl-BG1HWVvDh9kXk8hITia1vV-G', name: 'gfg' },
  ],
}


// const events = [
//   { id: 1, _id: 'impetus', title: "Impetus", description: "International Level Project Exhibition and Competition.", logo: impetus, color:"bg-slate-700", team_size: '2-5 members', type: 'Project Expo', date: "Registration Closed" },
//   { id: 2, _id: 'pradnya', title: "Pradnya", description: "Compete with the best minds in the National Level Coding Contest.", logo:pradnya, color:"bg-slate-700", team_size: '1-2 members', type: 'Coding Competition', date: "Registration Closed" },
//   { id: 3, _id: 'concepts', title: "Concepts", description: "The most grand project exhibition event Concepts for final year student.", logo: concepts, color:"bg-slate-700", team_size: '2-5 members', type: 'Project Expo', date: "Registration Closed" },
//   { id: 4, _id: 'techfiesta', title: "TechFiesta", description: "International Hackathon", logo: techfiesta, color:"bg-slate-700", team_size: '4-5 members', type: 'Hackathon', date: "Registration Closed" },
//   { id: 5, _id: 'impetus', title: "Special Event", description: "An exciting surprise awaits! Stay tuned for something unforgettable.", logo: logo, color:"bg-slate-700", team_size: '1-5 members', type: 'Unveiling Soon', date: "To Be Announced" },
// ];
const events = [
  { id: 1, _id: 'impetus', title: "Impetus", description: "International Level Project Exhibition and Competition.", logo: impetus, color: "bg-slate-700", team_size: '2-5 members', type: 'Project Expo', date: "Registration Closed" },
  { id: 2, _id: 'pradnya', title: "Pradnya", description: "Compete with the best minds in the National Level Coding Contest.", logo: pradnya, color: "bg-slate-700", team_size: '1-2 members', type: 'Coding Competition', date: "Registration Closed" },
  { id: 3, _id: 'concepts', title: "Concepts", description: "The most grand project exhibition event Concepts for final year student.", logo: concepts, color: "bg-slate-700", team_size: '1-6 members', type: 'Project Expo', date: "Registration Closed" },
  { id: 4, _id: 'techfiesta', title: "TechFiesta", description: "International Hackathon", logo: techfiesta, color: "bg-slate-700", team_size: '4-5 members', type: 'Hackathon', date: "Registration Closed" },
  { id: 5, _id: 'impetus', title: "Special Event", description: "An exciting surprise awaits! Stay tuned for something unforgettable.", logo: logo, color: "bg-slate-700", team_size: '1-5 members', type: 'Unveiling Soon', date: "To Be Announced" },
];

const eventsData = {
  impetus: {
    id: 'impetus',
    logo: impetus,
    criteria:
      "First, Second and Third Year Engineering Students.",
    name: "Impetus",

    short_desc: "International Level Project Exhibition and Competition.",

    description: ["Impetus is an intercollegiate international level competition and has been attracting corporate giants for not only sponsorship but also in terms of time and guidance to the participants. Industries such as eQ Technologic, Microsoft, Mobiliya, Deutsche Bank Group, Avaya, Siemens, Sagitech, Apporbit, e-Zest, HP, Indian Oil, 3 Ogeestudio, Tata, Mojo Networks, Ryussi, Tibco, Calsoft, Persistent, Pubmatic, IBM, Airtight, AthenaHealth, IEEE, ACM, CSI, were closely associated with this event. During the 3 day event, first year, second year and third year students from various colleges across India and abroad showcase their projects in domains like", `Application Development `, `Communication, Networking, Security `, `git Learning, Pattern Recognition, Artificial Intelligence`, `Embedded systems, VLSI, IoT, Remote Sensing`, `Blockchain, Cloud Computing`, `Others`],

    domains: [`Application Development `, `Communication Networking`, `Security`, `Pattern Recognition, Artificial Intelligence`, `Digital / Image / Speech / Video Processing`, `Others`],

    // domains: [
    //   {
    //     domain: "APPLICATION DEVELOPMENT",
    //     sub_domains:
    //       "Mobile Applications-Android, Web Applications, Database applications, others),(Big Earth Data Analytics, Geo Informatics, Data Mining on Big Data, Digital marketing optimization, Data exploration and discovery, Fraud detection and prevention, Social network and relationship analysis, Machine generated data analytics, Data retention, Others)",
    //   },
    //   {
    //     domain: "COMMUNICATION NETWORKS & SECURITY SYSTEMS",
    //     sub_domains:
    //       "(Computer networks, Internet of Things, Software Defined Network, Vehicular Networks, Wireless and Mobile Networks, Information and Network Security, GPS | GSM Projects, Wireless Communication, Antenna & RF Communication, Optical Communication & Network, Others), (Blockchain applications: cryptocurrency systems, healthcare system, advertising processes, insurance processes, copyright protection system, energy system, tracking system, monitoring system, Security system, societal applications, others), (Virtualization and Autonomic Computing, High Speed Network, Security in Cloud, Cloud Computing, Data center Management, Handling Big Data on Cloud, Mobile Cloud, Cloud Forensics, Fog Computing, Others)",
    //   },
    //   {
    //     domain: "DIGITAL / IMAGE/ SPEECH / VIDEO PROCESSING",
    //     sub_domains:
    //       "(Digital Signal processing, Image processing, Speech recognition, Video processing, Speech to text / Text to speech, Others)",
    //   },
    //   {
    //     domain: "EMBEDDED/VLSI SYSTEMS",
    //     sub_domains:
    //       "(Image Processing & Remote Sensing, Machine Learning for Embedded Systems, Embedded Vision, Internet of Things, others), (Analog & Mixed Signal VLSI Design, Testing & Verification of VLSI Design, others)",
    //   },
    // ],

    registrations: {
      isRegistrationOpen: false,
      fees: {
        national: `&#8377;100/-`,
        international: `Free`,
      },
      min_team_size: 1,
      max_team_size: 6,
    },
    prize: `Total Cash prizes worth &#8377;7 Lakh.`,
    rules: [
      `Judge's decision will be final.`,
      `Project status must be in "Ready to Demonstrate".`,
    ],
    note: `Project addressing the societal needs like Health, Agriculture, Kids/Women Safety, Education etc. & selected project shall be awarded &#8377;1 Lakh Cash Prize from PICT.`,

    // contact: ['Apoorvaraj 8530191073 ', 'Mrugank 7083823772', 'Vrushali 9766176681', 'Aarti 9405119460'],
    button_link: "https://pictinc.org/register/events/impetus",
    schedule: "March 27, 2026",
  },
  concepts: {
    id: 'concepts',
    logo: concepts,
    criteria: "Final year students enrolled in BE / BTech degree.",
    schedule: "March 27, 2026",
    name: "Concepts",
    notices: [
      "1. The Participants should be present on campus and the labs during the time period allocated.",
      "2. At least 2 judges will be judging each project. However there will be judges from other organizations who will be evaluating projects for probable hiring or for special prizes etc. Hence none of the groups should leave the campus unless informed officially by the judging team.",
      "3. The judging criteria includes the following points :- , <p>i. Innovative Ideas Involved.</p>, <p>ii. Approach to Exploit Ideas.</p>, <p> iii. Approach towards Implementing the system and Future Applications.</p>, <p> iv. Implementation of engineering Principles. </p>, <p>v. Presentation and Q & A</p>",
      "4. We request all the group members to visit the stalls put up in the campus.",
      "5. For any judging related queries contact the lab coordinator associated with the respective lab only. Their contact details are written on each lab white board.",
    ],

    short_desc:
      "The Premier Project Exhibition showcasing Innovation and Achievement",

    description: ["Concepts is an inter-collegiate international-level competition and has been attracting corporate giants for not only sponsorship but also  for guiding and mentoring the participants for their Quality products/projects and providing on spot job offers & internships. It offers Patent registration fees for Innovative and Patentable projects. During the 3 day event, Final Year students from various colleges across India and abroad showcase their projects.",],

    domains: [`Application Development `, `Communication Networking`, `Security`, `Pattern Recognition, Artificial Intelligence`, `Digital / Image / Speech / Video Processing`, `Others`],

    // domains: [
    //   {
    //     domain: "APPLICATION DEVELOPMENT",
    //     sub_domains:
    //       "Mobile Applications-Android, Web Applications, Database applications, others),(Big Earth Data Analytics, Geo Informatics, Data Mining on Big Data, Digital marketing optimization, Data exploration and discovery, Fraud detection and prevention, Social network and relationship analysis, Machine generated data analytics, Data retention, Others)",
    //   },
    //   {
    //     domain: "COMMUNICATION NETWORKS & SECURITY SYSTEMS",
    //     sub_domains:
    //       "(Computer networks, Internet of Things, Software Defined Network, Vehicular Networks, Wireless and Mobile Networks, Information and Network Security, GPS | GSM Projects, Wireless Communication, Antenna & RF Communication, Optical Communication & Network, Others), (Blockchain applications: cryptocurrency systems, healthcare system, advertising processes, insurance processes, copyright protection system, energy system, tracking system, monitoring system, Security system, societal applications, others), (Virtualization and Autonomic Computing, High Speed Network, Security in Cloud, Cloud Computing, Data center Management, Handling Big Data on Cloud, Mobile Cloud, Cloud Forensics, Fog Computing, Others)",
    //   },
    //   {
    //     domain: "DIGITAL / IMAGE / SPEECH / VIDEO PROCESSING",
    //     sub_domains:
    //       "(Digital Signal processing, Image processing, Speech recognition, Video processing, Speech to text / Text to speech, Others)",
    //   },
    //   {
    //     domain: "EMBEDDED/VLSI SYSTEMS",
    //     sub_domains:
    //       "(Image Processing & Remote Sensing, Machine Learning for Embedded Systems, Embedded Vision, Internet of Things, others), (Analog & Mixed Signal VLSI Design, Testing & Verification of VLSI Design, others)",
    //   },
    // ],

    registrations: {
      isRegistrationOpen: false,
      fees: {
        national: `&#8377;300/-`,
        international: `Free`,
      },
      min_team_size: 1,
      max_team_size: 6,
    },

    prize: "Total Cash prizes worth &#8377;7 Lakh.",
    note: ` Project addressing the societal needs like Health, Agriculture, Kids/Women Safety, Education etc. & selected project shall be awarded &#8377;1 Lakh Cash Prize from PICT.`,

    rules: [
      'Judges decision will be final.',
      'Project status must be in "Ready to Demonstrate".',
    ],
    button_link: "https://pictinc.org/register/events/concepts",
  },
  pradnya: {
    // contact: [
    //   "Pratik 9145439727",
    //   "Neha 9579678142"
    // ],
    id: 'pradnya',
    prize: "Total Cash prizes worth &#8377;7 Lakh",
    note1: `🔹Judge's decision will be final.`,
    note3: `🔹Already registered candidates need not register again.`,
    schedule: "March 27, 2026",
    criteria: `Junior Level - First or Second year students of any undergraduate degree/course.#$Senior Level - Third and Final year students of any undergraduate degree/course.`,
    logo: pradnya,
    name: "Pradnya",
    short_desc: "Competitive Programming",

    description: ["PRADNYA is a one of a kind programming event meticulously forged by our finest, catering to rookies and veterans alike, from all over the world. This Contest puts the programmer's logical thinking and Problem solving skills to the test using programming languages, which guarantees to appraise their skills as a programmer.",],

    eligibility: [
      { tag: "Number of members in team", details: "maximum 2 members" },
      {
        tag: "Junior Level",
        details:
          "First year engineering, Second year engineering, other background students such as BCS etc.",
      },
      {
        tag: "Senior Level",
        details:
          "Third year engineering, final year engineering, and PG students.",
      },
    ],

    rounds: [
      {
        name: "Wild Card Round",
        details:
          "The wildcard round is open to both junior and senior teams, and the top 5 teams from each category will enter directly into the programming round (Round 2). This round will be conducted online on the coding platform. The wildcard round will include programming questions where the participants can code using any programming language they prefer.",
      },
      {
        name: "Round 1 : MCQ Round [Day 1] ",
        details:
          "In this event the participants are given multiple-choice and short-answer questions. This round is conducted for both levels using a web platform specially designed by the PICT Pradnya team. The team will communicate information regarding scheduled slots for this round to the participants one day before the event.",
      },
      {
        name: "Round 2: Programming Round [Day 2]",
        details:
          "Winners in the MCQ-based round and wild card winners are eligible for the programming contest. Five problem statements are allotted to each level, i.e., the junior and senior levels.  This round is held on an online programming platform. The team will communicate information regarding scheduled slots for this round to the participants one day before the event.",
      },
      {
        name: "Round 3: Judges Round  [Day 2]",
        details:
          "In the final round, the top 5 teams qualified for round 2 will enter the judging round. Esteemed industry professionals are invited to serve as judges for this competition stage. During the judging round, the judges will evaluate the five teams based on their solutions from round 2. The judges will then select the top three winning teams.",
      },
    ],
    registrations: {
      isRegistrationOpen: false,
      fees: {
        national: `&#8377;100/-`,
        international: `Free`,
      },
      min_team_size: 1,
      max_team_size: 2,
    },
    rules: [
      "All students whose colleges are located within the Pune district are required to attend this round in person at the PICT Campus.", "For students residing outside of the Pune district, there is an option to take the round in hybrid mode.",
    ],
    button_link: "https://pictinc.org/register/events/pradnya",
    rule_book: ""
  },
  /*
  nova: {
    id: 'nova',
    logo: nova,
    criteria:
      "First to Fourth Year Students.",
    name: "Nova",

    short_desc: "International-level Game Development and 3D Design Project Exhibition and Competition.",

    description: [`Nova is one of the very few platforms in India dedicated to game developers and designers to showcase their talent.Whether you're passionate about crafting compelling games or creating stunning 3D visuals, Nova offers the perfect stage to let your imagination take center stage. Gain recognition, connect with like-minded creators, and be part of a growing community, redefining the future of game development and design.`,],
    
    domains: [`Arena`, `Mindspark`, `Creative 3D models`, `Animations`, `Assets for games or standalone projects`, `Others`],

    // domains: [
    //   {
    //     domain: "APPLICATION DEVELOPMENT",
    //     sub_domains:
    //       "Mobile Applications-Android, Web Applications, Database applications, others),(Big Earth Data Analytics, Geo Informatics, Data Mining on Big Data, Digital marketing optimization, Data exploration and discovery, Fraud detection and prevention, Social network and relationship analysis, Machine generated data analytics, Data retention, Others)",
    //   },
    //   {
    //     domain: "COMMUNICATION NETWORKS & SECURITY SYSTEMS",
    //     sub_domains:
    //       "(Computer networks, Internet of Things, Software Defined Network, Vehicular Networks, Wireless and Mobile Networks, Information and Network Security, GPS | GSM Projects, Wireless Communication, Antenna & RF Communication, Optical Communication & Network, Others), (Blockchain applications: cryptocurrency systems, healthcare system, advertising processes, insurance processes, copyright protection system, energy system, tracking system, monitoring system, Security system, societal applications, others), (Virtualization and Autonomic Computing, High Speed Network, Security in Cloud, Cloud Computing, Data center Management, Handling Big Data on Cloud, Mobile Cloud, Cloud Forensics, Fog Computing, Others)",
    //   },
    //   {
    //     domain: "DIGITAL / IMAGE/ SPEECH / VIDEO PROCESSING",
    //     sub_domains:
    //       "(Digital Signal processing, Image processing, Speech recognition, Video processing, Speech to text / Text to speech, Others)",
    //   },
    //   {
    //     domain: "EMBEDDED/VLSI SYSTEMS",
    //     sub_domains:
    //       "(Image Processing & Remote Sensing, Machine Learning for Embedded Systems, Embedded Vision, Internet of Things, others), (Analog & Mixed Signal VLSI Design, Testing & Verification of VLSI Design, others)",
    //   },
    // ],

    registrations: {
      fees: {
        national: `&#8377;300/-`,
        international: `Free`,
      },
      min_team_size: 1,
      max_team_size: 5,
    },
    prize: `Total Cash prizes worth &#8377;7 Lakh.`,
    rules: [
      `Judge's decision will be final.`,
      `Project status must be in "Ready to Demonstrate".`,
    ],
    additional: [
      {
        domain: "Game Development",
        details:
          ["Arena: Action, platformers, survival, shooters (FPS/TPS), roguelikes, open-world adventures, racing, rhythm games, stealth, sports, arcade games, fighting games, modded action games." , "Mindscape: Strategy (RTS, turn-based, tower defense), puzzles, simulation (life, business, and physics), tycoon games, card games, board game adaptations, resource management, educational games, gamification projects, games for real-world training, AI-controlled games, and games that involve system optimization or automation.", "2-5 members per team."],
      },
      {
        domain: "Design",
        details:
          ["Creative 3D models, animations, and assets for games or standalone projects.", "1-3 members per team."],
      },
    ],
    note: `Project addressing the societal needs like Health, Agriculture, Kids/Women Safety, Education etc. & selected project shall be awarded &#8377;1 Lakh Cash Prize from PICT.`,

    // contact: ['Apoorvaraj 8530191073 ', 'Mrugank 7083823772', 'Vrushali 9766176681', 'Aarti 9405119460'],
    button_link: "https://pictinc.org/register/events/impetus",
    schedule: "March 27, 2026",
  }, 
  */
};

const ruleBookLinks = new Map([
  ["impetus", "https://drive.google.com/file/d/1HOvxmEpWjBN6-3gsAs13Xa8_XRGFOZ-o/view?usp=sharing"],
  ["concepts", "https://drive.google.com/file/d/1ofNZDXE4amY7tHBzFlsheI7AeWKoVb7b/view?usp=sharing"],
  ["pradnya", "https://drive.google.com/file/d/13tY1rm6j5eaJYHj9qgkHTYU58Y99OYF1/view?usp=sharing"],
])
const faculty = [
  {
    value: "Advisory Committee",
    names: [
      { value: "Director: Dr. P. T. Kulkarni" },
      { value: "Principal: Dr. S. T. Gandhe" },
      { value: "HOD CE: Dr. B. A. Sonkamble" },
      { value: "HOD E&TC: Dr. G. S. Mundada" },
      { value: "HOD IT: Dr. Emmanuel M." },
      { value: "HOD AI&DS: Dr. S. C. Dharmadhikari" },
      { value: "HOD ECE: Dr. S. K. Moon" },
      { value: "HOD BS&E: Prof. E. M. Reddy" },
      { value: "Convenor: Dr. G. P. Potdar" },
      { value: "Co-Convenor: Prof. S. S. Pande" }
    ]
  },

  {
    value: "Coordination Team",
    names: [
      { value: "Prof. M. R. Khodaskar" },
      { value: "Prof. T. A. Rane" },
      { value: "Prof. H. B. Mali" }
    ]
  },

  {
    value: "Marketing",
    names: [
      { value: "Dr. S. S. Narkhede" },
      { value: "Dr. G. V. Kale" },
      { value: "Dr. A. G. Phakaktar" },
      { value: "Dr. A. M. Bagade" },
      { value: "Dr. S. S. Sonawane" }
    ]
  },

  {
    value: "Guest Invitation, Hospitality, Schedule & Agenda",
    names: [
      { value: "Prof. M. V. Mane" },
      { value: "Prof. S. A. Pawar" },
      { value: "Prof. M. S. Patil" },
      { value: "Prof. Kopal Gangrade" },
      { value: "Prof. P. A. Shinde" },
      { value: "Prof. N. Jamdar" },
      { value: "Prof. M. M. Mule" },
      { value: "Prof. N. N. Jamdar" },
      { value: "Ms. B. S. Koteval" },
      { value: "Ms. J. N. Buradkar" }
    ]
  },

  {
    value: "Publicity",
    names: [
      { value: "International: Dr. M. V. Munot" },
      { value: "International: Dr. M. P. Turuk" },
      { value: "Advisor: Dr. G. S. Mundada" },
      { value: "Advisor: Dr. Emmanuel" },
      { value: "Prof. R. B. Murumkar" },
      { value: "Prof. M. N. Kakade" },
      { value: "Prof. S. R. Warhade" },
      { value: "Prof. A. C. Karve" },
      { value: "All B.E Project Coordinators" },
      { value: "Social Media: Prof. Y. A. Handage" },
      { value: "Social Media: Prof. M. R. Jansari" }
    ]
  },

  {
    value: "Synopsis & Certificates Design",
    names: [
      { value: "Prof. A. G. Dhamankar" },
      { value: "Prof. B. P. Masram" },
      { value: "Mr. D. M. Mankar" }
    ]
  },

  {
    value: "Certificate Preparation & Distribution",
    names: [
      { value: "Prof. V. B. Patole" },
      { value: "Mr. V. A. Manmode" },
      { value: "Mr. B. S. Jadhav" }
    ]
  },

  {
    value: "Website, Payment, Domain, SSL",
    names: [
      { value: "Prof. P. J. Jambhulkar" },
      { value: "Mr. S. R. Shelar" }
    ]
  },

  {
    value: "Inauguration Arrangements",
    names: [
      { value: "Prof. Shweta Shah" },
      { value: "Prof. A. A. Kadam" },
      { value: "Prof. B. D. Kadam" }
    ]
  },

  {
    value: "Memento Distribution",
    names: [
      { value: "Prof. S. S. Khot" },
      { value: "Prof. S. A. Barde" },
      { value: "Prof. H. C. Deshmukh" },
      { value: "Prof. D. B. Mane" }
    ]
  },

  {
    value: "Judging - Concepts",
    names: [
      { value: "Dr. S. B. Deshmukh" },
      { value: "Prof. M. S. Chavan" },
      { value: "Prof. A. A. Chandorkar" },
      { value: "Prof. V. S. Kulkarni" },
      { value: "Prof. P. S. Agnihotri" },
      { value: "Prof. S. D. Shelke" },
      { value: "Prof. V. R. Tribhuvan" }
    ]
  },

  {
    value: "Judging - Impetus",
    names: [
      { value: "Prof. M. S. Wakode" },
      { value: "Prof. V. V. Bagade" },
      { value: "Prof. H. S. Kumbhar" },
      { value: "Prof. S. G. Gaikwad" },
      { value: "Dr. S. T. Gawhale" }
    ]
  },

  {
    value: "Judging - Pradnya",
    names: [
      { value: "Prof. S. A. Jakhete" },
      { value: "Prof. S. P. Shintre" },
      { value: "Mr. Sandeep Renuse" },
      { value: "Ms. Snehalata Rane" }
    ]
  },

  {
    value: "Judging - TechFiesta",
    names: [
      { value: "Prof. M. S. Chavan" },
      { value: "Prof. S. N. Upasani" },
      { value: "Prof. M. R. Jansari" },
      { value: "Prof. S. D. Hade" },
      { value: "Prof. D. P. Salpurkar" },
      { value: "Prof. P. B. Tuhe" },
      { value: "Prof. A. C. Karve" },
      { value: "Mr. H. V. Kasar" },
      { value: "Mr. I. M. Pawal" },
      { value: "Mr. M. K. Shegaonkar" },
      { value: "Mr. R. P. Patil" }
    ]
  },

  {
    value: "Theme Projects Identification",
    names: [
      { value: "Prof. A. A. Jewalikar" },
      { value: "Prof. M. A. Chimanna" }
    ]
  },

  {
    value: "Patent Projects / IPR",
    names: [
      { value: "Dr. A. R. Deshpande" },
      { value: "Dr. A. M. Deshmukh" }
    ]
  },

  {
    value: "Attendance & Feedback",
    names: [
      { value: "Prof. V. B. Vaijapurkar" },
      { value: "Prof. A. R. Bankar" },
      { value: "Prof. S. Pawar" },
      { value: "Prof. S. S. Shinde" },
      { value: "Prof. K. L. Bhodhe" },
      { value: "Prof. A. S. Bodhe" }
    ]
  },

  {
    value: "Finance & Budget",
    names: [
      { value: "Prof. A. M. Kulkarni" },
      { value: "Prof. K. Y. Digholkar" }
    ]
  },

  {
    value: "Student Volunteer Committee",
    names: [
      { value: "Prof. E. M. Reddy" },
      { value: "Prof. A. A. Chavan" },
      { value: "Prof. R. R. Vardhaman" },
      { value: "Prof. M. Y. Gandhi" }
    ]
  },

  {
    value: "Purchase",
    names: [
      { value: "Dr. P. T. Kulkarni" },
      { value: "Dr. S. T. Gandhe" },
      { value: "Dr. G. P. Potdar" },
      { value: "Prof. S. S. Pande" },
      { value: "Mr. A. V. Sapkal" }
    ]
  },

  {
    value: "Documentation / ISO",
    names: [
      { value: "Prof. N. G. Nirmal" },
      { value: "Prof. D. M. Shinde" },
      { value: "Prof. K. K. Kolhatkar" },
      { value: "Mr. A. V. Torne" }
    ]
  },

  {
    value: "Network & Bandwidth",
    names: [
      { value: "Mr. P. P. Parkhi" },
      { value: "Mr. S. S. Metkari" }
    ]
  },

  {
    value: "VNL",
    names: [
      { value: "Prof. R. S. Paswan" },
      { value: "Prof. A. K. Patel" },
      { value: "Prof. S. K. Shah" },
      { value: "Prof. N. N. Jamdar" },
      { value: "Mr. K. S. Ugale" },
      { value: "Mr. S. H. Karsulkar" },
      { value: "Mr. S. N. Deokate" },
      { value: "Mr. N. S. Mirajkar" },
      { value: "Mr. K. B. Kadambande" }
    ]
  },

  {
    value: "Stage Setup",
    names: [
      { value: "Prof. R. J. Sutar" },
      { value: "Prof. S. G. Gaikwad" },
      { value: "Prof. S. H. Hosamani" },
      { value: "Prof. U. S. Pawar" },
      { value: "Prof. A. N. Sayyad" },
      { value: "Prof. T. S. Londhe" },
      { value: "Prof. S. Y. Nikam" },
      { value: "Ms. A. M. Kulkarni" },
      { value: "Ms. S. G. Patil" }
    ]
  },

  {
    value: "T-Shirts",
    names: [
      { value: "Prof. A. D. Vidhate" },
      { value: "Mr. Shaligram" }
    ]
  },

  {
    value: "Hardware",
    names: [
      { value: "Prof. V. R. Jaiswal" },
      { value: "Prof. N. V. Buradkar" },
      { value: "All Lab Assistants" }
    ]
  },

  {
    value: "Canteen",
    names: [
      { value: "Prof. Hake" },
      { value: "Prof. A. S. Ramteke" },
      { value: "Mr. K. S. Bhosale" }
    ]
  },

  {
    value: "PA System / Electrical / Network / Telephone",
    names: [
      { value: "Prof. L. P. Patil (Overall Incharge)" },
      { value: "Mr. K. S. Ugale (PA System)" },
      { value: "Mr. S. M. Pawar (Electrical)" },
      { value: "Mr. S. S. Metkari (Network)" },
      { value: "Mr. S. M. Shinde (Telephone)" },
      { value: "Mr. A. M. Chavan (Electrical)" }
    ]
  },

  {
    value: "Transport , Parking & Police Arrangment",
    names: [
      { value: "Prof. P. D. Jadhav" },
      { value: "Prof. H. S. Khatri" },
      { value: "Prof. K. D. Kulkarni" },
      { value: "Mr. R. V. Badekar" },
      { value: "Mr. A. B. Wagh" }
    ]
  },

  {
    value: "Trophies, Memento & Photos",
    names: [
      { value: "Prof. K. R. Jadhav" },
      { value: "Prof. R. R. Vardhaman" },
      { value: "Prof. S. M. Hosamani" },
      { value: "Prof. J. S. Mahajan" },
      { value: "Prof. A. A. Bidkar" }
    ]
  }
];

const web = [
  {
    team: "Web Team",
    members: [
      {
        name: "Kalyani Gade",
        linkedin: "https://www.linkedin.com/in/kalyani-gade-b03b39292/",
        github: "https://github.com/KALYANI100",
        instagram: "",
        photo: "https://drive.google.com/open?id=1cTN0qA7sNh6t0HoUtanJFbSVhbJup2ne",
      },
      {
        name: "Sanket Rajput",
        linkedin: "https://www.linkedin.com/in/sanket-rajput-1b522b240/",
        github: "https://github.com/sanket-rajput",
        instagram: "",
        photo: "https://drive.google.com/file/d/1Zl4lFQhoOioaBWrBLyHYvqURCQldGJTd/view?usp=drive_link",
      },
      {
        name: "Tanay Raundale",
        linkedin: "https://www.linkedin.com/in/tanay-raundale-726086303",
        github: "https://github.com/TanayRaundale",
        instagram: "https://www.instagram.com/tanayraundale",
        photo: "https://drive.google.com/open?id=1CR8XkzEiPBMzBakw9mJAKuKkfRwwCzTQ",
      },
    ],
  },
];
const core = [
  {
    team: "Overall Coordinators",
    members: [
      {
        name: "Ansh Shah",
        linkedin: "http://linkedin.com/in/ansh-shah5",
        github: "https://github.com/Ansh-shah5",
        instagram: "https://www.instagram.com/ansh_shahh",
        photo: "https://drive.google.com/open?id=1QYaUlpjTL3JmF3Bn1MPPcgUU9V8yqMWd",
      },
      {
        name: "Puneet Rathi",
        linkedin: "https://www.linkedin.com/in/puneet-rathi-513465286",
        github: "https://github.com/Rathi1307",
        instagram: "",
        photo: "https://drive.google.com/file/d/1i5hIOi96q_f3Lpd2VlRg34epxbqeFDIC/view?usp=drive_link",
      },
      {
        name: "Shreehari Soni",
        linkedin: "",
        github: "",
        instagram: "",
        photo: "https://drive.google.com/file/d/1p-j2nHbcf8C_VnAxw8gGIRlSKG_YwHys/view?usp=drive_link",
      },
    ],
  },

  {
    team: "Concept Heads",
    members: [
      {
        name: "Arya Bejalwar",
        linkedin: "https://www.linkedin.com/in/arya-bejalwar-a23a46303/",
        github: "https://github.com/Ryzen86",
        instagram: "arya_bejalwar",
        photo: "https://drive.google.com/file/d/1mZxnMYBHywBcXDsnnos1Mz0sgT1Ct5zH/view?usp=drive_link",
      },
      {
        name: "Om Yerkar",
        linkedin: "https://www.linkedin.com/in/om-yerkar",
        github: "https://github.com/Omyerkar",
        instagram: "https://www.instagram.com/omyerkar",
        photo: "https://drive.google.com/open?id=1mqyapVFkcQURNQJ237EPeRHG9OeXbkaX",
      },
      {
        name: "Sukanya Gupta",
        linkedin: "https://www.linkedin.com/in/sukanya-gupta-b40a132a2/",
        github: "https://github.com/Sukanya0704",
        instagram: "https://www.instagram.com/__07__sukanya/",
        photo: "https://drive.google.com/open?id=1mDRzFl09sxt1vAExK4CLNv3uyvCSamVg",
      },
      {
        name: "Utsavi Bagri",
        linkedin: "https://www.linkedin.com/in/utsavi-bagri-6a3530284/",
        github: "https://github.com/utsavii",
        instagram: "https://www.instagram.com/utsavi_bagri/",
        photo: "https://drive.google.com/file/d/1OwNtuMA0Hv46DhCH5XrgeghENfiWKJ5X/view",
      },
    ],
  },

  {
    team: "Impetus Heads",
    members: [
      {
        name: "Abhimanyu Sharma",
        linkedin: "https://www.linkedin.com/in/abhimanyu-sharma-035997357",
        github: "https://github.com/abhimanyu2511",
        instagram: "https://www.instagram.com/abhimanyu_11",
        photo: "https://drive.google.com/open?id=1V_W39w0sS_4KUiVi643s8NZMY9CehnxB",
      },
      {
        name: "Parth Honrao",
        linkedin: "https://www.linkedin.com/in/parth-honrao-5905932b6/",
        github: "https://github.com/ParthHonrao05",
        instagram: "https://www.instagram.com/parth_h24",
        photo: "https://drive.google.com/open?id=1oJryvztAy5UPSJ17F0dz3Tgzt98662jg",
      },
      {
        name: "Sarvesh Bagad",
        linkedin: "https://www.linkedin.com/in/sarvesh-bagad-42286228b",
        github: "https://github.com/Sarveshbagad13",
        instagram: "https://www.instagram.com/sarvesh_bagad_13",
        photo: "https://drive.google.com/open?id=1fSgG0-ZTwMGtpmlVn3Qvh-5KWWkv6JGr",
      },
      {
        name: "Unnati Jain",
        linkedin: "https://www.linkedin.com/in/unnati-jain-b42297276",
        github: "",
        instagram: "https://www.instagram.com/unnati_3007",
        photo: "https://drive.google.com/open?id=1hpOWkS-aGypm3eKC5cwOfOgY5yADJP6D",
      },
    ],
  },

  {
    team: "Pradnya Heads",
    members: [
      {
        name: "Naman Ostwal",
        linkedin: "https://www.linkedin.com/in/naman-ostwal-918894230",
        github: "https://github.com/NamanOstwal",
        instagram: "https://www.instagram.com/naman_ostwal",
        photo: "https://drive.google.com/open?id=1eYnEutlPSuNkxzackqQ8GEvakdDBEZ27",
      },
      {
        name: "Mahi Shah",
        linkedin: "https://www.linkedin.com/in/mahi-shah-417975212/",
        github: "https://github.com/smahi87",
        instagram: "@mahishah_28",
        photo: "https://drive.google.com/file/d/1P_6AN9eijBdVWiEg8Vxtcmh-d4khYPB0/view?usp=drive_link",
      },
      {
        name: "Samarth Bajaj",
        linkedin: "",
        github: "https://github.com/SamarthBajaj26",
        instagram: "https://www.instagram.com/samarthbajaj26/",
        photo: "https://drive.google.com/open?id=1nGoP3XpXqZQMNHQS4uxoTLfCAm3OwCrM",
      },
    ],
  },

  {
    team: "Publicity Heads",
    members: [
      {
        name: "Aarjav Jain",
        linkedin: "https://www.linkedin.com/in/aarjav-jain-2ab1932ba",
        github: "https://github.com/Jaarjav",
        instagram: "https://www.instagram.com/aarjav001",
        photo: "https://drive.google.com/open?id=1uaOOE-Q0wOu_nKeUrVZLJ4WHb5BsCUlG",
      },
      {
        name: "Chaitanya Patil",
        linkedin: "https://www.linkedin.com/in/chaitanya-patil-7769b1292/",
        github: "https://github.com/Cyp5556",
        instagram: "https://www.instagram.com/chaitanya.patil24",
        photo: "https://drive.google.com/open?id=148n_GjPS4uzneH4hnePa8BRLSH_nF2Rz",
      },
      {
        name: "Ishita Sodhiya",
        linkedin: "https://linkedin.com/in/ishita-sodhiya-93a37932a/",
        github: "https://github.com/ishitaaa18",
        instagram: "https://www.instagram.com/ishitaaa_1804",
        photo: "https://drive.google.com/open?id=1M5E8OdXYHNZmPp4r2SwmnHoVvW2ZQpJI",
      },
      {
        name: "Konark Nehete",
        linkedin: "https://www.linkedin.com/in/konark-nehete",
        github: "https://github.com/konarknehete",
        instagram: "https://www.instagram.com/konark_nehete",
        photo: "https://drive.google.com/open?id=1s-LgdK7XZ370Uamhr3pkzDIQbd3dsAN6",
      },
    ],
  },

  {
    team: "Operations Heads",
    members: [
      {
        name: "Achal Acharya",
        linkedin: "https://www.linkedin.com/in/achal-a-1192aa225/",
        github: "",
        instagram: "https://www.instagram.com/_achal.acharya_",
        photo: "https://drive.google.com/file/d/1PGRBqVLKWFP355m4xpASNKVruVmNZ7EV/view",
      },
      {
        name: "Kaustubh Banerjee",
        linkedin: "https://www.linkedin.com/in/kaustubh-banerjee-00296a25b",
        github: "https://github.com/demonartigo",
        instagram: "https://www.instagram.com/_banerjeeeee",
        photo: "https://drive.google.com/file/d/1ua90OmyRnPAhksbebvv32Zu50pI1YrZT/view?usp=drive_link",
      },
      {
        name: "Krishna Thakur",
        linkedin: "https://linkedin.com/in/krishhhhh",
        github: "https://github.com/kkrishhhh",
        instagram: "https://www.instagram.com/kkkrishhhhhh",
        photo: "https://drive.google.com/open?id=1yMfkU763vRxt2Jl2i4d4_l7O_q3YM_2w",
      },
    ],
  },

  {
    team: "Social Media Head",
    members: [
      {
        name: "Nandini Mitkare",
        linkedin: "https://www.linkedin.com/in/nandini-mitkare-611188328",
        github: "https://github.com/nandinimitkare",
        instagram: "nandini.mitkare",
        photo: "https://drive.google.com/open?id=1SCyl9iHh6qnGFDwMLn59XuCEYA4cnFgV",
      },
    ],
  },

  {
    team: "Design Heads",
    members: [
      {
        name: "Mrugaja Nitin Joshi",
        linkedin: "https://www.linkedin.com/in/mrugaja-joshi-975468288",
        github: "https://github.com/MrugajaJ",
        instagram: "",
        photo: "https://drive.google.com/open?id=1TBZHGhpweVabL_oomzMeAUtG71ddKnU1",
      },
      {
        name: "Vedika Bopche",
        linkedin: "https://www.linkedin.com/in/vedika-bopche-588538376/",
        github: "https://github.com/vedikabops",
        instagram: "https://www.instagram.com/aki_dev_39/",
        photo: "https://drive.google.com/open?id=15UNsCOvvO0qfCcxlbyAK9krtzpczm39C",
      },
    ],
  },

  {
    team: "Marketing Head",
    members: [
      {
        name: "Vibha Shah",
        linkedin: "https://www.linkedin.com/in/vibha-shah-35b680346/",
        github: "https://github.com/vibhashah0108",
        instagram: "https://www.instagram.com/_vibha_18_",
        photo: "https://drive.google.com/open?id=12GkNA-W2XAJIHMLEAPUGdxWLu6MTMuDF",
      },
    ],
  },
];
const results = {
  impetus: [
    {
      dname: 'APPLICATION DEVELOPMENT (AD)',
      values: [
        {
          position: 'Winner',
          team_id: 'IM-AD1017',
          title: 'Guardians 360',
          names: ['Advait Joshi', 'Anshul Kalbande', 'Anurag Mandke', 'Amey Kulkarni', 'Tirthraj Mahajan'],
          institute: 'PICT, Pune'
        },
        {
          position: '1st runner up',
          team_id: 'IM-AD0103',
          title: 'StudyGenie - AI Powered Learning Revolution for Technical Students',
          names: ['Apurv Saktepar', 'Viraj Desai', 'Nisha Pragane', 'Vaishnavi Thorbole'],
          institute: 'GP, Pune'
        },
        {
          position: '2nd Runner Up',
          team_id: 'IM-AD0048',
          title: 'FinBuddy AI - Personalised Finance Manager',
          names: ['Mrinmayee Deshpande', 'Dipali Gangarde', 'Aniket Dhage'],
          institute: 'VIIT, Pune'
        }
      ]
    },
    {
      dname: 'COMMUNICATION NETWORK AND SECURITY SYSTEMS (CN)',
      values: [
        {
          position: 'Winner',
          team_id: 'IM-CN1018',
          title: 'TraceHost: Authenticity & Security Analyzer for Websites',
          names: ['Atharva Dhavale', 'Sakshi Chougule', 'Kartik Sirsillo', 'Aayush Meghal', 'Anuj Nagpure'],
          institute: 'PICT, Pune'
        },
        {
          position: '1st runner up',
          team_id: 'IM-CN0021',
          title: 'Dexx Aggregator',
          names: ['Shlok Khairnar', 'Shridhar Gore'],
          institute: 'VIIT, Pune'
        },
        {
          position: '2nd Runner Up',
          team_id: 'IM-CN0015',
          title: 'AirGlove',
          names: ['Akshay Dhere', 'Harshal Patil', 'Ayush Peshawar'],
          institute: 'PCCOE, Pune'
        }
      ]
    },
    {
      dname: 'DIGITAL/ IMAGE/ SPEECH/ VIDEO PROCESSING (DSP)',
      values: [
        {
          position: 'Winner',
          team_id: 'IM-DS0007',
          title: 'Sanjeevani AI',
          names: ['Prasanna Patwardhan', 'Piyush Deshmukh', 'Yugandhar Chawale', 'Yash Kulkarni', 'Rahul Dewani'],
          institute: 'VIIT, Pune'
        },
        {
          position: '1st runner up',
          team_id: 'IM-DS0013',
          title: 'Crop Disease Detection System',
          names: ['Shubham Pawade', 'Supragy Mishra', 'Bhargavi Potode', 'Pratik Bhosale', 'Anooj Jilladwar'],
          institute: 'MITAOE, Pune'
        },
        {
          position: '2nd Runner Up',
          team_id: 'IM-DS0020',
          title: 'AI video editor and utility (SAAS)',
          names: ['Vedant Nadhe', 'Pranav Bire', 'Arya Kadam', 'Saksham Saipatwar', 'Harshwardhan Saindane'],
          institute: 'VIIT, Pune'
        }
      ]
    },
    {
      dname: 'EMBEDDED/ VLSI SYSTEMS (ES)',
      values: [
        {
          position: 'Winner',
          team_id: 'IM-ES0035',
          title: 'Smart Dustbin: Automated Waste Segregation & Monitoring',
          names: ['Om Ganjewar', 'Vaishnavi Gaikwad'],
          institute: 'VIT, Pune'
        },
        {
          position: '1st runner up',
          team_id: 'IM-ES0001',
          title: 'Careflex: Real-Time Health Monitoring System for Post-CSection Recovery',
          names: ['Divya Bhavsar', 'Prasad Patil', 'Saniya Bhosale', 'Swadesh Jadhav', 'Tejas Deshmukh'],
          institute: 'K.K Wagh, Nashik'
        },
        {
          position: '2nd Runner Up',
          team_id: 'IM-ES0034',
          title: 'SMART BLIND STICK USING GPS AND GSM',
          names: ['Ritanshu Sadaphale', 'Bhargavi Sarde'],
          institute: 'VIT, Pune'
        }
      ]
    },
    {
      dname: 'MACHINE LEARNING AND PATTERN RECOGNITION (ML)',
      values: [
        {
          position: 'Winner',
          team_id: 'IM-ML0041',
          title: 'Site-Guide : Web Navigation Helper',
          names: ['Shantanu Shinde', 'Ashish Tembhekar'],
          institute: 'NCER, Pune'
        },
        {
          position: '1st runner up',
          team_id: 'IM-ML0068',
          title: 'Drone Based Intelligent System for Apple Orchard Monitoring',
          names: ['Oceania Kshetrimayum', 'Akshda Khairnar', 'Meghraj Bhavsar', 'Shrey Salunkhe', 'Pranav Prajapati'],
          institute: 'K.K Wagh, Nashik'
        },
        {
          position: '2nd Runner Up',
          team_id: 'IM-ML0063',
          title: 'InsightX: Predictive maintenance ecosystem',
          names: ['Manish Pingale', 'Vedant Chandler', 'Sahil Dhawane', 'Sai Sinare'],
          institute: 'VIT, Pune'
        }
      ]
    },
    {
      dname: 'OTHERS (OT)',
      values: [
        {
          position: 'Winner',
          team_id: 'IM-OT0041',
          title: 'AnvikshAI : Crafting Adaptive Learning Journeys',
          names: ['Bhavesh Kale', 'Manas Shinde', 'Akash Shankpal', 'Umesh Bava', 'Harsh Agnani'],
          institute: 'K.K Wagh, Nashik'
        },
        {
          position: '1st runner up',
          team_id: 'IM-OT0065',
          title: 'AR Wardrobe',
          names: ['Atharva Patwardhan', 'Atharva Muchandi', 'Vishruti Mohinkar', 'Vedant Nagmotti'],
          institute: 'VIT, Pune'
        },
        {
          position: '2nd Runner Up',
          team_id: 'IM-OT0080',
          title: 'SMART GRAIN MANAGEMENT ROBOT FOR EFFICIENT',
          names: ['Ayush Walzade', 'Yashraj Shinde', 'Sumit Kotame', 'Kunal Deharkar', 'Nikhil Bankar'],
          institute: 'SCE, Kopargaon'
        }
      ]
    }
  ],
  concepts: [
    {
      dname: 'APPLICATION DEVELOPMENT (AD)',
      values: [
        {
          position: 'Winner',
          team_id: 'CO-AD1085',
          title: 'Beenium',
          institute: 'PICT, Pune',
          names: ['Abhijit Raygonda Khyade', 'Jayash Gaikwad', 'Priyanshu Purushottam Mahukhaye']
        },
        {
          position: '1st Runner Up',
          team_id: 'CO-AD0047',
          title: 'Enhancing Vocational Education with VR and AI Integration',
          institute: 'K.K Wagh, Nashik',
          names: ['Aastha Zade', 'Harsh Tayade', 'Pratik Puri', 'Samay Thakur']
        },
        {
          position: '2nd Runner Up',
          team_id: 'CO-AD1080',
          title: 'Mahavitaran Help App: A Comprehensive Mobile Application for Reporting Electrical Problems Using Cloud and Location Based Services',
          institute: 'PICT, Pune',
          names: ['Tanya Jagavkar', 'Yatin Nargotra']
        }
      ]
    },
    {
      dname: 'COMMUNICATION NETWORK AND SECURITY SYSTEMS (CN)',
      values: [
        {
          position: 'Winner',
          team_id: 'CO-CN0024',
          title: 'Wireless Nurse Call Bell System',
          institute: 'AISSMS, Pune',
          names: ['Bhagyashree Dhananjay Gade', 'Aditi Ashutosh Kulkarni', 'Vaibhavi Jitendra Panval']
        },
        {
          position: '1st Runner Up',
          team_id: 'CO-CN1028',
          title: 'Anomaly detection in NFS based on user access patterns',
          institute: 'PICT, Pune',
          names: ['Aditya More', 'Ashwin Taras', 'Riddhi Kulkarni']
        },
        {
          position: '2nd Runner Up',
          team_id: 'CO-CN1040',
          title: 'AI-Powered Server Compliance Auditing & Anomaly Detection for Secure Network Operations',
          institute: 'PICT, Pune',
          names: ['Mahesh Vaswani', 'Mayuri Kolhe', 'Shrutika Malve', 'Tejas Thorat']
        }
      ]
    },
    {
      dname: 'DIGITAL/ IMAGE/ SPEECH/ VIDEO PROCESSING (DSP)',
      values: [
        {
          position: 'Winner',
          team_id: 'CO-DS1007',
          title: 'Project MAVIS: Media Authenticity, Verification and Integrity System',
          institute: 'PICT, Pune',
          names: ['Chinmay Patil', 'Omkar Wagholikar', 'Shantanu Wable', 'Soaham Pimparkar']
        },
        {
          position: '1st Runner Up',
          team_id: 'CO-DS1060',
          title: 'SMART AUDIO FORENSICS : AI-Based Speaker Verification and Deepfake Detection',
          institute: 'PICT, Pune',
          names: ['Sarthak Chaudhari', 'Siddhi Pardeshi']
        },
        {
          position: '2nd Runner Up',
          team_id: 'CO-DS0044',
          title: 'Third Eye : Streaming Security in every frame through Neural Networks',
          institute: 'K.K Wagh, Nashik',
          names: ['Akshay Abhay Khandare', 'Nishant Singh', 'Shruti Shinde', 'Devansh Dubey']
        }
      ]
    },
    {
      dname: 'EMBEDDED/VLSI SYSTEMS (ES)',
      values: [
        {
          position: 'Winner',
          team_id: 'CO-ES1024',
          title: 'CORDIC Algorithm on FPGA',
          institute: 'PICT, Pune',
          names: ['Isha Lale', 'Neha Joshi', 'Kaushal Kulkarni']
        },
        {
          position: '1st Runner Up',
          team_id: 'CO-ES1012',
          title: 'Satellite-Based Toll Processing System',
          institute: 'PICT, Pune',
          names: ['Aaryaman Rahul Limaye', 'Sakshi Dhananjay Jawale', 'Shambhavi Vinod Lute']
        },
        {
          position: '2nd Runner Up',
          team_id: 'CO-ES1037',
          title: 'rainmaker-rs : Developing safe IoT applications using Rust',
          institute: 'PICT, Pune',
          names: ['Akshay Lahoti', 'Shreyash Bubane', 'Chinmay Dixit']
        }
      ]
    },
    {
      dname: 'MACHINE LEARNING AND PATTERN RECOGNITION (ML)',
      values: [
        {
          position: 'Winner',
          team_id: 'CO-ML0151',
          title: 'Forest Insight: GIS Based Monitoring Deforestation and Carbon Sequestration',
          institute: 'K.K. Wagh, Nashik',
          names: ['Shreyas Bidwai', 'Kshitij Rathore', 'Sanchita Sanjay Weljali', 'Vikas Sangale']
        },
        {
          position: '1st Runner Up',
          team_id: 'CO-ML1208',
          title: 'AI-Driven CRISPR System with Genome Study and Genomic Analysis',
          institute: 'PICT, Pune',
          names: ['Aditya Kadam', 'Akshay Gawande', 'Hitesh Khirid']
        },
        {
          position: '2nd Runner Up',
          team_id: 'CO-ML1177',
          title: 'AgriCare AI',
          institute: 'PICT, Pune',
          names: ['Divya Tambe', 'Shubhankar Karajkhede', 'Swaraj Zende']
        }
      ]
    },
    {
      dname: 'OTHERS (OT)',
      values: [
        {
          position: 'Winner',
          team_id: 'CO-OT1096',
          title: 'Multiplayer Competitive Game',
          institute: 'PICT, Pune',
          names: ['Aditya Mittal', 'Sunay Bhoyar', 'Pranav Jaju', 'Tarun Santani']
        },
        {
          position: '1st Runner Up',
          team_id: 'CO-OT1089',
          title: 'Rail Resource Optimization',
          institute: 'PICT, Pune',
          names: ['Arnav Desai', 'Hatim Talwarawala', 'Saniya Atalatti', 'Shatakshi Chaudhari']
        },
        {
          position: '2nd Runner Up',
          team_id: 'CO-OT1118',
          title: 'Augmenting Legal Research using Information Retrieval',
          institute: 'PICT, Pune',
          names: ['Adwait Desai', 'Atharva Dandgawhal', 'Saif Shaikh']
        }
      ]
    },
    {
      dname: 'OPEN HARDWARE',
      values: [
        {
          position: 'Winner',
          team_id: 'CO-ES1011',
          title: 'Collaborative Robot – Automated Task Optimization',
          institute: 'PICT, Pune',
          names: ['Aditi Zeminder', 'Prathamesh Raibhole', 'Vaibhav Patil']
        },
        {
          position: '1st Runner Up',
          team_id: 'CO-ES1010',
          title: 'Battery Management System',
          institute: 'PICT, Pune',
          names: ['Aditi Makarand Bhatkhedkar', 'Manish Dhumal']
        },
        {
          position: '2nd Runner Up',
          team_id: 'CO-DS0002',
          title: 'AI-Powered Smart Glasses: Affordable Assistive Technology for the Visually Impaired',
          institute: 'PCCOE, Pune',
          names: ['Amruta Kothawade', 'Omkar Kulkarni', 'Sakshi Jadhav', 'Soham Joshi']
        }
      ]
    },
    {
      dname: 'OPEN SOFTWARE',
      values: [
        {
          position: 'Winner',
          team_id: 'CO-OT0114',
          title: 'Sherlock - State of the art deepfake prevention system.',
          institute: 'MKSSS CCOEW, Pune',
          names: ['Ananti Mulay', 'Gargee Dorle', 'Isha Purnapatre', 'Shruti Kulkarni']
        },
        {
          position: '1st Runner Up',
          team_id: 'CO-DS0035',
          title: 'MRI to CT image synthesis',
          institute: "PVG, Pune",
          names: ['Sakshi Pote', 'Rajat Raj Sharma', 'Shruti Patki', 'Sahil Thite']
        },
        {
          position: '2nd Runner Up',
          team_id: 'CO-AD1092',
          title: 'IamReadyAI - AI powered Mock Interview platform',
          institute: 'PICT, Pune',
          names: ['Gopal Singh Saraf', 'Prathamesh Shriramwar', 'Rishikesh Revandikar', 'Shivanjali Thorat']
        }
      ]
    },
    {
      dname: 'RURAL',
      values: [
        {
          position: 'Winner',
          team_id: 'CO-OT0123',
          title: 'Gas leakage detection system with advanced safety enhancement.',
          institute: 'SGM, Mahagaon',
          names: ['Laukik Pradip Karekar', 'Ruturaj Girish Kumbhar', 'Shantanu Bajarang Chougale']
        }
      ]
    },
    {
      dname: 'OUT OF MAHARASHTRA',
      values: [
        {
          position: 'Winner',
          team_id: 'CO-OT0126',
          title: 'IOT BASED SMART SYRINGE INFUSION AND IV FLUID MONITORING AND ALERTING SYSTEM',
          institute: 'VBIT, Telangana',
          names: ['Kristamsetty Nikhil Kumar', 'Konda Kushal Reddy', 'Nalamasa Rahul']
        }
      ]
    }
  ],
  pradnya: [
    {
      dname: 'Senior Category',
      values: [
        {
          position: 'Winner',
          team_id: 'P-036',
          title: 'oreo99',
          names: ['Aniketh Pala', 'Arya Lokhande'],
          institute: 'VIT, Pune'
        },
        {
          position: '1st Runner Up',
          team_id: 'P-470',
          title: 'wide_pet_51',
          names: ['Vedant Rawale', 'Kunal Bhalgat'],
          institute: 'VIT, Pune'
        },
        {
          position: '2nd Runner Up',
          team_id: 'P-352',
          title: 'autom_leaf',
          names: ['Kaustubh Jaitapkar', 'Ritesh Patil'],
          institute: 'WCE, Sangli'
        }
      ]
    },
    {
      dname: 'Junior Category',
      values: [
        {
          position: 'Winner',
          team_id: 'P-066',
          title: 'souravkushwaha',
          names: ['Sandeep Yadav', 'Sourabh'],
          institute: 'AIT, Pune'
        },
        {
          position: '1st Runner Up',
          team_id: 'P-039',
          title: 'light_1419',
          names: ['Aftab Naik', 'Ayush Chavan'],
          institute: 'VIT, Pune'
        },
        {
          position: '2nd Runner Up',
          team_id: 'P-158',
          title: 'anujn_07',
          names: ['Anuj Nagpure', 'Divyansh Kathkar'],
          institute: 'PICT, Pune'
        }
      ]
    },
  ],
}

const timeline = [
  {
    title: "Impetus",
    company_name: "2-5 members",
    icon: logo,
    iconBg: "#383E56",
    date: "Jan 14 - Jan 15",
    points: [
      "Impetus and Concepts (InC) is a flagship technical event.",
      "InC is an intercollegiate international level competition that has been catching the attention of corporate giants.",
      "Impetus is a Project Competition for FE to TE students, all engineering branches confined to specific domains.",
    ],
    contact: ["Naman: 9999999999", "Naman: 9999999999",],
    fees: "500",
  },
  {
    title: "Concepts",
    company_name: "2-5 members",
    icon: logo,
    iconBg: "#383E56",
    date: "Jan 14 - Jan 15",
    points: [
      "Impetus and Concepts (InC) is a flagship technical event.",
      "InC is an intercollegiate international level competition that has been catching the attention of corporate giants.",
      "Impetus is a Project Competition for FE to TE students, all engineering branches confined to specific domains.",
    ],
    contact: ["Naman: 9999999999", "Naman: 9999999999",],
    fees: "500",
  },
  {
    title: "Pradnya",
    company_name: "2-5 members",
    icon: logo,
    iconBg: "#383E56",
    date: "Jan 14 - Jan 15",
    points: [
      "Impetus and Concepts (InC) is a flagship technical event.",
      "InC is an intercollegiate international level competition that has been catching the attention of corporate giants.",
      "Impetus is a Project Competition for FE to TE students, all engineering branches confined to specific domains.",
    ],
    contact: ["Naman: 9999999999", "Naman: 9999999999",],
    fees: "500",
  },
  {
    title: "Techfiesta",
    company_name: "2-5 members",
    icon: logo,
    iconBg: "#383E56",
    date: "Jan 14 - Jan 15",
    points: [
      "Impetus and Concepts (InC) is a flagship technical event.",
      "InC is an intercollegiate international level competition that has been catching the attention of corporate giants.",
      "Impetus is a Project Competition for FE to TE students, all engineering branches confined to specific domains.",
    ],
    contact: ["Naman: 9999999999", "Naman: 9999999999",],
    fees: "500",
  },
];


export { about_text, events, timeline, navLinks, sponsors, notifications, eventsData, faculty, web, core, adminNavlinks, ruleBookLinks, judgeNavLinks, results, };
