import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const companies = [
    'Google', 'Microsoft', 'Amazon', 'Netflix', 'Spotify' // Placeholders
];

const Hero = () => {
    // Reveal animation variants
    const fadeInUp = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    return (
        <section id="home" className="relative min-h-screen flex flex-col justify-center items-center pt-20 overflow-hidden">
            {/* Background Gradient/Mesh (Optional) */}
            <div className="absolute inset-0 bg-gradient-to-b from-purple-50 via-white to-white dark:from-gray-900 dark:via-gray-950 dark:to-gray-950 -z-10" />

            <motion.div
                className="container mx-auto px-6 text-center z-10"
                variants={staggerContainer}
                initial="hidden"
                animate="visible"
            >
                {/* Badge */}
                <motion.div variants={fadeInUp} className="mb-6 inline-block">
                    <span className="px-4 py-1.5 rounded-full bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 text-sm font-semibold tracking-wide uppercase border border-purple-200 dark:border-purple-800">
                        Welcome to the Future
                    </span>
                </motion.div>

                {/* Heading */}
                <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 text-gray-900 dark:text-white">
                    We Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-500">Digital</span> <br />
                    Masterpieces.
                </motion.h1>

                {/* Description */}
                <motion.p variants={fadeInUp} className="text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-10 leading-relaxed">
                    A premium digital agency transforming brands with cutting-edge design and modern technology.
                </motion.p>

                {/* CTA Button */}
                <motion.div variants={fadeInUp}>
                    <a href="#contact" className="group inline-flex items-center gap-2 px-8 py-4 bg-primary text-white rounded-full font-semibold text-lg hover:bg-primary/90 transition-all shadow-lg hover:shadow-primary/25">
                        Start a Project
                        <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </motion.div>
            </motion.div>

            {/* Trusted By */}
            <motion.div
                className="w-full mt-24 border-t border-gray-100 dark:border-gray-900 pt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
            >
                <p className="text-center text-sm text-gray-500 dark:text-gray-500 mb-8 font-medium uppercase tracking-widest">
                    Trusted by Industry Leaders
                </p>
                <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                    {companies.map((company) => (
                        <span key={company} className="text-2xl font-bold text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors cursor-default">
                            {company}
                        </span>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Hero;
