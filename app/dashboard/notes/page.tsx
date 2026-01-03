'use client'

import NoteSection from '@/components/ui/NoteSection'
import { useNotes } from '@/hooks/useNotes'
import { IconNotes, IconPin } from '@tabler/icons-react'
import { useEffect } from 'react'

export default function Page() {
  const { pinnedNotes, otherNotes, fetchNotes } = useNotes()

  useEffect(() => {
    fetchNotes()
  }, [fetchNotes])

  return (
    <main className='p-10 size-full max-h-screen overflow-y-auto relative'>
      <h1 className='text-3xl font-semibold'>Hecha un vistazo a tus notas!</h1>
      <p className='opacity-80 mt-1'>¿Qué ideas tienes para tus próximas notas?</p>
      <section className='mt-5 space-y-5'>
        <NoteSection title='Fijadas' notes={pinnedNotes} Icon={IconPin} />
        <NoteSection title='Otras Notas' notes={otherNotes} Icon={IconNotes} />
      </section>
    </main>
  )
};
