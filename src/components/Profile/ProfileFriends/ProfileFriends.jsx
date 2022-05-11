import { connect } from "react-redux";
import { selectFriends, selectFriendsCount } from "../../../redux/profilePageSelectors";
import styles from "./ProfileFriends.module.scss";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../../App";

const ProfileFriends = ({ currentUserId, friends, friendsCount, ...props }) => {
    const appContext = useContext(AppContext);
    let friendElems = friends.length && friends.map((f) => <Friend appContext={appContext} key={f.id} id={f.id} name={f.name} photos={f.photos} />);
    return (
        <div className={appContext.currentTheme === "dark" ? styles.wrap + " " + styles.wrap_dark : styles.wrap}>
            <h2 className={styles.header}>
                <NavLink className={styles.header_link} to={`/friends`}>
                    Friends <span className={styles.friendsCount}>{friendsCount}</span>
                </NavLink>
            </h2>
            <div className={styles.friendsWrap}>{friendElems}</div>
        </div>
    );
};

const Friend = ({ id, name, photos, appContext }) => {
    return (
        <div className={appContext.currentTheme === "dark" ? styles.friend + " " + styles.friend_dark : styles.friend}>
            <NavLink to={`/profile/${id}`}>
                <div className={styles.friend__imgWrap}>
                    <img
                        className={styles.friend__img}
                        src={photos.small ? photos.small : "https://via.placeholder.com/100x100?text=Pic"}
                        alt="img"
                    />
                </div>
            </NavLink>
            <NavLink className={styles.friend__link} to={`/profile/${id}`}>
                <span className={styles.friend__name}>{name}</span>
            </NavLink>
        </div>
    );
};

let mapStateToProps = (state) => {
    return {
        friends: selectFriends(state),
        friendsCount: selectFriendsCount(state),
    };
};

let dispatchObj = {};

export default connect(mapStateToProps, dispatchObj)(ProfileFriends);
