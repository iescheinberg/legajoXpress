import React from 'react'

const login = () => {
    return (
        <div className='flex justify-center items-center h-screen bg-cyan-900'>
            <div className='w-96 p-6 shadow-lg bg-white rounded-md'>
                <h1 className='text-3xl block text-center font-semibold'><i class="fa-solid fa-right-to-bracket"></i>Login</h1>
                <hr className='mt-3' />
                <div className='mt-3'>
                    <label htmlFor="username" className='block text-base mb-2'>Nombre de usuario</label>
                    <input type="text" id='username' className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Ingresar usuario...' />
                </div>
                <div className='mt-3'>
                    <label htmlFor="password" className='block text-base mb-2'>Contraseña</label>
                    <input type="password" id='password' className='border w-full text-base px-2 py-1 focus:outline-none focus:ring-0 focus:border-gray-600' placeholder='Ingresar contraseña...' />
                </div>
                <div className='mt-3 flex justify-between items-center'>
                    <div>
                        <input type="checkbox" name="" id="remember" />
                        <label htmlFor="remember" className='ml-1'>Recordarme</label>
                    </div>

                </div>
                <div className='mt-5'>
                    <button type='submit' className='border-2 border-cyan-700 bg-cyan-700 text-white py-1 w-full rounded-md hover:bg-transparent hover:text-cyan-700 font-semibold'>Acceder</button>

                </div>
            </div>
        </div>
    )
}

export default login