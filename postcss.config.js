const tailwindcss = require('tailwindcss');
const autoprefixer = require('autoprefixer');
const purgecss = require('@fullhuman/postcss-purgecss').default;
const cssnano = require('cssnano');


module.exports = {
  plugins: [
    tailwindcss,
    autoprefixer,
    ...(process.env.HUGO_ENVIRONMENT === 'production'
      ? [
          purgecss({
            content: [
              './layouts/**/*.html',
              './content/**/*.md',
              './content/**/*.html',
              './themes/**/layouts/**/*.html',
            ],
            safelist: [
              'active',
              'open',
              /^search-/,
              /^hljs/,
              /^pagination/,
            ],
            defaultExtractor: (content) =>
              content.match(/[\w-/:]+(?<!:)/g) || [],
            fontFace: true,
            keyframes: true,
          }),
          cssnano({
            preset: 'default',
          }),
        ]
      : []),
  ],
};
