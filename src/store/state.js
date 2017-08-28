import {playMode} from 'common/js/config'
import {loadSearch, loadPlay, loadFavourite} from 'common/js/cache'

const state = {
  singer: {},
  playing: false,
  fullScreen: false,
  playlist: [],
  sequenceList: [],
  mode: playMode.sequnece,
  currentIndex: -1,
  disc: {},
  topList: [],
  searchHistory: loadSearch(),
  playHistory: loadPlay(),
  favouriteList: loadFavourite()
}

export default state
