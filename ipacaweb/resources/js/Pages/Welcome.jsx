import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Welcome({ services, projects }) {
    return (
        <MainLayout>
            <Head title="Inicio - IPACA Consultores" />

            {/* Hero Section */}
            <section id="inicio" className="relative bg-primary overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img
                        src="/images/hero_ipaca.png"
                        alt="Consultores IPACA"
                        className="absolute inset-0 w-full h-full object-cover opacity-20 mix-blend-overlay"
                    />
                    <div className="absolute top-0 right-0 w-full md:w-1/2 h-full bg-gradient-to-l from-primary-light/90 to-transparent">
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center py-24 min-h-[650px] md:min-h-[750px]">
                    <div className="md:w-3/5 text-white pr-8">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-white font-bold text-xs uppercase tracking-wider mb-6">
                            <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                            Gestión debidamente gerenciada
                        </div>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-outfit font-extrabold leading-tight mb-6 drop-shadow-xl">
                            Eliminando las <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-200">barreras burocráticas</span> para tu empresa
                        </h1>
                        <p className="text-lg md:text-xl text-slate-200 mb-10 font-inter leading-relaxed max-w-2xl font-light">
                            Empresa con amplia experiencia, especializada en la elaboración de Expedientes Técnicos para la obtención de Certificados en Defensa Civil (ITSE), Licencias de Funcionamiento y Saneamiento Inmobiliario Físico - Legal.
                        </p>
                        <div className="flex flex-wrap gap-4">
                            <a
                                href="#servicios"
                                className="inline-block bg-gradient-to-r from-accent to-yellow-600 hover:from-accent-hover hover:to-yellow-700 text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 shadow-xl transform hover:-translate-y-1 hover:shadow-2xl border border-white/10"
                            >
                                Ver Nuestros Servicios
                            </a>
                            <Link
                                href={route('contact')}
                                className="inline-block bg-white/10 hover:bg-white/20 backdrop-blur-md text-white font-bold py-3.5 px-8 rounded-full transition-all duration-300 shadow-lg border border-white/30 hover:border-white/50"
                            >
                                Asesoría Gratuita
                            </Link>
                        </div>
                    </div>

                    <div className="md:w-2/5 mt-16 md:mt-0 relative w-full hidden md:block">
                        <div className="rounded-3xl overflow-hidden shadow-2xl bg-slate-800 aspect-[4/5] border-4 border-white/10 relative group transform hover:rotate-1 transition duration-500">
                            <img src="/images/home.jpg" alt="Equipo IPACA" className="absolute inset-0 w-full h-full object-cover transition duration-700 group-hover:scale-105" />
                            <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/40 to-transparent opacity-80"></div>

                            <div className="absolute bottom-8 left-8 right-8 mb-2">
                                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                                    <h3 className="text-white font-outfit font-bold text-2xl mb-1">Equipo Profesional</h3>
                                    <p className="text-slate-300 text-sm">Asesores e ingenieros colegiados</p>
                                </div>
                            </div>
                        </div>

                        <div className="absolute -bottom-8 -left-8 bg-white dark:bg-slate-800 p-5 rounded-2xl shadow-2xl border-l-4 border-accent animate-bounce-slow">
                            <div className="flex items-center gap-4">
                                <div className="bg-green-50 dark:bg-green-900/30 p-3 rounded-full">
                                    <svg className="w-8 h-8 text-green-500 dark:text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 uppercase font-bold tracking-wider">Trámites</p>
                                    <p className="text-base font-extrabold text-slate-800 dark:text-white">100% Exitosos</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Decorative bottom curve */}
                <div className="absolute bottom-0 w-full">
                    <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto text-white dark:text-slate-900">
                        <path d="M0 120H1440V0C1440 0 1140 120 720 120C300 120 0 0 0 0V120Z" fill="currentColor" />
                    </svg>
                </div>
            </section>

            {/* Nosotros Section */}
            <section id="nosotros" className="py-24 bg-white dark:bg-slate-900 relative z-10 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-16 items-center">
                        <div className="md:w-1/2 relative">
                            <div className="absolute -inset-4 bg-gradient-to-r from-primary-light/20 to-accent/20 rounded-3xl blur-lg"></div>
                            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-[4/3] bg-slate-200 dark:bg-slate-700 border-4 border-white dark:border-slate-800 relative z-10">
                                <img src="/images/hero_ipaca.png" alt="Nosotros" className="w-full h-full object-cover" />
                            </div>
                        </div>
                        <div className="md:w-1/2">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="h-px bg-accent w-12"></div>
                                <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-0">Sobre Nosotros</h2>
                            </div>
                            <h3 className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 dark:text-white mb-6 leading-tight">Nuestra Experiencia <br />a tu Servicio</h3>
                            <p className="text-slate-600 dark:text-slate-300 mb-6 font-inter leading-relaxed text-lg">
                                En <span className="font-bold text-primary dark:text-secondary-light">IPACA Consultores E.I.R.L</span>, somos líderes en la gestión y trámite de expedientes técnicos. Solucionamos los retos legales y físicos de tu propiedad o emprendimiento comercial.
                            </p>
                            <p className="text-slate-600 dark:text-slate-400 mb-10 font-inter leading-relaxed">
                                Contamos con un equipo multidisciplinario de ingenieros y asesores colegiados que aseguran que todos tus trámites en la municipalidad o registros públicos se realicen de manera correcta, rápida y sin rechazos.
                            </p>

                            <div className="grid grid-cols-2 gap-6 mb-8">
                                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-700 flex items-center gap-4 shadow-sm hover:shadow-md transition">
                                    <div className="bg-primary/10 dark:bg-primary-light/20 p-3 rounded-xl text-primary dark:text-primary-light">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
                                    </div>
                                    <span className="text-slate-800 dark:text-slate-200 font-bold font-outfit">Asesores <br /><span className="text-sm font-normal text-slate-500 dark:text-slate-400">Colegiados</span></span>
                                </div>
                                <div className="bg-slate-50 dark:bg-slate-800/50 p-4 rounded-2xl border border-slate-100 dark:border-slate-700 flex items-center gap-4 shadow-sm hover:shadow-md transition">
                                    <div className="bg-accent/10 dark:bg-accent/20 p-3 rounded-xl text-accent">
                                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" /></svg>
                                    </div>
                                    <span className="text-slate-800 dark:text-slate-200 font-bold font-outfit">Gestión <br /><span className="text-sm font-normal text-slate-500 dark:text-slate-400">Transparente</span></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Servicios Section */}
            <section id="servicios" className="py-24 bg-slate-50 dark:bg-slate-800 relative border-t border-slate-200 dark:border-slate-700 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16 max-w-3xl mx-auto">
                        <div className="inline-flex items-center justify-center gap-2 mb-4">
                            <div className="h-px bg-accent w-8"></div>
                            <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-0">Especialidades</h2>
                            <div className="h-px bg-accent w-8"></div>
                        </div>
                        <h3 className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 dark:text-white mb-6">¿Qué podemos gestionar por ti?</h3>
                        <p className="text-slate-600 dark:text-slate-300 font-inter text-lg">Nuestro catálogo completo de soluciones diseñadas para regularizar tu estatus de inmediato.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services && services.map((service) => (
                            <div key={service.id} className="bg-white dark:bg-slate-900 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 group flex flex-col border border-slate-100 dark:border-slate-700 overflow-hidden transform hover:-translate-y-2">
                                <div className="h-56 overflow-hidden relative">
                                    <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                                    <div className="absolute inset-0 bg-gradient-to-t from-primary-dark/80 via-primary-dark/20 to-transparent opacity-60 group-hover:opacity-80 transition duration-300"></div>
                                    <div className="absolute bottom-4 left-6">
                                        <div className="text-xs font-bold bg-white/20 backdrop-blur-md text-white border border-white/30 px-3 py-1 rounded-full uppercase tracking-wider">
                                            {service.category || "Gestión"}
                                        </div>
                                    </div>
                                </div>
                                <div className="p-8 flex flex-col flex-grow bg-white dark:bg-slate-900">
                                    <h4 className="text-2xl font-bold text-slate-900 dark:text-white mb-3 font-outfit group-hover:text-primary dark:group-hover:text-secondary-light transition">{service.title}</h4>
                                    <p className="text-slate-600 dark:text-slate-400 mb-8 text-sm flex-grow leading-relaxed">{service.short_description}</p>

                                    <Link
                                        href={route('services.show', service.slug || service.id)}
                                        className="inline-flex items-center justify-center w-full bg-slate-50 dark:bg-slate-800 hover:bg-primary dark:hover:bg-primary-light border border-slate-100 dark:border-slate-700 hover:border-primary text-secondary dark:text-secondary-light font-bold hover:text-white px-4 py-3 rounded-xl transition-all duration-300 group/btn"
                                    >
                                        Detalles del Servicio
                                        <svg className="w-5 h-5 ml-2 transform group-hover/btn:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Proyectos Section */}
            <section id="proyectos" className="py-24 bg-white dark:bg-slate-900 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                        <div className="max-w-2xl">
                            <div className="flex items-center gap-4 mb-4">
                                <div className="h-px bg-accent w-12"></div>
                                <h2 className="text-accent font-bold uppercase tracking-widest text-sm mb-0">Casos de Éxito</h2>
                            </div>
                            <h3 className="text-4xl md:text-5xl font-outfit font-bold text-slate-900 dark:text-white mb-6">Proyectos Recientes</h3>
                            <p className="text-slate-600 dark:text-slate-400 font-inter text-lg">Explora de primera mano algunos de los expedientes físicos y legales más destacados en los que IPACA ha intervenido con éxito rotundo.</p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {projects && projects.map((project) => (
                            <div key={project.id} className="group rounded-3xl overflow-hidden relative shadow-lg hover:shadow-2xl transition-all duration-500 border border-slate-100 dark:border-slate-800 min-h-[400px]">
                                <img src={project.image} alt={project.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
                                <div className="absolute inset-0 bg-gradient-to-t from-primary-dark via-primary-dark/80 to-primary/10"></div>

                                <div className="absolute inset-0 p-8 flex flex-col justify-end z-20">
                                    <div className="transform translate-y-8 group-hover:translate-y-0 transition-all duration-500">
                                        <div className="text-accent text-xs font-bold uppercase tracking-wider mb-3 flex items-center gap-2">
                                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                                            {project.location}
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-3 font-outfit leading-tight">{project.title}</h3>
                                        <p className="text-slate-300 text-sm mb-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500 max-h-0 group-hover:max-h-24 overflow-hidden">{project.short_description}</p>

                                        <Link href={route('projects.show', project.slug || project.id)} className="text-sm border border-white/30 bg-white/10 hover:bg-white text-white hover:text-primary backdrop-blur-md px-6 py-2.5 rounded-full font-bold shadow-lg inline-flex items-center transition-all duration-300">
                                            Ver Caso Completo <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" /></svg>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-24 text-center relative">
                        <div className="absolute inset-0 bg-primary/5 dark:bg-primary/10 rounded-3xl transform -skew-y-2"></div>
                        <div className="p-12 md:p-16 relative z-10">
                            <h4 className="text-3xl font-outfit font-bold text-slate-900 dark:text-white mb-4">¿Estás listo para regularizar tu empresa?</h4>
                            <p className="text-slate-600 dark:text-slate-300 mb-8 max-w-2xl mx-auto text-lg">Nuestro equipo de atención al cliente te espera para brindarte una cotización gratuita y sin compromiso sobre tu estatus legal.</p>
                            <Link href={route('contact')} className="inline-flex border-2 border-primary dark:border-primary-light bg-primary dark:bg-primary-light text-white px-10 py-4 rounded-full font-bold transition-all shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
                                Contactar un Asesor Ahora
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
