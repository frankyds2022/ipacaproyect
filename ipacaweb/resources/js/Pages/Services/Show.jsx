import { Head, Link } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Show({ service }) {
    if (!service) return null;

    return (
        <MainLayout>
            <Head title={service.title} />
            
            <div className="bg-primary dark:bg-primary-dark pt-24 pb-16 text-center text-white border-b-4 border-accent transition-colors duration-300">
                <div className="text-accent font-bold uppercase tracking-widest text-sm mb-4">
                    {service.category || "Gestión"}
                </div>
                <h1 className="text-4xl md:text-5xl font-outfit font-bold mb-4 max-w-4xl mx-auto px-4">{service.title}</h1>
                <p className="text-slate-300 font-inter max-w-2xl mx-auto px-4">{service.short_description}</p>
            </div>

            <section className="py-20 bg-white dark:bg-slate-900 transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <a href="/#servicios" className="inline-flex items-center text-slate-500 dark:text-slate-400 hover:text-primary dark:hover:text-secondary-light mb-8 font-medium transition">
                        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                        </svg>
                        Volver a Servicios
                    </a>

                    <div className="flex flex-col lg:flex-row gap-12">
                        <div className="lg:w-1/2">
                            <div className="rounded-3xl overflow-hidden shadow-2xl aspect-video bg-slate-100 dark:bg-slate-800 flex items-center justify-center border-4 border-slate-50 dark:border-slate-700 relative group">
                                {service.image ? (
                                    <img src={service.image} alt={service.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                                ) : (
                                    <span className="text-slate-400 dark:text-slate-500 font-medium">Imagen del Servicio / Trámite</span>
                                )}
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <h2 className="text-3xl font-outfit font-bold text-primary-dark dark:text-white mb-6">Detalles de la Gestión</h2>
                            <div className="prose prose-lg text-slate-600 dark:text-slate-300 font-inter max-w-none">
                                <p className="mb-6 leading-relaxed">{service.description || "Descripción completa no disponible."}</p>
                                
                                <h3 className="text-xl font-bold text-slate-800 dark:text-slate-200 mt-8 mb-4">La importancia de este trámite:</h3>
                                <ul className="space-y-3">
                                    {(service.benefits || ['Cumplimiento Normativo', 'Seguridad Jurídica', 'Trámite Eficiente']).map((benefit, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                            <span className="text-slate-700 dark:text-slate-300">{benefit}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            
                            <div className="mt-12 bg-slate-50 dark:bg-slate-800/50 p-6 rounded-xl border-l-4 border-accent shadow-sm">
                                <h4 className="font-bold text-slate-900 dark:text-white mb-2">¿Necesitas ayuda con tu {service.title}?</h4>
                                <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">Nuestro equipo de ingenieros colegiados se encarga de todo el proceso legal y técnico.</p>
                                <Link href={route('contact')} className="inline-block bg-primary dark:bg-primary-light hover:bg-primary-light text-white px-6 py-3 rounded-full font-bold transition shadow-md">
                                    Consultar Ahora
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
