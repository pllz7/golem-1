import { defineConfig } from 'unocss'

export default defineConfig({
    shortcuts: [
        { link: 'text-primary-500 hover:text-primary-400 decoration-none ' },
    ],
    theme: {
        colors: {
            primary: {
                50: '#eadbf0',
                100: '#efd8f3',
                200: '#eed0f0',
                300: '#e0b1e7',
                400: '#cd83d8',
                500: '#b95ec9',
                600: '#a741aa',
                700: '#903597',
                800: '#762d7c',
                900: '#672862',
                DEFAULT: '#b95ec9',
            },
        },
    },
})