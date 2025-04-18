  <!-- {{ range $paginator.Pages }}
          {{ with .Params.categories }}
            <span class="mx-1">•</span>
            <span>
              {{ range $index, $category := . }}
                {{ if $index }}, {{ end }}
                <a href="{{ "categories/" | relLangURL }}{{ $category | urlize }}" class="hover:underline">{{ $category }}</a>
              {{ end }}
            </span>
          {{ end }}
        </div>
        <div class="flex flex-wrap gap-2">
          {{ range .Params.tags }}
            <a href="{{ "tags/" | relLangURL }}{{ . | urlize }}" class="px-2 py-1 text-sm text-blue-600 bg-blue-100 rounded hover:bg-blue-200">{{ . }}</a>
          {{ end }} -->



@layer base {
  /* Style headings within your main content area */
  /* Adjust '.markdown-content' to a class wrapping your Hugo content */
  .markdown-content h1,
  .markdown-content h2,
  .markdown-content h3 {
    /* Default (Light Mode) Styles */
    @apply text-black mb-4 font-bold; /* Example light mode styles */
  }

/*  .markdown-content h1 {
     @apply text-4xl;
  }
  .markdown-content h2 {
     @apply text-3xl;
  }
   .markdown-content h3 {
     @apply text-2xl;
  }*/

  /* Dark Mode Styles */
  .dark .markdown-content h1,
  .dark .markdown-content h2,
  .dark .markdown-content h3 {
     /* Apply dark mode text color */
    @apply text-gray-100; /* Example dark mode text color */
     /* Add any other dark-mode specific overrides */
  }

  /* Alternatively, using Tailwind's dark: variant directly if preferred */
  /* This achieves the same as the .dark selector above with class strategy */
  /*
  .markdown-content h1,
  .markdown-content h2,
  .markdown-content h3 {
    @apply text-gray-900 dark:text-gray-100 mb-4 font-bold;
  }
  .markdown-content h1 { @apply text-4xl; }
  .markdown-content h2 { @apply text-3xl; }
  .markdown-content h3 { @apply text-2xl; }
  */
}
