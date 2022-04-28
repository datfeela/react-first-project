import React from "react";
import styles from "./Posts.module.scss";
import Post from "./Post/Post";
import Input from "./Input/Input";

const Posts = (props) => {
    let posts = props.posts && props.posts.map((el) => <Post authorId={el.authorId} key={el.id} author={el.author} date={el.date} text={el.text} />);
    return (
        <div className={styles.wrap}>
            <div className="wrap">
                <Input addPost={props.addPost} currentUserId={props.currentUserId} />
            </div>
            {posts ? posts : <div>There could be something... Eventually</div>}
        </div>
    );
};

export default Posts;
