//reducer is a function that accepts the state and returns the action
//or the state thats changed by the action
//new data is sorted in payload

export default (posts = [], action) => {
  switch (action.type) {
    case "DELETE":
      //filter out the post you deleted
      return posts.filter((post) => post._id !== action.payload);
    case "UPDATE":
    case "LIKE":
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...posts, action.payload];
    default:
      return posts;
  }
};
