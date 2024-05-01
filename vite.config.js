import ViteRestart from 'vite-plugin-restart';
import copy from 'rollup-plugin-copy';

export default ({command}) => ({
    base: command === 'serve' ? '' : '/dist/',
    build: {
        manifest: true,
        outDir: 'web/dist/',
        rollupOptions: {
            input: {
                app: 'src/js/app.js',
            }
        },
    },
    server: {
        fs: {
            strict: false
        },
        host: '0.0.0.0',
        port: 3000,
        strictPort: true,
    },
    plugins: [
        ViteRestart({
            reload: [
                'templates/**/*',
            ],
        }),
        copy({
            targets: [{src: 'assets/**/*', dest: 'web/dist/assets/'}],
            hook: 'writeBundle'
        }),
    ],
});