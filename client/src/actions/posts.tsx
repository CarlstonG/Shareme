import * as server from '../server'

export const getPosts = () => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
        try {
                const {data} = await server.fetchPosts();
                dispatch({type: 'FETCH_ALL', payload: data});

            }catch (error){
                console.log(error.message)
        }  
};

export const createPost = (post: any) => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    try {
            const {data} = await server.createPost(post);
            dispatch({type: 'CREATE', payload: data});

        }catch (error){
            console.log(error.message)
    }  
};

export const updatePost = (id: any, post: { title: string; creator: string; messageDescription: string; selectedUrl: string; }) => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    try{
        const {data} = await server.updatePost(id, post);
        dispatch({type: 'UPDATE', payload: data})
    } catch(error) {
            console.log(error.message)
    }
};

export const deletePost = (id: any) => async (dispatch: (arg0: { type: any; payload: any; }) => void) => {
    try {
       await server.deletePost(id);
  
      dispatch({ type: 'DELETE', payload: id });
    } catch (error) {
      console.log(error.message);
    }
  };
  export const likePost = (id: any) => async (dispatch: (arg0: { type: string; payload: any; }) => void) => {
    try {
      const { data } = await server.likePost(id);
  
      dispatch({ type: 'LIKE', payload: data });
    } catch (error) {
      console.log(error.message);
    }
  };


