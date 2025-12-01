import React from "react";
import { motion } from "framer-motion";

// Import images
import img1 from "../../assets/images/open1.jpg";
import img2 from "../../assets/images_events/movie3.jpg";
import img3 from "../../assets/images_events/womens_day1.jpg";
import img4 from "../../assets/images_events/hall1.jpg";

const heroImages = [
    { src: img1, alt: "Open Mic Event" },
    { src: img2, alt: "Movie Screening" },
    { src: img3, alt: "Women's Day Celebration" },
    { src: img4, alt: "Hall Event" },
];

const HomeHero: React.FC = () => {
    return (
        <div className="w-full bg-gradient-to-br from-indigo-50 via-white to-slate-100 py-20 lg:py-28 overflow-hidden relative">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-30 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#4F46E5 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }}></div>

            <section className="container mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-20 relative z-10">

                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <motion.span
                        className="block mb-6 text-sm md:text-base text-primary font-semibold tracking-wide uppercase"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.6 }}
                    >
                        Gender Cell, IIT Kanpur
                    </motion.span>

                    <h1 className="text-5xl lg:text-7xl font-bold mb-8 font-heading text-slate-900 leading-tight">
                        Advancing <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Gender Equality</span> Together
                    </h1>

                    <p className="text-lg md:text-xl text-neutral mb-8 leading-relaxed max-w-xl">
                        We are dedicated to creating a campus where everyone feels safe, respected, and valued. Join us in our efforts to educate, support, and advocate for a gender-sensitized community.
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a href="#about" className="btn btn-primary btn-lg rounded-full px-8 shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                            Learn More
                        </a>
                        <a href="#events" className="btn btn-outline btn-primary btn-lg rounded-full px-8 hover:bg-primary hover:text-white transition-all duration-300">
                            Our Events
                        </a>
                    </div>

                    <motion.div
                        className="mt-10 p-6 bg-white/60 backdrop-blur-sm rounded-xl border border-white/50 shadow-sm"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.6 }}
                    >
                        <p className="text-sm md:text-base text-slate-700 italic font-medium">
                            "I can be changed by what happens to me, but I refuse to be reduced by it."
                        </p>
                        <p className="text-right text-sm text-primary font-bold mt-2">— Maya Angelou</p>
                    </motion.div>
                </motion.div>

                {/* Image Grid */}
                <div className="relative h-[500px] lg:h-[600px] w-full hidden md:block">
                    <div className="absolute inset-0 grid grid-cols-2 gap-4 rotate-3 hover:rotate-0 transition-transform duration-700 ease-in-out">
                        {heroImages.map((img, index) => (
                            <motion.div
                                key={index}
                                className={`relative rounded-2xl overflow-hidden shadow-2xl ${index % 2 === 0 ? 'mt-8' : 'mb-8'}`}
                                initial={{ opacity: 0, scale: 0.8, y: 50 }}
                                animate={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{ delay: 0.2 * index, duration: 0.8, ease: "backOut" }}
                                whileHover={{ scale: 1.05, zIndex: 10 }}
                            >
                                <img
                                    src={img.src}
                                    alt={img.alt}
                                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                                    <p className="text-white font-medium text-sm">{img.alt}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                    {/* Decorative Elements */}
                    <div className="absolute -top-10 -right-10 w-32 h-32 bg-secondary/20 rounded-full blur-3xl"></div>
                    <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl"></div>
                </div>
            </section>
        </div>
    );
};

export default HomeHero;
