import { useEffect } from 'react';
import { styles } from '../styles';
import scrollToTop from '../utils/scrollToTop';
import { Navigate, useParams } from 'react-router-dom';
import winners2026 from '../data/winners2026.json';
import confetti from 'canvas-confetti';

const Results = () => {
	const { id } = useParams();

	useEffect(() => {     
    scrollToTop();     
  }, [id]);

  useEffect(() => {
    const burst = (originX, originY) => {
      confetti({
        particleCount: 80,
        spread: 90,
        origin: { x: originX, y: originY },
        colors: ["#ff4500", "#ffcc00", "#0000FF"],
      });
    };

    const timeoutRef = setTimeout(() => {         
      burst(0, 0.5);       
      burst(1, 0.5);       
      burst(0.5, 0.2);       
      burst(0.5, 0.8);     
    }, 700);    

    return () => clearTimeout(timeoutRef);
  }, []);

  const allowed = ['concepts'];
  if (!id) return null;
  if (!allowed.includes(id)) return <Navigate to="*" replace />;

  const orderedWinners = winners2026.map((group) => {
    const order = { 'Winner': 0, '1st Runner Up': 1, '2nd Runner Up': 2 };
    const sorted = [...group.values].sort((a, b) => (order[a.position] ?? 99) - (order[b.position] ?? 99));
    return { ...group, values: sorted };
  });

  const positionMeta = {
    'Winner': {
      badge: 'bg-emerald-500/15 text-emerald-300 border-emerald-400/30',
      bar: 'from-emerald-500/40 to-transparent'
    },
    '1st Runner Up': {
      badge: 'bg-sky-500/15 text-sky-300 border-sky-400/30',
      bar: 'from-sky-500/40 to-transparent'
    },
    '2nd Runner Up': {
      badge: 'bg-orange-500/15 text-orange-300 border-orange-400/30',
      bar: 'from-orange-500/40 to-transparent'
    },
  };

  return (
    <div className="bg-primary w-full">
      <section className="py-24 relative bg-primary w-full flex flex-col items-center min-h-screen">
        <h2 className={`${styles.sectionHeadText} text-white-100 pb-8 px-2 text-center`}>
          InC Results 2026
        </h2>

        <div className='w-full max-w-[90rem] max-sm:px-2'>
          {orderedWinners.map((g) => (
            <section className='flex flex-col items-center w-full gap-8 mb-16' key={g.id}>
              <div className='w-full bg-[#0b1324] border border-white-100/10 rounded-3xl px-4 sm:px-8 py-10'>
                <div className='w-full flex flex-col gap-2 mb-8'>
                  <h3 className='text-2xl sm:text-3xl font-semibold text-white-100'>
                    {g.dname}
                  </h3>
                  <div className='h-1 w-24 bg-gradient-to-r from-orange-100 via-light-blue to-dark-blue rounded-full'></div>
                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8'>
                  {g.values.map((m) => {
                    const meta = positionMeta[m.position] || positionMeta['2nd Runner Up'];
                    return (
                      <article key={m.team_id} className="bg-[#0a0f1d] border border-white-100/10 rounded-2xl overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.28)]">
                        <div className={`h-1 bg-gradient-to-r ${meta.bar}`}></div>
                        <div className='p-5 flex flex-col gap-4'>
                          <div className='flex items-center justify-between gap-4'>
                            <span className={`text-[11px] uppercase tracking-[0.22em] border px-2 py-1 rounded-full ${meta.badge}`}>
                              {m.position}
                            </span>
                            <span className='text-xs font-semibold text-white-100 bg-white-100/10 px-2 py-1 rounded-full'>
                              {m.team_id}
                            </span>
                          </div>

                          <div className='flex flex-col gap-2'>
                            <h4 className='text-lg font-semibold text-white-100 leading-snug'>
                              {m.title}
                            </h4>
                            <p className='text-sm text-secondary'>{m.institute}</p>
                          </div>

                          <div className='pt-2 border-t border-white-100/10 flex flex-col gap-3'>
                            <p className='text-xs uppercase tracking-[0.2em] text-secondary'>Team Members</p>
                            <div className='flex flex-col gap-3'>
                              {m.members.map((member, i) => (
                                <div className='flex flex-col gap-1' key={i}>
                                  <span className='text-sm text-white-100 font-medium'>{member.name}</span>
                                  <div className='text-xs text-secondary flex flex-wrap gap-4'>
                                    {member.phone && <span>Phone: {member.phone}</span>}
                                    {member.email && <span>Email: {member.email}</span>}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        </div>
                      </article>
                    );
                  })}
                </div>
              </div>
            </section>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Results;
