<<<<<<< HEAD
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import "leaflet/dist/leaflet.css";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
=======
# /*

Main Entry File of React Application
This file is responsible for rendering the React app
into the root HTML element.

Technologies Used:

* React
* React DOM
* StrictMode (for development checks)
  ========================================================
  */

// Import React StrictMode for highlighting potential problems
import { StrictMode } from 'react'

// Import createRoot API from React 18 for rendering the application
import { createRoot } from 'react-dom/client'

// Import global CSS styling for the application
import './index.css'

// Import main App component
import App from './App.jsx'

# /*

Render React Application
The createRoot method mounts the React application
inside the HTML element with id="root".
=======================================

*/

createRoot(document.getElementById('root')).render( <StrictMode>
{/* Main Application Component */} <App /> </StrictMode>,
>>>>>>> d4cac4720d4cace9d447997545cd6c0a379eefc5
)
