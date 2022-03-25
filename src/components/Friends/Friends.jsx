import styles from "./Friends.module.scss";
import FriendsListContainer from "./FriendsList/FriendsListContainer";

const Friends = (props) => {
    return (
        <div className={styles.wrap + " wrap"}>
            {/* <Header/> */}
            <FriendsListContainer/>
        </div>
    );
};

export default Friends;
