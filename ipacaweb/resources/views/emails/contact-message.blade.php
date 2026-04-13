<x-mail::message>
# Nuevo Mensaje de Contacto

Has recibido un nuevo mensaje a través del formulario de contacto de la página web de IPACA Consultores.

### Detalles del remitente:

- **Nombre/Razón Social:** {{ $data['name'] }}
- **Correo Electrónico:** [{{ $data['email'] }}](mailto:{{ $data['email'] }})
- **Celular:** {{ $data['phone'] }}
- **Tipo de Trámite/Servicio:** {{ $data['service'] ?? 'No especificado' }}

### Mensaje:

<x-mail::panel>
{{ $data['message'] }}
</x-mail::panel>

<x-mail::button :url="'mailto:'.$data['email']">
Responder a {{ $data['name'] }}
</x-mail::button>

Saludos,<br>
El equipo de **{{ config('app.name') }}**
</x-mail::message>
