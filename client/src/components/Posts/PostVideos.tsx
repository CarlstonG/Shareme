import React from 'react';
import {useSelector} from 'react-redux'


import PostVideo from './Post/PostVideo'


const PostVideos = () => {
    const posts = useSelector((state) => state);
    
    console.log(posts);
    return(
        
        <div>
                <h1>Posted Videos</h1>
                <div className="row">
                <PostVideo/>
                <PostVideo/>
                <PostVideo/>
                <PostVideo/>
                <PostVideo/>
                <PostVideo/>
                </div>       
                    
        </div>
           )
}

export default PostVideos;