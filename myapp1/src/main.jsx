import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
// import Hi from './hi'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {/* <Hi/> */}
  </StrictMode>,
)
