const gulp = require('gulp');

const esBuildClient = async () => {
  const { build } = require('esbuild');

  return build({
    entryPoints: [
      'entrypoints/entry1.js',
      'entrypoints/entry2.js',
    ],
    outdir: 'dist',
    minify: true,
    bundle: true,
    sourcemap: true,
    splitting: true,
    format: 'esm'
  })
};

gulp.task('esbuild', async () => {
  await esBuildClient()
});