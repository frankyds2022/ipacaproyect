<?php

use Illuminate\Foundation\Application;
use Illuminate\Http\Request;

define('LARAVEL_START', microtime(true));

// Define logical paths to check environment
$hostingerPath = __DIR__.'/../ipaca_web';
$localPath = __DIR__.'/..';

// Detect if we are on Hostinger (sibling ipaca_web exists) or Local
$basePath = is_dir($hostingerPath) ? $hostingerPath : $localPath;

// Determine if the application is in maintenance mode...
if (file_exists($maintenance = $basePath.'/storage/framework/maintenance.php')) {
    require $maintenance;
}

// Register the Composer autoloader...
require $basePath.'/vendor/autoload.php';

// Bootstrap Laravel and handle the request...
/** @var Application $app */
$app = require_once $basePath.'/bootstrap/app.php';
$app->usePublicPath(__DIR__);

$app->handleRequest(Request::capture());
