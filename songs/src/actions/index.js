// Action Creator

export const selectSong = (song) => {
    // Return an action
    // Type is required, payload is optional
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
}


// named export puts export in from of declaration vs default export away from it
