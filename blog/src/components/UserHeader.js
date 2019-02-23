import React, { Component } from 'react';
import { connect } from "react-redux";

class UserHeader extends Component {

    render() {
        // First time render
        const { user } = this.props;
        if(!user) {return null}
        // If user was found
        return (
            <div className="header">{user.name}</div>
        )
    }
}
// mapStateToProps has access to the props about to be passed to the component through  ownProps
// mapStateToProps is useful for some pre-calculation on the state and the props from the store
const mapStateToProps = (state, ownProps) => {
    return {
        user: state.users.find( user => user.id === ownProps.userId )
    }
};

export default connect(mapStateToProps) (UserHeader);