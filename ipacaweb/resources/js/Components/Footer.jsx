import { Link } from '@inertiajs/react';

export default function Footer() {
    return (
        <footer className="bg-primary dark:bg-primary-dark text-white pt-16 pb-8 border-t-4 border-accent transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
                    <div>
                        <div className="flex items-center gap-2 mb-6">
                            <img src="/images/logo.png" alt="Ipaca Consultores" className="h-[5.5rem] w-auto object-contain drop-shadow-lg" />
                        </div>
                        <p className="text-slate-300 leading-relaxed mb-6 font-inter text-sm">
                            Especialistas en la elaboración de Expedientes Técnicos para la obtención de Certificados en Defensa Civil (ITSE), Licencias de Funcionamiento y Saneamiento Inmobiliario Físico Legal. Eliminando las barreras burocráticas.
                        </p>
                    </div>

                    <div>
                        <h3 className="font-outfit font-bold text-xl mb-6 text-white">Enlaces Rápidos</h3>
                        <ul className="space-y-3 font-inter">
                            <li><a href="/#" className="text-slate-300 hover:text-accent transition">Inicio</a></li>
                            <li><a href="/#nosotros" className="text-slate-300 hover:text-accent transition">Nosotros</a></li>
                            <li><a href="/#servicios" className="text-slate-300 hover:text-accent transition">Servicios</a></li>
                            <li><a href="/#proyectos" className="text-slate-300 hover:text-accent transition">Proyectos</a></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-outfit font-bold text-xl mb-6 text-white">Contacto</h3>
                        <ul className="space-y-3 font-inter text-slate-300">
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                </svg>
                                Av. Principal 123, Ciudad
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                </svg>
                                +1 234 567 8900
                            </li>
                            <li className="flex items-center gap-3">
                                <svg className="w-5 h-5 text-secondary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                                info@ipacaconsultores.com
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-700 pt-8 mt-8 flex flex-col md:flex-row justify-between items-center text-slate-400 text-sm font-inter">
                    <p>&copy; {new Date().getFullYear()} IPACA Consultores. Todos los derechos reservados.</p>
                    <div className="flex gap-4 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white transition">Privacidad</Link>
                        <Link href="#" className="hover:text-white transition">Términos</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
