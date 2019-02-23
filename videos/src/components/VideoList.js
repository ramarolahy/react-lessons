import React from 'react';
import VideoItem from './VideoItem';

// props is being de-structured
const VideoList = ({videos, onVideoSelect}) => {

    const renderedList = videos.map( video => {
        // videoID, channelId, playlistId
        // a type param can also be specified to only load videos, channels or playlists
        const key = (video.id.videoId) ? video.id.videoId : video.id.channelId;
        return <VideoItem key={key} video={video} onVideoSelect={onVideoSelect}/>;
    });
    return (
        <div className="ui relaxed divided list">{renderedList}</div>
    )
};

export default VideoList;