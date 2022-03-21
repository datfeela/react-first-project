import React from "react";
import styles from "./Posts.module.scss";
import Post from "./Post/Post";

const Posts = (props) => {
    let posts = props.posts.map((el) => <Post authorId={el.authorId} author={el.author} date={el.date} text={el.text} />);

    const addPost = () => {
        props.addPost()
    };

    const inputChangeHandler = (e) => {
        let text = e.target.value;
        props.newPostInputChange(text);
    };

    return (
        <div className={styles.wrap}>
            <div className="wrap">
                <textarea onChange={inputChangeHandler} className={styles.input} placeholder="What's new?" value={props.inputText}></textarea>
                <button onClick={addPost} className={styles.button}>
                    Publish
                </button>
            </div>
            {posts}
        </div>
    );
};

export default Posts;
