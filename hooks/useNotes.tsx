import { type Note } from '@/types/note'
import { create } from 'zustand'

type State = {
  notes: Note[],
  pinnedNotes: Note[],
  otherNotes: Note[],
  isLoading: boolean
}

type Actions = {
  fetchNotes: (params?: { limit?: number }) => Promise<void>,
  togglePinNote: (id: string) => void,
  deleteNote: (id: string) => void
}

export const useNotes = create<State & Actions>((set) => ({
  notes: [],
  pinnedNotes: [],
  otherNotes: [],
  isLoading: false,

  fetchNotes: async (params) => {
    try {
      set({ isLoading: true })
      const limit = params?.limit
      const response = await fetch('/mocks/note-data.json')
      if (!response.ok) throw new Error('Network response was not ok')

      const data: Note[] = await response.json()
      const notes = limit ? data.slice(0, limit) : data

      set({
        notes,
        pinnedNotes: notes.filter(note => note.isPinned),
        otherNotes: notes.filter(note => !note.isPinned)
      })
    } catch (error) {
      console.error('Error fetching notes:', error)
    } finally {
      set({ isLoading: false } )
    }
  },

  togglePinNote: (id: string) => {
    set((state) => {
      const updatedNotes = state.notes.map(note => note.id === id ? { ...note, isPinned: !note.isPinned } : note)

      return {
        notes: updatedNotes,
        pinnedNotes: updatedNotes.filter(note => note.isPinned),
        otherNotes: updatedNotes.filter(note => !note.isPinned)
      }
    })
  },

  deleteNote: (id: string) => {
    set((state) => {
      const updatedNotes = state.notes.filter(note => note.id !== id)

      return {
        notes: updatedNotes,
        pinnedNotes: updatedNotes.filter(note => note.isPinned),
        otherNotes: updatedNotes.filter(note => !note.isPinned)
      }
    })
  }
}))
