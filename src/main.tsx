import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
// import "./output.css" // Removing manual output, assuming index.css handles tailwind

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
