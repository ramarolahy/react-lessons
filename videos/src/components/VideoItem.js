import '../styles/VideoItem.css';
import React from 'react';

// deconstruct props.video to video
const VideoItem = ({video, onVideoSelect}) => {
    // method to limit character count in a title
    const limitCharCount = (title, limit = 17) => {
        const newTitle = [];
        if (title.length > limit) {
            // reduce() results in a single output value
            // see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
            title.split(' ').reduce((acc, cur) => {
                if (acc + cur.length <= limit) {
                    newTitle.push(cur);
                }
                return acc + cur.length;
            }, 0);
            // return the result
            return `${newTitle.join(' ')} ...`;
        }
        return title;
    };
    const shortVideoTitle = limitCharCount(video.snippet.title, 17);
    const shortDescription = limitCharCount(video.snippet.description, 50)
    return (
        <div className="item item--video" onClick={() => onVideoSelect(video)}>
            <img className="ui image small" src={video.snippet.thumbnails.medium.url} alt={shortVideoTitle} />
            <div className="content">
                <div className="header">{shortVideoTitle}</div>
                <div className="content middle aligned">
                    {shortDescription}
                </div>
            </div>
        </div>
    )
}

export default VideoItem;