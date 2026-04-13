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
                'title' => 'Certificado de Defensa Civil (ITSE)',
                'short_description' => 'Aprobación de la Inspección Técnica de Seguridad en Edificaciones.',
                'description' => 'Elaboramos el Expediente Técnico completo (planos de arquitectura, eléctricos, evacuación, ubicación de extintores, señalética, cálculos de aforo) necesarios para obtener tu Certificado ITSE, garantizando la seguridad del local y de las personas.',
                'image' => '/images/defensa_civil.jpg',
                'benefits' => ['Planos Profesionales', 'Cálculo Exacto de Aforos', 'Simulacros y Procedimientos']
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
            ]
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
