import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function Hero() {
    const containerRef = useRef(null);
    const textRefs = useRef([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.from(textRefs.current, {
                y: 100,
                opacity: 0,
                duration: 1.2,
                stagger: 0.2,
                ease: 'power4.out',
                delay: 0.2,
            });
        }, containerRef);
        return () => ctx.revert();
    }, []);

    const addToRefs = (el) => {
        if (el && !textRefs.current.includes(el)) {
            textRefs.current.push(el);
        }
    };

    return (
        <section ref={containerRef} className="relative w-full h-[100dvh] overflow-hidden flex items-end pb-24 px-8 md:px-16">
            {/* Background Image */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1470115636492-6d2b56f9146d")' }}
            ></div>

            {/* Gradient Overlay */}
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-moss-900 via-moss-900/60 to-transparent"></div>

            {/* Content */}
            <div className="relative z-20 max-w-5xl w-full flex flex-col gap-2">
                <div className="overflow-hidden">
                    <h1
                        ref={addToRefs}
                        className="font-sans font-bold text-5xl md:text-7xl lg:text-8xl tracking-tighter text-white"
                    >
                        Real-Time Field
                    </h1>
                </div>
                <div className="overflow-hidden">
                    <h1
                        ref={addToRefs}
                        className="font-serif italic text-6xl md:text-8xl lg:text-9xl text-chartreuse mt-[-0.2em] pr-4 drop-shadow-2xl"
                    >
                        Operations.
                    </h1>
                </div>
                <div className="overflow-hidden mt-6">
                    <p ref={addToRefs} className="max-w-2xl text-white/80 text-lg md:text-xl font-medium leading-relaxed">
                        NVC360 is a mobile-first platform for construction, trades, and service companies that delivers smart scheduling, live technician tracking, and automated customer updates — without replacing your existing systems.
                    </p>
                </div>
            </div>
        </section>
    );
}
