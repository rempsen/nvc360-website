import { Send } from 'lucide-react';

export default function Contact() {
    return (
        <section id="contact" className="w-full py-32 bg-moss-900 border-t border-white/5 relative z-20 overflow-hidden">

            {/* Decorative Blur Orbs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-chartreuse/10 rounded-full blur-[120px] mix-blend-screen pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-moss-500/20 rounded-full blur-[150px] mix-blend-screen pointer-events-none"></div>

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16">

                    <div className="flex-1 flex flex-col justify-center">
                        <h2 className="text-5xl md:text-7xl font-sans font-bold text-white tracking-tighter mb-6">
                            Let's end the<br />
                            <span className="text-chartreuse font-serif italic drop-shadow-lg">4-hour window.</span>
                        </h2>
                        <p className="text-white/60 text-lg md:text-xl font-medium max-w-md mb-12">
                            Give your customers the service level they deserve. Schedule a personalized demo of the NVC360 platform.
                        </p>

                        <div className="flex flex-col gap-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-moss-800 border border-white/10 flex items-center justify-center">
                                    <span className="text-chartreuse text-xl font-bold">1</span>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-white font-bold">Real-Time Visibility</h4>
                                    <p className="text-white/50 text-sm">Eliminate coordination chaos instantly.</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-moss-800 border border-white/10 flex items-center justify-center">
                                    <span className="text-chartreuse text-xl font-bold">2</span>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-white font-bold">Automated ETAs</h4>
                                    <p className="text-white/50 text-sm">Transform service into a premium experience.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex-1">
                        <form className="bg-moss-800/80 backdrop-blur-xl p-10 rounded-[3rem] border border-white/10 shadow-2xl flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
                            <h3 className="text-2xl font-bold text-white mb-4">Request Access</h3>

                            <div className="flex flex-col gap-2">
                                <label className="text-white/50 text-xs font-bold uppercase tracking-widest pl-4">Full Name</label>
                                <input
                                    type="text"
                                    placeholder="John Doe"
                                    className="w-full bg-[#0a100c] border border-white/5 text-white px-6 py-4 rounded-full focus:outline-none focus:border-chartreuse/50 transition-colors"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-white/50 text-xs font-bold uppercase tracking-widest pl-4">Work Email</label>
                                <input
                                    type="email"
                                    placeholder="john@company.com"
                                    className="w-full bg-[#0a100c] border border-white/5 text-white px-6 py-4 rounded-full focus:outline-none focus:border-chartreuse/50 transition-colors"
                                />
                            </div>

                            <div className="flex flex-col gap-2">
                                <label className="text-white/50 text-xs font-bold uppercase tracking-widest pl-4">Message (Optional)</label>
                                <textarea
                                    placeholder="How can we help?"
                                    rows={4}
                                    className="w-full bg-[#0a100c] border border-white/5 text-white px-6 py-4 rounded-[2rem] focus:outline-none focus:border-chartreuse/50 transition-colors resize-none"
                                ></textarea>
                            </div>

                            <button className="w-full mt-4 bg-chartreuse text-moss-900 font-black uppercase tracking-widest py-4 rounded-full hover:bg-white transition-colors duration-300 flex items-center justify-center gap-2 group">
                                Get Started <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </section>
    );
}
