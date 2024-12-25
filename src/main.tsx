import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import './styles/scrollbar.css'

// Create root element
const rootElement = document.getElementById('root')
if (!rootElement) throw new Error('Root element not found')

const root = ReactDOM.createRoot(rootElement)

// Render app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)