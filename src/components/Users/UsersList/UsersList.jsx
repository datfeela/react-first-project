import User from "./User/User";
import styles from "./UsersList.module.scss";
import Preloader from "./../../_common/Preloader/Preloader"
import { useEffect } from "react";

let UsersList = (props) => {

    let userElems = props.users.map((u) => <User key={u.id} user={u} subscribe={props.subscribe} follow={props.follow} unfollow={props.unfollow} />);

    return (
        <div className={styles.wrap + " wrap"}>
            {userElems}
            <button className={props.isFetching ? styles.buttonLoadMore_hovered : styles.buttonLoadMore} onClick={props.getUsers}>
                load more
            </button>
            <div className={props.isFetching ? styles.preloader : styles.preloader_disabled}><Preloader/></div>
        </div>
    );
}

export default UsersList;
