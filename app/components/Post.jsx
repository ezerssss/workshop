import React from "react";

// create 3 variable in const
// title
// description
// likes

function Post({ post }) {
    return (
        <div className="post">
            <h1>{post.title}</h1>
            <p>{post.description}</p>
            <p>{post.likes} Likes</p>
            <button>Like</button>
        </div>
    );
}

export default Post;
