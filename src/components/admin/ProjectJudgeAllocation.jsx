import { useEffect, useState, useMemo } from 'react';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Chip, Box, Typography, CircularProgress, Alert } from '@mui/material';
import { API_BASE } from '../../app/config/api';


const ProjectJudgesAllocation = () => {
  const [activeTab, setActiveTab] = useState('impetus');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // All Filters
  const [selectedDate, setSelectedDate] = useState('');
  const [domainFilter, setDomainFilter] = useState('');
  const [modeFilter, setModeFilter] = useState('');        // New: 'Online' | 'Offline' | 'Hybrid' | ''
  const [statusFilter, setStatusFilter] = useState(null);  // 'complete' | 'partial' | 'incomplete' | 'pending'
  const [judgeCountFilter, setJudgeCountFilter] = useState(null);
  const [paginationModel, setPaginationModel] = useState({ page: 0, pageSize: 10 });

  // Domain mapping
  const domainOptions = {
    AD: 'APPLICATION DEVELOPMENT',
    CN: 'COMMUNICATION NETWORKS AND SECURITY SYSTEMS',
    DS: 'DIGITAL / IMAGE/ SPEECH / VIDEO PROCESSING',
    ES: 'EMBEDDED/VLSI SYSTEMS',
    ML: 'MACHINE LEARNING AND PATTERN RECOGNITION',
    OT: 'OTHERS',
  };

  const getDomain = (pid) => {
    if (typeof pid !== 'string') return 'OT';
    const match = pid.match(/-([A-Z]{2})/);
    return match ? match[1] : 'OT';
  };

  // Fetch data
  useEffect(() => {
    const fetchProjects = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(`${API_BASE}/view/admin/project-allocations?event=${activeTab}`, {
  method: 'GET',      
  headers: { 'Content-Type': 'application/json' },
  credentials: 'include',        
});
        // const response = await fetch(`http://localhost:3001/view/admin/project-allocations?event=${activeTab}`);
        if (!response.ok) throw new Error('Failed to fetch data');
        const data = await response.json();
        if (data.success) {
          setProjects(data.projects || []);
        } else {
          throw new Error(data.message || 'Failed to load projects');
        }
      } catch (err) {
        console.error('Fetch error:', err);
        setError(err.message || 'Something went wrong');
        setProjects([]);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, [activeTab]);

  const getEvaluationStatus = (project) => {
    const judges = project.judges || [];
    const allocated = judges.length;
    const evaluated = judges.filter((j) => j?.evaluated === true).length;
    if (allocated === 0) return 'pending';
    if (allocated >= 2 && evaluated >= 2) return 'complete';
    if (evaluated >= 1) return 'partial';
    return 'incomplete';
  };

  const maxJudges = useMemo(() => {
    return Math.max(4, ...projects.map((p) => (p.judges || []).length));
  }, [projects]);

  // Main filtered projects — ALL filters applied together
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      // Date filter
      if (selectedDate) {
        const projectDateStr = project.date
          ? new Date(project.date).toISOString().split('T')[0]
          : null;
        if (projectDateStr !== selectedDate) return false;
      }

      // Domain filter
      if (domainFilter && getDomain(project.pid) !== domainFilter) return false;

      // Mode filter
      if (modeFilter && project.mode !== modeFilter) return false;

      // Judge count filter
      if (judgeCountFilter !== null) {
        const allocated = (project.judges || []).length;
        if (allocated !== judgeCountFilter) return false;
      }

      // Status filter
      if (statusFilter) {
        if (getEvaluationStatus(project) !== statusFilter) return false;
      }

      return true;
    });
  }, [projects, selectedDate, domainFilter, modeFilter, judgeCountFilter, statusFilter]);

  // Summary counts (based on filteredProjects so cards reflect all filters)
  const domainCounts = useMemo(() => {
    const counts = {};
    Object.keys(domainOptions).forEach((key) => (counts[key] = 0));
    filteredProjects.forEach((project) => {
      const domain = getDomain(project.pid);
      counts[domain] = (counts[domain] || 0) + 1;
    });
    return counts;
  }, [filteredProjects, domainOptions]);

  const statusCounts = useMemo(() => {
    const counts = { complete: 0, partial: 0, incomplete: 0, pending: 0 };
    filteredProjects.forEach((project) => {
      const status = getEvaluationStatus(project);
      counts[status] = (counts[status] || 0) + 1;
    });
    return counts;
  }, [filteredProjects]);

  // Online / Offline totals (always full data)
  const onlineTotal = useMemo(() => projects.filter((p) => p.mode === 'Online').length, [projects]);
  const offlineTotal = useMemo(() => projects.filter((p) => p.mode === 'Offline').length, [projects]);

  // Rows for DataGrid
  const rows = useMemo(() => {
    return filteredProjects.map((project, index) => {
      const judgesList = [...(project.judges || [])];
      while (judgesList.length < maxJudges) judgesList.push(null);
      const dynamicJudges = {};
      judgesList.forEach((judge, i) => {
        dynamicJudges[`judge${i + 1}`] = judge;
      });
      return {
        id: index,
        pid: project.pid,
        title: project.title,
        session: project.session || 'N/A',
        mode: project.mode || 'Offline',
        date: project.date || null,
        ...dynamicJudges,
      };
    });
  }, [filteredProjects, maxJudges]);

  const renderJudgeCard = (judge) => {
    if (!judge) {
      return (
        <Box sx={{ bgcolor: '#1f1f23', border: '1px dashed #52525b', borderRadius: '12px', p: 1.5, minHeight: 92, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Typography color="#52525b" fontStyle="italic" fontSize="0.85rem">Slot Available</Typography>
        </Box>
      );
    }
    return (
      <Box sx={{ bgcolor: '#27272a', border: '1px solid #3f3f46', borderRadius: '12px', p: 1.5, minHeight: 92 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 0.5 }}>
          <Typography fontWeight={600} color="#e2e8f0" fontSize="0.85rem">{judge.jid}</Typography>
          <Chip label={judge.evaluated ? 'Evaluated' : 'Pending'} color={judge.evaluated ? 'success' : 'warning'} size="small" sx={{ fontSize: '0.7rem', height: 20 }} />
        </Box>
        <Typography variant="body2" color="#cbd5e1" sx={{ fontWeight: 500, fontSize: '0.82rem' }}>{judge.name}</Typography>
      </Box>
    );
  };

  const judgeColumns = useMemo(() => {
    return Array.from({ length: maxJudges }, (_, i) => ({
      field: `judge${i + 1}`,
      headerName: `Judge ${i + 1}`,
      width: 220,
      sortable: false,
      flex: i === maxJudges - 1 ? 1 : 0,
      renderCell: (params) => renderJudgeCard(params.value),
    }));
  }, [maxJudges]);

  const columns = [
    { field: 'pid', headerName: 'PID', width: 100, renderCell: (params) => <Typography fontWeight={700} fontSize="1rem" color="#60a5fa">{params.value}</Typography> },
    { field: 'title', headerName: 'Project Title', width: 280, renderCell: (params) => <Typography sx={{ lineHeight: 1.4, fontSize: '0.92rem' }}>{params.value}</Typography> },
    { field: 'session', headerName: 'Session / Lab', width: 140 },
    {
      field: 'mode',
      headerName: 'Mode',
      width: 110,
      renderCell: (params) => (
        <Chip
          label={params.value}
          color={params.value === 'Online' ? 'success' : params.value === 'Hybrid' ? 'warning' : 'default'}
          variant="outlined"
          size="small"
          sx={{ '& .MuiChip-label': { color: '#ffffff !important', fontWeight: 600 } }}
        />
      ),
    },
    {
      field: 'date',
      headerName: 'Date',
      width: 130,
      renderCell: (params) => (
        <Typography>
          {params.value ? new Date(params.value).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' }) : '—'}
        </Typography>
      ),
    },
    ...judgeColumns,
  ];

  return (
    <section className="min-h-screen bg-zinc-950 text-white pt-20 pb-10 px-6">
      <div className="max-w-[95rem] mx-auto">
        <h1 className="font-bold text-4xl text-center mb-10 tracking-tight">Project Judges Allocation</h1>

        {/* Tabs */}
        <div className="flex justify-center mb-10">
          <div className="flex bg-zinc-900 rounded-xl p-1 border border-zinc-800">
            <button onClick={() => setActiveTab('impetus')} className={`px-10 py-3 rounded-lg font-medium transition-all ${activeTab === 'impetus' ? 'bg-zinc-800 text-white shadow-lg' : 'text-zinc-400 hover:text-zinc-200'}`}>Impetus</button>
            <button onClick={() => setActiveTab('concepts')} className={`px-10 py-3 rounded-lg font-medium transition-all ${activeTab === 'concepts' ? 'bg-zinc-800 text-white shadow-lg' : 'text-zinc-400 hover:text-zinc-200'}`}>Concepts</button>
          </div>
        </div>

        {error && <Alert severity="error" sx={{ mb: 3 }}>{error}</Alert>}

        {/* Top Summary Cards: Online + Offline + Domain-wise */}
        <div className="grid grid-cols-8 gap-4 mb-8">
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-4 text-center">
            <div className="text-emerald-400 text-xs font-medium tracking-widest mb-1">ONLINE</div>
            <div className="text-4xl font-bold text-white">{onlineTotal}</div>
          </div>
          <div className="bg-zinc-900 border border-zinc-800 rounded-3xl p-4 text-center">
            <div className="text-amber-400 text-xs font-medium tracking-widest mb-1">OFFLINE</div>
            <div className="text-4xl font-bold text-white">{offlineTotal}</div>
          </div>
          {Object.entries(domainOptions).map(([key, name]) => {
            const count = domainCounts[key] || 0;
            const isActive = domainFilter === key;
            return (
              <div
                key={key}
                onClick={() => setDomainFilter(isActive ? '' : key)}
                className={`cursor-pointer bg-zinc-900 border transition-all hover:scale-105 rounded-3xl p-4 text-center ${isActive ? 'border-white shadow-2xl' : 'border-zinc-700'}`}
              >
                <div className="text-xs font-bold text-blue-400 mb-1">{key}</div>
                <div className="text-4xl font-bold text-white mb-1">{count}</div>
                <div className="text-[10px] text-zinc-400 leading-tight line-clamp-2">{name}</div>
              </div>
            );
          })}
        </div>

        {/* Filters Row */}
        <div className="flex flex-wrap items-center gap-6 mb-8">
          {/* Date Filter */}
          <div className="flex items-center gap-3">
            <Typography className="text-zinc-400 font-medium whitespace-nowrap">Date:</Typography>
            <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} className="bg-zinc-900 border border-zinc-700 focus:border-blue-500 rounded-2xl px-5 py-3 text-white outline-none w-52" />
            {selectedDate && <button onClick={() => setSelectedDate('')} className="px-5 py-3 text-sm bg-zinc-800 hover:bg-zinc-700 rounded-2xl text-zinc-300">Clear</button>}
          </div>

          {/* Domain Dropdown */}
          <div className="flex items-center gap-3">
            <Typography className="text-zinc-400 font-medium whitespace-nowrap">Domain:</Typography>
            <select value={domainFilter} onChange={(e) => setDomainFilter(e.target.value)} className="bg-zinc-900 border border-zinc-700 focus:border-blue-500 rounded-2xl px-5 py-3 text-white outline-none min-w-[280px]">
              <option value="">All Domains</option>
              {Object.entries(domainOptions).map(([key, name]) => (
                <option key={key} value={key}>{key} — {name}</option>
              ))}
            </select>
            {domainFilter && <button onClick={() => setDomainFilter('')} className="px-5 py-3 text-sm bg-zinc-800 hover:bg-zinc-700 rounded-2xl text-zinc-300">Clear</button>}
          </div>

          {/* Mode Filter */}
          <div className="flex items-center gap-3">
            <Typography className="text-zinc-400 font-medium whitespace-nowrap">Mode:</Typography>
            <select value={modeFilter} onChange={(e) => setModeFilter(e.target.value)} className="bg-zinc-900 border border-zinc-700 focus:border-blue-500 rounded-2xl px-5 py-3 text-white outline-none min-w-[180px]">
              <option value="">All Modes</option>
              <option value="Online">Online</option>
              <option value="Offline">Offline</option>
              <option value="Hybrid">Hybrid</option>
            </select>
            {modeFilter && <button onClick={() => setModeFilter('')} className="px-5 py-3 text-sm bg-zinc-800 hover:bg-zinc-700 rounded-2xl text-zinc-300">Clear</button>}
          </div>
        </div>

        {/* Status Cards */}
        <div className="grid grid-cols-4 gap-4 mb-8">
          {[
            { key: 'complete', label: 'Completely Evaluated', color: 'emerald' },
            { key: 'partial', label: 'Partially Evaluated', color: 'amber' },
            { key: 'incomplete', label: 'Not Evaluated', color: 'red' },
            { key: 'pending', label: 'Not Assigned', color: 'zinc' },
          ].map(({ key, label, color }) => {
            const count = statusCounts[key] || 0;
            const isActive = statusFilter === key;
            return (
              <div
                key={key}
                onClick={() => setStatusFilter(isActive ? null : key)}
                className={`cursor-pointer bg-zinc-900 border transition-all hover:scale-105 rounded-3xl p-6 ${isActive ? 'border-white shadow-2xl' : 'border-zinc-700'}`}
              >
                <div className={`text-xs font-semibold tracking-widest mb-3 text-${color}-400`}>{label.toUpperCase()}</div>
                <div className="text-5xl font-bold text-white">{count}</div>
              </div>
            );
          })}
        </div>

        {/* Judge Count Filter */}
        <div className="flex items-center gap-x-3 mb-6 flex-wrap">
          <span className="text-zinc-400 font-medium text-sm mr-2">Judges Allocated:</span>
          {[null, 0, 1, 2, 3, 4, 5, 6, 7].map((num) => {
            const label = num === null ? 'All' : num;
            const isActive = judgeCountFilter === num;
            return (
              <button
                key={label}
                onClick={() => setJudgeCountFilter(isActive ? null : num)}
                className={`px-6 py-2 text-sm font-medium rounded-3xl border transition-all ${isActive ? 'bg-white text-zinc-950 border-white' : 'bg-zinc-800 border-zinc-600 hover:border-zinc-400 text-white'}`}
              >
                {label === 'All' ? 'All Projects' : `${label} Judge${num === 1 ? '' : 's'}`}
              </button>
            );
          })}
        </div>

        {/* DataGrid */}
        <div className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl">
          <DataGrid
            rows={rows}
            columns={columns}
            slots={{ toolbar: GridToolbar }}
            loading={loading}
            paginationModel={paginationModel}
            onPaginationModelChange={setPaginationModel}
            pageSizeOptions={[5, 10, 15, 25, 50]}
            pagination
            disableRowSelectionOnClick
            getRowHeight={() => 130}
            sx={{
              border: 'none',
              '& .MuiDataGrid-cell': { color: '#e2e8f0', fontSize: '0.9rem', borderRight: '1px solid #3f3f46', padding: '8px 12px' },
              '& .MuiDataGrid-columnHeader': { backgroundColor: '#18181b', color: '#a1a1aa', fontWeight: 600, fontSize: '0.9rem' },
              '& .MuiDataGrid-row:hover': { backgroundColor: '#27272a' },
              '& .MuiDataGrid-toolbarContainer': { backgroundColor: '#18181b', color: '#e2e8f0' },
              '& .MuiDataGrid-footerContainer': { color: '#e2e8f0', backgroundColor: '#18181b', borderTop: '1px solid #3f3f46' },
              '& .MuiTablePagination-root, & .MuiTablePagination-selectLabel, & .MuiTablePagination-displayedRows': { color: '#e2e8f0' },
              '& .MuiIconButton-root': { color: '#e2e8f0' },
            }}
          />
        </div>

        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
            <CircularProgress color="inherit" />
          </Box>
        )}
      </div>
    </section>
  );
};

export default ProjectJudgesAllocation;