import React, { useEffect } from 'react'
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
                          <Route exact path="/VideoForm" component={VideoForm}/>
                          <Route exact path="/PostVideo" component={PostVideo}/>
                        </div>
                    </Switch>
                <ToastContainer/>
            </Router>
           
        </>
    )
}

export default App;