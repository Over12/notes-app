import { IconBrandGoogleFilled, IconNotebook } from '@tabler/icons-react'
import Link from 'next/link'

export default function LoginForm() {
  return (
    <div className='flex flex-col gap-5 w-1/4 h-3/4 bg-text/5 rounded-lg shadow-2xl p-5'>
      <div className='text-center w-full space-y-3'>
        <IconNotebook className='mx-auto text-accent size-10 bg-accent/40 rounded-lg cursor-crosshair' />
        <p className='text-2xl font-semibold'>Bienvenido de nuevo</p>
        <p className='text-sm opacity-70'>Ingresa tus credenciales para continuar</p>
      </div>
      <div className='space-y-3'>
        <div className='w-full flex flex-col gap-1'>
          <label htmlFor='email'>Correo electrónico</label>
          <input type='email' name='email' id='email' placeholder='john@example.com' className='border border-text/20 bg-text/5 rounded-sm px-2 py-1' />
        </div>
        <div className='w-full flex flex-col gap-1 relative'>
          <label htmlFor='password'>Contraseña</label>
          <Link href="#" className='absolute right-0 top-1 text-xs text-accent hover:text-primary transition-colors'>¿Olvidaste tu contraseña?</Link>
          <input type='password' name='password' id='password' className='border border-text/20 bg-text/5 rounded-sm px-2 py-1' />
        </div>
        <button className='bg-accent w-full px-3 py-2 rounded-sm hover:bg-secondary transition-colors cursor-pointer'>Iniciar sesión</button>
      </div>
      <p className='my-5 uppercase text-xs opacity-80 text-center'>O continuar con</p>
      <button className='border border-text/20 w-full px-3 py-2 rounded-sm flex gap-1 justify-center items-center hover:bg-text/10 transition-colors cursor-pointer'>
        <IconBrandGoogleFilled className='size-5' />
        Google
      </button>
      <p className='text-center text-sm'><span className='opacity-80'>¿No tienes una cuenta?</span> <Link href="/register" className='text-accent hover:text-primary transition-colors'>Regístrate</Link></p>
    </div>
  )
};
