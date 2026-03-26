// import { useState } from 'react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

// // Sample Data Structure
// const initialDomainData = [
//   { domain: "Web Development", dailyProjects: { "2025-03-20": 12, "2025-03-21": 14, "2025-03-22": 10, "2025-03-23": 15, "2025-03-24": 18, "2025-03-25": 20 }, evaluated: 45, partiallyEvaluated: 28, completelyEvaluated: 32, judges: 8 },
//   { domain: "AI/ML", dailyProjects: { "2025-03-20": 8, "2025-03-21": 10, "2025-03-22": 12, "2025-03-23": 9, "2025-03-24": 11, "2025-03-25": 14 }, evaluated: 38, partiallyEvaluated: 22, completelyEvaluated: 28, judges: 6 },
//   { domain: "Mobile Apps", dailyProjects: { "2025-03-20": 6, "2025-03-21": 7, "2025-03-22": 9, "2025-03-23": 8, "2025-03-24": 10, "2025-03-25": 11 }, evaluated: 28, partiallyEvaluated: 18, completelyEvaluated: 22, judges: 5 },
//   { domain: "Cloud Computing", dailyProjects: { "2025-03-20": 5, "2025-03-21": 6, "2025-03-22": 7, "2025-03-23": 8, "2025-03-24": 9, "2025-03-25": 10 }, evaluated: 25, partiallyEvaluated: 15, completelyEvaluated: 20, judges: 4 },
//   { domain: "Cybersecurity", dailyProjects: { "2025-03-20": 4, "2025-03-21": 5, "2025-03-22": 6, "2025-03-23": 7, "2025-03-24": 8, "2025-03-25": 9 }, evaluated: 22, partiallyEvaluated: 12, completelyEvaluated: 18, judges: 4 }
// ];

// const geographicData = {
//   outsideMaharashtra: 28,
//   fromMaharashtra: 72,
//   international: 15,
//   national: 85,
//   withinPune: 45,
//   outsidePune: 55
// };

// const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec489a'];

// const AnalyticsDashboard = () => {
//   const [domainData] = useState(initialDomainData);
  
//   // Prepare data for daily allocated projects across domains
//   const getAllDates = () => {
//     const datesSet = new Set();
//     domainData.forEach(domain => {
//       Object.keys(domain.dailyProjects).forEach(date => datesSet.add(date));
//     });
//     return Array.from(datesSet).sort();
//   };
  
//   const dates = getAllDates();
  
//   const getDailyProjectData = () => {
//     return dates.map(date => {
//       const dataPoint = { date };
//       domainData.forEach(domain => {
//         dataPoint[domain.domain] = domain.dailyProjects[date] || 0;
//       });
//       return dataPoint;
//     });
//   };
  
//   const dailyProjectData = getDailyProjectData();
  
//   // Prepare evaluation summary data
//   const evaluationData = domainData.map(domain => ({
//     domain: domain.domain,
//     Evaluated: domain.evaluated,
//     PartiallyEvaluated: domain.partiallyEvaluated,
//     CompletelyEvaluated: domain.completelyEvaluated
//   }));
  
//   // Pie data for geographic distribution
//   const locationTypeData = [
//     { name: 'Outside Maharashtra', value: geographicData.outsideMaharashtra },
//     { name: 'From Maharashtra', value: geographicData.fromMaharashtra }
//   ];
  
//   const scopeData = [
//     { name: 'International', value: geographicData.international },
//     { name: 'National', value: geographicData.national }
//   ];
  
//   const puneData = [
//     { name: 'Within Pune', value: geographicData.withinPune },
//     { name: 'Outside Pune', value: geographicData.outsidePune }
//   ];
  
//   // Calculate totals for cards
//   const totalProjectsAllocated = domainData.reduce((sum, domain) => {
//     const dailySum = Object.values(domain.dailyProjects).reduce((a, b) => a + b, 0);
//     return sum + dailySum;
//   }, 0);
  
//   const totalEvaluated = domainData.reduce((sum, domain) => sum + domain.evaluated, 0);
//   const totalPartiallyEvaluated = domainData.reduce((sum, domain) => sum + domain.partiallyEvaluated, 0);
//   const totalCompletelyEvaluated = domainData.reduce((sum, domain) => sum + domain.completelyEvaluated, 0);
//   const totalJudges = domainData.reduce((sum, domain) => sum + domain.judges, 0);
  
//   return (
//     <div className="p-6 bg-gray-50 min-h-screen">
//       {/* Header */}
//       <div className="mb-8">
//         <h1 className="text-3xl font-bold text-gray-800">📊 Project Evaluation Analytics Dashboard</h1>
//         <p className="text-gray-600 mt-2">Domain-wise tracking | Judge metrics | Geographic insights</p>
//       </div>
      
//       {/* KPI Cards Row */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
//         <div className="bg-white rounded-2xl shadow-md p-5 border-l-8 border-blue-500">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-gray-500 text-sm">Total Allocated Projects</p>
//               <p className="text-3xl font-bold text-gray-800">{totalProjectsAllocated}</p>
//             </div>
//             <i className="fas fa-tasks text-4xl text-blue-300"></i>
//           </div>
//         </div>
        
//         <div className="bg-white rounded-2xl shadow-md p-5 border-l-8 border-green-500">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-gray-500 text-sm">Evaluated Projects</p>
//               <p className="text-3xl font-bold text-green-600">{totalEvaluated}</p>
//             </div>
//             <i className="fas fa-check-circle text-4xl text-green-300"></i>
//           </div>
//         </div>
        
//         <div className="bg-white rounded-2xl shadow-md p-5 border-l-8 border-yellow-500">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-gray-500 text-sm">Partially Evaluated</p>
//               <p className="text-3xl font-bold text-yellow-600">{totalPartiallyEvaluated}</p>
//             </div>
//             <i className="fas fa-hourglass-half text-4xl text-yellow-300"></i>
//           </div>
//         </div>
        
//         <div className="bg-white rounded-2xl shadow-md p-5 border-l-8 border-emerald-500">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-gray-500 text-sm">Completely Evaluated</p>
//               <p className="text-3xl font-bold text-emerald-600">{totalCompletelyEvaluated}</p>
//             </div>
//             <i className="fas fa-clipboard-check text-4xl text-emerald-300"></i>
//           </div>
//         </div>
        
//         <div className="bg-white rounded-2xl shadow-md p-5 border-l-8 border-purple-500">
//           <div className="flex items-center justify-between">
//             <div>
//               <p className="text-gray-500 text-sm">Total Judges (All Domains)</p>
//               <p className="text-3xl font-bold text-purple-600">{totalJudges}</p>
//             </div>
//             <i className="fas fa-gavel text-4xl text-purple-300"></i>
//           </div>
//         </div>
//       </div>
      
//       {/* Charts Section: Bar Chart for Daily Allocated Projects */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
//         <div className="bg-white p-5 rounded-2xl shadow-md">
//           <h2 className="text-xl font-semibold text-gray-700 mb-4"><i className="fas fa-chart-line mr-2 text-blue-500"></i> Daily Allocated Projects (Per Domain)</h2>
//           <ResponsiveContainer width="100%" height={350}>
//             <BarChart data={dailyProjectData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis dataKey="date" />
//               <YAxis />
//               <Tooltip />
//               <Legend />
//               {domainData.map((domain, idx) => (
//                 <Bar key={domain.domain} dataKey={domain.domain} fill={COLORS[idx % COLORS.length]} />
//               ))}
//             </BarChart>
//           </ResponsiveContainer>
//           <p className="text-xs text-gray-400 mt-2 text-center">Daily projects allocated across domains (last 6 days)</p>
//         </div>
        
//         {/* Evaluation Status Stacked Bar */}
//         <div className="bg-white p-5 rounded-2xl shadow-md">
//           <h2 className="text-xl font-semibold text-gray-700 mb-4"><i className="fas fa-chart-simple mr-2 text-green-500"></i> Evaluation Summary: Evaluated / Partially / Completely</h2>
//           <ResponsiveContainer width="100%" height={350}>
//             <BarChart data={evaluationData} layout="vertical" margin={{ top: 20, right: 30, left: 100, bottom: 5 }}>
//               <CartesianGrid strokeDasharray="3 3" />
//               <XAxis type="number" />
//               <YAxis type="category" dataKey="domain" />
//               <Tooltip />
//               <Legend />
//               <Bar dataKey="Evaluated" stackId="a" fill="#3b82f6" />
//               <Bar dataKey="PartiallyEvaluated" stackId="a" fill="#f59e0b" />
//               <Bar dataKey="CompletelyEvaluated" stackId="a" fill="#10b981" />
//             </BarChart>
//           </ResponsiveContainer>
//           <p className="text-xs text-gray-400 mt-2 text-center">Horizontal stacked view: total evaluated projects breakdown per domain</p>
//         </div>
//       </div>
      
//       {/* Domain-wise Judges Cards */}
//       <div className="mb-8">
//         <h2 className="text-xl font-semibold text-gray-700 mb-4"><i className="fas fa-users mr-2 text-purple-500"></i> Judges per Domain</h2>
//         <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
//           {domainData.map((domain, idx) => (
//             <div key={domain.domain} className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow p-4 text-center border-t-4" style={{ borderTopColor: COLORS[idx % COLORS.length] }}>
//               <i className="fas fa-user-tie text-3xl mb-2" style={{ color: COLORS[idx % COLORS.length] }}></i>
//               <h3 className="font-bold text-gray-700">{domain.domain}</h3>
//               <p className="text-2xl font-bold">{domain.judges}</p>
//               <p className="text-xs text-gray-500">Active Judges</p>
//             </div>
//           ))}
//         </div>
//       </div>
      
//       {/* Geographic Analytics: Cards + Pie Charts */}
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
//         {/* Maharashtra vs Outside Maharashtra Card + Pie */}
//         <div className="bg-white rounded-2xl shadow-md p-5">
//           <h3 className="text-lg font-semibold text-gray-700 mb-3"><i className="fas fa-map-marker-alt text-red-500 mr-2"></i> Maharashtra Origin</h3>
//           <div className="flex justify-between items-center mb-4">
//             <div className="text-center flex-1">
//               <p className="text-sm text-gray-500">Outside Maharashtra</p>
//               <p className="text-2xl font-bold text-blue-600">{geographicData.outsideMaharashtra}</p>
//             </div>
//             <div className="text-center flex-1">
//               <p className="text-sm text-gray-500">From Maharashtra</p>
//               <p className="text-2xl font-bold text-green-600">{geographicData.fromMaharashtra}</p>
//             </div>
//           </div>
//           <div className="h-48 w-full">
//             <ResponsiveContainer width="100%" height="100%">
//               <PieChart>
//                 <Pie data={locationTypeData} cx="50%" cy="50%" innerRadius={40} outerRadius={70} paddingAngle={2} dataKey="value" label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}>
//                   {locationTypeData.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={index === 0 ? '#3b82f6' : '#10b981'} />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//               </PieChart>
//             </ResponsiveContainer>
//           </div>
//           <p className="text-center text-xs text-gray-400 mt-2">Intern/participant distribution by Maharashtra state</p>
//         </div>
        
//         {/* International vs National Card */}
//         <div className="bg-white rounded-2xl shadow-md p-5">
//           <h3 className="text-lg font-semibold text-gray-700 mb-3"><i className="fas fa-globe text-indigo-500 mr-2"></i> International vs National</h3>
//           <div className="flex justify-between items-center mb-4">
//             <div className="text-center flex-1">
//               <p className="text-sm text-gray-500">International</p>
//               <p className="text-2xl font-bold text-indigo-600">{geographicData.international}</p>
//             </div>
//             <div className="text-center flex-1">
//               <p className="text-sm text-gray-500">National</p>
//               <p className="text-2xl font-bold text-cyan-600">{geographicData.national}</p>
//             </div>
//           </div>
//           <div className="h-48 w-full">
//             <ResponsiveContainer width="100%" height="100%">
//               <PieChart>
//                 <Pie data={scopeData} cx="50%" cy="50%" innerRadius={40} outerRadius={70} dataKey="value" label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}>
//                   {scopeData.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={index === 0 ? '#8b5cf6' : '#06b6d4'} />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//               </PieChart>
//             </ResponsiveContainer>
//           </div>
//           <p className="text-center text-xs text-gray-400 mt-2">Scope: International participants vs National participants</p>
//         </div>
        
//         {/* Within Pune vs Outside Pune Card */}
//         <div className="bg-white rounded-2xl shadow-md p-5">
//           <h3 className="text-lg font-semibold text-gray-700 mb-3"><i className="fas fa-city text-orange-500 mr-2"></i> Pune Region Distribution</h3>
//           <div className="flex justify-between items-center mb-4">
//             <div className="text-center flex-1">
//               <p className="text-sm text-gray-500">Within Pune</p>
//               <p className="text-2xl font-bold text-orange-600">{geographicData.withinPune}</p>
//             </div>
//             <div className="text-center flex-1">
//               <p className="text-sm text-gray-500">Outside Pune</p>
//               <p className="text-2xl font-bold text-amber-600">{geographicData.outsidePune}</p>
//             </div>
//           </div>
//           <div className="h-48 w-full">
//             <ResponsiveContainer width="100%" height="100%">
//               <PieChart>
//                 <Pie data={puneData} cx="50%" cy="50%" innerRadius={40} outerRadius={70} dataKey="value" label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}>
//                   {puneData.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={index === 0 ? '#f97316' : '#fbbf24'} />
//                   ))}
//                 </Pie>
//                 <Tooltip />
//               </PieChart>
//             </ResponsiveContainer>
//           </div>
//           <p className="text-center text-xs text-gray-400 mt-2">Based on intern / participant location (Pune district)</p>
//         </div>
//       </div>
      
//       {/* Additional Summary Cards for quick stats */}
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//         <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 shadow-sm flex items-center">
//           <i className="fas fa-chalkboard-user text-3xl text-blue-600 mr-4"></i>
//           <div>
//             <p className="text-sm text-gray-500">Total Domain Categories</p>
//             <p className="text-2xl font-bold">{domainData.length}</p>
//           </div>
//         </div>
//         <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 shadow-sm flex items-center">
//           <i className="fas fa-chart-pie text-3xl text-green-600 mr-4"></i>
//           <div>
//             <p className="text-sm text-gray-500">Avg. Completion Rate</p>
//             <p className="text-2xl font-bold">{Math.round((totalCompletelyEvaluated / (totalEvaluated || 1)) * 100)}%</p>
//           </div>
//         </div>
//         <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 shadow-sm flex items-center">
//           <i className="fas fa-people-arrows text-3xl text-purple-600 mr-4"></i>
//           <div>
//             <p className="text-sm text-gray-500">Judges to Projects Ratio</p>
//             <p className="text-2xl font-bold">{(totalProjectsAllocated / totalJudges).toFixed(1)}</p>
//           </div>
//         </div>
//       </div>
      
//       {/* Detailed Domain Table (extra info) */}
//       <div className="mt-8 bg-white rounded-2xl shadow-md overflow-hidden">
//         <div className="px-6 py-4 bg-gray-100 border-b">
//           <h2 className="text-lg font-semibold text-gray-700"><i className="fas fa-table mr-2"></i> Domain-wise Detailed Metrics</h2>
//         </div>
//         <div className="overflow-x-auto">
//           <table className="min-w-full divide-y divide-gray-200">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Domain</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Allocated (Last 6d)</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Evaluated</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Partially Eval.</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Completely Eval.</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Judges Count</th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {domainData.map((domain) => {
//                 const totalAllocatedDomain = Object.values(domain.dailyProjects).reduce((a, b) => a + b, 0);
//                 return (
//                   <tr key={domain.domain} className="hover:bg-gray-50">
//                     <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{domain.domain}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-gray-600">{totalAllocatedDomain}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-blue-600 font-medium">{domain.evaluated}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-yellow-600">{domain.partiallyEvaluated}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-green-600">{domain.completelyEvaluated}</td>
//                     <td className="px-6 py-4 whitespace-nowrap text-purple-600 font-bold">{domain.judges}</td>
//                   </tr>
//                 );
//               })}
//             </tbody>
//           </table>
//         </div>
//       </div>
      
//       <footer className="mt-8 text-center text-xs text-gray-400 border-t pt-4">
//         <p>Analytics Dashboard — Real-time domain insights | Project evaluation status | Geographic segmentation (Maharashtra, Pune, National/International)</p>
//       </footer>
//     </div>
//   );
// };

// export default AnalyticsDashboard;

import { useState } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

// Sample Data Structure
const initialDomainData = [
  { domain: "Web Development", dailyProjects: { "2025-03-20": 12, "2025-03-21": 14, "2025-03-22": 10, "2025-03-23": 15, "2025-03-24": 18, "2025-03-25": 20 }, evaluated: 45, partiallyEvaluated: 28, completelyEvaluated: 32, judges: 8 },
  { domain: "AI/ML", dailyProjects: { "2025-03-20": 8, "2025-03-21": 10, "2025-03-22": 12, "2025-03-23": 9, "2025-03-24": 11, "2025-03-25": 14 }, evaluated: 38, partiallyEvaluated: 22, completelyEvaluated: 28, judges: 6 },
  { domain: "Mobile Apps", dailyProjects: { "2025-03-20": 6, "2025-03-21": 7, "2025-03-22": 9, "2025-03-23": 8, "2025-03-24": 10, "2025-03-25": 11 }, evaluated: 28, partiallyEvaluated: 18, completelyEvaluated: 22, judges: 5 },
  { domain: "Cloud Computing", dailyProjects: { "2025-03-20": 5, "2025-03-21": 6, "2025-03-22": 7, "2025-03-23": 8, "2025-03-24": 9, "2025-03-25": 10 }, evaluated: 25, partiallyEvaluated: 15, completelyEvaluated: 20, judges: 4 },
  { domain: "Cybersecurity", dailyProjects: { "2025-03-20": 4, "2025-03-21": 5, "2025-03-22": 6, "2025-03-23": 7, "2025-03-24": 8, "2025-03-25": 9 }, evaluated: 22, partiallyEvaluated: 12, completelyEvaluated: 18, judges: 4 }
];

const geographicData = {
  outsideMaharashtra: 28,
  fromMaharashtra: 72,
  international: 15,
  national: 85,
  withinPune: 45,
  outsidePune: 55
};

const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec489a'];

// Reusable Dashboard Content Component
const DashboardContent = ({ domainData, geographicData, colors }) => {
  // Prepare data for daily allocated projects across domains
  const getAllDates = () => {
    const datesSet = new Set();
    domainData.forEach(domain => {
      Object.keys(domain.dailyProjects).forEach(date => datesSet.add(date));
    });
    return Array.from(datesSet).sort();
  };
  
  const dates = getAllDates();
  
  const getDailyProjectData = () => {
    return dates.map(date => {
      const dataPoint = { date };
      domainData.forEach(domain => {
        dataPoint[domain.domain] = domain.dailyProjects[date] || 0;
      });
      return dataPoint;
    });
  };
  
  const dailyProjectData = getDailyProjectData();
  
  // Prepare evaluation summary data
  const evaluationData = domainData.map(domain => ({
    domain: domain.domain,
    Evaluated: domain.evaluated,
    PartiallyEvaluated: domain.partiallyEvaluated,
    CompletelyEvaluated: domain.completelyEvaluated
  }));
  
  // Pie data for geographic distribution
  const locationTypeData = [
    { name: 'Outside Maharashtra', value: geographicData.outsideMaharashtra },
    { name: 'From Maharashtra', value: geographicData.fromMaharashtra }
  ];
  
  const scopeData = [
    { name: 'International', value: geographicData.international },
    { name: 'National', value: geographicData.national }
  ];
  
  const puneData = [
    { name: 'Within Pune', value: geographicData.withinPune },
    { name: 'Outside Pune', value: geographicData.outsidePune }
  ];
  
  // Calculate totals for cards
  const totalProjectsAllocated = domainData.reduce((sum, domain) => {
    const dailySum = Object.values(domain.dailyProjects).reduce((a, b) => a + b, 0);
    return sum + dailySum;
  }, 0);
  
  const totalEvaluated = domainData.reduce((sum, domain) => sum + domain.evaluated, 0);
  const totalPartiallyEvaluated = domainData.reduce((sum, domain) => sum + domain.partiallyEvaluated, 0);
  const totalCompletelyEvaluated = domainData.reduce((sum, domain) => sum + domain.completelyEvaluated, 0);
  const totalJudges = domainData.reduce((sum, domain) => sum + domain.judges, 0);
  
  return (
    <div>
      {/* KPI Cards Row */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
        <div className="bg-white rounded-2xl shadow-md p-5 border-l-8 border-blue-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Allocated Projects</p>
              <p className="text-3xl font-bold text-gray-800">{totalProjectsAllocated}</p>
            </div>
            <i className="fas fa-tasks text-4xl text-blue-300"></i>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-md p-5 border-l-8 border-green-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Evaluated Projects</p>
              <p className="text-3xl font-bold text-green-600">{totalEvaluated}</p>
            </div>
            <i className="fas fa-check-circle text-4xl text-green-300"></i>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-md p-5 border-l-8 border-yellow-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Partially Evaluated</p>
              <p className="text-3xl font-bold text-yellow-600">{totalPartiallyEvaluated}</p>
            </div>
            <i className="fas fa-hourglass-half text-4xl text-yellow-300"></i>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-md p-5 border-l-8 border-emerald-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Completely Evaluated</p>
              <p className="text-3xl font-bold text-emerald-600">{totalCompletelyEvaluated}</p>
            </div>
            <i className="fas fa-clipboard-check text-4xl text-emerald-300"></i>
          </div>
        </div>
        
        <div className="bg-white rounded-2xl shadow-md p-5 border-l-8 border-purple-500">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-gray-500 text-sm">Total Judges (All Domains)</p>
              <p className="text-3xl font-bold text-purple-600">{totalJudges}</p>
            </div>
            <i className="fas fa-gavel text-4xl text-purple-300"></i>
          </div>
        </div>
      </div>
      
      {/* Charts Section: Bar Chart for Daily Allocated Projects */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
        <div className="bg-white p-5 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4"><i className="fas fa-chart-line mr-2 text-blue-500"></i> Daily Allocated Projects (Per Domain)</h2>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={dailyProjectData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Legend />
              {domainData.map((domain, idx) => (
                <Bar key={domain.domain} dataKey={domain.domain} fill={colors[idx % colors.length]} />
              ))}
            </BarChart>
          </ResponsiveContainer>
          <p className="text-xs text-gray-400 mt-2 text-center">Daily projects allocated across domains (last 6 days)</p>
        </div>
        
        {/* Evaluation Status Stacked Bar */}
        <div className="bg-white p-5 rounded-2xl shadow-md">
          <h2 className="text-xl font-semibold text-gray-700 mb-4"><i className="fas fa-chart-simple mr-2 text-green-500"></i> Evaluation Summary: Evaluated / Partially / Completely</h2>
          <ResponsiveContainer width="100%" height={350}>
            <BarChart data={evaluationData} layout="vertical" margin={{ top: 20, right: 30, left: 100, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis type="number" />
              <YAxis type="category" dataKey="domain" />
              <Tooltip />
              <Legend />
              <Bar dataKey="Evaluated" stackId="a" fill="#3b82f6" />
              <Bar dataKey="PartiallyEvaluated" stackId="a" fill="#f59e0b" />
              <Bar dataKey="CompletelyEvaluated" stackId="a" fill="#10b981" />
            </BarChart>
          </ResponsiveContainer>
          <p className="text-xs text-gray-400 mt-2 text-center">Horizontal stacked view: total evaluated projects breakdown per domain</p>
        </div>
      </div>
      
      {/* Domain-wise Judges Cards */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-gray-700 mb-4"><i className="fas fa-users mr-2 text-purple-500"></i> Judges per Domain</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {domainData.map((domain, idx) => (
            <div key={domain.domain} className="bg-gradient-to-br from-white to-gray-50 rounded-xl shadow p-4 text-center border-t-4" style={{ borderTopColor: colors[idx % colors.length] }}>
              <i className="fas fa-user-tie text-3xl mb-2" style={{ color: colors[idx % colors.length] }}></i>
              <h3 className="font-bold text-gray-700">{domain.domain}</h3>
              <p className="text-2xl font-bold">{domain.judges}</p>
              <p className="text-xs text-gray-500">Active Judges</p>
            </div>
          ))}
        </div>
      </div>
      
      {/* Geographic Analytics: Cards + Pie Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        {/* Maharashtra vs Outside Maharashtra Card + Pie */}
        <div className="bg-white rounded-2xl shadow-md p-5">
          <h3 className="text-lg font-semibold text-gray-700 mb-3"><i className="fas fa-map-marker-alt text-red-500 mr-2"></i> Maharashtra Origin</h3>
          <div className="flex justify-between items-center mb-4">
            <div className="text-center flex-1">
              <p className="text-sm text-gray-500">Outside Maharashtra</p>
              <p className="text-2xl font-bold text-blue-600">{geographicData.outsideMaharashtra}</p>
            </div>
            <div className="text-center flex-1">
              <p className="text-sm text-gray-500">From Maharashtra</p>
              <p className="text-2xl font-bold text-green-600">{geographicData.fromMaharashtra}</p>
            </div>
          </div>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={locationTypeData} cx="50%" cy="50%" innerRadius={40} outerRadius={70} paddingAngle={2} dataKey="value" label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}>
                  {locationTypeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#3b82f6' : '#10b981'} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <p className="text-center text-xs text-gray-400 mt-2">Intern/participant distribution by Maharashtra state</p>
        </div>
        
        {/* International vs National Card */}
        <div className="bg-white rounded-2xl shadow-md p-5">
          <h3 className="text-lg font-semibold text-gray-700 mb-3"><i className="fas fa-globe text-indigo-500 mr-2"></i> International vs National</h3>
          <div className="flex justify-between items-center mb-4">
            <div className="text-center flex-1">
              <p className="text-sm text-gray-500">International</p>
              <p className="text-2xl font-bold text-indigo-600">{geographicData.international}</p>
            </div>
            <div className="text-center flex-1">
              <p className="text-sm text-gray-500">National</p>
              <p className="text-2xl font-bold text-cyan-600">{geographicData.national}</p>
            </div>
          </div>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={scopeData} cx="50%" cy="50%" innerRadius={40} outerRadius={70} dataKey="value" label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}>
                  {scopeData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#8b5cf6' : '#06b6d4'} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <p className="text-center text-xs text-gray-400 mt-2">Scope: International participants vs National participants</p>
        </div>
        
        {/* Within Pune vs Outside Pune Card */}
        <div className="bg-white rounded-2xl shadow-md p-5">
          <h3 className="text-lg font-semibold text-gray-700 mb-3"><i className="fas fa-city text-orange-500 mr-2"></i> Pune Region Distribution</h3>
          <div className="flex justify-between items-center mb-4">
            <div className="text-center flex-1">
              <p className="text-sm text-gray-500">Within Pune</p>
              <p className="text-2xl font-bold text-orange-600">{geographicData.withinPune}</p>
            </div>
            <div className="text-center flex-1">
              <p className="text-sm text-gray-500">Outside Pune</p>
              <p className="text-2xl font-bold text-amber-600">{geographicData.outsidePune}</p>
            </div>
          </div>
          <div className="h-48 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={puneData} cx="50%" cy="50%" innerRadius={40} outerRadius={70} dataKey="value" label={({ name, percent }) => `${name}: ${(percent * 100).toFixed(0)}%`}>
                  {puneData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={index === 0 ? '#f97316' : '#fbbf24'} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <p className="text-center text-xs text-gray-400 mt-2">Based on intern / participant location (Pune district)</p>
        </div>
      </div>
      
      {/* Additional Summary Cards for quick stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4 shadow-sm flex items-center">
          <i className="fas fa-chalkboard-user text-3xl text-blue-600 mr-4"></i>
          <div>
            <p className="text-sm text-gray-500">Total Domain Categories</p>
            <p className="text-2xl font-bold">{domainData.length}</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-4 shadow-sm flex items-center">
          <i className="fas fa-chart-pie text-3xl text-green-600 mr-4"></i>
          <div>
            <p className="text-sm text-gray-500">Avg. Completion Rate</p>
            <p className="text-2xl font-bold">{Math.round((totalCompletelyEvaluated / (totalEvaluated || 1)) * 100)}%</p>
          </div>
        </div>
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl p-4 shadow-sm flex items-center">
          <i className="fas fa-people-arrows text-3xl text-purple-600 mr-4"></i>
          <div>
            <p className="text-sm text-gray-500">Judges to Projects Ratio</p>
            <p className="text-2xl font-bold">{(totalProjectsAllocated / totalJudges).toFixed(1)}</p>
          </div>
        </div>
      </div>
      
      {/* Detailed Domain Table (extra info) */}
      <div className="mt-8 bg-white rounded-2xl shadow-md overflow-hidden">
        <div className="px-6 py-4 bg-gray-100 border-b">
          <h2 className="text-lg font-semibold text-gray-700"><i className="fas fa-table mr-2"></i> Domain-wise Detailed Metrics</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Domain</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Allocated (Last 6d)</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Evaluated</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Partially Eval.</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Completely Eval.</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Judges Count</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {domainData.map((domain) => {
                const totalAllocatedDomain = Object.values(domain.dailyProjects).reduce((a, b) => a + b, 0);
                return (
                  <tr key={domain.domain} className="hover:bg-gray-50">
                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">{domain.domain}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-gray-600">{totalAllocatedDomain}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-blue-600 font-medium">{domain.evaluated}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-yellow-600">{domain.partiallyEvaluated}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-green-600">{domain.completelyEvaluated}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-purple-600 font-bold">{domain.judges}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Main Dashboard Component with Tabs
const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('impeteus');
  
  // You can use different data for each tab if needed
  // For now, both tabs show the same data
  const impeteusData = {
    domainData: initialDomainData,
    geographicData: geographicData
  };
  
  const conceptsData = {
    domainData: initialDomainData,
    geographicData: geographicData
  };
  
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">📊 Project Evaluation Analytics Dashboard</h1>
        <p className="text-gray-600 mt-2">Domain-wise tracking | Judge metrics | Geographic insights</p>
      </div>
      
      {/* Tab Navigation */}
      <div className="mb-8 border-b border-gray-200">
        <div className="flex space-x-8">
          <button
            onClick={() => setActiveTab('impeteus')}
            className={`py-4 px-1 text-lg font-medium transition-all duration-200 relative ${
              activeTab === 'impeteus'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <i className="fas fa-rocket mr-2"></i>
            Impeteus
          </button>
          <button
            onClick={() => setActiveTab('concepts')}
            className={`py-4 px-1 text-lg font-medium transition-all duration-200 relative ${
              activeTab === 'concepts'
                ? 'text-blue-600 border-b-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <i className="fas fa-lightbulb mr-2"></i>
            Concepts
          </button>
        </div>
      </div>
      
      {/* Tab Content */}
      <div className="tab-content">
        {activeTab === 'impeteus' && (
          <div>
            <div className="mb-4 p-3 bg-blue-50 rounded-lg border border-blue-200">
              <p className="text-blue-700"><i className="fas fa-info-circle mr-2"></i>Impeteus Track - Project evaluation and judge analytics</p>
            </div>
            <DashboardContent 
              domainData={impeteusData.domainData} 
              geographicData={impeteusData.geographicData}
              colors={COLORS}
            />
          </div>
        )}
        
        {activeTab === 'concepts' && (
          <div>
            <div className="mb-4 p-3 bg-purple-50 rounded-lg border border-purple-200">
              <p className="text-purple-700"><i className="fas fa-info-circle mr-2"></i>Concepts Track - Project evaluation and judge analytics</p>
            </div>
            <DashboardContent 
              domainData={conceptsData.domainData} 
              geographicData={conceptsData.geographicData}
              colors={COLORS}
            />
          </div>
        )}
      </div>
      
      <footer className="mt-8 text-center text-xs text-gray-400 border-t pt-4">
        <p>Analytics Dashboard — Real-time domain insights | Project evaluation status | Geographic segmentation (Maharashtra, Pune, National/International)</p>
      </footer>
    </div>
  );
};

export default Dashboard;