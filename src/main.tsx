import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

/* Fonts — loaded via npm, no external network requests */
import '@fontsource-variable/inter';
import '@fontsource-variable/jetbrains-mono';

/* Design system — must load before React renders */
import '@/styles/globals.css';
import '@/styles/animations.css';

/* Theme provider — wraps everything so theme is available everywhere */
import { ThemeProvider } from '@/context/ThemeContext';

import App from './App';

const root = document.getElementById('root');

if (!root) {
  throw new Error('Root element #root not found in index.html');
}

createRoot(root).render(
  <StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </StrictMode>,
);
