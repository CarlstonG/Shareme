import React from 'react';
import ReactPlayer from 'react-player';
import './PostVideo.css'

const PostVideo = () => {
    return(
        <div className="col-md-4">
        <div className="card text-white bg-info mb-3">
            <div className="card card-body video-card" style={{cursor: 'pointer'}}
                //onClick={() => history.push(`/update/${video._id}`)}
            
            >
                <div className="d-flex justify-content-between">
                                     <h1>
                                    Title: 
                                     </h1>
                    <span className="text-danger">X</span>
                </div>
    
         <p>Description:</p>
         <div className="d=flex justify-content-between">
             <p>Posted By: </p>
             <p>Date: </p>
         </div>
         <div className="embed-responsive embed-responsive-16by9">
             <ReactPlayer/>
         </div>
            </div>
        </div>
        
        
    </div>
    )
}

export default PostVideo;