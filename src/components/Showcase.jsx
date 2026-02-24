import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Import images (Vite handles missing assets by throwing errors if they don't exist at build, 
// so for the preview to not crash, we'll use conditional imports or just URLs if needed.
// However, assuming the user will add them, we'll use standard paths or dynamic paths).

// To prevent Vite from crashing before the user adds the files, we use a generic placeholder 
// if the import fails, but since we can't try/catch static imports, we will just use the public folder
// or standard img src tags which won't break the dev server.

gsap.registerPlugin(ScrollTrigger);

export default function Showcase() {
    const containerRef = useRef(null);
    const mainImgRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.to(mainImgRef.current, {
                scale: 1.05,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section id="platform" ref={containerRef} className="w-full bg-moss-900 py-32 px-6 relative z-20 border-t border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-20 max-w-3xl mx-auto">
                    <h2 className="text-5xl md:text-6xl font-sans font-bold text-white tracking-tighter mb-6">
                        Uberize your <span className="text-chartreuse font-serif italic">Business</span>
                    </h2>
                    <p className="text-white/60 text-lg md:text-xl">
                        Schedule, track, and communicate from a single pane of glass. Give your dispatchers god-mode visibility and your technicians the perfect mobile workflow.
                    </p>
                </div>

                {/* Main Hero Showcase */}
                <div className="relative w-full aspect-[16/9] md:aspect-[21/9] bg-[#0a100c] rounded-[3rem] border border-white/10 overflow-hidden shadow-2xl mb-8 group">
                    <div className="absolute inset-0 bg-chartreuse/5 group-hover:bg-transparent transition-colors duration-700 z-10 pointer-events-none"></div>
                    <img
                        ref={mainImgRef}
                        src="/src/assets/multidevice.png"
                        alt="NVC360 Multi-Device Sync"
                        onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=2000&q=80'; }}
                        className="w-full h-full object-cover opacity-90"
                    />
                </div>

                {/* Side by side screenshots */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="bg-moss-800 rounded-[2rem] border border-white/5 overflow-hidden group">
                        <div className="p-8 pb-0">
                            <h3 className="text-2xl font-bold text-white mb-2">Live Dispatch Control</h3>
                            <p className="text-white/50 mb-8">Manage hundreds of agile field agents on a real-time map.</p>
                        </div>
                        <div className="aspect-[4/3] w-full bg-[#0a100c] relative overflow-hidden px-8">
                            <img
                                src="/src/assets/app2.jpg"
                                alt="Dispatcher Screen"
                                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&w=1000&q=80'; }}
                                className="w-full h-full object-cover object-top rounded-t-2xl shadow-2xl group-hover:-translate-y-2 transition-transform duration-700"
                            />
                        </div>
                    </div>

                    <div className="bg-moss-800 rounded-[2rem] border border-white/5 overflow-hidden group">
                        <div className="p-8 pb-0">
                            <h3 className="text-2xl font-bold text-white mb-2">Technician Mobile UI</h3>
                            <p className="text-white/50 mb-8">Crystal clear job parameters, zero guesswork.</p>
                        </div>
                        <div className="aspect-[4/3] w-full bg-[#0a100c] relative overflow-hidden px-16 pt-8">
                            <img
                                src="/src/assets/app1.jpg"
                                alt="Mobile UI"
                                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1000&q=80'; }}
                                className="w-full h-full object-cover object-top rounded-t-3xl shadow-2xl group-hover:-translate-y-2 transition-transform duration-700"
                            />
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
}
