/** @type {import('tailwindcss').Config} */
import scrollbarHide from "./src/utils.js";


export default {
    content: ["./src/**/*.{html,js,jsx,md,ts,tsx}"],
    theme: {
        extend: {},
        colors: {
            'primary': {
                '50': '#ebfef3',
                '100': '#d0fbdf',
                '200': '#a4f6c5',
                '300': '#6aeba7',
                '400': '#2fd884',
                '500': '#0abf6c',
                '600': '#009453',
                '700': '#007c49',
                '800': '#03623b',
                '900': '#045032',
                '950': '#012d1d',
            },
            'secondary': {
                '50': '#f6f6f6',
                '100': '#e7e7e7',
                '200': '#d1d1d1',
                '300': '#b0b0b0',
                '400': '#888888',
                '500': '#6d6d6d',
                '600': '#5d5d5d',
                '700': '#4f4f4f',
                '800': '#454545',
                '900': '#3d3d3d',
                '950': '#262626',
            },

        }
    },
    plugins: [scrollbarHide]
}

