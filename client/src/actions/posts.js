import * as api from "../api";

// Action creators
// reduxthunk allows you to specify another arrow function
// functions that return actions
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    //pass data from the backend to disptach an action using redux
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

// Action to create the post
export const createPost = (post) => async (disptach) => {
  try {
    //make post API request to backend server
    const { data } = await api.createPost(post);

    disptach({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
