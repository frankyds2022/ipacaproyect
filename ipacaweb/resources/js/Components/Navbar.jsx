import { Link } from '@inertiajs/react';
import { useState } from 'react';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        { name: 'Inicio', href: '/#' },
        { name: 'Nosotros', href: '/#nosotros' },
        { name: 'Servicios', href: '/#servicios' },
        { name: 'Proyectos', href: '/#proyectos' },
        // { name: 'Contáctanos', href: route('contact') },
    ];

    return (
        <nav className="bg-white dark:bg-slate-900 sticky top-0 z-50 shadow-sm border-b border-transparent dark:border-slate-800 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20">
                    <div className="flex items-center">
                        <Link href={route('home')} className="flex items-center gap-2">
                            {/* Logo representation matching the image */}
                            <div className="flex items-end gap-1 pb-1">
                                <div className="w-4 h-8 bg-slate-200 rounded-sm"></div>
                                <div className="w-5 h-12 bg-slate-300 rounded-sm"></div>
                                <div className="w-6 h-16 bg-slate-200 rounded-sm"></div>
                            </div>
                            <div className="flex flex-col ml-1">
                                <span className="font-outfit font-extrabold text-3xl text-primary dark:text-white leading-none tracking-tight">Ipaca</span>
                                <span className="font-inter font-bold text-[0.65rem] text-secondary dark:text-secondary-light tracking-widest uppercase">Consultores</span>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            link.href.startsWith('/#') ? (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    className="text-slate-600 dark:text-slate-300 hover:text-accent dark:hover:text-accent font-medium text-sm lg:text-base transition-colors"
                                >
                                    {link.name}
                                </a>
                            ) : (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-slate-600 dark:text-slate-300 hover:text-accent dark:hover:text-accent font-medium text-sm lg:text-base transition-colors"
                                >
                                    {link.name}
                                </Link>
                            )
                        ))}
                    </div>

                    <div className="hidden md:flex items-center space-x-4">
                        <Link
                            href={route('login')}
                            className="text-slate-600 hover:text-primary font-medium text-sm"
                        >
                            Iniciar Sesión
                        </Link>
                        <Link
                            href={route('contact')}
                            className="bg-accent hover:bg-accent-hover text-white px-6 py-2 rounded-full font-medium transition shadow-md hover:shadow-lg"
                        >
                            Contáctanos
                        </Link>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="flex items-center md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-600 hover:text-primary focus:outline-none"
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
                <div className="md:hidden bg-white border-t">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 shadow-lg">
                        {navLinks.map((link) => (
                            link.href.startsWith('/#') ? (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50"
                                >
                                    {link.name}
                                </a>
                            ) : (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    onClick={() => setIsOpen(false)}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50"
                                >
                                    {link.name}
                                </Link>
                            )
                        ))}
                        <Link
                            href={route('login')}
                            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50 border-t mt-2"
                        >
                            Iniciar Sesión
                        </Link>
                    </div>
                </div>
            )}
        </nav>
    );
}
