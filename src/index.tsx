import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from './App';

const container = document.getElementById('root') as HTMLElement;
if (container) {
  const root = ReactDOM.createRoot(container);

  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} else {
  throw new Error(
    "Root element with ID 'root' was not found in the document. " +
    "Ensure there is a corresponding HTML element with the ID 'root' in your HTML file."
  );
}
