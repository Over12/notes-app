import { calculateTimeAgo } from '@/lib/DateUtils'
import { Note as NoteType } from '@/types/note'
import { IconPin, IconPinFilled, IconTrash } from '@tabler/icons-react'
import Pill from './Pill'

export default function Note({ note }: { note: NoteType }) {
  return (
    <div className='relative flex flex-col bg-secondary aspect-square rounded-lg p-5 group'>
      <div className='flex justify-between items-center w-full'>
        <h3 className='font-semibold text-xl'>{ note.title }</h3>
        <button className='cursor-pointer'>
          { note.isPinned ? <IconPinFilled className='text-primary size-6 hover:text-accent transition-colors' /> : <IconPin className='text-primary size-6 hover:text-accent transition-colors' /> }
        </button>
      </div>
      <span className='text-xs mt-1 opacity-80'>{ calculateTimeAgo(note.createdAt) }</span>
      <p className='text-pretty text-sm mt-5'>{ note.content }</p>
      <div className='flex gap-1 mt-auto text-xs uppercase'>
        { note.tags.map(tag => (
          <Pill key={tag} text={tag} />
        ))}
      </div>
      <button className='absolute bottom-5 right-5 text-red-500 opacity-0 cursor-pointer group-hover:opacity-100 hover:text-red-700 transition-all'>
        <IconTrash />
      </button>
    </div>
  )
};
