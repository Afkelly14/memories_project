import axios from 'axios';

//url to point to backend; returns post from the database
const url = "http://localhost:5000/posts";


 export const fetchPosts = () => axios.get(url);