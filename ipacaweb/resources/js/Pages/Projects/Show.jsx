import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Show({ project }) {
    if (!project) return null;

    return (
        <MainLayout>
            <Head title={project.title} />
            
            <div className="bg-primary-dark pt-24 pb-16 text-center text-white border-b-4 border-accent transition-colors duration-300">
                <h1 className="text-4xl md:text-5xl font-outfit font-bold mb-4 px-4">{project.title}</h1>
                <p className="text-slate-300 font-inter max-w-2xl mx-auto px-4 uppercase tracking-widest text-sm">{project.location}</p>
            </div>

            <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <a href="/#proyectos" className="inline-flex items-center text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-secondary-light mb-8 font-medium transition">
                        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Volver a Casos de Éxito
                    </a>

                    <div className="rounded-3xl overflow-hidden shadow-2xl aspect-video bg-slate-100 dark:bg-slate-800 mb-12 flex items-center justify-center border-2 border-slate-50 dark:border-slate-700 relative group">
                        {project.image ? (
                            <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                        ) : (
                            <span className="text-slate-400 dark:text-slate-500 font-medium text-xl">Imagen Principal del Proyecto / Resolución</span>
                        )}
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-outfit font-bold text-slate-900 dark:text-white mb-6">Detalles del Caso</h2>
                            <div className="prose prose-lg text-slate-600 dark:text-slate-300 font-inter max-w-none">
                                <p className="leading-relaxed">{project.description}</p>
                            </div>
                        </div>
                        
                        <div className="lg:col-span-1">
                            <div className="bg-slate-50 dark:bg-slate-800/50 rounded-2xl p-8 border border-slate-100 dark:border-slate-700 shadow-sm relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-1 bg-accent h-full"></div>
                                <h3 className="text-xl font-bold font-outfit text-slate-900 dark:text-white mb-6 pb-4 border-b border-slate-200 dark:border-slate-700">Ficha Técnica</h3>
                                
                                <dl className="space-y-4">
                                    <div>
                                        <dt className="text-sm text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider text-xs">Cliente</dt>
                                        <dd className="text-slate-900 dark:text-white font-semibold">{project.client || "Confidencial"}</dd>
                                    </div>
                                    <div>
                                        <dt className="text-sm text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider text-xs">Fecha de Resolución</dt>
                                        <dd className="text-slate-900 dark:text-white font-semibold">{project.date || "2024"}</dd>
                                    </div>
                                    <div>
                                        <dt className="text-sm text-slate-500 dark:text-slate-400 font-medium uppercase tracking-wider text-xs">Servicio Aplicado</dt>
                                        <dd className="text-slate-900 dark:text-white font-semibold">{project.service_type}</dd>
                                    </div>
                                </dl>

                                <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-700">
                                    <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 font-medium">¿Necesitas regularizar tu inmueble o negocio de forma similar?</p>
                                    <Link href={route('contact')} className="block w-full text-center bg-primary dark:bg-primary-light hover:bg-primary-light text-white py-3 rounded-full font-bold transition shadow-md">
                                        Solicitar Asesoría
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
