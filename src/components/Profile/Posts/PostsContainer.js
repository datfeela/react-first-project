import Posts from "./Posts";
import { addPostActionCreator, newPostInputChangeActionCreator } from "../../../redux/profilePageReducer";
import { connect } from "react-redux";

// const PostsContainer = (props) => {
//     const state = props.store.getState();

//     const addPost = () => {
//         props.store.dispatch(addPostActionCreator());
//     };

//     const inputChangeHandler = (text) => {
//         props.store.dispatch(newPostInputChangeActionCreator(text));
//     };

//     return (
//         <Posts addPost={addPost} inputChangeHandler={inputChangeHandler} posts={state.profilePage.posts} inputText={state.profilePage.inputText} />
//     );
// };

let mapStateToProps = (state) => {
    return {
        posts: state.profilePage.posts,
        inputText: state.profilePage.inputText,
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        addPost: () => {
            dispatch(addPostActionCreator());
        },
        inputChangeHandler: (text) => {
            dispatch(newPostInputChangeActionCreator(text));
        },
    };
};

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts);

export default PostsContainer;
