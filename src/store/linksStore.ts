import { create } from 'zustand'
import { LinkEntity } from '@/types/types'

type Store = {
  linkEdit: LinkEntity | null
  setLinkEdit: (link: LinkEntity) => void
  clearLinkEdit: () => void
}

export const useLinksStore = create<Store>((set, get) => ({
  linkEdit: null,
  setLinkEdit: (link: LinkEntity) => set({ linkEdit: link }),
  clearLinkEdit: () => set({ linkEdit: null })
}))