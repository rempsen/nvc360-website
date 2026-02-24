import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { CalendarPlus, Navigation, CheckCircle } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Protocol() {
    const containerRef = useRef(null);

    useEffect(() => {
        // In React 18 strict mode, contexts are best for GSAP
        const ctx = gsap.context(() => {
            const cards = gsap.utils.toArray('.sticky-card');

            cards.forEach((card, i) => {
                if (i === cards.length - 1) return; // Last card doesn't scale down

                ScrollTrigger.create({
                    trigger: cards[i + 1], // Triggered when the NEXT card comes into view
                    start: 'top bottom', // When the top of next card hits bottom of viewport
                    end: 'top top',      // Until the top of next card hits top of viewport
                    scrub: true,
                    animation: gsap.to(card, {
                        scale: 0.9,
                        opacity: 0.5,
                        filter: 'blur(20px)',
                        ease: 'none'
                    })
                });
            });
        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <section id="protocol" ref={containerRef} className="w-full relative z-20 pb-24 bg-moss-900">

            {/* Card 1 */}
            <div className="sticky-card h-[100dvh] w-full flex items-center justify-center p-6 bg-[#0a100c] sticky top-0 border-t border-white/5 shadow-[0_-20px_50px_rgba(0,0,0,0.5)]">
                <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 flex justify-center">
                        <div className="relative w-64 h-64 flex items-center justify-center">
                            <div className="absolute inset-0 border border-chartreuse/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                            <div className="absolute inset-4 border border-chartreuse/40 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                            <CalendarPlus className="w-32 h-32 text-chartreuse animate-pulse" />
                        </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <p className="text-chartreuse font-bold tracking-widest uppercase text-sm mb-4">Phase 01</p>
                        <h2 className="text-5xl font-serif italic text-white mb-6 pt-2">Create & Assign</h2>
                        <p className="text-white/60 text-lg">Dispatch smarter in seconds. Create a customized job and instantly assign the closest qualified technician.</p>
                    </div>
                </div>
            </div>

            {/* Card 2 */}
            <div className="sticky-card h-[100dvh] w-full flex items-center justify-center p-6 bg-[#0f1a13] sticky top-0 border-t border-white/5 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] rounded-t-[3rem]">
                <div className="max-w-4xl w-full flex flex-col md:flex-row-reverse items-center gap-12">
                    <div className="flex-1 flex justify-center">
                        <div className="relative w-64 h-64 flex items-center justify-center">
                            <div className="absolute inset-0 bg-white/5 rounded-full animate-ping"></div>
                            <Navigation className="w-32 h-32 text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.5)]" />
                        </div>
                    </div>
                    <div className="flex-1 text-center md:text-right">
                        <p className="text-white/50 font-bold tracking-widest uppercase text-sm mb-4">Phase 02</p>
                        <h2 className="text-5xl font-sans font-bold tracking-tighter text-white mb-6">Track & Communicate</h2>
                        <p className="text-white/60 text-lg">Live GPS tracking, automated ETAs, and in-app messaging keep technicians, managers, and customers aligned in real-time.</p>
                    </div>
                </div>
            </div>

            {/* Card 3 */}
            <div className="sticky-card h-[100dvh] w-full flex items-center justify-center p-6 bg-chartreuse sticky top-0 shadow-[0_-20px_50px_rgba(0,0,0,0.5)] rounded-t-[3rem] text-moss-900">
                <div className="max-w-4xl w-full flex flex-col md:flex-row items-center gap-12">
                    <div className="flex-1 flex justify-center">
                        <div className="relative w-64 h-64 flex items-center justify-center bg-moss-900 rounded-full shadow-2xl overflow-hidden">
                            <CheckCircle className="w-48 h-48 text-chartreuse scale-150 animate-[pulse_4s_ease-in-out_infinite]" />
                        </div>
                    </div>
                    <div className="flex-1 text-center md:text-left">
                        <p className="text-moss-900/60 font-bold tracking-widest uppercase text-sm mb-4">Phase 03</p>
                        <h2 className="text-7xl font-sans font-black tracking-tighter text-moss-900 mb-6 uppercase">Document & Close</h2>
                        <p className="text-moss-900/80 text-xl font-medium">Automatically log time, upload photos, collect approvals, and close jobs digitally — with all records securely stored.</p>
                    </div>
                </div>
            </div>

        </section>
    )
}
