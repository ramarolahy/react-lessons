import React from 'react';
import unsplash from '../api/unsplash';
import ImageList from './ImageList';
import SearchBar from './SearchBar';


export default class App extends React.Component {
    // initialize state with expected types of data
    state= {
        images: []
    }

    // onSearchSubmit will allow us to get {term} from SearchBar by setting it up as a props (kind of a trick)
    onSearchSubmit = async (term) => {
        // Get the data using axios
        // unsplash documentation https://unsplash.com/documentation#search-photos Use get()
        try {
            const res = await unsplash.get('/search/photos', {
                params: {
                    query: term,
                    page: 1,
                    per_page: 30
                },  
            });
            // Store data
            this.setState({images: res.data.results});
            console.log(res.data.results.length)
        } catch (err) {
            console.log(err);
            alert('We ran into an error')
        }
    }
    render() {
        return ( 
            <div className = "ui container" >
                <SearchBar onSubmit = {this.onSearchSubmit}/>
                <ImageList images={this.state.images} />
            </div>
        );

    }
}