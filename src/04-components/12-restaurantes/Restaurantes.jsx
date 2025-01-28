import img1 from './restaurante.png';
import img2 from './restaurante2.png';
import img3 from './restaurante3.png';
import img4 from './restaurante4.png';
import img5 from './restaurante5.png';


export default function Restaurantes() {
    return (
        <section id='res' className="layout-background section-res mt-9 mb-9">
            <div className="layout-box mt-9 mb-9">
                <h1 className=' mb-4 pb-4 mt-8'>Restaurantes</h1>
                <div className='line mt-4'></div>

                <div className="container-res mt-9 mb-9 flex justify-between">
                    <div className='res1 flex gap-4 justify-between'>
                        <img className="img-piruli w-60" src={img1} alt="Imagen de Japón" />
                        <div className=' flex flex-col'>
                            <small className=' text-left'>La Cazuela de la Espartería</small>
                            <a className='button-res' href="https://lacazueladelaesparteria.es/" target="_blank">Ver más</a>
                        </div>
                    </div>
                </div>


                <div className="container-res mt-9 mb-9 flex justify-between">
                    <div className='res1 flex gap-4 justify-between'>
                        <div className=' flex flex-col'>
                            <small className=' text-left'>La Cuchara de San Lorenzo</small>
                            <a className='button-res' href="https://www.lacucharadesanlorenzo.es/" target="_blank">Ver más</a>
                        </div>
                        <img className="img-piruli w-60" src={img2} alt="Imagen de Japón" />
                    </div>
                </div>

                <div className="container-res mt-9 mb-9 flex justify-between">
                    <div className='res1 flex gap-4 justify-between'>
                        <img className="img-piruli w-60" src={img3} alt="Imagen de Japón" />
                        <div className=' flex flex-col'>
                            <small className=' text-left'> La Taberna Del Rio</small>
                            <a className='button-res' href="https://www.latabernadelrio.com/" target="_blank">Ver más</a>
                        </div>

                    </div>
                </div>

                <div className="container-res mt-9 mb-9 flex justify-between">
                    <div className='res1 flex gap-4 justify-between'>
                        <div className=' flex flex-col'>
                            <small className=' text-left'>Taberna La Montillana</small>
                            <a className='button-res' href="https://tabernalamontillana.com/" target="_blank">Ver más</a>
                        </div>
                        <img className="img-piruli w-60" src={img4} alt="Imagen de Japón" />
                    </div>
                </div>

                <div className="container-res mt-9 mb-9 flex justify-between">
                    <div className='res1 flex gap-4 justify-between'>
                        <img className="img-piruli w-60" src={img5} alt="Imagen de Japón" />
                        <div className=' flex flex-col'>
                            <small className=' text-left'>Casa El Pisto</small>
                            <a className='button-res' href="https://www.casaelpisto.com/" target="_blank">Ver más</a>
                        </div>

                    </div>
                </div>


            </div>


        </section>
    )
}
