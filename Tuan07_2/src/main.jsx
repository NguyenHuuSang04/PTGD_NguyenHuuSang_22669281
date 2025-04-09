import RouterDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter as Router } from 'react-router-dom'

RouterDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <App />
  </Router>,
)
