import React, { useState, useEffect } from 'react'
import Navbar from './components/Navbars/Navbar'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import { useDispatch } from 'react-redux'

import {getPosts} from './actions/posts'
import Home from './components/Pages/Home'
import VideoForm from './components/Form/VideoForm'
import PostVideo from './components/Posts/PostVideos'

import {ToastContainer} from 'react-toastify' 
import 'react-toastify/dist/ReactToastify.css'
import './App.css'



const App = ()  => {
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null);

    useEffect(() => {
      dispatch(getPosts());
    }, [dispatch]);

    return (
        <>
            <Router>
             <Navbar/>
            
          
                    <Switch>
                         <Route exact path="/" component={Home}/>
                         <div className="container p-4">
                          <Route exact path="/VideoForm" component={VideoForm} />
                          <Route exact path="/PostVideo" component={PostVideo} setCurrentId={setCurrentId}/>
                          <Route path="/update/:id" component={VideoForm} currentId={currentId} setcurrentId={setCurrentId}/>
                        </div>
                    </Switch>
                <ToastContainer/>
            </Router>
           
        </>
    )
}

export default App;