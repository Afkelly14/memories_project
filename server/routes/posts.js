import express from 'express';

import { getPosts, createPosts, updatePost } from '../controllers/posts.js';

const router = express.Router();

//https://localhost:5000/posts
router.get('/', getPosts);
router.post('/', createPosts);
//patch used to update existing documents - need id to know what to edit
router.patch('/:id', updatePost)


export default router;