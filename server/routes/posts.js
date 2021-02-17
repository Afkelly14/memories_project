import express from "express";

import { getPosts, createPosts, updatePost, deletePost } from "../controllers/posts.js";

const router = express.Router();


router.get("/", getPosts);
router.post("/", createPosts);
//patch used to update existing documents - need id to know what to edit
router.patch("/:id", updatePost);
router.delete('/:id', deletePost);

export default router;
