export default function Footer() {
    return (
        <footer className="w-full py-16 bg-charcoal text-center relative z-20 flex flex-col items-center gap-6">
            <img
                src="/src/assets/logo.png"
                alt="NVC360 Logo"
                className="h-16 w-auto object-contain opacity-50 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500"
                onError={(e) => { e.target.style.display = 'none'; }}
            />
            <p className="text-white/40 text-sm">&copy; {new Date().getFullYear()} NVC360. Real-Time Field Operations.</p>
        </footer>
    )
}
