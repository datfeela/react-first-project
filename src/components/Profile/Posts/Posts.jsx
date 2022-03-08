import React from "react";
import styles from "./Posts.module.scss";
import Post from "./Post/Post";

const Posts = (props) => {
    let posts = props.posts.map((el) => <Post authorId={el.authorId} author={el.author} date={el.date} text={el.text} />);

    const newPostInput = React.createRef();

    const addPost = () => {
        let text = newPostInput.current.value;
        props.addPost(text);
        newPostInput.current.value = '';
    };

    return (
        <div className={styles.wrap}>
            <div className="wrap">
                <textarea ref={newPostInput} className={styles.input} placeholder="What's new?"></textarea>
                <button className={styles.button} onClick={addPost}>
                    Publish
                </button>
            </div>
            {posts}
        </div>
    );
};

export default Posts;
