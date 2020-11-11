
import React, {useState, useEffect} from 'react';
import { CircularProgress } from '@material-ui/core';
//import { useSelector } from 'react-redux';

import Post from './Post/PostVideo';
import * as Server from '../../server/index'
import {postData} from './Post/postData'




const Posts = () => {
  const [posts, setVideos] = useState<postData[]>([])

  const loadVideos = async () => {
    const res = await Server.fetchPosts()

    const formatedVideos = res.data.map((posts: { createdAt: string | number | Date; updatedAt: string | number | Date; }) => {
      return {
          ...posts,
          createdAt: posts.createdAt ? new Date(posts.createdAt): new Date(),
          updatedAt: posts.updatedAt ? new Date(posts.updatedAt): new Date()
      }
    })
    
    .sort((a: { createdAt: { getTime: number; }; }, b: { createdAt: { getTime: () => number; }; }) => b.createdAt.getTime() - a.createdAt.getTime)
    setVideos(formatedVideos);
    
  }

useEffect(() => {
  loadVideos();
}, [])


  return (
    !posts.length ? <CircularProgress /> : (
      <div className="row">
        
        {posts.map((post) => (
          
            <Post post={post} key={post._id} setCurrentId/>
          
        ))}
      </div>

    )
  
  )

   
  
};

export default Posts;