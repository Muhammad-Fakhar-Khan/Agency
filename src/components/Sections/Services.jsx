import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Smartphone, LineChart, Globe, Zap } from 'lucide-react';

const services = [
    { title: 'Web Development', description: 'High-performance websites built with React & Next.js.', icon: <Code size={32} /> },
    { title: 'UI/UX Design', description: 'Pixel-perfect interfaces that users love.', icon: <Palette size={32} /> },
    { title: 'Mobile Apps', description: 'Native and cross-platform mobile solutions.', icon: <Smartphone size={32} /> },
    { title: 'SEO Optimization', description: 'Rank higher and drive more organic traffic.', icon: <LineChart size={32} /> },
    { title: 'E-Commerce', description: 'Scalable online stores that convert.', icon: <Globe size={32} /> },
    { title: 'Branding', description: 'Memorable brand identities and strategies.', icon: <Zap size={32} /> },
];

const ServiceCard = ({ service }) => {
    const divRef = useRef(null);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e) => {
        if (!divRef.current) return;
        const rect = divRef.current.getBoundingClientRect();
        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setOpacity(1);
    };

    const handleBlur = () => {
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 p-8 h-full"
        >
            <div
                className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(184, 130, 255, 0.15), transparent 40%)`,
                }}
            />
            <div className="relative z-10 flex flex-col items-start h-full">
                <div className="mb-4 p-3 rounded-lg bg-primary/10 text-primary">
                    {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-base text-gray-600 dark:text-gray-400 flex-grow">{service.description}</p>
            </div>
        </div>
    );
};

const Services = () => {
    return (
        <section id="services" className="py-24 bg-gray-50 dark:bg-gray-950">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Our Services</h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                        Comprehensive digital solutions tailored to your business needs.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <ServiceCard service={service} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
