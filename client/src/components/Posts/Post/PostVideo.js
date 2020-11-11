import React from 'react';
import './PostVideo.css'
//import {postData} from './postData'
//import { useHistory } from 'react-router-dom'
import ReactPlayer from 'react-player';

//Like and delete styling
import Thumbupsicon from '@material-ui/icons/ThumbUpAlt'
import Deleteicon from '@material-ui/icons/Delete'




const PostVideo = ({ post }) => {
        console.log(post.selectedUrl)


    return(
        <div className="col-md-4">
                <div className="card text-white bg-info mb-2">
                    <div className="card card-body video-card" style={{cursor: 'pointer'}}
                
                    
                    >
                        <div className="d-flex flex-row-reverse mb-3">
                      
                        <button className="ml-1 btn-danger" size="small" color="alert"  onclick={() =>{}}>
                            <Deleteicon fontSize="small"/>
                        </button>
                        <button className="ml-1 btn-primary" size="small" color="alert"  onclick={() =>{}}>
                            <Thumbupsicon fontSize="small"/>
                        </button>
                        <button type="button" class="btn btn-warning">Edit</button>
                       </div>
                                                        <h1 className="text-center">{post.title}</h1>     
                                                        <p>{post.creator}</p>
                                                        <p>{post.messageDescription}</p>
                                                        
                 <div className="embed-responsive embed-responsive-16by9">
            
                               
            <h1> <ReactPlayer url={post.selectedUrl} /> </h1>
            </div>
                    </div>
                </div>
                
                
            </div>
        
        
   
    )
}

export default PostVideo;