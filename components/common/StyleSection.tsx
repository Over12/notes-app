'use client'

import { handleStyleChange } from '@/lib/StyleChanger'
import { useEffect, useState } from 'react'

export default function StyleSection() {
  const [currentStyle, setCurrentStyle] = useState<string>('verdant')

  useEffect(() => {
    const savedStyle = localStorage.getItem('style') || 'verdant'
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setCurrentStyle(savedStyle)
  }, [])

  const onChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setCurrentStyle(e.target.value)
    handleStyleChange(e)
  }

  return (
    <div className='flex flex-col bg-accent/25 w-64 h-36 rounded-lg p-3'>
      <label htmlFor='styles' className='font-semibold'>Estilos</label>
      <select value={currentStyle} onChange={onChange} name='styles' id='styles' className='border-b-2 border-accent mt-1 p-1 focus:outline-none'>
        <option className='bg-background' value='verdant'>Verdant</option>
        <option className='bg-background' value='lagoon'>Lagoon</option>
        <option className='bg-background' value='orchid'>Orchid</option>
        <option className='bg-background' value='indigo'>Indigo</option>
        <option className='bg-background' value='ember'>Ember</option>
        <option className='bg-background' value='crimson'>Crimson</option>
      </select>
      <div className='flex gap-2 h-full mt-3'>
        <div className='w-1/3 bg-primary' />
        <div className='w-1/3 bg-secondary' />
        <div className='w-1/3 bg-accent' />
      </div>
    </div>
  )
};
