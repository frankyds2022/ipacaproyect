<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\Log;

class ContactController extends Controller
{
    public function show()
    {
        return Inertia::render('Contact');
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

        // Since no email provider is configured yet based on requirements, 
        // we just log it and simulate a successful response for the frontend prototype.
        Log::info('Nuevo Mensaje de Contacto: ', $validated);

        return redirect()->back()->with('status', '¡Gracias por tu mensaje! Nos pondremos en contacto contigo muy pronto.');
    }
}
