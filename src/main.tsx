import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import "@fontsource/baloo-2"; 
import "@fontsource/baloo-2/400.css"; 
import "@fontsource/outfit"; 
import "@fontsource/outfit/400.css"; 

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
