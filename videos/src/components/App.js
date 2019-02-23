import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../api/youtube'
import VideoList from './VideoList';
import VideoDetails from './VideoDetails';

class App extends React.Component {
    
    state = { 
        videos: [],
        selectedVideo: null
    };
    // To help set a default query
    componentDidMount = () => {
        this.onSearchSubmit('mark wiens')
    };

    onSearchSubmit = async (query) => {  
        const res = await youtube.get('/search', {
            params: {
                q: query
            }
        });

        this.setState({
            videos: res.data.items,
            selectedVideo: res.data.items[0]
        })
    };

    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video })
    };
    render() {
        return (
            <div className="ui container" style={{paddingTop:"20px"}}>
                <SearchBar onSearchSubmit={this.onSearchSubmit} />
                <div className="ui grid">
                    <div className="ui row">
                        <div className="ten wide column"><VideoDetails video={this.state.selectedVideo} /></div>
                        <div className="six wide column"><VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} /></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;