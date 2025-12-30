import { IconInfoCircle, IconMeteor } from '@tabler/icons-react'

export default function Page() {
  return (
    <main className='p-10 size-full relative'>
      <div className='absolute inset-x-5 top-5 h-48 rounded-t-lg bg-accent -z-10 overflow-hidden' >
        <div className='absolute inset-0 bg-linear-to-b from-transparent to-background' />
      </div>
      <div className='flex h-32 mt-24 gap-3'>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src='/avatar-placeholder.webp' alt='placeholder avatar' className='h-full w-auto aspect-square rounded-lg object-cover' />
        <div className='self-end'>
          <h1 className='text-4xl font-semibold'>¡Bienvenido! Nombre de Usuario</h1>
          <p className='mt-1 opacity-80 text-lg'>Primer usuario registrado</p>
        </div>
        <div className='ml-auto self-end'>
          <button className='bg-accent/30 border-2 border-accent px-3 py-2 rounded-lg cursor-pointer hover:bg-accent transition-colors'>
            Editar Perfil
          </button>
        </div>
      </div>
      <div className='flex mt-10 gap-5'>
        <section className='w-1/4'>
          <h2 className='font-semibold text-2xl flex items-center gap-1'>
            <IconInfoCircle className='text-accent size-7' />
            Información
          </h2>
          <ul className='mt-2'>
            <li className='text-sm'>
              Usuario desde: <span className='opacity-80'>01 de Enero, 2024</span>
            </li>
            <li className='text-sm mt-1'>
              Nro. de notas: <span className='opacity-80'>42</span>
            </li>
          </ul>
        </section>
        <section className='w-3/4'>
          <h2 className='font-semibold text-2xl flex items-center gap-1'>
            <IconMeteor className='text-accent size-7' />
            Sobre Mí
          </h2>
          <p className='mt-2 max-w-2/3 opacity-80 text-pretty'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas ducimus nemo assumenda aperiam dolorem, consequatur, vel dolorum quos pariatur laudantium, nihil beatae quis et quaerat error? Mollitia explicabo dignissimos possimus!</p>
        </section>
      </div>
    </main>
  )
};
