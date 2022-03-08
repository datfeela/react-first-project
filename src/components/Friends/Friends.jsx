import styles from "./Friends.module.scss";
import FriendsList from "./FriendsList/FriendsList";

const Friends = (props) => {
    return (
        <div className={styles.wrap + " wrap"}>
            {/* <Header/> */}
            <FriendsList friends={props.state.friends} />
        </div>
    );
};

export default Friends;
