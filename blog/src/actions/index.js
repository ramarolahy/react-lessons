import _ from 'lodash';
import jsonPlaceholder from '../apis/jsonPlaceholder';
// ACTION CREATORS

// Action creator that calls for a API call
export const fetchPosts = () => async dispatch => {
    const res = await jsonPlaceholder.get ('/posts');
    dispatch ({
        type: 'FETCH_POSTS',
        payload: res.data
    });
    // Bad approach to just!!
    // babel changes async/await to ES5 which actually returns the request first (not the Action object)cd
    // See https://babeljs.io/repl and post everything after export to check
    // we must use redux-thunk
};

export const fetchUser = id => async dispatch => {
    const res = await jsonPlaceholder.get (`/users/${id}`);
    dispatch ({
        type: 'FETCH_USER',
        payload: res.data
    });
};
// ======== MEMOIZED VERSION =============
// fetchUser action will fetch a user by id
// export const fetchUser = (id) => dispatch => _fetchUser(id, dispatch);
// // _.memoize helps us put the result of a function on memo, preventing any more need
// // to call the function again. see:  https://lodash.com/docs/4.17.11#memoize
// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const res = await jsonPlaceholder.get(`/users/${id}`);
//     dispatch({
//         type: 'FETCH_USER',
//         payload: res.data
//     })
// });

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    // Calling an action creator inside another action creator will require us to
    // dispatch the function returned by inner action creator.
    await dispatch (fetchPosts ());

    // _.map, with _.property iteratee returns an array of all userId
    // see https://lodash.com/docs/4.17.11#map
    // see https://lodash.com/docs/4.17.11#property
    // // const uniqUserIds = _.uniq (_.map (getState ().posts, 'userId'));
    // // uniqUserIds.forEach (id => dispatch (fetchUser (id)));
    // A better way to write the above code
    _.chain(getState().posts)
        .map('userId')
        .uniq()
        .forEach(id => dispatch(fetchUser(id)))
        .value(); // .value() is needed to execute the chain
};