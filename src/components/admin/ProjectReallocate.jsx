import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, UserPlus, RefreshCw, Info, CheckCircle2 } from 'lucide-react';
import { API_BASE } from '../../app/config/api';

const API_BASE_M= `${API_BASE}/view/admin`;   // ← Change to your actual backend URL

const ProjectReallocate = () => {
    const [searchPid, setSearchPid] = useState("");
    const [hasSearched, setHasSearched] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const [problem, setProblem] = useState(null);
    const [allocatedJudges, setAllocatedJudges] = useState([]);
    const [availableJudges, setAvailableJudges] = useState([]);
    const [selectedJudgeId, setSelectedJudgeId] = useState(null);
    const [reallocationHistory, setReallocationHistory] = useState([]);
    const [poolSearch, setPoolSearch] = useState("");
    // const [isEditingLab, setIsEditingLab] = useState(false);  // COMMENTED: Lab editing state removed
    // const [saveSuccess, setSaveSuccess] = useState(false);    // COMMENTED: Lab save success state removed
    const [reallocateSuccess, setReallocateSuccess] = useState(false);

    // Filter available judges
    const filteredAvailableJudges = availableJudges.filter((judge) => {
        const query = poolSearch.trim().toLowerCase();
        if (!query) return true;
        return (
            judge.id.toLowerCase().includes(query) ||
            judge.name.toLowerCase().includes(query) ||
            judge.expertise.toLowerCase().includes(query)
        );
    });

    // Fetch project data
    const fetchProject = async (pid) => {
        setLoading(true);
        setError("");
        try {
            // const res = await fetch(`${API_BASE_M}/project-reallocation/${pid}`);
            const res = await fetch(`${API_BASE_M}/project-reallocation/${pid}`, {
                headers: { 'Content-Type': 'application/json' },
  method: 'GET',
  credentials: 'include'
});
            const data = await res.json();

            if (!data.success) {
                throw new Error(data.message || "Failed to fetch project");
            }

            setProblem({
                pid: data.project.pid,
                title: data.project.title,
                domain: data.project.domain,
                description: data.project.description,
                
                // ==================== LAB SESSION HANDLING - COMMENTED OUT ====================
                // We store date and time separately for easy editing
                // labDate: data.project.lab ? data.project.lab.split(' ')[0] : "2026-04-15",
                // labTime: data.project.lab 
                //     ? data.project.lab.split(' ').slice(1).join(' ').trim() 
                //     : "10:00",
                // =============================================================
            });

            setAllocatedJudges(data.allocatedJudges.map(j => ({
                id: j.id,
                name: j.name,
                expertise: j.expertise,
                evaluated: j.evaluated || false
            })));

            setAvailableJudges(data.availableJudges.map(j => ({
                id: j.id,
                name: j.name,
                expertise: j.expertise
            })));

            setHasSearched(true);
            setReallocationHistory([]); 
        } catch (err) {
            setError(err.message);
            setHasSearched(false);
        } finally {
            setLoading(false);
        }
    };

    const handleSearch = (e) => {
        e.preventDefault();
        const trimmed = searchPid.trim().toUpperCase();
        if (trimmed) {
            fetchProject(trimmed);
        }
    };

    const handleSelectToReplace = (id) => {
        setSelectedJudgeId(prev => prev === id ? null : id);
    };

    const handleSwap = async (newJudge) => {
        if (!selectedJudgeId || !problem) return;

        const oldJudge = allocatedJudges.find(j => j.id === selectedJudgeId);
        if (!oldJudge) return;

        try {
            const res = await fetch(`${API_BASE_M}/reallocate-judge`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include' ,
                body: JSON.stringify({
                    pid: problem.pid,
                    oldJid: oldJudge.id,
                    newJid: newJudge.id
                })
            });

            const data = await res.json();

            if (!data.success) {
                alert(data.message || "Reallocation failed");
                return;
            }

            setAllocatedJudges(prev =>
                prev.map(j => j.id === selectedJudgeId ? { ...newJudge, evaluated: false } : j)
            );

            setAvailableJudges(prev => {
                const filtered = prev.filter(j => j.id !== newJudge.id);
                return [...filtered, { ...oldJudge }];
            });

            const now = new Date();
            setReallocationHistory(prev => [...prev, {
                from: oldJudge.name,
                to: newJudge.name,
                date: now.toISOString().split('T')[0],
                timestamp: now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
            }]);

            setSelectedJudgeId(null);
            setReallocateSuccess(true);
            setTimeout(() => setReallocateSuccess(false), 2500);

        } catch (err) {
            console.error(err);
            alert("Network error during reallocation");
        }
    };

    return (
       <div className="min-h-screen bg-[#020712] text-white pt-20 sm:pt-24 pb-12 px-4 sm:p-8 font-sans selection:bg-blue-500/30">
            <div className="max-w-7xl mx-auto space-y-10">

                {/* Header & Search */}
                <section className="space-y-6">
                    <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent tracking-tight">
                        Judge Reallocation Dashboard
                    </h1>

                    <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4">
                        <div className="relative w-full sm:w-96">
                            <Search className="absolute left-3 top-3.5 h-5 w-5 text-gray-500 pointer-events-none" />
                            <input
                                type="text"
                                value={searchPid}
                                onChange={(e) => setSearchPid(e.target.value)}
                                placeholder="Enter PID (e.g. IM123 or C456)"
                                className="block w-full pl-10 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500/50 text-white placeholder-gray-500"
                            />
                        </div>
                        <button
                            type="submit"
                            disabled={loading}
                            className="px-8 py-3 bg-blue-600 hover:bg-blue-500 disabled:bg-blue-800 font-semibold rounded-xl transition-all active:scale-95"
                        >
                            {loading ? "Searching..." : "Search PID"}
                        </button>
                    </form>

                    {error && <p className="text-red-400 text-sm">{error}</p>}
                </section>

                <AnimatePresence>
                    {hasSearched && problem && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="space-y-8"
                        >
                            {/* Problem Details - Lab Session Section REMOVED */}
                            <div className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">
                                <div className="flex flex-col md:flex-row gap-8">
                                    <div className="flex-1 space-y-5">
                                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
                                            <Info className="w-4 h-4" /> {problem.pid}
                                        </div>

                                        <h2 className="text-3xl font-bold text-white">{problem.title}</h2>
                                        <p className="text-blue-300 font-medium">{problem.domain}</p>
                                        <p className="text-gray-400 leading-relaxed">{problem.description}</p>

                                        {/* ==================== LAB SESSION EDITING SECTION - COMPLETELY REMOVED ==================== */}
                                        {/* The entire Lab Session UI block has been removed */}
                                        {/* ================================================================== */}

                                    </div>

                                    <div className="shrink-0 w-24 h-24 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-blue-400 self-start">
                                        <CheckCircle2 className="w-12 h-12 opacity-60" />
                                    </div>
                                </div>
                            </div>

                            {/* Reallocation Grid - Same as before */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                                {/* Allocated Judges Column */}
                                <div className="space-y-6">
                                    <h3 className="text-xl font-semibold flex items-center gap-2">
                                        Allocated Judges <span className="text-xs bg-white/10 px-2 py-0.5 rounded text-gray-400">{allocatedJudges.length}</span>
                                    </h3>
                                    <div className="space-y-4">
                                        {allocatedJudges.map((judge) => {
                                            const isSelected = selectedJudgeId === judge.id;
                                            return (
                                                <motion.div key={judge.id} className={`p-5 rounded-2xl border transition-all ${isSelected ? 'bg-blue-500/10 border-blue-500 ring-1 ring-blue-500' : 'bg-white/5 border-white/10 hover:bg-white/10'}`}>
                                                    <div className="flex justify-between items-center">
                                                        <div>
                                                            <p className="text-xs font-mono text-gray-500">{judge.id}</p>
                                                            <p className="font-semibold text-lg">{judge.name}</p>
                                                            <p className="text-sm text-gray-400">{judge.expertise}</p>
                                                            {judge.evaluated && <p className="text-xs text-emerald-400 mt-1">✓ Already Evaluated</p>}
                                                        </div>
                                                        <button
                                                            onClick={() => handleSelectToReplace(judge.id)}
                                                            className={`px-5 py-2 rounded-lg text-sm font-medium ${isSelected ? 'bg-blue-600 text-white' : 'bg-white/10 hover:bg-white/20'}`}
                                                        >
                                                            {isSelected ? "Selected" : "Replace"}
                                                        </button>
                                                    </div>
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Available Pool Column */}
                                <div className="space-y-6">
                                    <div className="flex justify-between items-center">
                                        <h3 className="text-xl font-semibold flex items-center gap-2">
                                            Available Judges Pool <span className="text-xs bg-white/10 px-2 py-0.5 rounded text-gray-400">{filteredAvailableJudges.length}</span>
                                        </h3>
                                        {selectedJudgeId && <p className="text-blue-400 text-sm">Select a judge above to assign</p>}
                                    </div>

                                    <div className="relative">
                                        <Search className="absolute left-4 top-3.5 h-4 w-4 text-gray-500" />
                                        <input
                                            type="text"
                                            value={poolSearch}
                                            onChange={(e) => setPoolSearch(e.target.value)}
                                            placeholder="Search by ID, name or expertise..."
                                            className="w-full pl-11 pr-4 py-3 bg-white/5 border border-white/10 rounded-xl focus:ring-2 focus:ring-blue-500 text-white"
                                        />
                                    </div>

                                    <div className="space-y-4 max-h-[520px] overflow-y-auto pr-2 custom-scrollbar">
                                        {filteredAvailableJudges.map((judge) => (
                                            <motion.div key={judge.id} className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-all">
                                                <div className="flex justify-between items-center">
                                                    <div>
                                                        <p className="text-xs font-mono text-gray-500">{judge.id}</p>
                                                        <p className="font-semibold">{judge.name}</p>
                                                        <p className="text-sm text-gray-400">{judge.expertise}</p>
                                                    </div>
                                                    <button
                                                        onClick={() => handleSwap(judge)}
                                                        disabled={!selectedJudgeId}
                                                        className={`px-6 py-2.5 rounded-xl flex items-center gap-2 text-sm font-medium transition-all ${selectedJudgeId ? 'bg-emerald-600 hover:bg-emerald-500 text-white' : 'bg-white/10 text-gray-500 cursor-not-allowed'}`}
                                                    >
                                                        <UserPlus className="w-4 h-4" /> Assign
                                                    </button>
                                                </div>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Reallocation History */}
                            {reallocationHistory.length > 0 && (
                                <div className="p-6 rounded-3xl bg-white/5 border border-white/10">
                                    <h3 className="font-semibold mb-4 flex items-center gap-2"><RefreshCw className="w-5 h-5" /> Reallocation History</h3>
                                    <div className="space-y-3">
                                        {reallocationHistory.map((entry, i) => (
                                            <div key={i} className="flex justify-between items-center bg-white/5 p-4 rounded-xl text-sm">
                                                <div>
                                                    <span className="text-red-400">{entry.from}</span>
                                                    <span className="text-gray-500 mx-3">→</span>
                                                    <span className="text-emerald-400">{entry.to}</span>
                                                </div>
                                                <div className="text-gray-400 text-xs">{entry.date} • {entry.timestamp}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            <AnimatePresence>
                                {reallocateSuccess && (
                                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} className="fixed bottom-8 right-8 bg-emerald-600 text-white px-6 py-3 rounded-2xl shadow-xl flex items-center gap-2">
                                        <CheckCircle2 className="w-5 h-5" /> Judge reallocated successfully!
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            <style jsx>{`
                .custom-scrollbar::-webkit-scrollbar { width: 6px; }
                .custom-scrollbar::-webkit-scrollbar-track { background: rgba(255,255,255,0.05); }
                .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(255,255,255,0.2); border-radius: 10px; }
            `}</style>
        </div>
    );
};

export default ProjectReallocate;