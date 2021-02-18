import express from "express";

import { getPosts, createPosts, updatePost, deletePost, likePost } from "../controllers/posts.js";

const router = express.Router();


router.get("/", getPosts);
router.post("/", createPosts);
// router.get("/:id", getPost);
//patch used to update existing documents - need id to know what to edit
router.patch("/:id", updatePost);
router.delete('/:id', deletePost);
router.patch('/:id/likePost', likePost);

export default router;
