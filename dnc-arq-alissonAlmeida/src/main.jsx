import React from 'react'
import ReactDOM from 'react-dom/client'
import './main.css'
import { AppProvider } from './contexts/AppContext.jsx'
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppProvider>
      <App />
    </AppProvider>
  </React.StrictMode>
)
