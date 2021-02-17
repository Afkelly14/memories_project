import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE } from '../constants/actionTypes'
import * as api from "../api";

// Action creators
// reduxthunk allows you to specify another arrow function
//payload = actual data to send, minus headers
// functions that return actions
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    //pass data from the backend to disptach an action using redux
    dispatch({ type: FETCH_ALL , payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// Action to create the post
export const createPost = (post) => async (dispatch) => {
  try {
    //make post API request to backend server
    const { data } = await api.createPost(post);

    dispatch({ type: CREATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

//action to update post
export const updatePost = (id, post) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, post);

    dispatch({ type: UPDATE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

//like post
export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);

    dispatch({ type: LIKE, payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

//action to delete post
//only want to delete, dont care about return data
export const deletePost = (id) => async (dispatch) => {
  try {
    await api.deletePost(id);

    dispatch({ type: DELETE, payload: id })
  } catch (error) {
    console.log(error.message);
  }
}
