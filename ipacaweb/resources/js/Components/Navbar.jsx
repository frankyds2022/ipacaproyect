import { Link } from '@inertiajs/react';
import { useState, useEffect } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Inicio', href: '/#' },
        { name: 'Nosotros', href: '/#nosotros' },
        { name: 'Servicios', href: '/#servicios' },
        { name: 'Proyectos', href: '/#proyectos' },
    ];

    return (
        <nav className={`sticky top-0 z-50 duration-300 bg-primary-dark shadow-xl border-b border-red-900/50`}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-24">
                    <div className="flex items-center">
                        <Link href={route('home')} className="flex items-center gap-2">
                            <img src="/images/logo.png" alt="Ipaca Consultores" className="h-[4.0rem] w-auto object-contain drop-shadow-md transform scale-125 lg:scale-150 origin-left transition-transform" />
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            link.href.startsWith('/#') ? (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-100 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] font-semibold text-sm lg:text-base transition-all duration-300"
                                >
                                    {link.name}
                                </a>
                            ) : (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-gray-100 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.4)] font-semibold text-sm lg:text-base transition-all duration-300"
                                >
                                    {link.name}
                                </Link>
                            )
                        ))}
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <Link
                            href={route('contact')}
                            className="bg-accent hover:bg-accent-hover text-white px-6 py-2 rounded-full font-bold transition shadow-md hover:shadow-lg hover:-translate-y-0.5"
                        >
                            Contáctanos
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-white hover:text-gray-200 focus:outline-none"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                {isOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className={`md:hidden bg-primary-dark border-t border-red-900 shadow-xl`}>
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        {navLinks.map((link) => (
                            link.href.startsWith('/#') ? (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-2 rounded-md text-base font-semibold text-gray-100 hover:text-white hover:bg-red-900/50 transition-colors"
                                >
                                    {link.name}
                                </a>
                            ) : (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-2 rounded-md text-base font-semibold text-gray-100 hover:text-white hover:bg-red-900/50 transition-colors"
                                >
                                    {link.name}
                                </Link>
                            )
                        ))}
                    </div>
                </div>
            )}
        </nav>
    );
}
