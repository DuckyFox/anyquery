import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgLoader from "vite-svg-loader";
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        svgLoader()
    ],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './src'),
            '@Widgets': path.resolve(__dirname, './src/Widgets'),
            '@Features': path.resolve(__dirname, './src/Features'),
            '@Shared': path.resolve(__dirname, './src/Shared'),
            '@App': path.resolve(__dirname, './src/App'),
            '@Entities': path.resolve(__dirname, './src/Entities'),
            '@Pages': path.resolve(__dirname, './src/Pages'),
        }
    },
    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@use "@/App/Styles/variables.scss" as *;'
            }
        }
    }
})
