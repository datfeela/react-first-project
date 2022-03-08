import styles from "./FriendsList.module.scss";
import Friend from "./Friend/Friend";

const FriendsList = (props) => {
    let friendsElems = props.friends.map((el) => <Friend id={el.id} name={el.name} />);

    return (
        <div className={styles.wrap}>
            {friendsElems}
        </div>
    );
};

export default FriendsList;
