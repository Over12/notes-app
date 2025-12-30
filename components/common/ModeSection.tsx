'use client'

import { IconDeviceDesktop, IconMoon, IconSun } from '@tabler/icons-react'
import { useTheme } from 'next-themes'
import { useEffect, useState } from 'react'

export default function ModeSection() {
  const { setTheme, theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className='flex flex-col bg-accent/25 w-64 h-36 rounded-lg p-3'>
        <p className='font-semibold'>Modo</p>
        <div className='flex items-center justify-center h-full gap-3'>
          <div className='w-1/3 aspect-square bg-secondary rounded-lg animate-pulse' />
          <div className='w-1/3 aspect-square bg-secondary rounded-lg animate-pulse' />
          <div className='w-1/3 aspect-square bg-secondary rounded-lg animate-pulse' />
        </div>
      </div>
    )
  }

  return (
    <div className='flex flex-col bg-accent/25 w-64 h-36 rounded-lg p-3'>
      <p className='font-semibold'>Modo</p>
      <div className='flex items-center justify-center h-full gap-3'>
        <button onClick={() => setTheme('dark')} className={`flex items-center justify-center p-5 w-1/3 hover:bg-accent aspect-square ${theme === 'dark' ? 'bg-primary' : 'bg-secondary'} transition-colors cursor-pointer rounded-lg`}>
          <IconMoon className='size-full' />
        </button>
        <button onClick={() => setTheme('system')} className={`flex items-center justify-center p-5 w-1/3 hover:bg-accent aspect-square ${theme === 'system' ? 'bg-primary' : 'bg-secondary'} transition-colors cursor-pointer rounded-lg`}>
          <IconDeviceDesktop className='size-full' />
        </button>
        <button onClick={() => setTheme('light')} className={`flex items-center justify-center p-5 w-1/3 hover:bg-accent aspect-square ${theme === 'light' ? 'bg-primary' : 'bg-secondary'} transition-colors cursor-pointer rounded-lg`}>
          <IconSun className='size-full' />
        </button>
      </div>
    </div>
  )
};
