import React from 'react'

export default function Transporte() {
    return (
        <section id='tras' className='layout-background section-tran'>

            <div className='layout-box pb-9 text-container '>
                <h1 className='mb-10 mt-9'>⁠⁠Transporte</h1>
                <div className='line'></div>
                <div className=' text-left flex flex-col gap-6  text'>

                    <p>Para nuestros invitados que viajan desde Europa u otros continentes, recomendamos volar al Aeropuerto de Madrid-Barajas Adolfo Suárez (MAD) y luego tomar un tren de alta velocidad a Córdoba. A continuación, te explicamos los pasos detallados para hacer este trayecto de la forma más sencilla.</p>
                    <h4>1. Desde el Aeropuerto de Madrid a la Estación de Atocha</h4>
                    <p>Después de aterrizar en el aeropuerto de Madrid, tu primer paso será dirigirte a la Estación de Atocha, desde donde salen los trenes hacia Córdoba. Tienes varias opciones para llegar a Atocha:</p>
                    <p><b> Taxi o Uber:</b> Es la opción más rápida y cómoda. El trayecto desde el aeropuerto hasta la estación de Atocha suele durar entre 25 y 30 minutos, dependiendo del tráfico. El costo estimado es de 35 a 45 euros por trayecto (ideal para hasta 4 personas).</p>
                    <p><b>Tren de Cercanías:</b> El tren de cercanías (línea C-1 o C-10) conecta el aeropuerto con la estación de Atocha en unos 30 minutos. El precio del billete sencillo es de 2,60 euros por persona, y el de ida y vuelta cuesta 5,20 euros .</p>
                    <p><b>Autobús Exprés Aeropuerto:</b> Este autobús directo conecta todas las terminales del aeropuerto con la estación de Atocha. Funciona las 24 horas del día y el trayecto dura unos 40 minutos, dependiendo del tráfico. El costo es de 5 euros por persona .</p>
                    <h4>2. Tren de Madrid a Córdoba</h4>
                    <p>Una vez en la Estación de Atocha, podrás tomar un tren de alta velocidad (AVE) que te llevará directamente a Córdoba en aproximadamente 1 hora y 45 minutos. El AVE es cómodo, rápido y la mejor forma de llegar a la ciudad.</p>
                    <p>Puedes buscar y reservar tus billetes de tren aquí:</p>
                    <small ><a href="https://www.renfe.com/es/es/experiencias/rutas/madrid-cordoba" target="_blank">-Renfe ( Madrid / Cordoba)</a> <br /> </small>
                    <small className='to-blue-600'><a href="https://www.thetrainline.com/en/train-times/mad rid-to-cordoba" target="_blank">-Trainline ( Madrid / Cordoba)</a> <br /> </small>
                    <p>Te recomendamos reservar tus billetes con antelación para asegurar la disponibilidad y las mejores tarifas.</p>
                    <h4>3. Llegada a Córdoba y traslado a tu alojamiento</h4>
                    <p>Una vez llegues a la estación de tren de Córdoba, salir de la estación será sencillo. Nuestra recomendación es tomar un taxi directamente desde la salida de la estación. Los taxis están siempre disponibles y el trayecto hacia la mayoría de los alojamientos en el centro de la ciudad o cercanías suele ser corto y cómodo.</p>
                </div>
            </div>
        </section>
    )
}
