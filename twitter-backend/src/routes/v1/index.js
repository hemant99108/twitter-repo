import express from 'express';


import {createTweet, getTweet} from '../../controllers/tweet-controller.js';
import { toggleLike } from '../../controllers/like-controller.js';
import { createComment } from '../../controllers/comment-controller.js';
import {signup,login } from '../../controllers/auth-controller.js';
import { authenticate } from '../../middlewares/authenticate.js';


import multer from 'multer';
import {uploadImage} from '../../config/fileupload.js';
const upload=multer({dest:'uploads/'});

const router=express.Router();

router.post('/tweets',authenticate,createTweet);
router.post('/likes/toggle',toggleLike);
router.post('/comments',authenticate,createComment);
router.post('/tweet/:id',authenticate,getTweet);

router.post('/signup',signup);
router.post('/login',login);

router.post('/imageUpload',upload.single('image'),uploadImage);



export default router; 

