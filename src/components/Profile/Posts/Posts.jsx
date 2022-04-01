import React from "react";
import styles from "./Posts.module.scss";
import Post from "./Post/Post";
import Input from "./Input/Input"

const Posts = (props) => {
    let posts = props.posts.map((el) => <Post authorId={el.authorId} author={el.author} date={el.date} text={el.text} />);

    const addPost = (formData) => {
        props.addPost(formData.newPostTextarea);
    };

    return (
        <div className={styles.wrap}>
            <div className="wrap">
                <Input onSubmit={addPost} />
            </div>
            {posts}
        </div>
    );
};

export default Posts;
