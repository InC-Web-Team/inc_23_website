import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Info, CalendarDays, Clock4, MapPin, UserRound } from 'lucide-react';

const mockProblem = {
  pid: "P-1042",
  title: "AI-Powered PDF Summarizer",
  domain: "Machine Learning / NLP",
  description:
    "A system that takes large PDF documents and outputs concise summaries using transformer-based models and retrieval-augmented generation (RAG).",
  assignedJudgingSlots: {
    // Dummy setup: this project has only one Day 1 slot (5:00 PM - 7:00 PM)
    impetus: ["3"],
    concepts: ["3"],
  },
};

const getJudgingSlots = (event_name) => {
  const judgingSlotsImpetus = {
    "1": "Friday, 27th March (11:00 AM - 2:00 PM)",
    "2": "Friday, 27th March (2:00 PM - 5:00 PM)",
    "3": "Friday, 27th March (5:00 PM - 7:00 PM)",
    "4": "Saturday, 28th March (9:00 AM - 12:00 PM)",
    "5": "Saturday, 28th March (1:00 PM - 3:00 PM)",
    "6": "Saturday, 28th March (4:00 PM - 6:00 PM)",
  };

  const judgingSlotsConcepts = {
    "1": "Friday, 27th March (11:00 AM - 2:00 PM)",
    "2": "Friday, 27th March (2:00 PM - 4:00 PM)",
    "3": "Friday, 27th March (4:00 PM - 7:00 PM)",
    "4": "Saturday, 28th March (10:00 AM - 1:00 PM)",
    "5": "Saturday, 28th March (1:00 PM - 4:00 PM)",
    "6": "Saturday, 28th March (4:00 PM - 7:00 PM)",
  };

  if (event_name === 'impetus') return judgingSlotsImpetus;
  if (event_name === 'concepts') return judgingSlotsConcepts;
  return judgingSlotsImpetus;
};

const slotMeta = {
  1: { room: 'Lab A-201', coordinator: 'Prof. Priya Kulkarni' },
  2: { room: 'Lab A-203', coordinator: 'Prof. Nitin Deshmukh' },
  3: { room: 'Lab B-102', coordinator: 'Dr. Kavya Patil' },
  4: { room: 'Lab B-205', coordinator: 'Prof. Ashutosh More' },
  5: { room: 'Lab C-101', coordinator: 'Dr. Meera Shah' },
  6: { room: 'Lab C-204', coordinator: 'Prof. Rohan Joshi' },
};

const ScheduleCard = ({ slotLabel, room, coordinator, projectId }) => {
  return (
    <div className="p-5 rounded-2xl border border-white/10 bg-white/5 hover:bg-white/[0.07] transition-all">
      <div className="space-y-3">
        <p className="text-sm text-blue-300 flex items-center gap-2">
          <Clock4 className="w-4 h-4" />
          {slotLabel}
        </p>
        <p className="text-sm text-gray-300 flex items-center gap-2">
          <MapPin className="w-4 h-4" />
          {room}
        </p>
        <p className="text-sm text-gray-300 flex items-center gap-2">
          <UserRound className="w-4 h-4" />
          Coordinator: {coordinator}
        </p>
        <div className="px-2 py-1 text-xs bg-blue-500/15 border border-blue-500/40 rounded-md text-blue-300 inline-block">
          Project: {projectId}
        </div>
      </div>
    </div>
  );
};

const AdminJudgingSchedule = () => {
  const [pid, setPid] = useState('');
  const [hasSearched, setHasSearched] = useState(false);
  const [eventName, setEventName] = useState('impetus');

  const handleSearch = (e) => {
    e.preventDefault();
    if (pid.trim().toUpperCase() === mockProblem.pid) {
      setHasSearched(true);
    } else {
      alert('Problem ID not found! Try searching for P-1042');
    }
  };

  const judgingSlots = getJudgingSlots(eventName);
  const projectAssignedSlots = mockProblem.assignedJudgingSlots[eventName] || [];
  const groupedAllSlots = Object.entries(judgingSlots).reduce((acc, [slotId, slotLabel]) => {
    const dayKey = slotLabel.split('(')[0].trim();
    if (!acc[dayKey]) acc[dayKey] = [];
    acc[dayKey].push({ slotId, slotLabel, isAssigned: projectAssignedSlots.includes(slotId) });
    return acc;
  }, {});
  Object.values(groupedAllSlots).forEach((slots) => {
    slots.sort((a, b) => Number(a.slotId) - Number(b.slotId));
  });
  const orderedDayLabels = Object.keys(groupedAllSlots);

  return (
    <div className="min-h-screen bg-[#020712] text-white p-4 sm:p-8 font-sans selection:bg-blue-500/30">
      <div className="max-w-7xl mx-auto space-y-10">
        <section className="space-y-6">
          <div className="flex flex-col gap-2">
            <h1 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-white via-blue-200 to-blue-400 bg-clip-text text-transparent tracking-tight">
              Judge Scheduling Dashboard
            </h1>
            <p className="text-gray-400 text-sm sm:text-base max-w-2xl">
              Search by Problem ID to view day-wise project schedule with time slots, CSR lab allocation, and coordinator details.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setEventName('impetus')}
              className={`px-4 py-2 rounded-lg text-sm border ${eventName === 'impetus' ? 'bg-blue-600/30 border-blue-500/50 text-white' : 'bg-white/5 border-white/10 text-gray-300'}`}
            >
              Impetus
            </button>
            <button
              type="button"
              onClick={() => setEventName('concepts')}
              className={`px-4 py-2 rounded-lg text-sm border ${eventName === 'concepts' ? 'bg-blue-600/30 border-blue-500/50 text-white' : 'bg-white/5 border-white/10 text-gray-300'}`}
            >
              Concepts
            </button>
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
                className="block w-full pl-10 pr-3 py-3 border border-white/10 rounded-xl bg-white/5 backdrop-blur-md text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-transparent transition-all duration-300"
              />
            </div>
            <button
              type="submit"
              className="w-full sm:w-auto px-8 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl shadow-lg shadow-blue-900/20 transform transition-all active:scale-95"
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
              transition={{ duration: 0.45 }}
              className="space-y-8"
            >
              <div className="relative overflow-hidden p-6 sm:p-8 rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl shadow-2xl">
                <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

                <div className="relative z-10 space-y-4">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-400 text-xs font-bold uppercase tracking-wider">
                    <Info className="w-3 h-3" />
                    {mockProblem.pid}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">{mockProblem.title}</h2>
                  <p className="text-blue-300/80 font-medium">{mockProblem.domain}</p>
                  <p className="text-gray-400 leading-relaxed max-w-3xl italic">"{mockProblem.description}"</p>
                </div>
              </div>

              <section className="space-y-5">
                <div className="flex items-center gap-2 text-xl font-semibold text-white">
                  <CalendarDays className="w-5 h-5 text-blue-400" />
                  Day-wise Judging Schedule ({eventName})
                </div>

                <div className="grid grid-cols-1 gap-6">
                  {[1, 2, 3].map((dayNumber) => {
                    const dayLabel = orderedDayLabels[dayNumber - 1];
                    const slots = dayLabel ? groupedAllSlots[dayLabel] : [];

                    return (
                      <div key={dayNumber} className="rounded-2xl border border-white/10 bg-white/5 p-5">
                        <h3 className="text-lg font-semibold text-white mb-4">
                          {`Day ${dayNumber}${dayLabel ? ` - ${dayLabel}` : ''}`}
                        </h3>

                        {slots.length > 0 ? (
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {slots.map(({ slotId, slotLabel, isAssigned }) =>
                              isAssigned ? (
                                <ScheduleCard
                                  key={slotId}
                                  slotLabel={slotLabel}
                                  room={slotMeta[slotId]?.room || 'TBD Lab'}
                                  coordinator={slotMeta[slotId]?.coordinator || 'TBD Coordinator'}
                                  projectId={mockProblem.pid}
                                />
                              ) : (
                                <div
                                  key={slotId}
                                  className="p-5 rounded-2xl border border-dashed border-white/10 bg-black/10 text-gray-500 text-sm flex items-center justify-center text-center"
                                >
                                  Slot not assigned for this project
                                </div>
                              )
                            )}
                          </div>
                        ) : (
                          <div className="rounded-xl border border-dashed border-white/10 bg-black/10 px-4 py-6 text-sm text-gray-400">
                            No slot data available for this day.
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            </motion.div>
          )}
        </AnimatePresence>

        {!hasSearched && (
          <div className="py-20 flex flex-col items-center justify-center text-center space-y-4 opacity-50">
            <div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400">
              <Search className="w-8 h-8" />
            </div>
            <div className="space-y-1">
              <p className="text-lg font-medium text-white">No problem selected</p>
              <p className="text-gray-400 max-w-xs mx-auto text-sm">
                Use the search bar above to view schedule details for a specific PID.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminJudgingSchedule;
