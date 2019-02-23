import React from 'react';
import { connect } from 'react-redux';

// SongDetail will get the selectedSong as props
// from mapStateToProps THRU connect
// props include dispatch and song but we only need song
const SongDetail = ({ song }) => {
    //console.log(props)
    if (!song) {
        return <div>Select a song</div>
    }
    return (
        <div>
            <h3>Details for:</h3>
            <p>
                Title: {song.title}
                <br />
                Duration: {song.duration}
            </p>       
        </div>
    )
}

//mapStateToProps takes the state of the app as param and
// thru connect(), it passes the selected (returned) element (here selectedSong)
// as SongDetail's props.
const mapStateToProps = (state) => {
    return {
        song: state.selectedSong
    }
}

export default connect(mapStateToProps)(SongDetail);