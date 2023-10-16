import axios from "axios";

const getData = async (number) => {

    let userPosts = {};

    await axios.get(`https://jsonplaceholder.typicode.com/users/${number}`).then((res) => {

        userPosts = { ...userPosts, ...res.data };
    });

    await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${number}`).then((res) => {

        userPosts = { ...userPosts, posts: [...res.data] };
    });
  
    return userPosts;
};

export default getData;