<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;

class PageController extends Controller
{
    public function home()
    {
        return Inertia::render('Welcome', [
            'services' => $this->getDummyServices(),
            'projects' => $this->getDummyProjects()
        ]);
    }

    public function servicesShow($slug)
    {
        $service = collect($this->getDummyServices())->firstWhere('slug', $slug);

        if (!$service) {
            abort(404);
        }

        return Inertia::render('Services/Show', [
            'service' => $service
        ]);
    }

    public function projectsShow($slug)
    {
        $project = collect($this->getDummyProjects())->firstWhere('slug', $slug);

        if (!$project) {
            abort(404);
        }

        return Inertia::render('Projects/Show', [
            'project' => $project
        ]);
    }

    private function getDummyServices()
    {
        return [
            // CATEGORÍA: SERVICIOS TÉCNICOS
            [
                'id' => 1,
                'slug' => 'declaratoria-de-fabrica',
                'category' => 'Servicios Técnicos',
                'title' => 'Declaratoria de Fábrica',
                'short_description' => 'Inscripción legal de construcciones existentes en Registros Públicos.',
                'description' => 'La Declaratoria de Fábrica es el reconocimiento legal de la existencia de cualquier tipo de obra, ya sea casa, edificio o local. Nuestro equipo se encarga de todo el levantamiento de información arquitectónica y el proceso en Sunarp para el saneamiento físico-legal.',
                'image' => '/images/service_tecnicos.png',
                'benefits' => ['Seguridad Jurídica Integral', 'Facilita la venta o hipoteca', 'Respaldo de Ingenieros Colegiados']
            ],
            [
                'id' => 2,
                'slug' => 'independizacion-de-predios',
                'category' => 'Servicios Técnicos',
                'title' => 'Independización de Predios',
                'short_description' => 'Separación legal de unidades inmobiliarias para otorgarles partidas registrales únicas.',
                'description' => 'Realizamos el trámite completo para independizar pisos, departamentos o lotes de terreno, de modo que cada unidad adquiera independencia legal, física y registral. Este paso es fundamental para poder vender, alquilar o heredar de forma individual.',
                'image' => '/images/service_saneamiento.png',
                'benefits' => ['Partida Registral Independiente', 'Aumento del Valor Inmobiliario', 'Asesoría Integral en el Trámite']
            ],
            [
                'id' => 5,
                'slug' => 'regularizacion-de-construccion',
                'category' => 'Servicios Técnicos',
                'title' => 'Regularización de Construcción',
                'short_description' => 'Saneamiento de edificaciones que fueron construidas sin licencia municipal.',
                'description' => 'Brindamos soporte legal y arquitectónico para formalizar obras construidas sin el trámite previo de licencia. Nos encargamos del levantamiento, cálculos estructurales (si es requerido) y la gestión municipal para evitar sanciones.',
                'image' => '/images/saneamiento.jpg',
                'benefits' => ['Levantamiento de Multas', 'Formalización de la Propiedad', 'Valorización Actualizada']
            ],
            [
                'id' => 6,
                'slug' => 'prescripcion-adquisitiva-dominio',
                'category' => 'Servicios Técnicos',
                'title' => 'Prescripción Adquisitiva',
                'short_description' => 'Reconocimiento de propiedad por posesión continua y pacífica.',
                'description' => 'Asesoramos legal y técnicamente en el proceso de declaración de propiedad para quienes han poseído un bien de manera continua, pacífica y pública por el tiempo exigido por ley. Armamos todo el expediente notarial o judicial necesario.',
                'image' => '/images/preescripcion.jpg',
                'benefits' => ['Obtención del Título de Propiedad', 'Inscripción Segura en Sunarp', 'Acompañamiento Legal Especializado']
            ],
            [
                'id' => 7,
                'slug' => 'elaboracion-de-contratos',
                'category' => 'Servicios Técnicos',
                'title' => 'Elaboración de Contratos (Alquiler, compras, venta, donaciones, etc)',
                'short_description' => 'Redacción segura de contratos de alquiler, compra, venta y donaciones.',
                'description' => 'Garantiza la seguridad jurídica de tus transacciones inmobiliarias. Elaboramos y revisamos contratos de arrendamiento, compra-venta, usufructo y donaciones con cláusulas que protegen tu inversión.',
                'image' => '/images/service_tecnicos.png',
                'benefits' => ['Seguridad Jurídica', 'Evitamos cláusulas abusivas', 'Asesoría Personalizada']
            ],
            [
                'id' => 8,
                'slug' => 'reglamento-interno',
                'category' => 'Servicios Técnicos',
                'title' => 'Reglamento Interno (Adecuaciones)',
                'short_description' => 'Adecuación e inscripción de reglamentos internos para condominios.',
                'description' => 'Estructuramos, redactamos e inscribimos el reglamento interno de tu edificio o condominio. Vital para establecer cuotas de mantenimiento, uso de áreas comunes y convivencia vecinal pacífica.',
                'image' => '/images/service_saneamiento.png',
                'benefits' => ['Convivencia Armoniosa', 'Organización Administrativa', 'Adecuación a la Ley Actual']
            ],
            [
                'id' => 9,
                'slug' => 'anticipo-de-herencia',
                'category' => 'Servicios Técnicos',
                'title' => 'Anticipo de Herencia',
                'short_description' => 'Asesoría para transferir en vida la propiedad de inmuebles a herederos.',
                'description' => 'Evita conflictos futuros planificando la distribución de tus bienes. Realizamos los trámites legales y registrales para que puedas heredar tus propiedades en vida de manera rápida y segura.',
                'image' => '/images/service_tecnicos.png',
                'benefits' => ['Prevención de Conflictos', 'Trámite Rápido', 'Seguridad Civil']
            ],
            [
                'id' => 10,
                'slug' => 'lotizaciones',
                'category' => 'Servicios Técnicos',
                'title' => 'Lotizaciones',
                'short_description' => 'Subdivisión de grandes parcelas en lotes listos para desarrollar.',
                'description' => 'Acompañamos tu proyecto desde el levantamiento topográfico hasta la subdivisión oficial e independización registral de cada uno de los lotes frente a registros públicos y la municipalidad local.',
                'image' => '/images/preescripcion.jpg',
                'benefits' => ['Desarrollo de Proyectos', 'Aumento del Valor', 'Planos de Topografía Exacta']
            ],
            [
                'id' => 17,
                'slug' => 'rectificacion-areas-linderos',
                'category' => 'Servicios Técnicos',
                'title' => 'Rectificación de Áreas y Linderos',
                'short_description' => 'Corrección técnico-legal de las medidas reales de tu propiedad.',
                'description' => 'Solucionamos discrepancias entre la realidad física de tu terreno y lo que indican los documentos registrales. Un paso previo indispensable si planeas vender o independizar una propiedad con medidas inexactas.',
                'image' => '/images/service_tecnicos.png',
                'benefits' => ['Saneamiento Registral Efectivo', 'Levantamiento Topográfico Exacto', 'Seguridad en la Venta']
            ],

            // CATEGORÍA: LICENCIAS MUNICIPALES
            [
                'id' => 3,
                'slug' => 'licencia-de-funcionamiento',
                'category' => 'Licencias Municipales',
                'title' => 'Licencia de Funcionamiento',
                'short_description' => 'Obtención ágil de las autorizaciones municipales para que tu negocio opere formalmente.',
                'description' => 'Eliminamos las barreras burocráticas para que tu empresa comience a operar de inmediato. Realizamos el diagnóstico, preparamos la compatibilidad de uso, planos referenciales y el expediente completo a presentar en la municipalidad respectiva.',
                'image' => '/images/service_licencias.png',
                'benefits' => ['Trámite Ágil y Sin Demoras', 'Evitación de Multas o Clausuras', 'Asesoría Normativa por Distritos']
            ],
            [
                'id' => 4,
                'slug' => 'certificado-de-defensa-civil-itse',
                'category' => 'Licencias Municipales',
                'title' => 'Certificado D.C. (ITSE)',
                'short_description' => 'Aprobación de la Inspección Técnica de Seguridad en Edificaciones.',
                'description' => 'Elaboramos el Expediente Técnico completo (planos de arquitectura, eléctricos, evacuación, ubicación de extintores, señalética, cálculos de aforo) necesarios para obtener tu Certificado ITSE, garantizando la seguridad del local y de las personas.',
                'image' => '/images/defensa_civil.jpg',
                'benefits' => ['Planos Profesionales', 'Cálculo Exacto de Aforos', 'Simulacros y Procedimientos']
            ],
            [
                'id' => 11,
                'slug' => 'licencia-de-demolicion',
                'category' => 'Licencias Municipales',
                'title' => 'Licencia de Demolición',
                'short_description' => 'Permiso municipal obligatorio para demoler construcciones.',
                'description' => 'Elaboramos y gestionamos el expediente técnico requerido para obtener la autorización municipal y ejecutar labores de demolición de manera formal sin arriesgarte a paralizaciones y multas.',
                'image' => '/images/service_licencias.png',
                'benefits' => ['Evita Clausuras', 'Trámite Municipal Seguro', 'Expedientes Precisos']
            ],
            [
                'id' => 12,
                'slug' => 'licencia-de-construccion',
                'category' => 'Licencias Municipales',
                'title' => 'Licencia de Construcción',
                'short_description' => 'Gestión para iniciar legalmente la edificación de tu proyecto.',
                'description' => 'Armamos el legajo técnico de tu proyecto (arquitectura, estructuras, eléctricas, sanitarias) y obtenemos la aprobación municipal según los parámetros urbanísticos de la zona.',
                'image' => '/images/saneamiento.jpg',
                'benefits' => ['Inicio Formal de Obra', 'Planos Aprobados', 'Acompañamiento a Comisiones']
            ],
            [
                'id' => 13,
                'slug' => 'licencia-anuncios-paneles',
                'category' => 'Licencias Municipales',
                'title' => 'Licencia de Anuncios',
                'short_description' => 'Autorizaciones para publicidad exterior de negocios.',
                'description' => 'Logramos la aprobación ante la municipalidad para instalar letreros, toldos o publicidad luminosa en el exterior de tu local comercial respetando el ornato de la ciudad.',
                'image' => '/images/service_licencias.png',
                'benefits' => ['Cumplimiento de la Normativa', 'Mayor Visibilidad Legal', 'Trámite Expedito']
            ],
            [
                'id' => 14,
                'slug' => 'licencia-habilitacion-urbana',
                'category' => 'Licencias Municipales',
                'title' => 'Habilitación Urbana',
                'short_description' => 'Cambio de uso de terrenos rústicos a áreas urbanas.',
                'description' => 'Transformamos tu terreno eriazo en suelo urbano con el diseño de vías, dotación de servicios de agua, luz y desagüe en concordancia con los planos de desarrollo urbano del distrito.',
                'image' => '/images/defensa_civil.jpg',
                'benefits' => ['Revalorización Inmediata', 'Desarrollo Condominal', 'Asesoría Experta']
            ],
            [
                'id' => 15,
                'slug' => 'certificado-de-zonificacion',
                'category' => 'Licencias Municipales',
                'title' => 'Certificado Zonificación y Vías',
                'short_description' => 'Certificado de parámetros de uso permitidos en tu predio.',
                'description' => 'Conseguimos el documento oficial emitido por la municipalidad que detalla los usos de suelo y los parámetros urbanísticos aplicables a fin de desarrollar proyectos compatibles.',
                'image' => '/images/service_licencias.png',
                'benefits' => ['Inversión Segura', 'Estudios Previos de Viabilidad', 'Base para Trámites Posteriores']
            ],

            [
                'id' => 16,
                'slug' => 'conformidad-de-obra',
                'category' => 'Licencias Municipales',
                'title' => 'Conformidad de Obra',
                'short_description' => 'Declaración municipal de finalización de proyecto de construcción.',
                'description' => 'Realizamos la gestión indicando que la obra ejecutada corresponde íntegramente a los planos aprobados en la licencia de construcción. Es el paso final indispensable antes de la independización.',
                'image' => '/images/service_saneamiento.png',
                'benefits' => ['Finalización Formal de Proyecto', 'Requisito para Sunarp', 'Previene Multas']
            ],
            [
                'id' => 18,
                'slug' => 'cambio-de-zonificacion',
                'category' => 'Licencias Municipales',
                'title' => 'Cambio de Zonificación',
                'short_description' => 'Trámite para modificar legalmente el uso de suelo permitido en tu predio.',
                'description' => 'Elaboramos y sustentamos el expediente técnico-legal ante las autoridades competentes para solicitar la modificación del Plan de Desarrollo Urbano. Este servicio es fundamental para lograr desarrollar nuevos proyectos comerciales, residenciales o industriales en terrenos con restricciones de uso iniciales.',
                'image' => '/images/service_licencias.png',
                'benefits' => ['Aumento de Rentabilidad del Terreno', 'Cumplimiento Legal y Normativo', 'Desarrollo de Nuevos Proyectos']
            ],
        ];
    }

    private function getDummyProjects()
    {
        return [
            [
                'id' => 1,
                'slug' => 'saneamiento-edificio-multifamiliar',
                'title' => 'Saneamiento de Edificio Multifamiliar',
                'short_description' => 'Independización y Declaratoria de Fábrica para 12 departamentos.',
                'location' => 'Lima',
                'description' => 'Nos encargamos del levantamiento arquitectónico completo de un edificio de 4 pisos que no contaba con licencia. Logramos tramitar la regularización, declaratoria de fábrica, reglamento interno e independización registral de los 12 departamentos.',
                'client' => 'Inmobiliaria D&J',
                'date' => 'Agosto 2023',
                'image' => '/images/project_edificio.png',
                'service_type' => 'Servicios Técnicos Múltiples'
            ],
            [
                'id' => 2,
                'slug' => 'licencia-itse-centro-comercial',
                'title' => 'Certificación ITSE para Centro Comercial',
                'short_description' => 'Expediente técnico completo de seguridad para una galería comercial.',
                'location' => 'Gamarra, La Victoria',
                'description' => 'Elaboramos más de 40 planos detallados (arquitectura, evacuación, instalaciones eléctricas) y certificados de operatividad para una galería de alto tránsito. Obtuvimos el Certificado ITSE de nivel alto tras superar con éxito la inspección municipal.',
                'client' => 'Asociación de Comerciantes',
                'date' => 'Febrero 2024',
                'image' => '/images/project_edificio.png',
                'service_type' => 'Licencias Municipales'
            ],
            [
                'id' => 3,
                'slug' => 'habilitacion-urbana-condominio',
                'title' => 'Habilitación Urbana de Terreno',
                'short_description' => 'Gestión para el cambio de uso y lotización de área extensa.',
                'location' => 'Lurín',
                'description' => 'Desarrollamos el diseño de vías, zonificación e independización de predios de un lote agrícola a zona residencial para el desarrollo de un futuro condominio campestre. Cumpliendo estrictamente con la normativa local.',
                'client' => 'Consorcio Los Pinos',
                'date' => 'Noviembre 2023',
                'image' => '/images/project_edificio.png',
                'service_type' => 'Lotización / Saneamiento Legal'
            ]
        ];
    }
}
