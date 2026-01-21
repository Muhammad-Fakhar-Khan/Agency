import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import ThemeToggle from '../UI/ThemeToggle';

const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <>
            <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-white/50 dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-800 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button onClick={toggleMenu} className="p-2 text-gray-900 dark:text-white">
                            <Menu size={24} />
                        </button>
                    </div>

                    {/* Left: Nav Links (Desktop) */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* Center: Logo */}
                    <div className="absolute left-1/2 transform -translate-x-1/2">
                        <a href="#" className="text-2xl font-bold tracking-tighter text-gray-900 dark:text-white">
                            AGENCY<span className="text-primary">.</span>
                        </a>
                    </div>

                    {/* Right: Connect & Theme Toggle */}
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <a
                            href="#contact"
                            className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-semibold text-white transition-all duration-200 bg-primary rounded-full hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary dark:focus:ring-offset-gray-900"
                        >
                            Connect
                        </a>
                        {/* Mobile Connect Button (Icon or smaller) - Optional, stuck to right for now */}
                    </div>
                </div>
            </nav>

            {/* Mobile Sidebar */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleMenu}
                            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm md:hidden"
                        />
                        <motion.div
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed top-0 left-0 bottom-0 z-50 w-64 bg-white dark:bg-gray-900 border-r border-gray-200 dark:border-gray-800 p-6 md:hidden overflow-y-auto"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <span className="text-xl font-bold text-gray-900 dark:text-white">Menu</span>
                                <button onClick={toggleMenu} className="p-2 text-gray-500 hover:text-gray-900 dark:hover:text-white">
                                    <X size={24} />
                                </button>
                            </div>
                            <div className="flex flex-col space-y-6">
                                {navLinks.map((link) => (
                                    <a
                                        key={link.name}
                                        href={link.href}
                                        onClick={toggleMenu}
                                        className="text-lg font-medium text-gray-600 dark:text-gray-300 hover:text-primary dark:hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                ))}
                                <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
                                    <a
                                        href="#contact"
                                        onClick={toggleMenu}
                                        className="flex w-full items-center justify-center px-5 py-3 text-base font-semibold text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
                                    >
                                        Connect
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </>
    );
};

export default Navbar;
