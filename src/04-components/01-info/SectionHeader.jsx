import img1 from './logo.png';

export default function SectionHeader() {
  return (
    <div className="layout-background section-bailar">
      <section className="title layout-box container-section-bailar">
        <img className="img-logo" src={img1} alt="Nos casamos" />
        <div className="text-content">
          <div className="text">
            <p>
              Nos gustaría invitarte a celebrar nuestra boda, el dia Viernes 6
              de Junio de 2025, en Palmeras el Brillante, Córdoba, España.
            </p>
          </div>
          <div className="text">
            <p>
              Estamos muy emocionados de poder compartir contigo este día tan
              especial.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
