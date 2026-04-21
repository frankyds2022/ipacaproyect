<?php

use Illuminate\Foundation\Application;
use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

// Determine if the application is in maintenance mode...
if (file_exists($maintenance = __DIR__.'/../storage/framework/maintenance.php')) {
    require $maintenance;
}

// ----------------------------------------------------------------------
// DETECCIÓN AUTOMÁTICA DE ENTORNO (Hostinger vs PC Local)
// ----------------------------------------------------------------------
if (file_exists(__DIR__.'/ipaca_web/vendor/autoload.php')) {
    // ESTAMOS EN HOSTINGER (Estructura: public_html -> ipaca_web)
    require __DIR__.'/ipaca_web/vendor/autoload.php';
    $app = require_once __DIR__.'/ipaca_web/bootstrap/app.php';
} else {
    // ESTAMOS EN PC LOCAL (Servidor de Desarrollo de Laravel)
    require __DIR__.'/../vendor/autoload.php';
    $app = require_once __DIR__.'/../bootstrap/app.php';
}

$app->usePublicPath(__DIR__);
$app->handleRequest(Request::capture());
