import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, UserPlus, RefreshCw, Info, CheckCircle2 } from 'lucide-react';

const mockProblem = {
    pid: "P-1042",
    title: "AI-Powered PDF Summarizer",
    domain: "Machine Learning / NLP",
    description: "A system that takes large PDF documents and outputs concise summaries using transformer-based models and retrieval-augmented generation (RAG)."
};

const initialAllocatedJudges = [
    { id: "J-001", name: "Dr. Aradhana Sharma", expertise: "NLP & Deep Learning", status: "Allocated" },
    { id: "J-002", name: "Prof. Rajesh Verma", expertise: "Cloud Computing", status: "Allocated" }
];

const initialAvailableJudges = [
    { id: "J-005", name: "Dr. Neha Gupta", expertise: "Machine Learning", status: "Available" },
    { id: "J-008", name: "Amitabh Singh", expertise: "Software Engineering", status: "Available" },
    { id: "J-012", name: "Dr. Sanya Malhotra", expertise: "Data Science", status: "Available" },
    { id: "J-015", name: "Vikram Rathore", expertise: "AI Ethics", status: "Available" },
    { id: "J-021", name: "Pooja Hegde", expertise: "Computer Vision", status: "Available" }
];

const AdminReallocate = () => {
    const [pid, setPid] = useState("");
    const [poolSearch, setPoolSearch] = useState("");
    const [hasSearched, setHasSearched] = useState(false);
    const [allocatedJudges, setAllocatedJudges] = useState(initialAllocatedJudges);
    const [availableJudges, setAvailableJudges] = useState(initialAvailableJudges);
    const [selectedJudgeId, setSelectedJudgeId] = useState(null);
    const filteredAvailableJudges = availableJudges.filter((judge) => {
        const query = poolSearch.trim().toLowerCase();
        if (!query) return true;

        return (
            judge.id.toLowerCase().includes(query) ||
            judge.name.toLowerCase().includes(query) ||
            judge.expertise.toLowerCase().includes(query)
        );
    });

    const handleSearch = (e) => {
        e.preventDefault();
        if (pid.trim().toUpperCase() === mockProblem.pid) {
            setHasSearched(true);
        } else {
            alert("Problem ID not found! Try searching for P-1042");
        }
    };

    const handleSelectToReplace = (id) => {
        setSelectedJudgeId(prevId => prevId === id ? null : id);
    };

    const handleSwap = (newJudge) => {
        if (!selectedJudgeId) return;

        // 1. Find the judge to be replaced
        const oldJudge = allocatedJudges.find(j => j.id === selectedJudgeId);

        // 2. Update Allocated Judges: Replace old with new
        setAllocatedJudges(prev =>
            prev.map(j => j.id === selectedJudgeId ? { ...newJudge, status: "Allocated" } : j)
        );

        // 3. Update Available Judges: Remove new, add old back
        setAvailableJudges(prev => {
            const filtered = prev.filter(j => j.id !== newJudge.id);
            return [...filtered, { ...oldJudge, status: "Available" }];
        });

        // 4. Reset selection
        setSelectedJudgeId(null);
    };

    return (
        <div className="min-h-screen bg-[#020712] text-white p-4 sm:p-8 font-sans selection:bg-blue-500/30">
            <div className="max-w-7xl mx-auto space-y-10">

                {/* --- Header & Search Section --- */}
                <section className="space-y-6">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent tracking-tight">
                            Judge Reallocation Dashboard
                        </h1>
                        <p className="text-gray-400 text-sm sm:text-base max-w-2xl">
                            Search for project initiatives by Problem ID to manage and rebalance judge assignments with glassmorphic efficiency.
                        </p>
                    </div>

                    <form onSubmit={handleSearch} className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                        <div className="relative w-full sm:w-96 group">
                            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                <Search className="h-5 w-5 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
                            </div>
                            <input
                                type="text"
                                value={pid}
                                onChange={(e) => setPid(e.target.value)}
                                placeholder="Enter PID (e.g. P-1042)"
                                className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-xl bg-white/5 backdrop-blur-md 
                         text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent
                         transition-all duration-300"
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl
                       shadow-lg shadow-blue-900/20 transform transition-all active:scale-95 flex items-center justify-center gap-2"
                        >
                            Search PID
                        </button>
                    </form>
                </section>

                <AnimatePresence>
                    {hasSearched && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="space-y-8"
                        >
                            {/* --- Problem Details Card --- */}
                            <div className="relative overflow-hidden p-6 sm:p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
                                {/* Decorative background glow */}
                                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

                                <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                                    <div className="space-y-4">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
                                            <Info className="w-3 h-3" />
                                            {mockProblem.pid}
                                        </div>
                                        <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                                            {mockProblem.title}
                                        </h2>
                                        <p className="text-blue-300/80 font-medium">{mockProblem.domain}</p>
                                        <p className="text-gray-400 leading-relaxed max-w-3xl italic">
                                            "{mockProblem.description}"
                                        </p>
                                    </div>
                                    <div className="shrink-0 flex items-center justify-center w-20 h-20 rounded-full bg-white/5 border border-white/10 text-blue-400">
                                        <CheckCircle2 className="w-10 h-10 opacity-50" />
                                    </div>
                                </div>
                            </div>

                            {/* --- Reallocation Grid --- */}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                                {/* Column A: Allocated */}
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-semibold flex items-center gap-2 text-white">
                                            Allocated Judges
                                            <span className="text-xs bg-white/10 px-2 py-0.5 rounded-md text-gray-400">{allocatedJudges.length}</span>
                                        </h3>
                                    </div>

                                    <div className="space-y-4">
                                        {allocatedJudges.map((judge) => {
                                            const isSelected = selectedJudgeId === judge.id;
                                            return (
                                                <motion.div
                                                    key={judge.id}
                                                    layout
                                                    className={`relative p-5 rounded-2xl border transition-all duration-300 group
                            ${isSelected
                                                            ? 'bg-blue-500/10 border-blue-500/50 ring-2 ring-blue-500/20 shadow-[0_0_20px_rgba(59,130,246,0.15)]'
                                                            : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/[0.07]'
                                                        }`}
                                                >
                                                    <div className="flex items-center justify-between gap-4">
                                                        <div className="space-y-1">
                                                            <p className="text-xs text-gray-500 font-mono tracking-tighter uppercase">{judge.id}</p>
                                                            <h4 className="font-semibold text-lg text-white group-hover:text-blue-300 transition-colors">
                                                                {judge.name}
                                                            </h4>
                                                            <p className="text-sm text-gray-400">{judge.expertise}</p>
                                                        </div>
                                                        <button
                                                            onClick={() => handleSelectToReplace(judge.id)}
                                                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all
                                ${isSelected
                                                                    ? 'bg-blue-500 text-white shadow-lg shadow-blue-500/30'
                                                                    : 'bg-white/5 text-gray-300 hover:bg-white/10 border border-white/10'
                                                                }`}
                                                        >
                                                            {isSelected ? "Selected" : "Replace"}
                                                        </button>
                                                    </div>

                                                    {isSelected && (
                                                        <div className="absolute top-0 right-0 mt-2 mr-2">
                                                            <div className="animate-pulse w-2 h-2 bg-blue-500 rounded-full"></div>
                                                        </div>
                                                    )}
                                                </motion.div>
                                            );
                                        })}
                                    </div>
                                </div>

                                {/* Column B: Available Pool */}
                                <div className="space-y-6">
                                    <div className="flex items-center justify-between">
                                        <h3 className="text-xl font-semibold flex items-center gap-2 text-white">
                                            Available Judges Pool
                                            <span className="text-xs bg-white/10 px-2 py-0.5 rounded-md text-gray-400">
                                                {filteredAvailableJudges.length}/{availableJudges.length}
                                            </span>
                                        </h3>
                                        {selectedJudgeId && (
                                            <div className="text-xs text-blue-400 font-medium">
                                                Ready for assignment
                                            </div>
                                        )}
                                    </div>

                                    <div className="relative group">
                                        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                            <Search className="h-4 w-4 text-gray-500 group-focus-within:text-blue-400 transition-colors" />
                                        </div>
                                        <input
                                            type="text"
                                            value={poolSearch}
                                            onChange={(e) => setPoolSearch(e.target.value)}
                                            placeholder="Search available judges (ID, name, expertise)"
                                            className="block w-full pl-10 pr-3 py-2.5 border border-white/10 rounded-xl bg-white/5 backdrop-blur-md 
                                            text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent
                                            transition-all duration-300"
                                        />
                                    </div>

                                    <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
                                        {filteredAvailableJudges.map((judge) => (
                                            <motion.div
                                                key={judge.id}
                                                layout
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                className="p-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/[0.07] transition-all group"
                                            >
                                                <div className="flex items-center justify-between gap-4 text-left">
                                                    <div className="space-y-1">
                                                        <p className="text-xs text-gray-500 font-mono tracking-tighter uppercase">{judge.id}</p>
                                                        <h4 className="font-semibold text-white group-hover:text-blue-300 transition-colors">{judge.name}</h4>
                                                        <p className="text-sm text-gray-400">{judge.expertise}</p>
                                                    </div>
                                                    <button
                                                        onClick={() => handleSwap(judge)}
                                                        disabled={!selectedJudgeId}
                                                        className={`px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all
                              ${selectedJudgeId
                                                                ? 'bg-blue-600/20 text-blue-400 border border-blue-500/40 hover:bg-blue-600 hover:text-white'
                                                                : 'bg-white/5 text-gray-600 border border-white/5 cursor-not-allowed opacity-50'
                                                            }`}
                                                    >
                                                        <UserPlus className="w-4 h-4" />
                                                        Assign
                                                    </button>
                                                </div>
                                            </motion.div>
                                        ))}
                                        {filteredAvailableJudges.length === 0 && (
                                            <div className="p-10 border-2 border-dashed border-white/5 rounded-3xl flex flex-col items-center justify-center text-gray-500 italic">
                                                {availableJudges.length === 0
                                                    ? "No judges available in pool."
                                                    : "No judges match your search."}
                                            </div>
                                        )}
                                    </div>
                                </div>

                            </div>

                            {/* --- Interaction Tip --- */}
                            <div className="flex items-center justify-center py-4 px-6 rounded-2xl bg-blue-500/5 border border-blue-500/10 text-blue-400/60 text-xs sm:text-sm text-center italic">
                                <RefreshCw className="w-4 h-4 mr-2 animate-spin-slow" />
                                Select an allocated judge first, then assign a replacement from the pool to swap their positions.
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* --- Empty State / Initial Prompt --- */}
                {!hasSearched && (
                    <div className="py-20 flex flex-col items-center justify-center text-center space-y-4 opacity-50">
                        <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400">
                            <Search className="w-8 h-8" />
                        </div>
                        <div className="space-y-1">
                            <p className="text-lg font-medium text-white">No problem selected</p>
                            <p className="text-gray-400 max-w-xs mx-auto text-sm">Use the search bar above to begin the judge reallocation process for a specific PID.</p>
                        </div>
                    </div>
                )}
            </div>

            <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.02);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(255, 255, 255, 0.2);
        }
      `}</style>
        </div>
    );
};

export default AdminReallocate;
