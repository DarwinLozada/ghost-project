interface Song {
  name: string
  duration: string
}
export interface Album {
  id: string,
  name: string,
  songs: Song[]
}

export const GHOST_ALBUMS: Album[] = [{
  id: 'opus_eponymous',
  name: 'Opus Eponymous',
  songs: [
    {
      name: 'Deus Culpa',
      duration: '1:34'
    },
    { name: 'Con Clavi Con Dio', duration: '3:33' },
    { name: 'Ritual', duration: '4:28' },
    { name: 'Elizabeth', duration: '4:01' },
    { name: 'Standy by Him', duration: '3:56' },
    { name: 'Satan Prayer', duration: '4:38' },
    { name: 'Death Knell', duration: '4:36' },
    { name: 'Prime Mover', duration: '3:53' },
    { name: 'Genesis', duration: '4:03' }
  ]
}, {
  id: 'infestissumam',
  name: 'Infestissumam',
  songs: [
    { name: 'Infestissumam', duration: '1:42' },
    { name: 'Per Aspera ad Inferi', duration: '4:09' },
    { name: 'Secular Haze', duration: '5:11' },
    { name: 'Jigolo Har Megiddo', duration: '3:58' },
    { name: 'Ghuleh / Zombie Queen', duration: '7:29' },
    { name: 'Year Zero', duration: '5:50' },
    { name: 'Body and Blood', duration: '3:43' },
    { name: 'Idolatrine', duration: '4:23' },
    { name: 'Depth of Satan\'s Eye', duration: '5:25' },
    { name: 'Monstrance Clock', duration: '5:53' }
  ]
}, {
  id: 'meliora',
  name: 'Meliora',
  songs: [
    { name: 'Spirit', duration: '5:15' },
    { name: 'From the Pinnacle to the Pit', duration: '4:02' },
    { name: 'Cirice', duration: '6:02' },
    { name: 'Spöksonat', duration: '0:56' },
    { name: 'He Is', duration: '4:13' },
    { name: 'Mummy Dust', duration: '4:07' },
    { name: 'Majesty', duration: '5:24' },
    { name: 'Devil Church', duration: '1:06' },
    { name: 'Absolution', duration: '4:50' },
    { name: 'Deus in Absentia', duration: '5:37' }
  ]
}, {
  id: 'prequelle',
  name: 'Prequelle',
  songs: [
    {
      name: 'Ashes',
      duration: '1:21'
    },
    {
      name: 'Rats',
      duration: '4:21'
    },
    {
      name: 'Faith',
      duration: '4:29'
    },
    {
      name: 'See the Light',
      duration: '4:05'
    },
    { name: 'Miasma', duration: '5:17' },
    { name: 'Dance Macabre', duration: '3:39' },
    { name: 'Pro Memoria', duration: '5:39' },
    { name: 'Witch Image', duration: '3:30' },
    { name: 'Helvetesfönster', duration: '5:55' },
    { name: 'Life Eternal', duration: '3:27' }
  ]
}, {
  id: 'impera',
  name: 'Impera',
  songs: [
    { name: 'Imperium', duration: '1:40' },
    { name: 'Kaisarion', duration: '5:02' },
    { name: 'Spillways', duration: '3:16' },
    { name: 'Call Me Little Sunshine', duration: '4:44' },
    { name: 'Hunter\'s Moon', duration: '3:16' },
    { name: 'Watcher in the Sky', duration: '5:48' },
    { name: 'Dominion', duration: '1:22' },
    { name: 'Twenties', duration: '3:46' },
    { name: 'Darkness at the Heart of My Love', duration: '4:58' },
    { name: 'Griftwood', duration: '5:16' },
    { name: 'Bite of Passage', duration: '0:31' },
    { name: 'Respite on the Spitalfield', duration: '6:42' }
  ]
}]
