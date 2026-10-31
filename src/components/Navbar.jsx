import { useState, useEffect } from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const homePath = window.location.pathname === import.meta.env.BASE_URL ? '' : import.meta.env.BASE_URL;

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-11/12 max-w-4xl">
            <div
                className={twMerge(
                    clsx(
                        'flex items-center justify-between px-6 py-4 transition-all duration-500 border',
                        scrolled
                            ? 'bg-white/60 backdrop-blur-md rounded-[2rem] text-moss-900 border-white/20 shadow-lg'
                            : 'bg-transparent rounded-full text-white border-transparent'
                    )
                )}
            >
                <div className="flex items-center gap-2">
                    <img
                        src="/src/assets/logo.png"
                        alt="NVC360 Logo"
                        className={twMerge(
                            clsx(
                                "h-8 w-auto object-contain transition-all duration-300",
                                !scrolled && "invert brightness-0 filter" // Makes black logo white on transparent nav
                            )
                        )}
                        onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                        }}
                    />
                    <span className="font-sans font-bold tracking-tight text-xl uppercase hidden" style={{ display: 'none' }}>
                        <span className={scrolled ? 'text-moss-900' : 'text-chartreuse'}>NVC</span>360
                    </span>
                </div>
                <div className="hidden md:flex gap-6 lg:gap-8 font-medium text-xs lg:text-sm">
                    {['Features', 'Philosophy', 'Protocol', 'Impact', 'Blog', 'Contact'].map((item) => (
                        <a key={item} href={`${homePath}#${item.toLowerCase()}`} className="hover:opacity-60 transition-opacity whitespace-nowrap">
                            {item}
                        </a>
                    ))}
                </div>
                <a
                    href={`${homePath}#contact`}
                    className={twMerge(
                        clsx(
                            'px-5 py-2.5 rounded-full font-bold text-sm transition-colors cursor-pointer',
                            scrolled
                                ? 'bg-moss-900 text-white hover:bg-moss-800'
                                : 'bg-chartreuse text-moss-900 hover:bg-white'
                        )
                    )}
                >
                    Get Started
                </a>
            </div>
        </nav>
    );
}
