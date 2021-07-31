export default {
    input: 'lib/main.js',
    output: [
        {
            file: `dist/index.min.cjs.js`,
            format: 'cjs',
        },
        {
            file: `dist/index.min.esm.js`,
            format: 'esm',
        }
    ]
}
