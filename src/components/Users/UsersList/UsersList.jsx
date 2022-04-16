import User from "./User/User";
import styles from "./UsersList.module.scss";
import Preloader from "./../../_common/Preloader/Preloader";
import { useEffect } from "react";

let UsersList = (props) => {
    useEffect(() => {
        if (props.users.length === 0) {
            props.getUsers();
        }
    }, [props.users.length, props.searchTerm]);

    useEffect(() => {
        // debugger;
        props.updateUsersLoadPage(1);
        props.users.length && props.resetUsers()
    }, [props.searchTerm]);

    //cleanup
    useEffect(() => {
        return () => {
            props.cleanUp();
        };
    }, []);

    let userElems = props.users.map((u) => <User key={u.id} user={u} subscribe={props.subscribe} />);
    return (
        <div className={styles.wrap + " wrap"}>
            {userElems}
            {!props.isAllUsersLoaded && (
                <button className={props.isFetching ? styles.buttonLoadMore_hovered : styles.buttonLoadMore} onClick={props.getUsers}>
                    <span className={styles.DELETETHIS}>load more</span>
                </button>
            )}
            <div className={props.isFetching ? styles.preloader : styles.preloader_disabled}>
                <Preloader />
            </div>
        </div>
    );
};

export default UsersList;
