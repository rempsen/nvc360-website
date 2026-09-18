import { ArrowRight } from 'lucide-react';

const calculatorPath = `${import.meta.env.BASE_URL}field-service-wasted-hours-calculator`;

const articles = [
    {
        title: "Field-Service Wasted Hours Calculator: See Your Annual Opportunity",
        category: "Cost Savings",
        date: "Sep 2026",
        link: calculatorPath
    },
    {
        title: "Unlock the Future with NVC360 New: Pioneering Software Solutions for Canadian Enterprises",
        category: "Advice",
        date: "Mar 2026",
        link: "#"
    },
    {
        title: "Unleashing the Power of Innovative Software Solutions",
        category: "Advice",
        date: "Feb 2026",
        link: "#"
    },
    {
        title: "Unleash the Power of Innovative Software with NVC360 New",
        category: "Advice",
        date: "Jan 2026",
        link: "#"
    }
];

export default function Blog() {
    return (
        <section id="blog" className="w-full py-32 bg-[#080d0a] relative z-20">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
                    <div>
                        <h2 className="text-5xl md:text-6xl font-sans font-bold text-white tracking-tighter">
                            Catch Up On<br /><span className="text-chartreuse font-serif italic">Our Latest Updates</span>
                        </h2>
                    </div>
                    <button className="text-white hover:text-chartreuse transition-colors border-b border-white/20 hover:border-chartreuse pb-1 font-bold text-sm uppercase tracking-widest w-max flex items-center gap-2">
                        View All Posts <ArrowRight className="w-4 h-4" />
                    </button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {articles.map((post, idx) => (
                        <a
                            key={idx}
                            href={post.link}
                            className="group block bg-moss-900 rounded-[2rem] border border-white/5 overflow-hidden transition-all duration-300 hover:border-chartreuse/30"
                        >
                            <div className="aspect-[4/3] w-full bg-moss-800 relative overflow-hidden">
                                <div className="absolute inset-0 bg-gradient-to-tr from-moss-900 to-transparent z-10"></div>
                                {/* Abstract texture placeholder */}
                                <div className="w-full h-full opacity-30 transform group-hover:scale-105 transition-transform duration-700 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-chartreuse/20 via-moss-800 to-moss-900"></div>
                                <div className="absolute top-4 left-4 z-20 bg-moss-900 border border-chartreuse/20 text-chartreuse text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full">
                                    {post.category}
                                </div>
                            </div>
                            <div className="p-8">
                                <div className="text-white/40 text-sm mb-4 font-mono">{post.date}</div>
                                <h3 className="text-xl font-bold text-white group-hover:text-chartreuse transition-colors line-clamp-3">
                                    {post.title}
                                </h3>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
