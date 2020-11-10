import React, {useState} from 'react';
import {toast} from 'react-toastify'
import {useDispatch} from 'react-redux'
import {useHistory, useParams} from 'react-router-dom'

import {createPost} from '../../actions/posts'


const VideoForm = () => {

    const history = useHistory()

    const [postData, setPostData] = useState({
        title: '', 
        creator: '',
        messageDescription: '', 
        selectedUrl: ''});
        const dispatch = useDispatch();


        const handleSubmit =   async  (e: { preventDefault: () => void; }) => {
                e.preventDefault();
                dispatch(createPost(postData))
                toast.success('Thank you for Sharing!!!!')
                history.push('/PostVideo')
                console.log(postData)

        }

        const clear = () => {

        }
        
            return(
                <div className="row">
                <div className="col-md-4 offset-md-4">
                        <div className="card text-white bg-info mb-3">
                            <div className="card-body">
                                <h3>New Video</h3>
                                <form onSubmit={handleSubmit} autoComplete="on">
                                   <div className="form-group">
                                   <input type="text" name="title" placeholder="Write the title for this Video"
                                   className="form-control"
                                   autoFocus
                                   value={postData.title} 
                                   onChange={(e) => setPostData({...postData, title: e.target.value})}
                                   />
                                   </div>
                                   <div className="form-group">
                                   <input type="text" name="creator" placeholder="Carlston Grefalde"
                                   className="form-control"
                                   autoFocus
                                   value={postData.creator} 
                                   onChange={(e) => setPostData({...postData, creator: e.target.value})}
                                   />
                                   </div>
                                   <div className="form-group">
                                   <input type="text" name="url" placeholder="www.youtube.com" className="form-control"
                                   value={postData.selectedUrl}
                                   onChange={(e) => setPostData({...postData, selectedUrl: e.target.value})}
                                   autoFocus
                                   />
                                   </div>
                                   <div className="form-group">
                                       <textarea name="description" rows={3} className="form-control"
                                       placeholder="Write the Description"
                                       value={postData.messageDescription}
                                       onChange={(e) => setPostData({...postData, messageDescription: e.target.value})}
                                       ></textarea>
                                   </div>
                                            <button className="btn btn-primary btn-xl form-control mb-1" type="submit">Share Video!</button> 
                                            <button className="btn btn-warning btn-xl form-control" onClick={clear}>Clear</button> 


        
                                </form>
                            </div>
                        </div>
                    
                </div>
            </div>
        
            )

    }



export default VideoForm;