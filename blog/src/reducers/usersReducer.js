export default (state = [], action) => {
    // inspect the action type
    switch (action.type) {
        case 'FETCH_USER':
            return [...state, action.payload];

        default:
            return state;
    }
}