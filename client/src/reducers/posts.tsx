// eslint-disable-next-line import/no-anonymous-default-export
export default (posts = [], action: { type: any; payload: any; }) => {
    switch(action.type) {
        case 'UPDATE':
            return posts.map((post) => post === action.payload._id ? action.payload : post);
        case 'FETCH_ALL':
            return action.payload;
        case 'CREATE' :
            return [...posts, action.payload];
        default:
            return posts;
    }
}