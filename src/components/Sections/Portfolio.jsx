import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
    {
        title: "Next.js Portfolio",
        category: "Personal Portfolio",
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&q=80&w=800", // Coding/Laptop
        link: "https://github.com/Muhammad-Fakhar-Khan/Portfolio-NextJs"
    },
    {
        title: "Portfolio V2",
        category: "Creative Showcase",
        image: "https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&q=80&w=800", // Creative/Art
        link: "https://github.com/Muhammad-Fakhar-Khan/Portfolio-2"
    },
    {
        title: "ShopKeeper",
        category: "E-Commerce Solution",
        image: "https://images.unsplash.com/photo-1472851294608-415522f9631f?auto=format&fit=crop&q=80&w=800", // Shopping Bags / Retail
        link: "https://github.com/Muhammad-Fakhar-Khan/shopkeeper"
    },
    {
        title: "Agency",
        category: "Digital Agency Site",
        image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800", // Team/Collaboration
        link: "https://github.com/Muhammad-Fakhar-Khan/Agency"
    }
];

const Portfolio = () => {
    return (
        <section id="work" className="py-24 bg-white dark:bg-gray-900">
            <div className="container mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-white">Selected Work</h2>
                    <div className="w-20 h-1 bg-primary rounded-full"></div>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative overflow-hidden rounded-2xl cursor-pointer"
                        >
                            {/* Image */}
                            <div className="aspect-w-16 aspect-h-12 w-full h-80 overflow-hidden">
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                />
                            </div>

                            {/* Overlay */}
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                                <h3 className="text-2xl font-bold text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-300">{project.title}</h3>
                                <p className="text-gray-300 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">{project.category}</p>
                                <div className="mt-4 flex gap-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-100">
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-white/20 hover:bg-white/30 rounded-full text-white backdrop-blur-sm transition-colors"
                                    >
                                        <ExternalLink size={20} />
                                    </a>
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-2 bg-white/20 hover:bg-white/30 rounded-full text-white backdrop-blur-sm transition-colors"
                                    >
                                        <Github size={20} />
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
