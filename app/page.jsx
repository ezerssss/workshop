"use client";

import React, { useEffect, useState } from "react";
import PostList from "./components/PostList";
import { v4 as uuidv4 } from "uuid";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { db } from "./firebase";

// 1. You can only return one element
// 2. You need close everything
// 3. Everything is in camelCase (html attributes)

function HomePage() {
    const [posts, setPosts] = useState([]);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    async function getData() {
        const postsCollectionRef = collection(db, "posts");

        const result = await getDocs(postsCollectionRef);

        const updatedPosts = [];

        result.docs.forEach((doc) => {
            updatedPosts.push(doc.data());
        });

        setPosts(updatedPosts);
    }

    async function postToDB(post) {
        const docRef = doc(db, "posts", post.id);
        await setDoc(docRef, post);
    }

    useEffect(() => {
        getData();
    }, []);

    async function handleClick() {
        const newPost = {
            id: uuidv4(),
            title: title,
            description: description,
            likes: 0,
        };

        await postToDB(newPost);

        setPosts([...posts, newPost]);

        setTitle("");
        setDescription("");
    }

    function handleTitleChange(e) {
        setTitle(e.target.value);
    }
    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }

    return (
        <div>
            <div>
                <h1>Create a post</h1>
                <input
                    value={title}
                    placeholder="Enter title"
                    onChange={handleTitleChange}
                />
                <textarea
                    value={description}
                    placeholder="Enter description"
                    onChange={handleDescriptionChange}
                />
                <button onClick={handleClick}>Submit</button>
            </div>
            <PostList posts={posts} />
        </div>
    );
}

export default HomePage;
