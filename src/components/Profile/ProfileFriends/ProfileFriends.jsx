import { connect } from "react-redux";
import { selectFriends, selectFriendsCount } from "../../../redux/profilePageSelectors";
import styles from "./ProfileFriends.module.scss";
import { NavLink } from "react-router-dom";

const ProfileFriends = ({ currentUserId, friends, friendsCount, ...props }) => {
    let friendElems = friends.length && friends.map((f) => <Friend key={f.id} id={f.id} name={f.name} photos={f.photos} />);
    return (
        <div className={styles.wrap}>
            <h2 className={styles.header}>
                <NavLink to={`/friends`}>
                    Friends <span className={styles.friendsCount}>{friendsCount}</span>
                </NavLink>
            </h2>
            <div className={styles.friendsWrap}>{friendElems}</div>
        </div>
    );
};

const Friend = ({ id, name, photos }) => {
    return (
        <div className={styles.friend}>
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
