import purgecss from '@fullhuman/postcss-purgecss'

export default {
  plugins: [
    purgecss({
      content: ['./src/**/*.html', './src/**/*.js', './src/**/*.ts', './src/**/*.vue', './src/**/*.astro'],
    }),
  ],
}
