import User from "./User/User";
import styles from "./UsersList.module.scss";
import Preloader from "./../../_common/Preloader/Preloader";

let UsersList = (props) => {
    let userElems = props.users.map((u) => (
        <User key={u.id} user={u} subscribe={props.subscribe} />
    ));

    return (
        <div className={styles.wrap + " wrap"}>
            {userElems}
            <button className={props.isFetching ? styles.buttonLoadMore_hovered : styles.buttonLoadMore} onClick={props.getUsers}>
                <span className={styles.DELETETHIS}>load more</span>
            </button>
            <div className={props.isFetching ? styles.preloader : styles.preloader_disabled}>
                <Preloader />
            </div>
        </div>
    );
};

export default UsersList;
