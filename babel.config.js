module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current'
                }
            }
        ],
        '@babel/preset-typescript'
    ],
    plugins: [
        ['module-resolver', {
            alias: {
                '@config': './src/config',
                '@models': './src/models',
                '@core': './src/core',
                '@controllers': './src/controllers',
                '@views': './src/views'
            }
        }]
    ],
    ignore: [
        '**/*.spect.ts'
    ]
}