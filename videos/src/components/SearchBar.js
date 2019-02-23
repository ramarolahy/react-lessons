import React from 'react';

// Controlled component (store values in the component, not in the DOM)
class SearchBar extends React.Component {

    state = { query: ''};
    // pics app has this inline
    onInputChange = (e) => {
        this.setState({ query: e.target.value})
    }

    onFormSubmit = (e) => {
        e.preventDefault();
        // TODO: call callback from parent component
        this.props.onSearchSubmit(this.state.query)
    }
    render() {
        return (
                <div className="search-bar ui segment">
                    <form className="ui form" onSubmit={this.onFormSubmit}>
                        <div className="field">
                            <label>Video Search</label>
                            <input type="text" value={this.state.query} onChange={this.onInputChange} />
                        </div>
                    </form>
                </div>
        );
    }
}

export default SearchBar