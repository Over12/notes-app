const styles = [
  'verdant',
  'lagoon',
  'orchid',
  'indigo',
  'ember',
  'crimson'
] as const

type stylesOptions = (typeof styles)[number]

export const handleStyleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
  const selectedStyle = e.target.value as stylesOptions

  changeStyle(selectedStyle)
}

const changeStyle = (style: stylesOptions) => {
  const root = document.documentElement

  styles.forEach(s => root.classList.remove(s))
  root.classList.add(style)

  localStorage.setItem('style', style)
}

export const initializeStyle = () => {
  const savedStyle = localStorage.getItem('style') as stylesOptions | null

  if (savedStyle && styles.includes(savedStyle)) {
    changeStyle(savedStyle)
  } else {
    changeStyle('verdant')
  }
}

export const getCurrentStyle = (): stylesOptions => {
  const savedStyle = localStorage.getItem('style') as stylesOptions | null
  if (savedStyle && styles.includes(savedStyle)) {
    return savedStyle
  } else {
    return 'verdant'
  }
}

export const restartStyle = () => {
  const styleSelect = document.getElementById('styles') as HTMLSelectElement | null
  if (styleSelect) {
    styleSelect.value = 'verdant'
  }

  localStorage.removeItem('style')
  changeStyle('verdant')
}
