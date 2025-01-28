import { useState } from 'react';
import { useForm } from 'react-hook-form';
import Modal from '../modal/Modal';


export default function Form() {
  const [modalType, setModalType] = useState(null); // Estado para el tipo de modal (exito/error)
  const [isModalOpen, setIsModalOpen] = useState(false); // Estado para manejar la apertura del modal

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset
  } = useForm({ mode: 'onChange' });

  const onSubmit = async (data) => {
    console.log(data);
    // Usamos FormSubmit.co con un POST simulado para evitar la redirección inmediata
    try {
      // Hacemos el envío del formulario de manera manual con fetch
      const response = await fetch('https://formsubmit.co/teresaysebas060625@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: new URLSearchParams({
          ...data,
          _subject: 'Confirmación de asistencia a la boda', // Asunto personalizado
          message: `${data.name}${data.apellidos}`,
          _template: 'table', // Plantilla para el correo
          _captcha: 'false',
          _next: '/#confirma', // URL de éxito
          _error: '/#confirma', // URL de error


        })
      });

      // Si la respuesta es correcta, mostramos el modal de éxito
      if (response.ok) {
        setModalType('success');
        setTimeout(() => {
          window.location.href = '/#confirma'; // Redirigimos al usuario después de 2 segundos
        }, 2000);
      } else {
        setModalType('error');
        setTimeout(() => {
          window.location.href = '/#confirma'; // Redirigimos al usuario después de 2 segundos
        }, 2000);
      }
    } catch (error) {
      setModalType('error');
      setTimeout(() => {
        window.location.href = '/#confirma'; // Redirigimos al usuario en caso de error
      }, 2000);
    }

    // Abrimos el modal
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    // Limpiar el formulario al cerrar el modal
    reset();
    setIsModalOpen(false); // Cerrar el modal
  };


  return (
    <>
      <div id="confirma" className="layout-background confirma">
        <div className="container-text layout-box">
          <h1>Confirma tu asistencia</h1>
          <div className="line-form"></div>
          <p>
          Por favor, confirma tu asistencia antes del 31 de Marzo del 2025 completando el formulario a continuación. <br />
          Asegúrate de rellenar un formulario por persona e indicarnos cualquier necesidad alimenticia especial que puedas tener.
          </p>
        </div>
      </div>

      <div className="text-left container-form layout-background ">
        <form
          onSubmit={handleSubmit(onSubmit)} // Usamos onSubmit para manejar la lógica
          className="form-text text-left layout-box"
        >

          <div className="flex flex-col justify-start mt-6 mb-6 text-left">
            <span className=' mb-4'> * Todos los campos obligatorios </span>
            <label className="label-form mb-3" htmlFor="name">
              Nombre
            </label>
            <input
              id="name"
              className="bg-white pt-2 pb-4 pl-4 rounded-sm"
              type="text"
              placeholder="Nombre"
              {...register('name', { required: 'Este campo es obligatorio' })}
            />
            {errors.name && <span className="text-red-500">{errors.name.message}</span>}

          </div>

          <div className="flex flex-col justify-start mt-6 mb-6 text-left">
            <label className="label-form mb-3" htmlFor="apellidos">
              Apellido
            </label>
            <input
              id="apellidos"
              className="bg-white pt-2 pb-4 pl-4 rounded-sm"
              type="text"
              placeholder="Apellidos"
              {...register('apellidos', { required: 'Este campo es obligatorio' })}
            />
            {errors.apellidos && <span className="text-red-500">{errors.apellidos.message}</span>}
          </div>

          <div className="label-radio flex">
            <small>¿Puedes acompañarnos en nuestra boda?</small>
          </div>

          <div className="w-9 flex-col">
            <div className="flex items-center mb-2 text-center ">
              <input id="boda-si" className='mt-2' {...register('boda', { required: 'Este campo es obligatorio' })} type="radio" value="si" />
              <label htmlFor="boda-si" className="label-form radio ml-1 text-center w-full">Si</label>
            </div>
            <div className="flex items-center mb-2">
              <input id="boda-no" className='mt-2' {...register('boda', { required: 'Este campo es obligatorio' })} type="radio" value="no" />
              <label htmlFor="boda-no" className="label-form radio ml-1 text-center w-full">No</label>
            </div>
          </div>

          <div className="label-radio flex mt-6">
            <small>¿Puedes acompañarnos en nuestra preboda?</small>
          </div>

          <div className="w-9 flex-col">
            <div className="flex items-center mb-2">
              <input id="preboda-si" className='mt-2'{...register('preboda', { required: 'Este campo es obligatorio' })} type="radio" value="si" />
              <label htmlFor="preboda-si" className="label-form radio  text-center w-full">Si</label>
            </div>
            <div className="flex items-center mb-2">
              <input id="preboda-no" className='mt-2' {...register('preboda', { required: 'Este campo es obligatorio' })} type="radio" value="no" />
              <label htmlFor="preboda-no" className="label-form radio ml-1 text-center w-full">No</label>
            </div>
          </div>

          <div className="flex flex-col justify-start text-left">
            <label className="label-form" htmlFor="intolerancias">
              <small>
                Por favor, especifiqua cualquier alergia alimentaria o
                requisitos dietéticos:
              </small>
            </label>
          </div>

          <div className="flex flex-col justify-start mt-6 mb-6 text-left">
            <textarea
              id="intolerancias"
              className="bg-white pt-2 pb-4 pl-4 rounded-sm"
              placeholder="Intolerancias"
              {...register('intolerancias', { required: 'Este campo es obligatorio' })}
            />
            {errors.intolerancias && <span className="text-red-500">{errors.intolerancias.message}</span>}
          </div>

          <button
            className="rounded-full text-white button-text mb-8"
            type="submit"
            disabled={!isValid} // Deshabilitar el botón si el formulario no es válido
          >
            Confirmar
          </button>
        </form>
      </div>

      {/* Modal de éxito o error */}
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        {modalType === 'success' ? (
          <div>
            <h2 className=' mb-4'>¡Confirmación Exitosa!</h2>
            <p className=' mb-0'>Tu respuesta ha sido enviada correctamente. ¡Gracias por confirmar!</p>
            <button className='button-modal font-serif font-bold mb-4 mt-4' onClick={handleModalClose}>Cerrar</button>
          </div>
        ) : (
          <div>
            <h2 className='mb-4'>¡Hubo un error!</h2>
            <p className='mb-0'>Hubo un problema al enviar el formulario. Por favor, intenta nuevamente.</p>
            <button className='button-modal font-serif font-bold mb-4 mt-4' onClick={handleModalClose}>Cerrar</button>
          </div>
        )}
      </Modal>
    </>
  );
}
