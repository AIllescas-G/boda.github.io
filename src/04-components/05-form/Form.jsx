import { useForm } from 'react-hook-form'

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <>
      <div id='confirma' className='layout-background'>
        <div className='container-text layout-box'>
          <h1>Confirma tu asistencia</h1>
          <div className='line-form'></div>
          <p>
            {' '}
            Por favor, confirma tu asistencia antes del 31 de Marzo del 2025
            completando el formulario a continuación. Asegúrate de indicarnos
            cualquier necesidad alimenticia especial que puedas tener.
          </p>
        </div>

      </div>

      <div className='text-left container-form layout-background'>
        <form action="https://formsubmit.co/illescascorrecto@gmail.com" method="POST"
          className='form-text text-left layout-box'
          onSubmit={handleSubmit(onSubmit)}
        >
          
          <div className='flex flex-col justify-start mt-6 mb-6 text-left'>
            <label className='mb-3' htmlFor=''>
              {' '}
              Nombre{' '}
            </label>
            <input
              className='bg-white pt-2 pb-4 pl-4 rounded-sm'
              type='text'
              placeholder='Nombre'
              {...register('First name', { required: true, maxLength: 80 })}
            />
          </div>

          <div className='flex flex-col justify-start mt-6 mb-6 text-left'>
            <label className='mb-3' htmlFor=''>
              {' '}
              Apellidos{' '}
            </label>
            <input
              className='bg-white pt-2 pb-4 pl-4 rounded-sm'
              type='text'
              placeholder='Apellidos'
              {...register('Last name', { required: true, maxLength: 80 })}
            />
          </div>

          <div className='label-radio'>
            <small>¿Puedes acompañarnos en nuestra boda?</small>
          </div>
          <div className='flex justify-start items-end mb-4'>
            <input
              className='w-9'
              {...register('Developer', { required: true })}
              type='radio'
              value='Si'
            />
            <label htmlFor=''> Si</label>
          </div>
          <div className='flex justify-start items-end mb-4'>
            <input
              className='w-9'
              {...register('Developer', { required: true })}
              type='radio'
              value='No'
            />
            <label htmlFor=''> No</label>
          </div>

          <div className='label-radio radio-boda'>
            <small>¿Puedes acompañarnos en nuestra pre-boda?</small>
          </div>

          <div className='flex justify-start items-end mb-4'>
            <input
              className='w-9 text-center'
              {...register('Developer', { required: true })}
              type='radio'
              value='Si'
            />
            <label htmlFor=''> Si</label>
          </div>
          <div className='flex justify-start items-end mb-4'>
            <input
              className='w-9 text-center'
              {...register('Developer', { required: true })}
              type='radio'
              value='No'
            />
            <label htmlFor=''> No</label>
          </div>

          <div className='flex flex-col justify-start text-left'>

            <label className='' htmlFor=''>
              <small>
                Por favor, especifiqua cualquier alergia alimentaria o
                requisitos dietéticos:
              </small>
            </label>
          </div>

          <div className='flex flex-col justify-start mt-6 mb-6 text-left'>
            <textarea
              className='bg-white pt-2 pb-4 pl-4 rounded-sm'
              type='textarea'
              placeholder='Intolerancias'
              {...register('Text area', { required: true, maxLength: 80 })}
            />

          </div>



          <button className='rounded-full text-white button-text' type='submit'>
            Confirmar
          </button>

        </form>
      </div>
    </>
  )
}
