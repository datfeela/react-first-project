import { useContext } from "react";
import styles from "./Posts.module.scss";
import Post from "./Post/Post";
import Input from "./Input/Input";
import { AppContext } from "../../../App";

const Posts = (props) => {
    const appContext = useContext(AppContext);

    let posts = props.posts && props.posts.map((el) => <Post authorId={el.authorId} key={el.id} author={el.author} date={el.date} text={el.text} />);
    return (
        <div className={styles.wrap}>
            <div className="wrap">
                <Input addPost={props.addPost} currentUserId={props.currentUserId} />
            </div>
            {posts ? (
                posts
            ) : (
                <div className={styles.noPostsWrap + " wrap"}>
                    {appContext.currentLanguage === "eng" && "There is no posts... Yet"}{" "}
                    {appContext.currentLanguage === "ru" && "Пока нет ни одной записи..."}
                </div>
            )}
        </div>
    );
};

export default Posts;
