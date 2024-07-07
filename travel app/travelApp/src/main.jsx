import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { GoogleOAuthProvider } from '@react-oauth/google';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
   <GoogleOAuthProvider clientId="394705837351-qonqt8cptpce78lh2umubskpcogv19v1.apps.googleusercontent.com">
        <App />
    </GoogleOAuthProvider>,
)
