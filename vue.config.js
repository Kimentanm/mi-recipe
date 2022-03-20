module.exports = {
    publicPath: "./",
    lintOnSave: false,
    css: {
        extract: true,
        sourceMap: false,
        modules: false
    },
    productionSourceMap: false,
    runtimeCompiler: true,
    chainWebpack: config => {
        // 不分片只生成一个js文件
        config.optimization.splitChunks(false);
        config.plugin('preload')
            .tap(args => {
                args[0].fileBlacklist.push(/\.css/, /app\.js/)
                return args
            })
        config.plugin('inline-source')
            .use(require('html-webpack-inline-source-plugin'))
        config
            .plugin('html')
            .tap(args => {
                args[0].inlineSource = '(\\.css|\\.js$)'
                return args
            })
    }
};

