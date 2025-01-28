
import img1 from './cabecera.png';

export default function Header() {


    return (

        <header id='home' className='layout-background'>
            <h2>¡Nos Casamos!</h2>
            <div className='img'>
                <img className="img" src={img1} alt="Nos casamos" />
            </div>
            
        </header>
    )
}
