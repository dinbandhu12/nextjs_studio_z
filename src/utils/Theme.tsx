import React, { JSX } from 'react';

export function ThemeScript(): JSX.Element {
  const themeScript = `
    (function() {
      function setTheme(theme) {
        if (theme === 'dark') {
          document.documentElement.classList.add('dark-mode');
        } else {
          document.documentElement.classList.remove('dark-mode');
        }
        localStorage.setItem('theme', theme);
      }

      // Try to get saved theme preference
      let theme = localStorage.getItem('theme');
      
      // If no saved preference, check system preference
      if (!theme) {
        theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      }
      
      // Apply theme immediately
      setTheme(theme);
    })()
  `;

  return (
    <script
      dangerouslySetInnerHTML={{ __html: themeScript }}
    />
  );
}