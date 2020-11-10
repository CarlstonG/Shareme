import express from 'express';


import {getPosts, createPost} from '../controllers/posts.js'

//did not put any logic here to make this program more scalable. Separated a post.js on controller to put logic.
const router = express.Router();

router.get('/', getPosts);  //trigger get action //getting postmessage schema
router.post('/', createPost); // trigger post action


export default router;