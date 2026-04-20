import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';
import colors from 'tailwindcss/colors';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: 'class',
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
                    DEFAULT: '#D30B20', // rgba(211, 11, 32, 1)
                    light: '#E82B3E',
                    dark: '#9A0515',
                },
                secondary: {
                    DEFAULT: '#ED731A', // R:0.93 G:0.45 B:0.10 -> approx 237, 114, 25
                    light: '#F4944A',
                    dark: '#BB570E',
                },
                accent: {
                    DEFAULT: '#ee7916eb', // Keeping Gold/Orange as accent, though it matches secondary somewhat
                    hover: '#b66407ff'
                },
                slate: colors.neutral,
            }
        },
    },

    plugins: [forms],
};
