import React from "react";
import styles from "./Posts.module.scss";
import Post from "./Post/Post";
import Input from "./Input/Input";

const Posts = (props) => {
    let posts;
    if (props.posts) posts = props.posts.map((el) => <Post authorId={el.authorId} author={el.author} date={el.date} text={el.text} />);
    return (
        <div className={styles.wrap}>
            <div className="wrap">
                <Input addPost={props.addPost} currentUserId={props.currentUserId} />
                {/* onSubmit={addPost} */}
            </div>
            {posts ? posts : <div>net postov</div>}
        </div>
    );
};

export default Posts;
