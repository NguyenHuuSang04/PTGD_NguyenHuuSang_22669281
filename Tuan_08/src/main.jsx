import { StrictMode } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import RouterDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'




RouterDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>,
)
