import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectSong } from '../actions';

// Class base component
class SongList extends Component {

    // helper method
    renderList() {
        return this.props.songs.map((song) => {
            return (
                <div className="item" key={song.title}>
                    <div className="right floated content">
                        <button 
                            className="ui button primary"
                            onClick={() => this.props.selectSong(song) }>
                            Select
                        </button>
                    </div>
                    <div className="content">{song.title}</div>
                </div>
            );
        });
    }
    render() {
        return (
            <div className="ui divided list">{this.renderList()}</div>
        )
    }
}

// ALWAYS needed by convention (always call it mapStateToProps)
//mapStateToProps takes the state of the app as param and
// thru connect(), it passes the selected (returned) element (here all songs)
// as SongList's props.
// connect() is also passing selectSong as props so the buttons can use it.
const mapStateToProps = (state) => {
    return {
        // mapStateToProps returns state.songs as props
        songs: state.songs
    };
}


export default connect(mapStateToProps, {
    selectSong // ES6
})(SongList);