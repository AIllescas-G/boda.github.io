export default function Itinerario () {
  return (
    <section id="itinerario" className='background layout-background'>
      <div className='layout-box'>
        <div className='header'>
          <h1>Itinerario</h1>
          <div className='line'> </div>
        </div>

        <div className='pre-boda'>
          <p className='normal'>Jueves, 5 de Junio, 2025</p>
          <h2>Pre-Boda</h2>
          <span className='hora'>9:00PM</span>
          <p className='restaurante whithe'>Nombre del Restaurante</p>
          <small className='codigo'>Código de Vestimenta</small>
          <div className='line'> </div>
        </div>

        <div className='boda'>
          <p className='normal'>Jueves, 5 de Junio, 2025</p>
          <h2>Boda</h2>
          <small className='palmeras whithe'>
            Palmeras el Brillante, Córdoba, España.
          </small>

          <div className='bloque-hora'>
            <p className='normal'>Recepción</p>
            <span className='hora'>6:30 PM</span>
          </div>

          <div className='bloque-hora'>
            <p className='normal'>Ceremonia</p>
            <span className='hora'>7:00 PM</span>
          </div>

          <div className='bloque-hora'>
            <p className='normal'>Cocktail</p>
            <span className='hora'>8:00 PM</span>
          </div>

          <div className='bloque-hora'>
            <p className='normal'>Cena</p>
            <span className='hora'>9:30 PM</span>
          </div>

          <div className='bloque-hora'>
            <p className='normal'>Fiesta</p>
            <span className='hora'>11:00 PM</span>
          </div>

          <div className='vestimenta'>
            <small className='black'>Código de vestimenta</small>
          </div>
        </div>
      </div>
    </section>
  )
}
