import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Importamos los componentes necesarios de React Router
import Header from './04-components/00-header/Header';
import SectionHeader from './04-components/01-info/SectionHeader';
import Baile from './04-components/02-bailar/Baile';
import Itinerario from './04-components/03-itinerario/Itinerario';
import Semaforo from './04-components/04-semaforo/Semaforo';
import Form from './04-components/05-form/Form';
import Escaleras from './04-components/06-escaleras/Escaleras';
import Viaje from './04-components/07-viaje/Viaje';
import {Hotel} from './04-components/08-hotel/Hotel';
import MainMenu from './04-components/mainMenu/MainMenu';
import Museo from './04-components/09-museo/Museo';
import Transporte from './04-components/10-trasporte/Transporte';
import Piruli from './04-components/11-piruli/Piruli';
import Restaurantes from './04-components/12-restaurantes/Restaurantes';
import Fin from './04-components/13-fin/Fin';
import NotFound from './04-components/NotFound/NotFound';
import Ok from './04-components/success/Ok';
import Ko from './04-components/success/Ko';
import { useEffect } from 'react';


function App() {


  useEffect(() => {
    window.scrollTo(0, 0); // Esto hace que el scroll se mueva al principio de la página
  }, []); // El array vacío asegura que esto se ejecute solo una vez, al cargar el componente


  return (
    <Router>
      <div className="container-boda main-menu">
        {/* Componente de navegación */}
        <MainMenu />
        
        <Routes>
          {/* Solo una ruta que renderiza todos los componentes */}
          <Route
            path="/"
            element={
              <>
                <Header />
                <SectionHeader />
                <Baile />
                <Itinerario />
                <Semaforo />
                <Form />
                <Escaleras />
                <Viaje />
                <Hotel />
                <Museo />
                <Transporte />
                <Piruli />
                <Restaurantes />
                <Fin />
              </>
            }
          />
          {/* Ruta para manejar el error 404 */}
          <Route path="*" element={<Ok />} />
          <Route path="*" element={<Ko />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
