import { atom } from 'nanostores'
import anime from 'animejs'

export const ALBUM_SELECTED_CLASS = 'selected'
export const ALBUM_RELAXED_CLASS = 'relaxed'

export const GHOST_ALBUMS = [{
  id: 'opus_eponymous',
  name: 'Opus Eponymous'
}, {
  id: 'infestissumam',
  name: 'Infestissumam'
}, {
  id: 'meliora',
  name: 'Meliora'
}, {
  id: 'prequelle',
  name: 'Prequelle'
}, {
  id: 'impera',
  name: 'Impera'
}]

export const allAlbums = atom<Element[]>([])
export const selectedAlbum = atom<null | Element>(null)

const SELECTED_ALBUM_ATTRIBUTE = 'current-selected-album'

// Handle when the user clicks an album.
selectedAlbum.subscribe((selectedAlbum) => {
  const pentagramContainer = document.getElementById('pentagram-container')

  const previousAlbumId = pentagramContainer?.getAttribute(SELECTED_ALBUM_ATTRIBUTE)
  let previousAlbumIndex = previousAlbumId ? GHOST_ALBUMS.findIndex((album) => album.id === previousAlbumId) : null

  // Did not find previous album index.
  if (previousAlbumIndex && previousAlbumIndex < 0) previousAlbumIndex = null

  allAlbums.get().forEach((album) => {
    album.classList.remove(ALBUM_SELECTED_CLASS)

    if (album.id !== selectedAlbum?.id) album.classList.add(ALBUM_RELAXED_CLASS)
  })

  if (selectedAlbum) {
    selectedAlbum.classList.add(ALBUM_SELECTED_CLASS)
    const pentagramImage = document.getElementById('pentagram-image')
    const indexOfSelectedAlbum = GHOST_ALBUMS.findIndex((album) => album.id === selectedAlbum.id)

    let extraLoops = 0

    if (previousAlbumIndex) {
      extraLoops -= 1
    }

    if (indexOfSelectedAlbum >= 0) extraLoops += (indexOfSelectedAlbum)

    if (previousAlbumIndex === 0) extraLoops -= 1

    anime({
      targets: pentagramContainer,
      scale: {
        value: 1.3,
        duration: 2000,
        easing: 'easeOutSine'
      },
      left: {
        value: '-50%',
        duration: 1000,
        easing: 'easeOutSine'
      },
      rotate: {
        value: -72 * (5 + extraLoops),
        duration: 3000,
        easing: 'easeOutSine'
      }
    })

    anime({
      targets: pentagramImage,
      rotate: {
        value: -72 * (5 + extraLoops),
        duration: 3000,
        easing: 'easeOutSine'
      }
    })

    // anime({
    //   targets: selectedAlbumImage,
    //   rotate: {
    //     value: '0deg',
    //     delay: 2500,
    //     duration: 1000,
    //     easing: 'easeOutSine'
    //   }
    // })

    pentagramContainer?.setAttribute(SELECTED_ALBUM_ATTRIBUTE, selectedAlbum ? selectedAlbum.id : '')
  }
})
