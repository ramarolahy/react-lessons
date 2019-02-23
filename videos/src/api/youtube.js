import axios from 'axios';

const KEY = 'AIzaSyAEO979PWPWIDUTbZ0DvVBrpX5WCvfBFrc'; // UPPERCASE for constant values

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 7,
        key: KEY, // Not mentioned in the documentation
        type: 'video'
    }
});