import { type Note as NoteType } from '@/types/note'
import Note from '../common/Note'
import { IconComponent } from '@/types/icon'

export default function NoteSection({ title, notes, Icon }: { title: string, notes: NoteType[], Icon: IconComponent }) {
  return (
    <div>
      <h2 className='flex items-center gap-1 font-semibold text-2xl'>
        <Icon className='text-accent size-7'/>
        { title }
      </h2>
      <div className='grid grid-cols-4 gap-5 mt-3'>
        {notes.map(note => (
          <Note key={note.id} note={note} />
        ))}
      </div>
    </div>
  )
};
