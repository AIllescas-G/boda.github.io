export default function Itinerario() {
  return (
    <section id="itinerario" className="background layout-background">
      <div className="layout-box">
        <div className="header">
          <h1>Itinerario</h1>
          <div className="line"> </div>
        </div>

        <div className="pre-boda">
          <p className="normal">Jueves, 5 de Junio, 2025</p>
          <h2>Pre-Boda</h2>
          <span className="hora">9:00PM</span>
          <p className="restaurante whithe">Nombre del Restaurante</p>
          <small className="codigo">Por definir</small>
          <div className=" mt-4 mb-6">
            <a
              className="button-res"
              href="https://www.google.com/maps/place/PALMERAS+DEL+BRILLANTE/@37.9070096,-4.792349,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdf0b0341dc81:0x5db9410cd60416bf!8m2!3d37.9070096!4d-4.792349!16s%2Fg%2F11ssv8x_lp?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
            >
              Ubicación
            </a>
          </div>

          <div className="line"> </div>
        </div>

        <div className="boda">
          <p className="normal">Viernes, 6 de Junio, 2025</p>
          <h2>Boda</h2>
          <small className="palmeras whithe">
            Palmeras el Brillante, Córdoba, España.
          </small>
          <div className=" mt-4 mb-8">
            <a
              className="button-res"
              href="https://www.google.com/maps/place/PALMERAS+DEL+BRILLANTE/@37.9070096,-4.792349,17z/data=!3m1!4b1!4m6!3m5!1s0xd6cdf0b0341dc81:0x5db9410cd60416bf!8m2!3d37.9070096!4d-4.792349!16s%2Fg%2F11ssv8x_lp?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D"
              target="_blank"
            >
              Ubicación
            </a>
          </div>

          <div className="bloque-hora">
            <p className="normal">Recepción</p>
            <span className="hora">6:30 PM</span>
          </div>

          <div className="bloque-hora">
            <p className="normal">Ceremonia</p>
            <span className="hora">7:00 PM</span>
          </div>

          <div className="bloque-hora">
            <p className="normal">Cocktail</p>
            <span className="hora">8:00 PM</span>
          </div>

          <div className="bloque-hora">
            <p className="normal">Cena</p>
            <span className="hora">9:30 PM</span>
          </div>

          <div className="bloque-hora">
            <p className="normal">Fiesta</p>
            <span className="hora">11:00 PM</span>
          </div>

          <div className="vestimenta">
            <small className="black">
              Mujeres de largo, hombres de traje y corbata (sin chaleco)
            </small>
            <div className=" mt-4 mb-8">
              <a
                className="button-res"
                href="https://pin.it/2fSAFjGeH"
                target="_blank"
              >
                Inspiración
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
