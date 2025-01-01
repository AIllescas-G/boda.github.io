import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './01-setting/variables.css'
import './04-components/mainMenu/index.css'
import './04-components/00-header/header.css'
import './04-components/01-info/index.css'
import './04-components/02-bailar/index.css'
import './04-components/03-itinerario/index.css'
import './04-components/04-semaforo/index.css'
import './04-components/05-form/index.css'
import './04-components/06-escaleras/index.css'
import './04-components/07-viaje/index.css'
import './04-components/08-hotel/index.css'
import './04-components/09-museo/index.css'
import './04-components/10-trasporte/index.css'
import './04-components/11-piruli/index.css'
import './04-components/12-restaurantes/index.css'
import './04-components/13-fin/index.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
