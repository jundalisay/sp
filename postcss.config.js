module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
    ...(process.env.HUGO_ENVIRONMENT === 'production' ? {
      '@fullhuman/postcss-purgecss': {
        content: [
          './layouts/**/*.html',
          './content/**/*.md',
          './content/**/*.html',
          './themes/**/layouts/**/*.html'
        ],
        safelist: [
          // Add classes that might be added by JS here
          'active',
          'open',
          /^search-/,
          // Add any dynamically created classes here
          /^hljs/,  // For syntax highlighting
          /^pagination/  // For pagination elements
        ],
        defaultExtractor: content => {
          // Capture as liberally as possible, including things like `h-16px`
          // and even arbitrary Tailwind classes like `bg-[#f8f4eb]`
          return content.match(/[\w-/:]+(?<!:)/g) || []
        },
        fontFace: true,
        keyframes: true
      },
      cssnano: {
        preset: 'default'
      }
    } : {})
  }
}