import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Philosophy() {
    const containerRef = useRef(null);
    const firstTextRef = useRef(null);
    const secondTextRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Background Parallax
            gsap.to('.organic-bg', {
                yPercent: 30,
                ease: 'none',
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: true,
                },
            });

            // Split Text Reveals using simple opacity/y staggering by chars without premium plugins
            // We will just animate the whole lines for simplicity and robustness
            gsap.from(firstTextRef.current, {
                opacity: 0.1,
                y: 50,
                scrollTrigger: {
                    trigger: firstTextRef.current,
                    start: 'top 80%',
                    end: 'bottom 50%',
                    scrub: 1,
                }
            });

            gsap.from(secondTextRef.current, {
                opacity: 0,
                scale: 0.9,
                scrollTrigger: {
                    trigger: secondTextRef.current,
                    start: 'top 80%',
                    end: 'bottom 50%',
                    scrub: 1,
                }
            });

        }, containerRef);
        return () => ctx.revert();
    }, []);

    return (
        <section
            id="philosophy"
            ref={containerRef}
            className="w-full min-h-[120vh] bg-charcoal relative z-20 overflow-hidden flex items-center"
        >
            {/* Parallaxing Organic Texture */}
            <div
                className="organic-bg absolute inset-0 z-0 bg-cover bg-center opacity-30 mix-blend-overlay h-[150%]"
                style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1542601906990-b4d3fb778b09")' }}
            ></div>

            <div className="absolute inset-0 bg-gradient-to-b from-moss-900 via-transparent to-moss-900 z-10 pointer-events-none fade-edges"></div>

            <div className="max-w-5xl mx-auto w-full flex flex-col justify-center gap-16 text-center px-6 relative z-20">
                <h2
                    ref={firstTextRef}
                    className="text-4xl md:text-6xl font-sans font-bold text-white/30 uppercase tracking-tighter"
                >
                    Traditional service asks:<br /> Will they arrive within 4 hours?
                </h2>
                <div className="w-px h-24 bg-chartreuse/30 mx-auto"></div>
                <h2
                    ref={secondTextRef}
                    className="text-5xl md:text-7xl lg:text-8xl font-serif italic text-white drop-shadow-2xl"
                >
                    We deliver:<br /> <span className="text-chartreuse not-italic font-sans font-bold tracking-tighter">The Uber-like experience.</span>
                </h2>
            </div>
        </section>
    );
}
