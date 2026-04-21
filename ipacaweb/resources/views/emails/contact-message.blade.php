<x-mail::message>
# 🏢 Nueva Solicitud de Asesoría Técnica

Estimado equipo de **IPACA Consultores**,

Se ha registrado el ingreso de una nueva solicitud a través del portal web oficial. A continuación, se detallan los datos del prospecto para su pronta atención:

<x-mail::panel>
### 👤 Información Estratégica del Cliente

* **Peticionario / Empresa:** {{ $data['name'] }}
* **Número de Contacto:** {{ $data['phone'] }}
* **Correo Electrónico:** [{{ $data['email'] }}](mailto:{{ $data['email'] }})
* **Servicio de Interés:** {{ $data['service'] ?: 'No especificado (Asesoría General)' }}
</x-mail::panel>

### 📄 Descripción y Detalles de la Petición:
> {{ $data['message'] }}

Para agilizar el proceso y brindar un seguimiento inmediato, puede responder directamente a este mensaje haciendo clic en el siguiente botón:

<x-mail::button :url="'mailto:'.$data['email']" color="error">
Responder al Prospecto
</x-mail::button>

Atentamente,<br>
**Sistema Central de {{ config('app.name', 'Ipaca Consultores') }}**  
*(Por favor, atienda esta solicitud en las próximas 24 h. hábiles)*
</x-mail::message>