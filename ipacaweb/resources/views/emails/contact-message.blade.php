<x-mail::message>
# 🏢 Nueva Solicitud de Asesoría Técnica

Estimado equipo de **IPACA Consultores**,

Se ha registrado el ingreso de una nueva solicitud a través del portal web oficial. A continuación, se detallan los datos del prospecto para su pronta atención:

<x-mail::table>
| Datos del Prospecto | Información Registrada |
| :--- | :--- |
| **Peticionario / Empresa:** | {{ $data['name'] }} |
| **Número de Contacto:** | {{ $data['phone'] }} |
| **Correo Electrónico:** | [{{ $data['email'] }}](mailto:{{ $data['email'] }}) |
| **Servicio de Interés:** | {{ $data['service'] ? $data['service'] : 'No especificado (Asesoría General)' }} |
</x-mail::table>

<br>

### 📄 Detalles Adicionales y Descripción

<x-mail::panel>
**Mensaje original escrito por el cliente:**  
*"{!! nl2br(e($data['message'])) !!}"*
</x-mail::panel>

Para brindar un seguimiento inmediato, puede responder directamente a este correo haciendo clic en el siguiente botón:

<x-mail::button :url="'mailto:'.$data['email']" color="error">
Responder a {{ $data['name'] }}
</x-mail::button>

Atentamente,<br>
**Sistema Automático de {{ config('app.name') }}**  
*(Por favor, atienda esta solicitud en las próximas 24 horas hábiles).*
</x-mail::message>
