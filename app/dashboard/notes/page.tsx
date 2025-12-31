import Note from '@/components/common/Note'
import { IconMoodNeutral, IconPin } from '@tabler/icons-react'
import { notes } from '@/mocks/note-data.json'

export default function Page() {
  const pinnedNotes = notes.filter(note => note.isPinned);
  const otherNotes = notes.filter(note => !note.isPinned);

  return (
    <main className='p-10 size-full max-h-screen overflow-y-auto relative'>
      <h1 className='text-3xl font-semibold'>Hecha un vistazo a tus notas!</h1>
      <p className='opacity-80 mt-1'>¿Qué ideas tienes para tus próximas notas?</p>
      <section className='mt-5'>
        <div>
          <h2 className='flex items-center gap-1 font-semibold text-2xl'>
            <IconPin className='text-primary size-7' />
            Fijadas
          </h2>
          <div className='grid grid-cols-4 gap-5 mt-3'>
            { pinnedNotes.map(note => (
              <Note key={note.id} note={note} />
            ))}
          </div>
        </div>
        <div className='mt-5'>
          <h2 className='flex items-center gap-1 font-semibold text-2xl'>
            <IconMoodNeutral className='text-accent size-7' />
            Otras
          </h2>
          <div className='grid grid-cols-4 gap-5 mt-3'>
            { otherNotes.map(note => (
              <Note key={note.id} note={note} />
            ))}
          </div>
        </div>
      </section>
    </main>
  )
};
