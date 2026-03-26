// // import { useEffect, useState, useMemo } from 'react';
// // import { DataGrid, GridToolbar } from '@mui/x-data-grid';
// // import { Chip, Box, Typography, Card, CardContent } from '@mui/material';
// // import { API_BASE } from '../../app/config/api';

// // const AdminViewAllocations = () => {
// //   const [activeTab, setActiveTab] = useState('impetus');
// //   const [filterStatus, setFilterStatus] = useState('all');
// //   const [rows, setRows] = useState([]);
// //   const [loading, setLoading] = useState(true);
// //   const [error, setError] = useState(null);

// //   // Fetch data from backend
// //   useEffect(() => {
// //     const fetchAllocations = async () => {
// //       setLoading(true);
// //       setError(null);

// //       try {
// //       const response = await fetch(`${API_BASE}/view/admin/allocations?event=${activeTab}`, {
// //   method: 'GET',                  // explicitly a GET request
// //   headers: {
// //     'Content-Type': 'application/json' 
// //   },
// //   credentials: 'include'     
// // });
// //         if (!response.ok) {
// //           throw new Error('Failed to fetch data');
// //         }

// //         const data = await response.json();

// //         if (data.success) {
// //           // Transform backend data into DataGrid rows
// //           const newRows = data.judges.map((judge, index) => {
// //             const allocatedPids = judge.allocated_projects 
// //               ? judge.allocated_projects.split(',').filter(Boolean) 
// //               : [];

// //             let evaluatedCount = 0;

// //             const projectData = Array.from({ length: 7 }, (_, i) => {
// //               const pid = allocatedPids[i] || '-';

// //               if (pid === '-') {
// //                 return { pid: '-', chip: null };
// //               }

// //               // Find project from judge.projects array
// //               const project = judge.projects?.find(p => p.pid === pid);
// //               const isEvaluated = project ? project.evaluated : false;

// //               if (isEvaluated) evaluatedCount++;

// //               return {
// //                 pid,
// //                 chip: (
// //                   <Chip
// //                     label={isEvaluated ? "Evaluated" : "Pending"}
// //                     color={isEvaluated ? "success" : "warning"}
// //                     size="small"
// //                     sx={{ fontWeight: 500, minWidth: 110 }}
// //                   />
// //                 )
// //               };
// //             });

// //             const totalAllocated = allocatedPids.length;
// //             const remaining = totalAllocated - evaluatedCount;

// //             const rowData = {
// //               id: index,
// //               jid: judge.jid,
// //               name: judge.name,
// //               status: judge.is_online ? 'Online' : 'Offline',
// //               mode: judge.mode,
// //               totalAllocated,
// //               totalEvaluated: evaluatedCount,
// //               remaining,
// //               evaluationStatus: judge.evaluationStatus || 'incomplete',
// //             };

// //             // Add project columns dynamically
// //             projectData.forEach((p, i) => {
// //               rowData[`proj${i + 1}`] = p.pid;
// //               rowData[`proj${i + 1}Chip`] = p.chip;
// //             });

// //             return rowData;
// //           });

// //           setRows(newRows);
// //         }
// //       } catch (err) {
// //         console.error('Error fetching allocations:', err);
// //         setError('Failed to load judge allocations. Please try again later.');
// //       } finally {
// //         setLoading(false);
// //       }
// //     };

// //     fetchAllocations();
// //   }, [activeTab]);

// //   // Filtered rows based on status
// //   const filteredRows = useMemo(() => {
// //     if (filterStatus === 'all') return rows;
// //     return rows.filter(row => row.evaluationStatus === filterStatus);
// //   }, [rows, filterStatus]);

// //   // Summary Counts
// //   const summary = useMemo(() => {
// //     const completed = rows.filter(r => r.evaluationStatus === 'completed').length;
// //     const partial = rows.filter(r => r.evaluationStatus === 'partial').length;
// //     const incomplete = rows.filter(r => r.evaluationStatus === 'incomplete').length;

// //     return { 
// //       total: rows.length, 
// //       completed, 
// //       partial, 
// //       incomplete 
// //     };
// //   }, [rows]);

// //   const columns = [
// //     { field: 'jid', headerName: 'JID', width: 100, minWidth: 100 },
// //     { field: 'name', headerName: 'Judge Name', width: 230, minWidth: 230 },
// //     {
// //       field: 'status',
// //       headerName: 'Status',
// //       width: 130,
// //       minWidth: 130,
// //       renderCell: (params) => (
// //         <Box className={`inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-sm font-medium
// //           ${params.value === 'Online' 
// //             ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30' 
// //             : 'bg-zinc-700 text-zinc-400 border border-zinc-600'}`}>
// //           ● {params.value}
// //         </Box>
// //       ),
// //     },
// //     { field: 'mode', headerName: 'Mode', width: 110, minWidth: 110 },

// //     {
// //       field: 'totalEvaluated',
// //       headerName: 'Evaluated',
// //       width: 130,
// //       minWidth: 130,
// //       renderCell: (params) => (
// //         <Typography fontWeight={600} color="#22c55e">
// //           {params.value} / {params.row.totalAllocated}
// //         </Typography>
// //       ),
// //     },
// //     {
// //       field: 'remaining',
// //       headerName: 'Remaining',
// //       width: 110,
// //       minWidth: 110,
// //       renderCell: (params) => (
// //         <Typography fontWeight={600} color={params.value > 0 ? "#eab308" : "#22c55e"}>
// //           {params.value}
// //         </Typography>
// //       ),
// //     },

// //     // 7 Project Columns
// //     ...Array.from({ length: 7 }, (_, i) => ({
// //       field: `proj${i + 1}`,
// //       headerName: `Project ${i + 1}`,
// //       width: 200,
// //       minWidth: 200,
// //       flex: 0,
// //       renderCell: (params) => {
// //         const pid = params.value;
// //         if (pid === '-') {
// //           return <span className="text-zinc-500 text-lg">-</span>;
// //         }

// //         const chip = params.row[`proj${i + 1}Chip`];

// //         return (
// //           <Box sx={{ 
// //             display: 'flex', 
// //             flexDirection: 'column', 
// //             alignItems: 'flex-start',
// //             py: 1.5,
// //             height: '100%',
// //             justifyContent: 'center'
// //           }}>
// //             <span className="font-semibold text-white text-base mb-2 block">
// //               {pid}
// //             </span>
// //             {chip}
// //           </Box>
// //         );
// //       },
// //     })),
// //   ];

// //   if (loading) {
// //     return (
// //       <section className="min-h-screen bg-zinc-950 text-white p-6 flex items-center justify-center">
// //         <Typography variant="h5">Loading Judge Allocations...</Typography>
// //       </section>
// //     );
// //   }

// //   if (error) {
// //     return (
// //       <section className="min-h-screen bg-zinc-950 text-white p-6 flex items-center justify-center">
// //         <Typography variant="h6" color="error">{error}</Typography>
// //       </section>
// //     );
// //   }

// //   return (
// //     <section className="min-h-screen bg-zinc-950 text-white pt-20 pb-10 px-6">
// //       <div className="max-w-[95rem] mx-auto">
// //         <h1 className="font-bold text-4xl text-center mb-10 text-white tracking-tight">
// //           Judge Allocations
// //         </h1>

// //         {/* Tabs */}
// //         <div className="flex justify-center mb-10">
// //           <div className="flex bg-zinc-900 rounded-xl p-1 border border-zinc-800">
// //             <button
// //               onClick={() => { setActiveTab('impetus'); setFilterStatus('all'); }}
// //               className={`px-10 py-3 rounded-lg font-medium transition-all ${
// //                 activeTab === 'impetus'
// //                   ? 'bg-zinc-800 text-white shadow-lg'
// //                   : 'text-zinc-400 hover:text-zinc-200'
// //               }`}
// //             >
// //               Impetus
// //             </button>
// //             <button
// //               onClick={() => { setActiveTab('concepts'); setFilterStatus('all'); }}
// //               className={`px-10 py-3 rounded-lg font-medium transition-all ${
// //                 activeTab === 'concepts'
// //                   ? 'bg-zinc-800 text-white shadow-lg'
// //                   : 'text-zinc-400 hover:text-zinc-200'
// //               }`}
// //             >
// //               Concepts
// //             </button>
// //           </div>
// //         </div>

// //         {/* Summary Cards */}
// //         <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
// //           <Card sx={{ bgcolor: '#18181b', border: '1px solid #3f3f46', borderRadius: 2 }}>
// //             <CardContent className="text-center">
// //               <Typography color="#94a3b8" variant="body2" gutterBottom>Total Judges</Typography>
// //               <Typography variant="h3" fontWeight={700} color="white">
// //                 {summary.total}
// //               </Typography>
// //             </CardContent>
// //           </Card>

// //           <Card sx={{ bgcolor: '#18181b', border: '1px solid #3f3f46', borderRadius: 2 }}>
// //             <CardContent className="text-center">
// //               <Typography color="#22c55e" variant="body2" gutterBottom>Completed</Typography>
// //               <Typography variant="h3" fontWeight={700} color="#22c55e">
// //                 {summary.completed}
// //               </Typography>
// //             </CardContent>
// //           </Card>

// //           <Card sx={{ bgcolor: '#18181b', border: '1px solid #3f3f46', borderRadius: 2 }}>
// //             <CardContent className="text-center">
// //               <Typography color="#eab308" variant="body2" gutterBottom>Partially Done</Typography>
// //               <Typography variant="h3" fontWeight={700} color="#eab308">
// //                 {summary.partial}
// //               </Typography>
// //             </CardContent>
// //           </Card>

// //           <Card sx={{ bgcolor: '#18181b', border: '1px solid #3f3f46', borderRadius: 2 }}>
// //             <CardContent className="text-center">
// //               <Typography color="#ef4444" variant="body2" gutterBottom>Incomplete</Typography>
// //               <Typography variant="h3" fontWeight={700} color="#ef4444">
// //                 {summary.incomplete}
// //               </Typography>
// //             </CardContent>
// //           </Card>
// //         </div>

// //         {/* Filter Buttons */}
// //         <div className="flex flex-wrap gap-3 mb-6">
// //           <button
// //             onClick={() => setFilterStatus('all')}
// //             className={`px-6 py-2.5 rounded-xl font-medium transition-all ${
// //               filterStatus === 'all' ? 'bg-white text-black shadow-lg' : 'bg-zinc-800 hover:bg-zinc-700 text-white'
// //             }`}
// //           >
// //             All Judges
// //           </button>

// //           <button
// //             onClick={() => setFilterStatus('completed')}
// //             className={`px-6 py-2.5 rounded-xl font-medium transition-all flex items-center gap-2 ${
// //               filterStatus === 'completed' ? 'bg-emerald-600 text-white' : 'bg-zinc-800 hover:bg-zinc-700 text-white'
// //             }`}
// //           >
// //             Completed
// //           </button>

// //           <button
// //             onClick={() => setFilterStatus('partial')}
// //             className={`px-6 py-2.5 rounded-xl font-medium transition-all flex items-center gap-2 ${
// //               filterStatus === 'partial' ? 'bg-amber-600 text-white' : 'bg-zinc-800 hover:bg-zinc-700 text-white'
// //             }`}
// //           >
// //             Partially Done
// //           </button>

// //           <button
// //             onClick={() => setFilterStatus('incomplete')}
// //             className={`px-6 py-2.5 rounded-xl font-medium transition-all flex items-center gap-2 ${
// //               filterStatus === 'incomplete' ? 'bg-red-600 text-white' : 'bg-zinc-800 hover:bg-zinc-700 text-white'
// //             }`}
// //           >
// //             Incomplete
// //           </button>
// //         </div>

// //         {/* DataGrid */}
// //         <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
// //           <div className="overflow-x-auto">
// //             <DataGrid
// //               rows={filteredRows}
// //               columns={columns}
// //               slots={{ toolbar: GridToolbar }}
// //               initialState={{
// //                 pagination: { paginationModel: { pageSize: 10 } },
// //               }}
// //               pageSizeOptions={[5, 10, 15, 25, 50]}
// //               disableRowSelectionOnClick
// //               getRowHeight={() => 100}
// //               sx={{
// //                 border: 'none',
// //                 minWidth: 'fit-content',

// //                 '& .MuiDataGrid-cell': {
// //                   color: '#e2e8f0',
// //                   fontSize: '0.95rem',
// //                   borderRight: '1px solid #3f3f46',
// //                   padding: '8px 12px',
// //                 },
// //                 '& .MuiDataGrid-columnHeader': {
// //                   backgroundColor: '#18181b',
// //                   color: '#a1a1aa',
// //                   fontWeight: 600,
// //                   fontSize: '0.95rem',
// //                   borderBottom: '2px solid #52525b',
// //                   borderRight: '1px solid #3f3f46',
// //                 },
// //                 '& .MuiDataGrid-row': {
// //                   borderBottom: '1px solid #27272a',
// //                 },
// //                 '& .MuiDataGrid-row:hover': {
// //                   backgroundColor: '#27272a',
// //                 },
// //                 '& .MuiDataGrid-toolbarContainer': {
// //                   backgroundColor: '#18181b',
// //                   color: '#e2e8f0',
// //                 },

// //                 /* Pagination White Text Fix */
// //                 '& .MuiDataGrid-footerContainer': {
// //                   backgroundColor: '#18181b',
// //                   color: '#e2e8f0',
// //                 },
// //                 '& .MuiTablePagination-root': {
// //                   color: '#e2e8f0',
// //                 },
// //                 '& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows, & .MuiTablePagination-select': {
// //                   color: '#e2e8f0',
// //                 },
// //                 '& .MuiTablePagination-actions button': {
// //                   color: '#e2e8f0',
// //                 },
// //                 '& .MuiTablePagination-actions button:hover': {
// //                   backgroundColor: '#27272a',
// //                   color: '#fff',
// //                 },
// //                 '& .MuiSelect-icon': {
// //                   color: '#e2e8f0',
// //                 },
// //               }}
// //             />
// //           </div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // };

// // export default AdminViewAllocations;


// import { useEffect, useState, useMemo } from 'react';
// import { DataGrid, GridToolbar } from '@mui/x-data-grid';
// import { Chip, Box, Typography, Card, CardContent, TextField, InputAdornment, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
// import { API_BASE } from '../../app/config/api';

// const AdminViewAllocations = () => {
//   const [activeTab, setActiveTab] = useState('impetus');
//   const [filterStatus, setFilterStatus] = useState('all');
//   const [filterOnlineStatus, setFilterOnlineStatus] = useState('all');
//   const [searchEmail, setSearchEmail] = useState('');
//   const [rows, setRows] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [paginationModel, setPaginationModel] = useState({ pageSize: 10, page: 0 });

//   // Fetch data from backend
//   useEffect(() => {
//     const fetchAllocations = async () => {
//       setLoading(true);
//       setError(null);

//       try {
//         const response = await fetch(`${API_BASE}/view/admin/allocations?event=${activeTab}`, {
//           method: 'GET',
//           headers: {
//             'Content-Type': 'application/json'
//           },
//           credentials: 'include'
//         });

//         if (!response.ok) {
//           throw new Error('Failed to fetch data');
//         }

//         const data = await response.json();

//         if (data.success) {
//           const newRows = data.judges.map((judge, index) => {
//             const allocatedPids = judge.allocated_projects
//               ? judge.allocated_projects.split(',').filter(Boolean)
//               : [];

//             let evaluatedCount = 0;

//             const projectData = Array.from({ length: 7 }, (_, i) => {
//               const pid = allocatedPids[i] || '-';

//               if (pid === '-') {
//                 return { pid: '-', chip: null };
//               }

//               const project = judge.projects?.find(p => p.pid === pid);
//               const isEvaluated = project ? project.evaluated : false;

//               if (isEvaluated) evaluatedCount++;

//               return {
//                 pid,
//                 chip: (
//                   <Chip
//                     label={isEvaluated ? "Evaluated" : "Pending"}
//                     color={isEvaluated ? "success" : "warning"}
//                     size="small"
//                     sx={{ fontWeight: 500, minWidth: 110 }}
//                   />
//                 )
//               };
//             });

//             const totalAllocated = allocatedPids.length;
//             const remaining = totalAllocated - evaluatedCount;

//             return {
//               id: index,
//               jid: judge.jid,
//               name: judge.name,
//               email: judge.email || 'N/A',
//               phone: judge.phone || 'N/A',
//               status: judge.is_online ? 'Online' : 'Offline',
//               mode: judge.mode || 'Offline',
//               domains: judge.domains || [],
//               totalAllocated,
//               totalEvaluated: evaluatedCount,
//               remaining,
//               evaluationStatus: judge.evaluationStatus || 'incomplete',
//               // Project columns
//               ...projectData.reduce((acc, p, i) => {
//                 acc[`proj${i + 1}`] = p.pid;
//                 acc[`proj${i + 1}Chip`] = p.chip;
//                 return acc;
//               }, {})
//             };
//           });

//           setRows(newRows);
//         }
//       } catch (err) {
//         console.error('Error fetching allocations:', err);
//         setError('Failed to load judge allocations. Please try again later.');
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAllocations();
//   }, [activeTab]);

//   // Filtered rows based on status, online status, and email search
//   const filteredRows = useMemo(() => {
//     let filtered = rows;
    
//     // Filter by evaluation status
//     if (filterStatus !== 'all') {
//       filtered = filtered.filter(row => row.evaluationStatus === filterStatus);
//     }
    
//     // Filter by online status
//     if (filterOnlineStatus !== 'all') {
//       filtered = filtered.filter(row => 
//         filterOnlineStatus === 'online' ? row.status === 'Online' : row.status === 'Offline'
//       );
//     }
    
//     // Filter by email search
//     if (searchEmail.trim()) {
//       filtered = filtered.filter(row => 
//         row.email.toLowerCase().includes(searchEmail.toLowerCase())
//       );
//     }
    
//     return filtered;
//   }, [rows, filterStatus, filterOnlineStatus, searchEmail]);

//   // Summary Counts
//   const summary = useMemo(() => {
//     const completed = rows.filter(r => r.evaluationStatus === 'completed').length;
//     const partial = rows.filter(r => r.evaluationStatus === 'partial').length;
//     const incomplete = rows.filter(r => r.evaluationStatus === 'incomplete').length;
//     const online = rows.filter(r => r.status === 'Online').length;
//     const offline = rows.filter(r => r.status === 'Offline').length;

//     return {
//       total: rows.length,
//       completed,
//       partial,
//       incomplete,
//       online,
//       offline
//     };
//   }, [rows]);

//   // Columns Definition
//   const columns = [
//     { field: 'jid', headerName: 'JID', width: 100, minWidth: 100 },
//     { field: 'name', headerName: 'Judge Name', width: 200, minWidth: 200 },
//     { field: 'email', headerName: 'Email', width: 250, minWidth: 200, flex: 1 },
//     { field: 'phone', headerName: 'Phone', width: 150, minWidth: 130 },

//     // Fixed Domains Column
//     {
//       field: 'domains',
//       headerName: 'Domains',
//       width: 320,
//       minWidth: 280,
//       flex: 1,
//       sortable: true,
//       valueGetter: (params) => {
//         const domains = params.row?.domains;
//         return Array.isArray(domains) ? domains.join(', ') : '';
//       },
//       renderCell: (params) => {
//         const domains = params.row?.domains || [];

//         if (!domains.length) {
//           return (
//             <span className="text-zinc-500 text-sm italic">
//               No domains
//             </span>
//           );
//         }

//         return (
//           <Box sx={{
//             display: 'flex',
//             flexWrap: 'wrap',
//             gap: 0.75,
//             py: 1,
//             width: '100%'
//           }}>
//             {domains.slice(0, 5).map((domain, idx) => (
//               <Chip
//                 key={idx}
//                 label={domain}
//                 size="small"
//                 sx={{
//                   bgcolor: '#27272a',
//                   color: '#e2e8f0',
//                   fontSize: '0.81rem',
//                   height: 26,
//                   '& .MuiChip-label': {
//                     px: 1.5,
//                     fontWeight: 500
//                   }
//                 }}
//               />
//             ))}
//             {domains.length > 5 && (
//               <Chip
//                 label={`+${domains.length - 5}`}
//                 size="small"
//                 sx={{
//                   bgcolor: '#3f3f46',
//                   color: '#a1a1aa',
//                   fontSize: '0.8rem',
//                   height: 26
//                 }}
//               />
//             )}
//           </Box>
//         );
//       },
//     },

//     {
//       field: 'status',
//       headerName: 'Status',
//       width: 130,
//       minWidth: 130,
//       renderCell: (params) => (
//         <Box className={`inline-flex items-center gap-1.5 px-4 py-1 rounded-full text-sm font-medium
//           ${params.value === 'Online'
//             ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
//             : 'bg-zinc-700 text-zinc-400 border border-zinc-600'}`}>
//           ● {params.value}
//         </Box>
//       ),
//     },
//     { field: 'mode', headerName: 'Mode', width: 110, minWidth: 110 },

//     {
//       field: 'totalEvaluated',
//       headerName: 'Evaluated',
//       width: 130,
//       minWidth: 130,
//       renderCell: (params) => (
//         <Typography fontWeight={600} color="#22c55e">
//           {params.value} / {params.row.totalAllocated}
//         </Typography>
//       ),
//     },
//     {
//       field: 'remaining',
//       headerName: 'Remaining',
//       width: 110,
//       minWidth: 110,
//       renderCell: (params) => (
//         <Typography fontWeight={600} color={params.value > 0 ? "#eab308" : "#22c55e"}>
//           {params.value}
//         </Typography>
//       ),
//     },

//     // 7 Project Columns
//     ...Array.from({ length: 7 }, (_, i) => ({
//       field: `proj${i + 1}`,
//       headerName: `Project ${i + 1}`,
//       width: 200,
//       minWidth: 200,
//       flex: 0,
//       renderCell: (params) => {
//         const pid = params.value;
//         if (pid === '-') {
//           return <span className="text-zinc-500 text-lg">-</span>;
//         }

//         const chip = params.row[`proj${i + 1}Chip`];

//         return (
//           <Box sx={{
//             display: 'flex',
//             flexDirection: 'column',
//             alignItems: 'flex-start',
//             py: 1.5,
//             height: '100%',
//             justifyContent: 'center'
//           }}>
//             <span className="font-semibold text-white text-base mb-2 block">
//               {pid}
//             </span>
//             {chip}
//           </Box>
//         );
//       },
//     })),
//   ];

//   if (loading) {
//     return (
//       <section className="min-h-screen bg-zinc-950 text-white p-6 flex items-center justify-center">
//         <Typography variant="h5">Loading Judge Allocations...</Typography>
//       </section>
//     );
//   }

//   if (error) {
//     return (
//       <section className="min-h-screen bg-zinc-950 text-white p-6 flex items-center justify-center">
//         <Typography variant="h6" color="error">{error}</Typography>
//       </section>
//     );
//   }

//   return (
//     <section className="min-h-screen bg-zinc-950 text-white pt-20 pb-10 px-6">
//       <div className="max-w-[95rem] mx-auto">
//         <h1 className="font-bold text-4xl text-center mb-10 text-white tracking-tight">
//           Judge Allocations
//         </h1>

//         {/* Tabs */}
//         <div className="flex justify-center mb-10">
//           <div className="flex bg-zinc-900 rounded-xl p-1 border border-zinc-800">
//             <button
//               onClick={() => { setActiveTab('impetus'); setFilterStatus('all'); setFilterOnlineStatus('all'); setSearchEmail(''); }}
//               className={`px-10 py-3 rounded-lg font-medium transition-all ${
//                 activeTab === 'impetus'
//                   ? 'bg-zinc-800 text-white shadow-lg'
//                   : 'text-zinc-400 hover:text-zinc-200'
//               }`}
//             >
//               Impetus
//             </button>
//             <button
//               onClick={() => { setActiveTab('concepts'); setFilterStatus('all'); setFilterOnlineStatus('all'); setSearchEmail(''); }}
//               className={`px-10 py-3 rounded-lg font-medium transition-all ${
//                 activeTab === 'concepts'
//                   ? 'bg-zinc-800 text-white shadow-lg'
//                   : 'text-zinc-400 hover:text-zinc-200'
//               }`}
//             >
//               Concepts
//             </button>
//           </div>
//         </div>

//         {/* Summary Cards - Updated with Online/Offline */}
//         <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
//           <Card sx={{ bgcolor: '#18181b', border: '1px solid #3f3f46', borderRadius: 2 }}>
//             <CardContent className="text-center">
//               <Typography color="#94a3b8" variant="body2" gutterBottom>Total Judges</Typography>
//               <Typography variant="h3" fontWeight={700} color="white">
//                 {summary.total}
//               </Typography>
//             </CardContent>
//           </Card>

//           <Card sx={{ bgcolor: '#18181b', border: '1px solid #3f3f46', borderRadius: 2 }}>
//             <CardContent className="text-center">
//               <Typography color="#22c55e" variant="body2" gutterBottom>Online</Typography>
//               <Typography variant="h3" fontWeight={700} color="#22c55e">
//                 {summary.online}
//               </Typography>
//             </CardContent>
//           </Card>

//           <Card sx={{ bgcolor: '#18181b', border: '1px solid #3f3f46', borderRadius: 2 }}>
//             <CardContent className="text-center">
//               <Typography color="#94a3b8" variant="body2" gutterBottom>Offline</Typography>
//               <Typography variant="h3" fontWeight={700} color="#94a3b8">
//                 {summary.offline}
//               </Typography>
//             </CardContent>
//           </Card>

//           <Card sx={{ bgcolor: '#18181b', border: '1px solid #3f3f46', borderRadius: 2 }}>
//             <CardContent className="text-center">
//               <Typography color="#22c55e" variant="body2" gutterBottom>Completed</Typography>
//               <Typography variant="h3" fontWeight={700} color="#22c55e">
//                 {summary.completed}
//               </Typography>
//             </CardContent>
//           </Card>

//           <Card sx={{ bgcolor: '#18181b', border: '1px solid #3f3f46', borderRadius: 2 }}>
//             <CardContent className="text-center">
//               <Typography color="#eab308" variant="body2" gutterBottom>Partially Done</Typography>
//               <Typography variant="h3" fontWeight={700} color="#eab308">
//                 {summary.partial}
//               </Typography>
//             </CardContent>
//           </Card>

//           <Card sx={{ bgcolor: '#18181b', border: '1px solid #3f3f46', borderRadius: 2 }}>
//             <CardContent className="text-center">
//               <Typography color="#ef4444" variant="body2" gutterBottom>Incomplete</Typography>
//               <Typography variant="h3" fontWeight={700} color="#ef4444">
//                 {summary.incomplete}
//               </Typography>
//             </CardContent>
//           </Card>
//         </div>

//         {/* Filter Section */}
//         <div className="flex flex-wrap gap-4 mb-6 items-center">
//           {/* Evaluation Status Filters */}
//           <div className="flex flex-wrap gap-3">
//             <button
//               onClick={() => setFilterStatus('all')}
//               className={`px-6 py-2.5 rounded-xl font-medium transition-all ${
//                 filterStatus === 'all' ? 'bg-white text-black shadow-lg' : 'bg-zinc-800 hover:bg-zinc-700 text-white'
//               }`}
//             >
//               All Judges
//             </button>

//             <button
//               onClick={() => setFilterStatus('completed')}
//               className={`px-6 py-2.5 rounded-xl font-medium transition-all flex items-center gap-2 ${
//                 filterStatus === 'completed' ? 'bg-emerald-600 text-white' : 'bg-zinc-800 hover:bg-zinc-700 text-white'
//               }`}
//             >
//               Completed
//             </button>

//             <button
//               onClick={() => setFilterStatus('partial')}
//               className={`px-6 py-2.5 rounded-xl font-medium transition-all flex items-center gap-2 ${
//                 filterStatus === 'partial' ? 'bg-amber-600 text-white' : 'bg-zinc-800 hover:bg-zinc-700 text-white'
//               }`}
//             >
//               Partially Done
//             </button>

//             <button
//               onClick={() => setFilterStatus('incomplete')}
//               className={`px-6 py-2.5 rounded-xl font-medium transition-all flex items-center gap-2 ${
//                 filterStatus === 'incomplete' ? 'bg-red-600 text-white' : 'bg-zinc-800 hover:bg-zinc-700 text-white'
//               }`}
//             >
//               Incomplete
//             </button>
//           </div>

//           {/* Online/Offline Dropdown Filter */}
//           <FormControl sx={{ minWidth: 150 }} size="small">
//             <InputLabel sx={{ color: '#a1a1aa' }}>Online Status</InputLabel>
//             <Select
//               value={filterOnlineStatus}
//               onChange={(e) => setFilterOnlineStatus(e.target.value)}
//               label="Online Status"
//               sx={{
//                 color: 'white',
//                 backgroundColor: '#27272a',
//                 '& .MuiOutlinedInput-notchedOutline': { borderColor: '#3f3f46' },
//                 '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#52525b' },
//                 '& .MuiSvgIcon-root': { color: '#a1a1aa' }
//               }}
//             >
//               <MenuItem value="all">All</MenuItem>
//               <MenuItem value="online">Online Only</MenuItem>
//               <MenuItem value="offline">Offline Only</MenuItem>
//             </Select>
//           </FormControl>

//           {/* Email Search Input */}
//           <TextField
//             placeholder="Search by email..."
//             value={searchEmail}
//             onChange={(e) => setSearchEmail(e.target.value)}
//             size="small"
//             sx={{
//               minWidth: 250,
//               '& .MuiOutlinedInput-root': {
//                 color: 'white',
//                 backgroundColor: '#27272a',
//                 '& fieldset': { borderColor: '#3f3f46' },
//                 '&:hover fieldset': { borderColor: '#52525b' },
//               },
//               '& .MuiInputLabel-root': { color: '#a1a1aa' },
//               '& .MuiInputBase-input::placeholder': { color: '#71717a' }
//             }}
//             InputProps={{
//               startAdornment: (
//                 <InputAdornment position="start">
//                   <span className="text-zinc-400">🔍</span>
//                 </InputAdornment>
//               ),
//             }}
//           />
//         </div>

//         {/* DataGrid with centered pagination */}
//         <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
//           <div className="overflow-x-auto">
//             <DataGrid
//               rows={filteredRows}
//               columns={columns}
//               slots={{ toolbar: GridToolbar }}
//               paginationModel={paginationModel}
//               onPaginationModelChange={setPaginationModel}
//               pageSizeOptions={[5, 10, 15, 25, 50]}
//               disableRowSelectionOnClick
//               getRowHeight={() => 100}
//               sx={{
//                 border: 'none',
//                 minWidth: 'fit-content',

//                 '& .MuiDataGrid-cell': {
//                   color: '#e2e8f0',
//                   fontSize: '0.95rem',
//                   borderRight: '1px solid #3f3f46',
//                   padding: '8px 12px',
//                 },
//                 '& .MuiDataGrid-columnHeader': {
//                   backgroundColor: '#18181b',
//                   color: '#a1a1aa',
//                   fontWeight: 600,
//                   fontSize: '0.95rem',
//                   borderBottom: '2px solid #52525b',
//                   borderRight: '1px solid #3f3f46',
//                 },
//                 '& .MuiDataGrid-row': {
//                   borderBottom: '1px solid #27272a',
//                 },
//                 '& .MuiDataGrid-row:hover': {
//                   backgroundColor: '#27272a',
//                 },
//                 '& .MuiDataGrid-toolbarContainer': {
//                   backgroundColor: '#18181b',
//                   color: '#e2e8f0',
//                 },

//                 '& .MuiDataGrid-footerContainer': {
//                   backgroundColor: '#18181b',
//                   color: '#e2e8f0',
//                   display: 'flex',
//                   justifyContent: 'center',
//                 },
//                 '& .MuiTablePagination-root': {
//                   color: '#e2e8f0',
//                   display: 'flex',
//                   justifyContent: 'center',
//                   width: '100%',
//                 },
//                 '& .MuiTablePagination-spacer': {
//                   display: 'none',
//                 },
//                 '& .MuiTablePagination-toolbar': {
//                   justifyContent: 'center',
//                   width: '100%',
//                 },
//                 '& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows': {
//                   color: '#e2e8f0',
//                 },
//                 '& .MuiTablePagination-select': {
//                   color: '#e2e8f0',
//                 },
//                 '& .MuiTablePagination-actions button': {
//                   color: '#e2e8f0',
//                 },
//                 '& .MuiTablePagination-actions button:hover': {
//                   backgroundColor: '#27272a',
//                   color: '#fff',
//                 },
//                 '& .MuiSelect-icon': {
//                   color: '#e2e8f0',
//                 },
//               }}
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AdminViewAllocations;


import { useEffect, useState, useMemo } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Chip, Box, Typography, Card, CardContent, TextField, InputAdornment, MenuItem, Select, FormControl, InputLabel } from '@mui/material';
import { API_BASE } from '../../app/config/api';

const AdminViewAllocations = () => {
  const [activeTab, setActiveTab] = useState('impetus');
  const [filterStatus, setFilterStatus] = useState('all');
  const [filterOnlineStatus, setFilterOnlineStatus] = useState('all');
  const [searchEmail, setSearchEmail] = useState('');
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [paginationModel, setPaginationModel] = useState({ pageSize: 10, page: 0 });

  // Fetch data from backend
  useEffect(() => {
    const fetchAllocations = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(`${API_BASE}/view/admin/allocations?event=${activeTab}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json'
          },
          credentials: 'include'
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();

        if (data.success) {
          const newRows = data.judges.map((judge, index) => {
            const allocatedPids = judge.allocated_projects
              ? judge.allocated_projects.split(',').filter(Boolean)
              : [];

            let evaluatedCount = 0;

            const projectData = Array.from({ length: 7 }, (_, i) => {
              const pid = allocatedPids[i] || '-';

              if (pid === '-') {
                return { pid: '-', chip: null };
              }

              const project = judge.projects?.find(p => p.pid === pid);
              const isEvaluated = project ? project.evaluated : false;

              if (isEvaluated) evaluatedCount++;

              return {
                pid,
                chip: (
                  <Chip
                    label={isEvaluated ? "Evaluated" : "Pending"}
                    color={isEvaluated ? "success" : "warning"}
                    size="small"
                    sx={{ fontWeight: 500, minWidth: 110, height: 28 }}
                  />
                )
              };
            });

            const totalAllocated = allocatedPids.length;
            const remaining = totalAllocated - evaluatedCount;

            return {
              id: index,
              jid: judge.jid,
              name: judge.name,
              email: judge.email || 'N/A',
              phone: judge.phone || 'N/A',
              status: judge.is_online ? 'Online' : 'Offline',
              mode: judge.mode || 'Offline',
              domains: judge.domains || [],
              totalAllocated,
              totalEvaluated: evaluatedCount,
              remaining,
              evaluationStatus: judge.evaluationStatus || 'incomplete',
              // Project columns
              ...projectData.reduce((acc, p, i) => {
                acc[`proj${i + 1}`] = p.pid;
                acc[`proj${i + 1}Chip`] = p.chip;
                return acc;
              }, {})
            };
          });

          setRows(newRows);
        }
      } catch (err) {
        console.error('Error fetching allocations:', err);
        setError('Failed to load judge allocations. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchAllocations();
  }, [activeTab]);

  // Filtered rows based on status, online status, and email search
  const filteredRows = useMemo(() => {
    let filtered = rows;
    
    // Filter by evaluation status
    if (filterStatus !== 'all') {
      filtered = filtered.filter(row => row.evaluationStatus === filterStatus);
    }
    
    // Filter by online status
    if (filterOnlineStatus !== 'all') {
      filtered = filtered.filter(row => 
        filterOnlineStatus === 'online' ? row.status === 'Online' : row.status === 'Offline'
      );
    }
    
    // Filter by email search
    if (searchEmail.trim()) {
      filtered = filtered.filter(row => 
        row.email.toLowerCase().includes(searchEmail.toLowerCase())
      );
    }
    
    return filtered;
  }, [rows, filterStatus, filterOnlineStatus, searchEmail]);

  // Summary Counts
  const summary = useMemo(() => {
    const completed = rows.filter(r => r.evaluationStatus === 'completed').length;
    const partial = rows.filter(r => r.evaluationStatus === 'partial').length;
    const incomplete = rows.filter(r => r.evaluationStatus === 'incomplete').length;
    const online = rows.filter(r => r.status === 'Online').length;
    const offline = rows.filter(r => r.status === 'Offline').length;

    return {
      total: rows.length,
      completed,
      partial,
      incomplete,
      online,
      offline
    };
  }, [rows]);

  // Columns Definition
  const columns = [
    { field: 'jid', headerName: 'JID', width: 100, minWidth: 100 },
    { field: 'name', headerName: 'Judge Name', width: 200, minWidth: 200 },
    { field: 'email', headerName: 'Email', width: 250, minWidth: 200, flex: 1 },
    { field: 'phone', headerName: 'Phone', width: 150, minWidth: 130 },

    // Fixed Domains Column
    {
      field: 'domains',
      headerName: 'Domains',
      width: 320,
      minWidth: 280,
      flex: 1,
      sortable: true,
      valueGetter: (params) => {
        const domains = params.row?.domains;
        return Array.isArray(domains) ? domains.join(', ') : '';
      },
      renderCell: (params) => {
        const domains = params.row?.domains || [];

        if (!domains.length) {
          return (
            <span className="text-zinc-500 text-sm italic">
              No domains
            </span>
          );
        }

        return (
          <Box sx={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: 0.5,
            alignItems: 'center',
            width: '100%',
            overflow: 'hidden',
          }}>
            {domains.slice(0, 3).map((domain, idx) => (
              <Chip
                key={idx}
                label={domain}
                size="small"
                sx={{
                  bgcolor: '#27272a',
                  color: '#e2e8f0',
                  fontSize: '0.75rem',
                  height: 24,
                  '& .MuiChip-label': {
                    px: 1,
                    fontWeight: 500
                  }
                }}
              />
            ))}
            {domains.length > 3 && (
              <Chip
                label={`+${domains.length - 3}`}
                size="small"
                sx={{
                  bgcolor: '#3f3f46',
                  color: '#a1a1aa',
                  fontSize: '0.75rem',
                  height: 24
                }}
              />
            )}
          </Box>
        );
      },
    },

    {
      field: 'status',
      headerName: 'Status',
      width: 130,
      minWidth: 130,
      renderCell: (params) => (
        <Box className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium
          ${params.value === 'Online'
            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
            : 'bg-zinc-700 text-zinc-400 border border-zinc-600'}`}>
          ● {params.value}
        </Box>
      ),
    },
    { field: 'mode', headerName: 'Mode', width: 110, minWidth: 110 },

    {
      field: 'totalEvaluated',
      headerName: 'Evaluated',
      width: 130,
      minWidth: 130,
      renderCell: (params) => (
        <Typography fontWeight={600} color="#22c55e" fontSize="0.9rem">
          {params.value} / {params.row.totalAllocated}
        </Typography>
      ),
    },
    {
      field: 'remaining',
      headerName: 'Remaining',
      width: 110,
      minWidth: 110,
      renderCell: (params) => (
        <Typography fontWeight={600} color={params.value > 0 ? "#eab308" : "#22c55e"} fontSize="0.9rem">
          {params.value}
        </Typography>
      ),
    },

    // 7 Project Columns
    ...Array.from({ length: 7 }, (_, i) => ({
      field: `proj${i + 1}`,
      headerName: `Project ${i + 1}`,
      width: 200,
      minWidth: 200,
      flex: 0,
      renderCell: (params) => {
        const pid = params.value;
        if (pid === '-') {
          return <span className="text-zinc-500 text-lg">-</span>;
        }

        const chip = params.row[`proj${i + 1}Chip`];

        return (
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            height: '100%',
            width: '100%'
          }}>
            <span className="font-semibold text-white text-sm mb-1 block">
              {pid}
            </span>
            {chip}
          </Box>
        );
      },
    })),
  ];

  if (loading) {
    return (
      <section className="min-h-screen bg-zinc-950 text-white p-6 flex items-center justify-center">
        <Typography variant="h5">Loading Judge Allocations...</Typography>
      </section>
    );
  }

  if (error) {
    return (
      <section className="min-h-screen bg-zinc-950 text-white p-6 flex items-center justify-center">
        <Typography variant="h6" color="error">{error}</Typography>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-zinc-950 text-white pt-20 pb-10 px-6">
      <div className="max-w-[95rem] mx-auto">
        <h1 className="font-bold text-4xl text-center mb-10 text-white tracking-tight">
          Judge Allocations
        </h1>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="flex bg-zinc-900 rounded-xl p-1 border border-zinc-800">
            <button
              onClick={() => { setActiveTab('impetus'); setFilterStatus('all'); setFilterOnlineStatus('all'); setSearchEmail(''); }}
              className={`px-10 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'impetus'
                  ? 'bg-zinc-800 text-white shadow-lg'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Impetus
            </button>
            <button
              onClick={() => { setActiveTab('concepts'); setFilterStatus('all'); setFilterOnlineStatus('all'); setSearchEmail(''); }}
              className={`px-10 py-3 rounded-lg font-medium transition-all ${
                activeTab === 'concepts'
                  ? 'bg-zinc-800 text-white shadow-lg'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Concepts
            </button>
          </div>
        </div>

        {/* Summary Cards - Updated with Online/Offline */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-4 mb-8">
          <Card sx={{ bgcolor: '#18181b', border: '1px solid #3f3f46', borderRadius: 2 }}>
            <CardContent className="text-center">
              <Typography color="#94a3b8" variant="body2" gutterBottom>Total Judges</Typography>
              <Typography variant="h3" fontWeight={700} color="white">
                {summary.total}
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ bgcolor: '#18181b', border: '1px solid #3f3f46', borderRadius: 2 }}>
            <CardContent className="text-center">
              <Typography color="#22c55e" variant="body2" gutterBottom>Online</Typography>
              <Typography variant="h3" fontWeight={700} color="#22c55e">
                {summary.online}
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ bgcolor: '#18181b', border: '1px solid #3f3f46', borderRadius: 2 }}>
            <CardContent className="text-center">
              <Typography color="#94a3b8" variant="body2" gutterBottom>Offline</Typography>
              <Typography variant="h3" fontWeight={700} color="#94a3b8">
                {summary.offline}
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ bgcolor: '#18181b', border: '1px solid #3f3f46', borderRadius: 2 }}>
            <CardContent className="text-center">
              <Typography color="#22c55e" variant="body2" gutterBottom>Completed</Typography>
              <Typography variant="h3" fontWeight={700} color="#22c55e">
                {summary.completed}
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ bgcolor: '#18181b', border: '1px solid #3f3f46', borderRadius: 2 }}>
            <CardContent className="text-center">
              <Typography color="#eab308" variant="body2" gutterBottom>Partially Done</Typography>
              <Typography variant="h3" fontWeight={700} color="#eab308">
                {summary.partial}
              </Typography>
            </CardContent>
          </Card>

          <Card sx={{ bgcolor: '#18181b', border: '1px solid #3f3f46', borderRadius: 2 }}>
            <CardContent className="text-center">
              <Typography color="#ef4444" variant="body2" gutterBottom>Incomplete</Typography>
              <Typography variant="h3" fontWeight={700} color="#ef4444">
                {summary.incomplete}
              </Typography>
            </CardContent>
          </Card>
        </div>

        {/* Filter Section */}
        <div className="flex flex-wrap gap-4 mb-6 items-center">
          {/* Evaluation Status Filters */}
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setFilterStatus('all')}
              className={`px-6 py-2.5 rounded-xl font-medium transition-all ${
                filterStatus === 'all' ? 'bg-white text-black shadow-lg' : 'bg-zinc-800 hover:bg-zinc-700 text-white'
              }`}
            >
              All Judges
            </button>

            <button
              onClick={() => setFilterStatus('completed')}
              className={`px-6 py-2.5 rounded-xl font-medium transition-all flex items-center gap-2 ${
                filterStatus === 'completed' ? 'bg-emerald-600 text-white' : 'bg-zinc-800 hover:bg-zinc-700 text-white'
              }`}
            >
              Completed
            </button>

            <button
              onClick={() => setFilterStatus('partial')}
              className={`px-6 py-2.5 rounded-xl font-medium transition-all flex items-center gap-2 ${
                filterStatus === 'partial' ? 'bg-amber-600 text-white' : 'bg-zinc-800 hover:bg-zinc-700 text-white'
              }`}
            >
              Partially Done
            </button>

            <button
              onClick={() => setFilterStatus('incomplete')}
              className={`px-6 py-2.5 rounded-xl font-medium transition-all flex items-center gap-2 ${
                filterStatus === 'incomplete' ? 'bg-red-600 text-white' : 'bg-zinc-800 hover:bg-zinc-700 text-white'
              }`}
            >
              Incomplete
            </button>
          </div>

          {/* Online/Offline Dropdown Filter */}
          <FormControl sx={{ minWidth: 150 }} size="small">
            <InputLabel sx={{ color: '#a1a1aa' }}>Online Status</InputLabel>
            <Select
              value={filterOnlineStatus}
              onChange={(e) => setFilterOnlineStatus(e.target.value)}
              label="Online Status"
              sx={{
                color: 'white',
                backgroundColor: '#27272a',
                '& .MuiOutlinedInput-notchedOutline': { borderColor: '#3f3f46' },
                '&:hover .MuiOutlinedInput-notchedOutline': { borderColor: '#52525b' },
                '& .MuiSvgIcon-root': { color: '#a1a1aa' }
              }}
            >
              <MenuItem value="all">All</MenuItem>
              <MenuItem value="online">Online Only</MenuItem>
              <MenuItem value="offline">Offline Only</MenuItem>
            </Select>
          </FormControl>

          {/* Email Search Input */}
          <TextField
            placeholder="Search by email..."
            value={searchEmail}
            onChange={(e) => setSearchEmail(e.target.value)}
            size="small"
            sx={{
              minWidth: 250,
              '& .MuiOutlinedInput-root': {
                color: 'white',
                backgroundColor: '#27272a',
                '& fieldset': { borderColor: '#3f3f46' },
                '&:hover fieldset': { borderColor: '#52525b' },
              },
              '& .MuiInputLabel-root': { color: '#a1a1aa' },
              '& .MuiInputBase-input::placeholder': { color: '#71717a' }
            }}
            InputProps={{
              startAdornment: (
                <InputAdornment position="start">
                  <span className="text-zinc-400">🔍</span>
                </InputAdornment>
              ),
            }}
          />
        </div>

        {/* DataGrid with fixed row height */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
          <div className="overflow-x-auto">
            <DataGrid
              rows={filteredRows}
              columns={columns}
              slots={{ toolbar: GridToolbar }}
              paginationModel={paginationModel}
              onPaginationModelChange={setPaginationModel}
              pageSizeOptions={[5, 10, 15, 25, 50]}
              disableRowSelectionOnClick
              rowHeight={80}
              sx={{
                border: 'none',
                minWidth: 'fit-content',

                '& .MuiDataGrid-cell': {
                  color: '#e2e8f0',
                  fontSize: '0.9rem',
                  borderRight: '1px solid #3f3f46',
                  padding: '6px 12px',
                  display: 'flex',
                  alignItems: 'center',
                },
                '& .MuiDataGrid-columnHeader': {
                  backgroundColor: '#18181b',
                  color: '#a1a1aa',
                  fontWeight: 600,
                  fontSize: '0.9rem',
                  borderBottom: '2px solid #52525b',
                  borderRight: '1px solid #3f3f46',
                },
                '& .MuiDataGrid-row': {
                  borderBottom: '1px solid #27272a',
                },
                '& .MuiDataGrid-row:hover': {
                  backgroundColor: '#27272a',
                },
                '& .MuiDataGrid-toolbarContainer': {
                  backgroundColor: '#18181b',
                  color: '#e2e8f0',
                  padding: '8px',
                },
                '& .MuiDataGrid-footerContainer': {
                  backgroundColor: '#18181b',
                  color: '#e2e8f0',
                  display: 'flex',
                  justifyContent: 'center',
                  minHeight: '52px',
                },
                '& .MuiTablePagination-root': {
                  color: '#e2e8f0',
                  display: 'flex',
                  justifyContent: 'center',
                  width: '100%',
                },
                '& .MuiTablePagination-spacer': {
                  display: 'none',
                },
                '& .MuiTablePagination-toolbar': {
                  justifyContent: 'center',
                  width: '100%',
                },
                '& .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows': {
                  color: '#e2e8f0',
                },
                '& .MuiTablePagination-select': {
                  color: '#e2e8f0',
                },
                '& .MuiTablePagination-actions button': {
                  color: '#e2e8f0',
                },
                '& .MuiTablePagination-actions button:hover': {
                  backgroundColor: '#27272a',
                  color: '#fff',
                },
                '& .MuiSelect-icon': {
                  color: '#e2e8f0',
                },
                // Ensure consistent height for all rows
                '& .MuiDataGrid-virtualScroller': {
                  minHeight: '400px',
                },
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AdminViewAllocations;