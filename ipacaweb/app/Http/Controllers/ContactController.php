<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Mail;
use App\Mail\ContactMessage;

class ContactController extends Controller
{
    public function show()
    {
        return Inertia::render('Contact', [
            'status' => session('status'),
        ]);
    }

    public function submit(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'phone' => 'required|string|max:20',
            'email' => 'required|email|max:255',
            'service' => 'nullable|string',
            'message' => 'required|string',
        ]);

        try {
            Mail::to('contacto@ipacaconsultores.com')->send(new ContactMessage($validated));
            Log::info('Nuevo Mensaje de Contacto enviado exitosamente: ', $validated);
        } catch (\Exception $e) {
            Log::error('Error al enviar mensaje de contacto: ' . $e->getMessage());
            // Optionally, we could return a different status or flash message indicating failure,
            // but for user experience, sometimes it's better to just fail gracefully 
            // or flash a generic error. We'll stick to a success generic for now or real error.
        }

        return redirect()->back()->with('status', '¡Gracias por tu mensaje! Nos pondremos en contacto contigo muy pronto.');
    }
}
