import { useState } from "react";

/* ─── Static Data ─── */
const LABS = ["Lab 101", "Lab 102", "Lab 103", "Lab 104", "Lab 105"];
const DAYS = ["27 Mar 2026", "28 Mar 2026", "29 Mar 2026"];
const SESSIONS = ["Session 1", "Session 2", "Session 3"];

const PROJECT_NAMES = ["Smart Irrigation", "AI Chatbot", "Blockchain Voting", "AR Navigation", "IoT Health", "Cloud Manager", "ML Fraud"];
const JUDGE_NAMES = ["Dr. Ravi Sharma", "Prof. Meena Iyer", "Dr. Arjun Patel", "Prof. Sunita Rao", "Dr. Vikram Nair"];

function generateData() {
  const data = {};
  LABS.forEach((lab) => {
    data[lab] = {};
    DAYS.forEach((day) => {
      data[lab][day] = {};
      SESSIONS.forEach((session) => {
        const rows = [];
        for (let i = 0; i < 8; i++) {
          rows.push({
            id: `${lab}-${day}-${session}-${i}`,
            pid: `P${Math.floor(Math.random() * 900) + 100}`,
            projectName: PROJECT_NAMES[Math.floor(Math.random() * PROJECT_NAMES.length)],
            jid: `J${Math.floor(Math.random() * 90) + 10}`,
            judgeName: JUDGE_NAMES[Math.floor(Math.random() * JUDGE_NAMES.length)],
            teamPresent: Math.random() > 0.3,
            judgePresent: Math.random() > 0.2,
          });
        }
        data[lab][day][session] = rows;
      });
    });
  });
  return data;
}

const StatusToggle = ({ value, onChange, disabled, activeLabel, inactiveLabel }) => (
  <div style={styles.toggleContainer}>
    <button
      onClick={() => !disabled && onChange(!value)}
      disabled={disabled}
      style={{
        ...styles.toggleButton,
        background: value ? "#10b981" : "#374151",
        cursor: disabled ? "not-allowed" : "pointer",
        opacity: disabled ? 0.6 : 1,
      }}
    >
      <div style={{
        ...styles.toggleSlider,
        left: value ? "24px" : "3px",
      }} />
    </button>
    <span style={{
      ...styles.toggleLabel,
      color: value ? "#34d399" : "#8b949e",
    }}>
      {value ? activeLabel : inactiveLabel}
    </span>
  </div>
);

export default function Attendance() {
  const [allData] = useState(generateData);
  const [pending, setPending] = useState({ lab: LABS[0], day: DAYS[0], session: SESSIONS[0] });
  const [active, setActive] = useState({ lab: null, day: null, session: null });
  const [tableData, setTableData] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [draft, setDraft] = useState(null);

  const handleLoad = () => {
    setActive({ ...pending });
    setTableData([...allData[pending.lab][pending.day][pending.session]]);
    setEditingId(null);
    setDraft(null);
  };

  const isDirty = pending.lab !== active.lab || pending.day !== active.day || pending.session !== active.session;

  return (
    <div style={styles.container}>
      <div style={styles.wrapper}>
        {/* Header */}
        <header style={styles.header}>
          <h1 style={styles.title}>
            Attendance Tracker
          </h1>
          <p style={styles.subtitle}>
            Internal Project Evaluation & Attendance Dashboard
          </p>
        </header>

        {/* Filters Card */}
        <div style={styles.filtersCard}>
          <div style={styles.filtersContainer}>
            <div style={styles.filtersGrid}>
              {[
                { key: "lab", label: "Laboratory", options: LABS },
                // { key: "day", label: "Date", options: DAYS },
                { key: "session", label: "Session", options: SESSIONS }
              ].map(({ key, label, options }) => (
                <div key={key} style={styles.filterGroup}>
                  <label style={styles.filterLabel}>
                    {label}
                  </label>
                  <select
                    value={pending[key]}
                    onChange={e => setPending({ ...pending, [key]: e.target.value })}
                    style={styles.select}
                  >
                    {options.map(opt => (
                      <option key={opt} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
              ))}
            </div>

            <button
              onClick={handleLoad}
              disabled={!isDirty}
              style={{
                ...styles.loadButton,
                background: isDirty ? "#238636" : "#21262d",
                cursor: isDirty ? "pointer" : "default",
                boxShadow: isDirty ? "0 2px 8px rgba(35, 134, 54, 0.3)" : "none",
              }}
            >
              {isDirty ? "📋 Load Schedule" : "✓ Schedule Loaded"}
            </button>
          </div>
        </div>

        {/* Main Content */}
        {active.lab ? (
          <div style={styles.tableCard}>
            <div style={styles.tableHeader}>
              <div>
                <h2 style={styles.tableTitle}>
                  {active.lab}
                </h2>
                <p style={styles.tableSubtitle}>
                  {active.day} • {active.session}
                </p>
              </div>
              <div style={styles.projectCount}>
                📊 8 Projects
              </div>
            </div>

            <div style={styles.tableWrapper}>
              <table style={styles.table}>
                <thead>
                  <tr style={styles.tableRow}>
                    <th style={styles.th}>Project</th>
                    <th style={styles.th}>Team</th>
                    <th style={styles.th}>Judge</th>
                    <th style={{ ...styles.th, width: "100px", textAlign: "center" }}>Action</th>
                  </tr>
                </thead>
                <tbody>
                  {tableData.map((row, idx) => {
                    const isEditing = editingId === row.id;
                    const r = isEditing ? draft : row;

                    return (
                      <tr 
                        key={row.id} 
                        style={{
                          ...styles.tableRow,
                          background: idx % 2 === 0 ? "#161b22" : "#0f1217",
                        }}
                      >
                        <td style={styles.td} data-label="Project">
                          <div style={styles.projectName}>{r.projectName}</div>
                          <div style={styles.pid}>ID: {r.pid}</div>
                          <div style={styles.judgeId}>
                            Judge: {r.jid}
                          </div>
                        </td>

                        <td style={styles.td} data-label="Team Attendance">
                          <StatusToggle
                            value={r.teamPresent}
                            onChange={v => isEditing && setDraft({ ...draft, teamPresent: v })}
                            disabled={!isEditing}
                            activeLabel="Present"
                            inactiveLabel="Absent"
                          />
                        </td>

                        <td style={styles.td} data-label="Judge Attendance">
                          <div style={styles.judgeName}>{r.judgeName}</div>
                          <StatusToggle
                            value={r.judgePresent}
                            onChange={v => isEditing && setDraft({ ...draft, judgePresent: v })}
                            disabled={!isEditing}
                            activeLabel="Present"
                            inactiveLabel="Absent"
                          />
                        </td>

                        <td style={{ ...styles.td, textAlign: "center", padding: "16px 12px" }} data-label="Action">
                          {isEditing ? (
                            <button 
                              onClick={() => {
                                setTableData(tableData.map(it => it.id === editingId ? draft : it));
                                setEditingId(null);
                              }} 
                              style={styles.saveBtn}
                            >
                              ✓ Save
                            </button>
                          ) : (
                            <button 
                              onClick={() => {
                                setEditingId(row.id);
                                setDraft({ ...row });
                              }} 
                              style={styles.editBtn}
                            >
                              ✎ Edit
                            </button>
                          )}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div style={styles.emptyState}>
            <div style={styles.emptyIcon}></div>
            <p style={styles.emptyTitle}>No Data Loaded</p>
            <p style={styles.emptySubtitle}>
              Select filters above and click <strong style={{ color: "#58a6ff" }}>Search Schedule</strong>
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "#0a0c10",
    color: "#c9d1d9",
    fontFamily: "system-ui, -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
    padding: "16px 12px",
  },
  wrapper: {
    maxWidth: "1280px",
    margin: "0 auto",
  },
  header: {
    marginBottom: "32px",
    textAlign: "center",
  },
  title: {
    fontSize: "clamp(26px, 6vw, 36px)",
    fontWeight: "800",
    color: "#ffffff",
    margin: "0 0 8px 0",
    letterSpacing: "-0.03em",
    background: "linear-gradient(135deg, #fff 0%, #8b949e 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
  },
  subtitle: {
    color: "#8b949e",
    fontSize: "15px",
    maxWidth: "500px",
    margin: "0 auto",
  },
  filtersCard: {
    background: "#161b22",
    borderRadius: "20px",
    padding: "24px 20px",
    marginBottom: "28px",
    border: "1px solid #30363d",
    boxShadow: "0 8px 24px rgba(0, 0, 0, 0.2)",
  },
  filtersContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
  },
  filtersGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: "16px",
  },
  filterGroup: {
    display: "flex",
    flexDirection: "column",
  },
  filterLabel: {
    display: "block",
    color: "#8b949e",
    fontSize: "12px",
    fontWeight: "600",
    marginBottom: "8px",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
  },
  select: {
    width: "100%",
    background: "#0d1117",
    border: "1px solid #30363d",
    padding: "14px 16px",
    borderRadius: "12px",
    fontSize: "15px",
    color: "#fff",
    outline: "none",
    cursor: "pointer",
    transition: "border-color 0.2s",
  },
  loadButton: {
    padding: "14px 24px",
    borderRadius: "12px",
    border: "none",
    color: "#fff",
    fontWeight: "700",
    fontSize: "15px",
    transition: "all 0.2s",
    width: "100%",
  },
  tableCard: {
    background: "#161b22",
    borderRadius: "20px",
    border: "1px solid #30363d",
    overflow: "hidden",
    boxShadow: "0 12px 32px rgba(0, 0, 0, 0.3)",
  },
  tableHeader: {
    padding: "18px 20px",
    background: "#0d1117",
    borderBottom: "1px solid #30363d",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
    gap: "12px",
  },
  tableTitle: {
    margin: 0,
    fontSize: "18px",
    fontWeight: "700",
    color: "#ffffff",
  },
  tableSubtitle: {
    margin: "4px 0 0 0",
    fontSize: "13px",
    color: "#8b949e",
  },
  projectCount: {
    fontSize: "13px",
    color: "#58a6ff",
    background: "rgba(88, 166, 255, 0.1)",
    padding: "6px 12px",
    borderRadius: "20px",
    fontWeight: "500",
  },
  tableWrapper: {
    overflowX: "auto",
    WebkitOverflowScrolling: "touch",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    minWidth: "680px",
    fontSize: "14px",
  },
  th: {
    padding: "16px 20px",
    fontSize: "12px",
    fontWeight: "700",
    color: "#8b949e",
    textTransform: "uppercase",
    letterSpacing: "0.6px",
    borderBottom: "1px solid #30363d",
    background: "#0d1117",
    textAlign: "left",
  },
  td: {
    padding: "18px 20px",
    borderBottom: "1px solid #21262d",
    verticalAlign: "middle",
    fontSize: "14px",
  },
  tableRow: {
    transition: "background 0.2s ease",
  },
  projectName: {
    fontWeight: "700",
    color: "#f0f6fc",
    fontSize: "15px",
    lineHeight: "1.4",
    marginBottom: "4px",
  },
  pid: {
    fontSize: "12px",
    color: "#8b949e",
    fontFamily: "monospace",
  },
  judgeId: {
    fontSize: "11px",
    color: "#6e7681",
    marginTop: "4px",
  },
  judgeName: {
    fontSize: "13px",
    color: "#c9d1d9",
    marginBottom: "8px",
    fontWeight: "500",
  },
  editBtn: {
    background: "transparent",
    color: "#58a6ff",
    border: "1px solid #30363d",
    padding: "8px 20px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: "600",
    transition: "all 0.2s",
  },
  saveBtn: {
    background: "#238636",
    color: "#fff",
    border: "none",
    padding: "8px 24px",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "13px",
    fontWeight: "700",
    boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
  },
  emptyState: {
    textAlign: "center",
    padding: "80px 24px",
    border: "2px dashed #30363d",
    borderRadius: "20px",
    background: "#161b22",
  },
  emptyIcon: {
    fontSize: "48px",
    marginBottom: "16px",
  },
  emptyTitle: {
    fontSize: "20px",
    marginBottom: "8px",
    color: "#e6edf3",
    fontWeight: "500",
  },
  emptySubtitle: {
    color: "#8b949e",
    fontSize: "14px",
  },
  toggleContainer: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    flexWrap: "wrap",
  },
  toggleButton: {
    width: "48px",
    height: "26px",
    borderRadius: "9999px",
    border: "none",
    position: "relative",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
    flexShrink: 0,
  },
  toggleSlider: {
    position: "absolute",
    top: "3px",
    width: "20px",
    height: "20px",
    borderRadius: "50%",
    background: "#ffffff",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
  },
  toggleLabel: {
    fontSize: "13px",
    fontWeight: "600",
  },
};