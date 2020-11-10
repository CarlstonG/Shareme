import * as server from '../server'

export const getPosts = () => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
        try {
                const {data} = await server.fetchPosts();
                dispatch({type: 'FETCH_ALL', payload: data});

            }catch (error){
                console.log(error.message)
        }  
}

export const createPost = (post: any) => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    try {
            const {data} = await server.createPost(post);
            dispatch({type: 'CREATE', payload: data});

        }catch (error){
            console.log(error.message)
    }  
}




