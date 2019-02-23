import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchPostsAndUsers } from '../actions';
import UserHeader from './UserHeader';

// Class based components gives us access to life cycle methods: componentDidMount ...
class PostList extends Component {
    // componentDidMount will perform the API by calling the action creator fetchPosts
    // once the component is rendered the first time
    componentDidMount() {
        this.props.fetchPostsAndUsers();
    }

    renderList() {
        return this.props.posts.map( post => {
            return (
                <div className="item" key={post.id}>
                    <i className="large middle aligned icon user" />
                    <div className="content">
                        <div className="description">
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </div>
                        <UserHeader userId={post.userId}/>
                    </div>

                </div>
            )
        })
    }
    render() {
        return (
            <div className="ui relaxed divided list">{this.renderList()}</div>
        )
    }
}

const mapStateToProps = state => {
  return { posts: state.posts};
};

export default connect(mapStateToProps,{
    fetchPostsAndUsers
})(PostList);

