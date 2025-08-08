import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import RootContext from './context/RootContext.jsx'

createRoot(document.getElementById('root')).render(
  <RootContext>
    <App />
  </RootContext>,
)
