'use client '

import { create } from 'zustand'

interface ResultModalStore {
  isOpen: boolean
  setIsOpen: (isOpen: boolean) => void
  isOpen2: boolean
  setIsOpen2: (isOpen: boolean) => void
}

export const useResultModalStore = create<ResultModalStore>((set) => ({
  isOpen: false,
  setIsOpen: (isOpen) => set({ isOpen }),
  isOpen2: false,
  setIsOpen2: (isOpen2) => set({ isOpen2 }),
}))     