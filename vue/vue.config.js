const {defineConfig} = require('@vue/cli-service')
module.exports = defineConfig({
    // transpileDependencies: true
    transpileDependencies: ['simple-mind-map'],
    devServer: {
        port: 80,
        proxy: {
            '/api': {
                target: 'http://localhost:6679',
                changeOrigin: true,
                ws: true,
                pathRewrite: {
                    'api': ''
                }
            }
        }
    }
})
