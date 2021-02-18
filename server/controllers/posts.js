import mongoose from "mongoose";
import express from "express";
import PostMessage from "../models/postMessage.js";

//callback function has try/catch block

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find();

    console.log(postMessages);

    res.status(200).json(postMessages);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getPost = async (req, res) => {
  const { id } = req.params;
  try {
    const post = await PostMessage.findById(id);

    res.status(200).json(post)
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

export const createPosts = async (req, res) => {
  const { title, message, creator, selectedFile, tags} = req.body;

  const newPostMessage = new PostMessage({ title, message, creator, selectedFile, tags });
  try {
    await newPostMessage.save();

    res.status(201).json(newPostMessage);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, message, creator, selectedFile, tags} = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with that id: ${id}`);

  const updatedPost = { creator, title, message, tags, selectedFile };
  
  await PostMessage.findByIdAndUpdate(id, updatedPost, {
    new: true,
  });

  res.json(updatedPost);
};

export const deletePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with that id: ${id}`);

  await PostMessage.findByIdAndRemove(id);

  console.log("DELETE");

  res.json({ message: "Post deleted successfully" });
};

//add likes to a post
export const likePost = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id))
  return res.status(404).send(`No post with that id: ${id}`);

  const post = await PostMessage.findById(id);
  const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, {
    new: true
  })

  console.log(error.message)

  res.json(updatedPost)
}
