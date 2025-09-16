import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import Authorization from "./lesson-12/lesson-12.jsx";
import AuthProvider from "./context/authContext/authContext.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <Authorization />
    </AuthProvider>
  </StrictMode>,
)
