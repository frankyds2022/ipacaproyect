import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
        extend: {
            fontFamily: {
                sans: ['Outfit', 'Inter', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                primary: {
                    DEFAULT: '#000B4D', // Navy Blue from Logo background
                    light: '#1a2468',
                    dark: '#000028',
                },
                secondary: {
                    DEFAULT: '#5B86E5', // Light blue from 'CONSULTORES'
                    light: '#8baaf0',
                    dark: '#3f68c2',
                },
                accent: {
                    DEFAULT: '#F59E0B', // Gold/Orange for titles like 'SERVICIOS TÉCNICOS'
                    hover: '#D97706'
                },
                slate: {
                    800: '#1e293b',
                    900: '#0f172a',
                }
            }
        },
    },

    plugins: [forms],
};
