export default [
  // CommonJS
  {
    input: './lib/index.js',
    output: [
      {
        file: 'dist/index.js',
        format: 'cjs',
        exports: 'auto'
      }
    ],
    external: ['@digitalcredentials/base64url-universal', 'pako']
  },
  // ESM
  {
    input: './lib/index.js',
    output: [
      {
        file: 'dist/esm/index.js',
        format: 'esm',
        exports: 'auto'
      }
    ],
    external: ['@digitalcredentials/base64url-universal', 'pako']
  }
];
