import React from 'react';
import SongList from './SongList';
import SongDetail from './SongDetail';
// named export takes {} to import vs default export don't.
// eg. import { selectSong } from '../actions';


// we use function based components since states will be handled by redux
const App = () => {
    return (
        <div className="ui container grid" style={{paddingTop: "50px"}}>
            <div className="ui row">
                <div className="column eight wide">
                    <SongList />
                </div>
                <div className="column eight wide">
                    <SongDetail />
                </div>
            </div>
        </div>
    )
};

export default App;