import React from 'react'

const CreateUser = () => {
  return (
    <div className='mt-10 flex justify-end mr-20 gap-3'>
      <div>
        <input 
          type="text" 
          placeholder='Id a buscar'
          className='border border-b-2 rounded pl-2 h-10'
        />
      </div>

      <div>
        <button 
          className='bg-user w-full rounded h-10 px-5 text-white'
        >
          Crear usuario
        </button>
      </div>
    </div>
  )
}

export default CreateUser