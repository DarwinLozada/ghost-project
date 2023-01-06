import { atom } from 'nanostores'

export const ALBUM_SELECTED_CLASS = 'selected'
export const ALBUM_RELAXED_CLASS = 'relaxed'

export const allAlbums = atom<Element[]>([])
export const selectedAlbum = atom<null | Element>(null)

selectedAlbum.subscribe((selectedAlbum) => {
  allAlbums.get().forEach((album) => {
    album.classList.remove(ALBUM_SELECTED_CLASS)

    if (album.id !== selectedAlbum?.id) album.classList.add(ALBUM_RELAXED_CLASS)
  })

  selectedAlbum?.classList.add(ALBUM_SELECTED_CLASS)
})
