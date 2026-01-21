import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Loader2, Send } from 'lucide-react';

const Team = () => {
    return (
        <div className="mb-24">
            <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">Meet the Team</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="group">
                        <div className="w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-gray-100 dark:border-gray-800">
                            <img src={`https://i.pravatar.cc/300?img=${i + 10}`} alt="Team Member" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">Alex Johnson</h3>
                        <p className="text-purple-600 dark:text-purple-400">Creative Director</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

const Contact = () => {
    const [status, setStatus] = useState('idle'); // idle, loading, success

    const handleSubmit = (e) => {
        e.preventDefault();
        setStatus('loading');
        setTimeout(() => {
            setStatus('success');
            // Reset after 3 seconds
            setTimeout(() => setStatus('idle'), 3000);
        }, 1500);
    };

    return (
        <section id="contact" className="py-24 bg-gray-50 dark:bg-gray-950">
            <div className="container mx-auto px-6">
                <Team />

                <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-800">
                    <div className="text-center mb-10">
                        <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Let's Work Together</h2>
                        <p className="text-gray-600 dark:text-gray-400">Have a project in mind? We'd love to hear from you.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Name</label>
                                <input type="text" required className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border-transparent focus:border-primary focus:bg-white dark:focus:bg-gray-900 focus:ring-0 transition-colors" placeholder="John Doe" />
                            </div>
                            <div>
                                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email</label>
                                <input type="email" required className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border-transparent focus:border-primary focus:bg-white dark:focus:bg-gray-900 focus:ring-0 transition-colors" placeholder="john@example.com" />
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                            <textarea rows="4" required className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border-transparent focus:border-primary focus:bg-white dark:focus:bg-gray-900 focus:ring-0 transition-colors" placeholder="Tell us about your project..."></textarea>
                        </div>

                        <div className="text-center">
                            <button
                                type="submit"
                                disabled={status !== 'idle'}
                                className={`
                                    inline-flex items-center gap-2 px-8 py-4 rounded-full font-semibold text-white transition-all transform
                                    ${status === 'success' ? 'bg-green-500' : 'bg-primary hover:bg-primary/90'}
                                    ${status === 'loading' ? 'cursor-wait opacity-80' : ''}
                                `}
                            >
                                {status === 'idle' && (
                                    <>
                                        Send Message <Send size={20} />
                                    </>
                                )}
                                {status === 'loading' && (
                                    <>
                                        Sending... <Loader2 size={20} className="animate-spin" />
                                    </>
                                )}
                                {status === 'success' && (
                                    <>
                                        Message Sent! <Check size={20} />
                                    </>
                                )}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;
