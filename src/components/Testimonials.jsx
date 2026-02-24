import { Quote } from 'lucide-react';

const testimonials = [
    {
        quote: "Since implementing NVC360, we’ve seen approximately a 20% decrease in direct labour costs, driven by better coordination, real-time visibility, and fewer inefficiencies in the field.",
        author: "Operations Manager",
        company: "BMD",
    },
    {
        quote: "The NVC360 platform allowed us to get more jobs done with fewer mistakes and we were delighting our clients with the efficiencies and real-time ETA communications.",
        author: "Director",
        company: "National Interiors",
    },
    {
        quote: "We are providing our clients the ability to save time, increase profits and become the trusted service providers in their area... its like adding an Uber module to our customers workflow.",
        author: "Founder",
        company: "NVC360",
    }
];

export default function Testimonials() {
    return (
        <section id="impact" className="w-full py-32 bg-moss-900 border-t border-white/5 relative z-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-20">
                    <h2 className="text-5xl md:text-6xl font-sans font-bold text-white tracking-tighter mb-4">
                        We Dedicate Our Time<br /><span className="text-chartreuse font-serif italic">To Deliver Great Results</span>
                    </h2>
                    <p className="text-white/60 max-w-2xl mx-auto text-lg pt-4">
                        Our results reflect the effort we invest in delivering quality software solutions that drive real growth and eliminate the 4-hour window.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((item, idx) => (
                        <div key={idx} className="bg-moss-800 p-8 rounded-[2rem] border border-white/5 relative group hover:border-chartreuse/20 transition-all duration-500 hover:-translate-y-2">
                            <Quote className="text-white/10 w-16 h-16 absolute top-6 right-6 group-hover:text-chartreuse/20 transition-colors duration-500" />
                            <p className="text-white/80 text-lg leading-relaxed relative z-10 min-h-[140px]">
                                "{item.quote}"
                            </p>
                            <div className="mt-8 pt-6 border-t border-white/10 relative z-10 flex flex-col gap-1">
                                <span className="text-white font-bold">{item.author}</span>
                                <span className="text-chartreuse text-sm uppercase tracking-wider font-bold">{item.company}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
