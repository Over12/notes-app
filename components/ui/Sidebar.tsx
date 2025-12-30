import { IconNote, IconNotebook, IconSettings, IconUserCircle } from '@tabler/icons-react'
import Link from 'next/link'

export default function Sidebar() {
  return (
    <nav className='bg-text/10 p-5'>
      <div className='flex items-center justify-center px-5'>
        <IconNotebook className='text-accent size-12' />
        <p className='text-3xl font-semibold'>NoteMe</p>
      </div>
      <ul className='flex flex-col justify-center gap-2 mt-10'>
        <li className='rounded-lg bg-accent/25'>
          <Link href='/dashboard' className='flex items-center px-3 py-2'>
            <IconUserCircle className='size-7 text-accent' />
            <span className='ml-2'>Inicio</span>
          </Link>
        </li>
        <li className='rounded-lg bg-accent/25'>
          <Link href='/dashboard/notes' className='flex items-center px-3 py-2'>
            <IconNote className='size-7 text-accent' />
            <span className='ml-2'>Notas</span>
          </Link>
        </li>
        <li className='rounded-lg bg-accent/25'>
          <Link href='/dashboard/settings' className='flex items-center px-3 py-2'>
            <IconSettings className='size-7 text-accent' />
            <span className='ml-2'>Configuración</span>
          </Link>
        </li>
      </ul>
    </nav>
  )
};
