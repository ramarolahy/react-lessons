import React from 'react';


export default class SearchBar extends React.Component {

    // conventional way to name event handling. Also handleInputChange
    state = {
        term: ''
    }

    // Using Arrow function will release this to the outer scope
    // onFormSubmit gets called when user submits form. It will call the props onSubmit from App.js 
    // which passes term to Apps.js
    onFormSubmit = (e) => {
        // Prevent the page from refreshing
        e.preventDefault();
        this.props.onSubmit(this.state.term);

    }
    render() {
        return (
            <div className="ui segment">
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                    <label>Image search</label>
                        <input type="text" value={this.state.term} onChange={e => this.setState({term: e.target.value})}/>
                    </div>
                </form>
            </div>
        )
    }
}


