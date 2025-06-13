import copy from 'rollup-plugin-copy';
import ViteRestart from 'vite-plugin-restart';

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
        // Allow cross-origin requests -- https://github.com/vitejs/vite/security/advisories/GHSA-vg6x-rcgg-rjx6
        allowedHosts: true,
        cors: {
            origin: /https?:\/\/([A-Za-z0-9\-\.]+)?(localhost|\.local|\.test|\.site)(?::\d+)?$/
        },
        fs: {
            strict: false
        },
        host: '0.0.0.0',
        port: 4000,
        strictPort: false,
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