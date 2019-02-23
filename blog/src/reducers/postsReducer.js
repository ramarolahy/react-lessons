// reducer: By rule should always return any value OTHER THAN undefined

export default (state = [], action) => {
    // inspect the action type
    switch (action.type) {
        case 'FETCH_POSTS':
            return  action.payload;

        default:
            return state;
    }
}