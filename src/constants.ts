interface Song {
  name: string
  duration: string,
  videoId: string
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
      duration: '1:34',
      videoId: 'B7fCgy20fGM'
    },
    { name: 'Con Clavi Con Dio', duration: '3:33', videoId: 'nhuO03S4KmM' },
    { name: 'Ritual', duration: '4:28', videoId: 'GDCIXr6ueJU' },
    { name: 'Elizabeth', duration: '4:01', videoId: 'woyaKianemI' },
    { name: 'Standy by Him', duration: '3:56', videoId: 'J9xFIU87b-o' },
    { name: 'Satan Prayer', duration: '4:38', videoId: '6DADwwIoY7I' },
    { name: 'Death Knell', duration: '4:36', videoId: 'qJy-hdKT5wM' },
    { name: 'Prime Mover', duration: '3:53', videoId: 'WY_u7YDRMWs' },
    { name: 'Genesis', duration: '4:03', videoId: 'T7QBpRmGR4Q' }
  ]
}, {
  id: 'infestissumam',
  name: 'Infestissumam',
  songs: [
    { name: 'Infestissumam', duration: '1:42', videoId: '_3nwk4x0oIU' },
    { name: 'Per Aspera ad Inferi', duration: '4:09', videoId: 'j1bxQW4jyro' },
    { name: 'Secular Haze', duration: '5:11', videoId: 'oLF4B6R76vo' },
    { name: 'Jigolo Har Megiddo', duration: '3:58', videoId: '2vHDXkO1-BY' },
    { name: 'Ghuleh / Zombie Queen', duration: '7:29', videoId: 'mbNkj4qa5ZI' },
    { name: 'Year Zero', duration: '5:50', videoId: 'wUu5cAFpDjI' },
    { name: 'Body and Blood', duration: '3:43', videoId: 'b35Eg-ueITQ' },
    { name: 'Idolatrine', duration: '4:23', videoId: 'y_YOuhz9XhU' },
    { name: 'Depth of Satan\'s Eye', duration: '5:25', videoId: '_8-GtS7PcKg' },
    { name: 'Monstrance Clock', duration: '5:53', videoId: 'Oqa-ZLUofnM' }
  ]
}, {
  id: 'meliora',
  name: 'Meliora',
  songs: [
    { name: 'Spirit', duration: '5:15', videoId: '21yKfXzPQvk' },
    { name: 'From the Pinnacle to the Pit', duration: '4:02', videoId: 'phC_7Sm7LXA' },
    { name: 'Cirice', duration: '6:02', videoId: 'vcbOsoZXyDo' },
    { name: 'Spöksonat', duration: '0:56', videoId: 'QachXlPSP_M' },
    { name: 'He Is', duration: '4:13', videoId: 'X0P6mqN3Qg0' },
    { name: 'Mummy Dust', duration: '4:07', videoId: 'kC_bFsGUVyg' },
    { name: 'Majesty', duration: '5:24', videoId: '_q3bCmLkhxw' },
    { name: 'Devil Church', duration: '1:06', videoId: 'lxdFV5LClAw' },
    { name: 'Absolution', duration: '4:50', videoId: 'Q2P-zoB7m3A' },
    { name: 'Deus in Absentia', duration: '5:37', videoId: 'PMGJDlXx01c' }
  ]
}, {
  id: 'prequelle',
  name: 'Prequelle',
  songs: [
    {
      name: 'Ashes',
      duration: '1:21',
      videoId: 'FxK3C7pXX4U'
    },
    {
      name: 'Rats',
      duration: '4:21',
      videoId: '6BhV3CxvcF0'
    },
    {
      name: 'Faith',
      duration: '4:29',
      videoId: 'gLnMZEyLJ6Q'
    },
    {
      name: 'See the Light',
      duration: '4:05',
      videoId: 'YNOLfVAv_28'
    },
    { name: 'Miasma', duration: '5:17', videoId: '5CWWukDu8qQ' },
    { name: 'Dance Macabre', duration: '3:39', videoId: 'tjjH8b3NA8c' },
    { name: 'Pro Memoria', duration: '5:39', videoId: 'leUKmlDGHiI' },
    { name: 'Witch Image', duration: '3:30', videoId: 'tMwmEcKVgtM' },
    { name: 'Helvetesfönster', duration: '5:55', videoId: 'tP_Tz35iob4' },
    { name: 'Life Eternal', duration: '3:27', videoId: 'RL8Ct8dKmAk' }
  ]
}, {
  id: 'impera',
  name: 'Impera',
  songs: [
    { name: 'Imperium', duration: '1:40', videoId: 'KEPYiXgJGLQ' },
    { name: 'Kaisarion', duration: '5:02', videoId: 'yt40jLz7TeQ' },
    { name: 'Spillways', duration: '3:16', videoId: 'iVWeky0WPbU' },
    { name: 'Call Me Little Sunshine', duration: '4:44', videoId: '1Df28_NCk6s' },
    { name: 'Hunter\'s Moon', duration: '3:16', videoId: 'mfjfZrghj4I' },
    { name: 'Watcher in the Sky', duration: '5:48', videoId: 'iF0kcLLzUc4' },
    { name: 'Dominion', duration: '1:22', videoId: 'yLM_uhDGCME' },
    { name: 'Twenties', duration: '3:46', videoId: 'qUZXL7uZVRo' },
    { name: 'Darkness at the Heart of My Love', duration: '4:58', videoId: '3AD-KR-z1x8' },
    { name: 'Griftwood', duration: '5:16', videoId: 'ni3IMbhLJ_k' },
    { name: 'Bite of Passage', duration: '0:31', videoId: 'rqNA-vXjvso' },
    { name: 'Respite on the Spitalfield', duration: '6:42', videoId: 'OY8kAOv_Z6U' }
  ]
}]
