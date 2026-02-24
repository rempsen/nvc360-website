import { useState, useEffect, useRef } from 'react';
import { clsx } from 'clsx';
import { MousePointer2, Activity } from 'lucide-react';

function DiagnosticShuffler() {
    const [cards, setCards] = useState([
        { id: 1, label: 'Labor Costs', value: '-20%', trend: 'Saved' },
        { id: 2, label: 'Client Satisfaction', value: '98%', trend: 'Peak' },
        { id: 3, label: 'Miscommunications', value: '-48%', trend: 'Reduced' },
    ]);

    useEffect(() => {
        const interval = setInterval(() => {
            setCards((prev) => {
                const newCards = [...prev];
                const last = newCards.pop();
                newCards.unshift(last);
                return newCards;
            });
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="bg-moss-800 rounded-[2rem] p-6 border border-white/5 relative h-full flex flex-col items-center justify-center overflow-hidden">
            <h3 className="text-white/50 text-xs uppercase font-bold tracking-widest absolute top-6 left-6">Field Visibility ROI</h3>
            <div className="relative w-full max-w-[220px] h-[180px] mt-8">
                {cards.map((card, index) => {
                    const isTop = index === 0;
                    const isMiddle = index === 1;

                    let yOffset = isTop ? 0 : isMiddle ? 20 : 40;
                    let scale = isTop ? 1 : isMiddle ? 0.9 : 0.8;
                    let opacity = isTop ? 1 : isMiddle ? 0.5 : 0.2;
                    let zIndex = 3 - index;

                    return (
                        <div
                            key={card.id}
                            className="absolute top-0 w-full bg-white text-moss-900 p-5 rounded-3xl shadow-2xl flex flex-col gap-2"
                            style={{
                                transform: `translateY(${yOffset}px) scale(${scale})`,
                                opacity,
                                zIndex,
                                transition: 'all 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)'
                            }}
                        >
                            <div className="text-[10px] font-bold text-moss-500 uppercase tracking-wider">{card.label}</div>
                            <div className="text-3xl font-serif italic font-bold leading-none">{card.value}</div>
                            <div className="text-xs font-bold text-moss-900 bg-chartreuse rounded-full px-2.5 py-1 w-max mt-1">
                                {card.trend}
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

function TelemetryTypewriter() {
    const messages = [
        "Assigning nearest technician...",
        "Sending automated ETA text...",
        "Job #4092 documented & closed...",
        "Syncing with existing CRM...",
    ];
    const [msgIdx, setMsgIdx] = useState(0);
    const [text, setText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    useEffect(() => {
        const fullText = messages[msgIdx];
        let speed = isDeleting ? 30 : 50;

        if (!isDeleting && text === fullText) {
            speed = 2000;
            const timer = setTimeout(() => setIsDeleting(true), speed);
            return () => clearTimeout(timer);
        }

        if (isDeleting && text === "") {
            setIsDeleting(false);
            setMsgIdx((prev) => (prev + 1) % messages.length);
            return;
        }

        const timer = setTimeout(() => {
            setText(fullText.substring(0, text.length + (isDeleting ? -1 : 1)));
        }, speed);

        return () => clearTimeout(timer);
    }, [text, isDeleting, msgIdx]);

    return (
        <div className="bg-moss-800 rounded-[2rem] p-6 border border-white/5 relative h-full flex flex-col font-mono text-sm group">
            <div className="flex items-center justify-between mb-8 relative z-10">
                <h3 className="text-white/50 text-xs uppercase font-sans font-bold tracking-widest">Live Dispatch Stream</h3>
                <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-chartreuse animate-pulse"></div>
                    <span className="text-chartreuse text-[10px] uppercase font-bold tracking-wider">Live Feed</span>
                </div>
            </div>
            <div className="flex-1 flex flex-col justify-center text-white/80 leading-relaxed text-base relative z-10">
                <p>
                    <span className="text-moss-500 mr-2 font-bold">{'>'}</span>
                    {text}
                    <span className="inline-block w-2 l min-h-[1em] bg-chartreuse ml-1 animate-pulse align-middle"></span>
                </p>
            </div>
            <Activity className="absolute bottom-[-10%] right-[-10%] text-white/5 w-64 h-64 group-hover:text-chartreuse/10 transition-colors duration-1000 ease-out" />
        </div>
    );
}

function AdaptiveRegimen() {
    const [activeDay, setActiveDay] = useState(null);
    const cursorRef = useRef(null);
    const daysRef = useRef([]);
    const saveBtnRef = useRef(null);

    useEffect(() => {
        let isActive = true;

        const runAnimation = async () => {
            const wait = (ms) => new Promise(r => setTimeout(r, ms));

            while (isActive) {
                setActiveDay(null);
                if (cursorRef.current) {
                    cursorRef.current.style.opacity = '0';
                    cursorRef.current.style.transform = 'translate(0px, 0px) scale(1)';
                }
                await wait(1000);
                if (!isActive) break;

                if (cursorRef.current) {
                    cursorRef.current.style.opacity = '1';
                    cursorRef.current.style.transition = 'all 1s cubic-bezier(0.25, 1, 0.5, 1)';
                }
                await wait(100);

                const targetDay = daysRef.current[3];
                if (targetDay && cursorRef.current) {
                    const rect = targetDay.getBoundingClientRect();
                    const parentRect = targetDay.parentElement.parentElement.getBoundingClientRect();
                    const x = rect.left - parentRect.left + rect.width / 2;
                    const y = rect.top - parentRect.top + rect.height / 2;
                    cursorRef.current.style.transform = `translate(${x}px, ${y}px) scale(1)`;
                }

                await wait(1000);
                if (!isActive) break;

                if (cursorRef.current) cursorRef.current.style.transform += ' scale(0.8)';
                await wait(200);

                setActiveDay(3);
                if (cursorRef.current) cursorRef.current.style.transform = cursorRef.current.style.transform.replace('scale(0.8)', 'scale(1)');

                await wait(800);
                if (!isActive) break;

                if (saveBtnRef.current && cursorRef.current) {
                    const rect = saveBtnRef.current.getBoundingClientRect();
                    const parentRect = saveBtnRef.current.parentElement.parentElement.getBoundingClientRect();
                    const x = rect.left - parentRect.left + rect.width / 2;
                    const y = rect.top - parentRect.top + rect.height / 2;
                    cursorRef.current.style.transform = `translate(${x}px, ${y}px) scale(1)`;
                }

                await wait(1000);
                if (!isActive) break;

                if (cursorRef.current) cursorRef.current.style.transform += ' scale(0.8)';
                if (saveBtnRef.current) saveBtnRef.current.style.transform = 'scale(0.95)';
                await wait(200);

                if (cursorRef.current) cursorRef.current.style.transform = cursorRef.current.style.transform.replace('scale(0.8)', 'scale(1)');
                if (saveBtnRef.current) saveBtnRef.current.style.transform = 'scale(1)';

                await wait(500);

                if (cursorRef.current) cursorRef.current.style.opacity = '0';

                await wait(2000);
            }
        };

        runAnimation();

        return () => { isActive = false; };
    }, []);

    const days = ['S', 'M', 'T', 'W', 'T', 'F', 'S'];

    return (
        <div className="bg-moss-800 rounded-[2rem] p-6 border border-white/5 relative h-full flex flex-col select-none overflow-hidden group">
            <h3 className="text-white/50 text-xs uppercase font-bold tracking-widest mb-10 relative z-10">Adaptive Regimen</h3>

            <div className="grid grid-cols-7 gap-1 lg:gap-2 mb-8 relative z-10 mt-auto">
                {days.map((d, i) => (
                    <div
                        key={i}
                        ref={el => daysRef.current[i] = el}
                        className={clsx(
                            "aspect-square rounded-xl flex items-center justify-center text-xs lg:text-sm font-bold transition-colors duration-300",
                            activeDay === i ? "bg-chartreuse text-moss-900 border border-chartreuse" : "bg-moss-900 text-white/40 border border-transparent"
                        )}
                    >
                        {d}
                    </div>
                ))}
            </div>

            <div className="mt-auto flex justify-between items-center relative z-10">
                <div className="text-[10px] uppercase tracking-widest text-white/50 font-bold">Auto-Dispatch Protocol</div>
                <button
                    ref={saveBtnRef}
                    className="bg-white text-moss-900 hover:bg-chartreuse px-5 py-2 rounded-full text-xs font-bold transition-all duration-300"
                >
                    Save
                </button>
            </div>

            <div
                ref={cursorRef}
                className="absolute top-0 left-0 w-8 h-8 z-50 pointer-events-none opacity-0 drop-shadow-2xl"
                style={{ transformOrigin: 'top left' }}
            >
                <MousePointer2 className="text-white fill-moss-900 w-full h-full" />
            </div>
        </div>
    );
}

export default function Features() {
    return (
        <section id="features" className="w-full min-h-screen bg-moss-900 py-32 px-6 relative z-20">
            <div className="max-w-6xl mx-auto">
                <h2 className="text-5xl md:text-6xl font-serif italic text-chartreuse mb-20 text-center lg:text-left shadow-chartreuse/20 drop-shadow-lg">
                    The Field Operations<br /><span className="font-sans not-italic text-white font-bold text-6xl md:text-7xl tracking-tighter shadow-none">Dashboard</span>
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[420px]">
                    <DiagnosticShuffler />
                    <TelemetryTypewriter />
                    <AdaptiveRegimen />
                </div>
            </div>
        </section>
    )
}
