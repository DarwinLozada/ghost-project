
import { atom } from 'nanostores'
import ColorThief from 'colorthief/dist/color-thief.mjs'
import anime from 'animejs'
import { GHOST_ALBUMS } from '../constants'

export const ALBUM_SELECTED_CLASS = 'selected'
export const ALBUM_RELAXED_CLASS = 'relaxed'
export const ALBUM_REMOVING = 'removing'
export const BLOB_CLASS = 'background-blob'

export const allAlbums = atom<Element[]>([])
export const selectedAlbum = atom<null | Element>(null)
const colorThief = new ColorThief()
let prevSelectedAlbum: Element | null = null

const SELECTED_ALBUM_ATTRIBUTE = 'current-selected-album'
const PENTAGRAM_CONTAINER_ID = 'pentagram-container'
const ALBUM_ITEM_CLASS = 'album-item'

const handleAlbumClickAnimations = (clickedAlbum: Element): void => {
  const pentagramContainer = document.getElementById(PENTAGRAM_CONTAINER_ID)

  const previousAlbumId = prevSelectedAlbum?.id
  let previousAlbumIndex = previousAlbumId ? GHOST_ALBUMS.findIndex((album) => album.id === previousAlbumId) : null

  // If did not find previous album index.
  if (previousAlbumIndex && previousAlbumIndex < 0) previousAlbumIndex = null

  clickedAlbum.classList.add(ALBUM_SELECTED_CLASS)
  const indexOfClickedAlbum = GHOST_ALBUMS.findIndex((album) => album.id === clickedAlbum.id)

  let extraLoops = -1

  if (indexOfClickedAlbum >= 0) extraLoops += (indexOfClickedAlbum)

  const totalLoops = 5 + extraLoops

  if (prevSelectedAlbum) {
    prevSelectedAlbum.classList.add(ALBUM_REMOVING)
  }

  // First album selection.
  if (previousAlbumIndex === null) {
    anime({
      targets: pentagramContainer,
      scale: {
        value: 1.6,
        duration: 2000,
        easing: 'easeOutSine'
      },
      left: {
        value: '-60%',
        duration: 1000,
        easing: 'easeOutSine'
      },
      translateY: {
        value: '5%',
        duration: 1000,
        easing: 'easeOutSine'
      },
      rotate: {
        value: `${-72 * totalLoops}deg`,
        duration: 3000,
        easing: 'easeOutSine'
      },
      begin: () => {
        const selectedAlbumInfo = document.querySelector(`#${clickedAlbum.id}.${ALBUM_ITEM_CLASS}`)

        if (selectedAlbumInfo) {
          selectedAlbumInfo.classList.add(ALBUM_SELECTED_CLASS)
          anime({
            targets: selectedAlbumInfo,
            opacity: 1
          })
        }
      }
    })
  } else {
    anime({
      targets: pentagramContainer,
      rotate: {
        value: `${-72 * totalLoops}deg`,
        duration: 3000,
        easing: 'easeOutSine'
      }
    })

    anime({
      targets: prevSelectedAlbum,
      duration: 1500,
      easing: 'easeInOutSine',
      opacity: 0,
      complete: () => {
        if (prevSelectedAlbum) prevSelectedAlbum.classList.remove(ALBUM_SELECTED_CLASS, ALBUM_REMOVING)

        const selectedAlbumInfo = document.querySelector(`#${clickedAlbum.id}.${ALBUM_ITEM_CLASS}`)

        if (selectedAlbumInfo) {
          const colorPalette = colorThief.getPalette(document.querySelector(`img#${clickedAlbum.id}`))
          const blobs = document.querySelectorAll(`.${BLOB_CLASS}`)

          console.log(`img#${clickedAlbum.id}`)

          blobs.forEach((blob, index) => {
            anime({
              targets: blob,
              duration: 2500,
              backgroundColor: `rgb(${colorPalette[index][0]}, ${colorPalette[index][1]}, ${colorPalette[index][2]})`,
              opacity: 0.6
            })
          })

          selectedAlbumInfo.classList.add(ALBUM_SELECTED_CLASS)

          anime({
            targets: selectedAlbumInfo,
            delay: 500,
            duration: 1500,
            easing: 'easeInOutSine',
            opacity: 1
          })
        }
      }
    })
  }

  anime({
    targets: allAlbums.get(),
    rotate: {
      value: `${-72 * totalLoops * -1}deg`,
      duration: 1500,
      easing: 'easeOutSine'
    }
  })

  pentagramContainer?.setAttribute(SELECTED_ALBUM_ATTRIBUTE, clickedAlbum ? clickedAlbum.id : '')
}

// Handle when the user clicks an album.
selectedAlbum.subscribe((selectedAlbum) => {
  const pentagramContainer = document.getElementById(PENTAGRAM_CONTAINER_ID)

  const previousAlbumId = pentagramContainer?.getAttribute(SELECTED_ALBUM_ATTRIBUTE)

  allAlbums.get().forEach((album) => {
    album.classList.remove(ALBUM_SELECTED_CLASS)

    if (album.id !== selectedAlbum?.id) album.classList.add(ALBUM_RELAXED_CLASS)
  })

  const selectedAlbumInfo = GHOST_ALBUMS.find((album) => album.id === selectedAlbum?.id)

  prevSelectedAlbum = document.getElementById(previousAlbumId || '')

  if (selectedAlbum && selectedAlbumInfo) {
    handleAlbumClickAnimations(selectedAlbum)
  }
})
