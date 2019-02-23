
import { combineReducers } from 'redux';

// Reducers

// The the song list will be static so need to att action and payload args
// We would add them if we want to be able to add/delete song list
const songsReducer = () => {
    // song data
    return [
        { title: 'No Scrubs', duration: '4:05'},
        { title: 'Macarena', duration: '5:05'},
        { title: 'All Star', duration: '3:25'},
        { title: 'I Want it That Way', duration: '4:15'}
    ];
}

const selectedSongReducer = (selectedSong = null, action) => {
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
}
// pass in object whose keys will show in the state of the app
export default combineReducers ({
    songs: songsReducer,
    selectedSong: selectedSongReducer
})