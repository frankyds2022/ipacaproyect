import { Head, useForm } from '@inertiajs/react';
import MainLayout from '@/Layouts/MainLayout';

export default function Contact({ status }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });

    const submit = (e) => {
        e.preventDefault();
        post(route('contact.submit'), {
            onSuccess: () => reset(),
        });
    };

    return (
        <MainLayout>
            <Head title="Contáctanos - IPACA Consultores" />
            
            <div className="relative bg-primary dark:bg-primary-dark pt-32 pb-24 lg:pb-32 text-center text-white overflow-hidden transition-colors duration-300">
                <div className="absolute inset-0 z-0">
                    <img 
                        src="/images/hero_ipaca.png" 
                        alt="Background" 
                        className="absolute inset-0 w-full h-full object-cover opacity-10 mix-blend-overlay"
                    />
                    <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary/90 dark:to-primary-dark/90"></div>
                </div>
                <div className="relative z-10 max-w-3xl mx-auto px-4">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-white font-bold text-xs uppercase tracking-wider mb-6">
                        <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
                        Asistencia en línea
                    </div>
                    <h1 className="text-4xl md:text-6xl font-outfit font-extrabold mb-6 leading-tight drop-shadow-lg">
                        Conversemos sobre tus <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent to-yellow-200">necesidades legales</span>
                    </h1>
                    <p className="text-slate-200 font-inter text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-light">
                        Recibe asesoría personalizada y cotización exacta sobre nuestro saneamiento físico legal y tramitación de expedientes técnicos.
                    </p>
                </div>
            </div>

            <section className="pb-24 bg-slate-50 dark:bg-slate-900 relative transition-colors duration-300">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-slate-800 rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row -mt-16 lg:-mt-24 relative z-20 border border-slate-100 dark:border-slate-700 transition-colors duration-300">
                        
                        {/* Information column */}
                        <div className="bg-gradient-to-br from-primary-light to-primary dark:from-primary dark:to-primary-dark text-white p-10 lg:p-14 lg:w-2/5 flex flex-col justify-between relative overflow-hidden">
                            <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-white/5 blur-3xl"></div>
                            <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-64 h-64 rounded-full bg-accent/20 blur-3xl"></div>
                            
                            <div className="relative z-10">
                                <h3 className="text-3xl font-outfit font-bold mb-6 text-white">Asesoría Integral</h3>
                                <p className="text-slate-200 dark:text-slate-300 font-inter mb-12 leading-relaxed text-sm lg:text-base opacity-90">
                                    Completa el formulario y nuestros ingenieros y abogados colegiados se contactarán contigo a la brevedad para ofrecerte la mejor solución en regularizaciones y saneamiento.
                                </p>

                                <div className="space-y-8">
                                    <div className="flex items-center gap-5 group">
                                        <div className="bg-white/10 group-hover:bg-accent/20 transition-colors p-4 rounded-2xl flex-shrink-0 border border-white/10 group-hover:border-accent/30 backdrop-blur-sm">
                                            <svg className="w-6 h-6 text-accent group-hover:text-yellow-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-300 uppercase tracking-widest font-bold text-xs mb-1">Central Telefónica</p>
                                            <p className="text-xl font-bold font-inter text-white">+1 234 567 8900</p>
                                        </div>
                                    </div>

                                    <div className="flex items-center gap-5 group">
                                        <div className="bg-white/10 group-hover:bg-accent/20 transition-colors p-4 rounded-2xl flex-shrink-0 border border-white/10 group-hover:border-accent/30 backdrop-blur-sm">
                                            <svg className="w-6 h-6 text-accent group-hover:text-yellow-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-300 uppercase tracking-widest font-bold text-xs mb-1">Correo Corporativo</p>
                                            <p className="text-xl font-bold font-inter text-white">consultas@ipacaconsultores.com</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-5 group">
                                        <div className="bg-white/10 group-hover:bg-accent/20 transition-colors p-4 rounded-2xl flex-shrink-0 border border-white/10 group-hover:border-accent/30 backdrop-blur-sm">
                                            <svg className="w-6 h-6 text-accent group-hover:text-yellow-300 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <p className="text-sm text-slate-300 uppercase tracking-widest font-bold text-xs mb-1">Sede Principal</p>
                                            <p className="text-xl font-bold font-inter text-white">Lima, Perú</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Form column */}
                        <div className="p-10 lg:p-14 lg:w-3/5 bg-white dark:bg-slate-800">
                            <h3 className="text-3xl font-outfit font-bold text-slate-900 dark:text-white mb-2">Envíanos tu Consulta</h3>
                            <p className="text-slate-500 dark:text-slate-400 mb-8 text-sm">Tus datos están protegidos y te responderemos en menos de 24 horas hábiles.</p>
                            
                            {status && (
                                <div className="mb-8 p-4 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 rounded-xl font-medium border border-green-200 dark:border-green-800 flex items-center gap-3">
                                    <div className="bg-green-100 dark:bg-green-800 rounded-full p-1">
                                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    {status}
                                </div>
                            )}

                            <form onSubmit={submit} className="space-y-6">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <label htmlFor="name" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Nombre Completo / Razón Social</label>
                                        <input
                                            id="name"
                                            type="text"
                                            value={data.name}
                                            onChange={e => setData('name', e.target.value)}
                                            className="w-full border-slate-200 dark:border-slate-700 focus:border-secondary dark:focus:border-secondary focus:ring-secondary rounded-xl shadow-sm bg-slate-50 dark:bg-slate-900/50 dark:text-white px-4 py-3 transition-colors"
                                            required
                                        />
                                        {errors.name && <div className="text-red-500 text-sm mt-1">{errors.name}</div>}
                                    </div>
                                    <div>
                                        <label htmlFor="phone" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Celular de Contacto</label>
                                        <input
                                            id="phone"
                                            type="text"
                                            value={data.phone}
                                            onChange={e => setData('phone', e.target.value)}
                                            className="w-full border-slate-200 dark:border-slate-700 focus:border-secondary dark:focus:border-secondary focus:ring-secondary rounded-xl shadow-sm bg-slate-50 dark:bg-slate-900/50 dark:text-white px-4 py-3 transition-colors"
                                            required
                                        />
                                        {errors.phone && <div className="text-red-500 text-sm mt-1">{errors.phone}</div>}
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="email" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Correo Electrónico</label>
                                    <input
                                        id="email"
                                        type="email"
                                        value={data.email}
                                        onChange={e => setData('email', e.target.value)}
                                        className="w-full border-slate-200 dark:border-slate-700 focus:border-secondary dark:focus:border-secondary focus:ring-secondary rounded-xl shadow-sm bg-slate-50 dark:bg-slate-900/50 dark:text-white px-4 py-3 transition-colors"
                                        required
                                    />
                                    {errors.email && <div className="text-red-500 text-sm mt-1">{errors.email}</div>}
                                </div>

                                <div>
                                    <label htmlFor="service" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Tipo de Trámite o Servicio Requerido</label>
                                    <div className="relative">
                                        <select
                                            id="service"
                                            value={data.service}
                                            onChange={e => setData('service', e.target.value)}
                                            className="w-full border-slate-200 dark:border-slate-700 focus:border-secondary dark:focus:border-secondary focus:ring-secondary rounded-xl shadow-sm bg-slate-50 dark:bg-slate-900/50 dark:text-white px-4 py-3 appearance-none transition-colors"
                                        >
                                            <option value="">Selecciona un área de interés</option>
                                            <option value="licencia_funcionamiento">Licencia de Funcionamiento</option>
                                            <option value="defensa_civil_itse">Defensa Civil (ITSE)</option>
                                            <option value="declaratoria_fabrica">Declaratoria de Fábrica / Saneamiento</option>
                                            <option value="otro">Otro Trámite Municipal o Legal</option>
                                        </select>
                                    </div>
                                </div>

                                <div>
                                    <label htmlFor="message" className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">Detalles de su consulta</label>
                                    <textarea
                                        id="message"
                                        rows="5"
                                        value={data.message}
                                        onChange={e => setData('message', e.target.value)}
                                        className="w-full border-slate-200 dark:border-slate-700 focus:border-secondary dark:focus:border-secondary focus:ring-secondary rounded-xl shadow-sm bg-slate-50 dark:bg-slate-900/50 dark:text-white px-4 py-3 resize-none transition-colors"
                                        placeholder="Ej: Requiero la licencia para un local comercial de 50m2..."
                                        required
                                    ></textarea>
                                    {errors.message && <div className="text-red-500 text-sm mt-1">{errors.message}</div>}
                                </div>

                                <div className="pt-4">
                                    <button
                                        type="submit"
                                        disabled={processing}
                                        className="w-full flex justify-center items-center py-4 px-4 border border-transparent rounded-xl shadow-lg text-base font-bold text-white bg-gradient-to-r from-accent to-yellow-600 hover:from-accent-hover hover:to-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-accent transition-all duration-300 disabled:opacity-50 transform hover:-translate-y-1"
                                    >
                                        {processing ? 'Procesando Envío...' : 'Enviar Solicitud a Asesores'}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </MainLayout>
    );
}
