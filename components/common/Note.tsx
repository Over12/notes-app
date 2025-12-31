import { calculateTimeAgo } from '@/lib/DateUtils'
import { Note as NoteType } from '@/types/note'
import { IconPinFilled } from '@tabler/icons-react'
import Pill from './Pill'

export default function Note({ note }: { note: NoteType }) {
  return (
    <div className='flex flex-col bg-primary/50 aspect-square rounded-lg p-5'>
      <div className='flex justify-between items-center w-full'>
        <h3 className='font-semibold text-xl'>{ note.title }</h3>
        { note.isPinned && <IconPinFilled className='text-accent size-6' /> }
      </div>
      <span className='text-xs mt-1 opacity-80'>{ calculateTimeAgo(note.createdAt) }</span>
      <p className='text-pretty text-sm mt-5'>{ note.content }</p>
      <div className='flex gap-1 mt-auto text-xs uppercase'>
        { note.tags.map(tag => (
          <Pill key={tag} text={tag} />
        ))}
      </div>
    </div>
  )
};
