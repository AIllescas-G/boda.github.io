import { useEffect } from 'react';
import img1 from './cabecera.png';

export default function Header() {


    useEffect(() => {        
        window.scrollTo(0, 0)
    }, [])


    return (

        <header id='home' className='layout-background'>
            <h2>¡Nos Casamos!</h2>
            <div className='img'>
                <img className="img" src={img1} alt="Imagen de Japón" />
            </div>
            
        </header>
    )
}
