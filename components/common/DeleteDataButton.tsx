'use client'

import { restartStyle } from '@/lib/StyleChanger'
import { useTheme } from 'next-themes'
import { useState } from 'react'

export default function DeleteDataButton() {
  const [confirmed, setConfirmed] = useState(false)
  const { setTheme } = useTheme()

  const handleDeleteBtn = () => {
    if (confirmed) {
      restartStyle()
      setTheme('system')
      localStorage.clear()
      setConfirmed(false)
      return
    }

    setConfirmed(true)

    setTimeout(() => {
      setConfirmed(false)
    }, 3000)
  }

  return (
    <button onClick={handleDeleteBtn} className='bg-red-500/75 rounded-lg w-53 px-2 py-2 uppercase text-sm cursor-pointer hover:bg-red-500 transition-colors'>
      {confirmed ? '¿Seguro?' : 'Eliminar todos mis datos'}
    </button>
  )
};
