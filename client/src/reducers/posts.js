
//reducer is a function that accepts the state and returns the action
//or the state thats changed by the action

export default  (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return posts;
    case "CREATE":
      return posts;
    default:
      return posts;
  }
};
