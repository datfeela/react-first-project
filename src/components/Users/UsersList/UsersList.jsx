import User from "./User/User";
import styles from "./UsersList.module.scss";
import Preloader from "./../../_common/Preloader/Preloader";
import { useEffect } from "react";

let UsersList = ({ isAllUsersLoaded, isFetching, users, searchTerm, subscribe, getUsers, resetUsers, updateUsersLoadPage, cleanUp }) => {
    useEffect(() => {
        if (users.length === 0) {
            getUsers();
        }
    }, [users.length, searchTerm]);

    useEffect(() => {
        updateUsersLoadPage(1);
        users.length && resetUsers();
    }, [searchTerm]);

    //cleanup
    useEffect(() => {
        return () => {
            cleanUp();
        };
    }, []);

    let userElems = users.map((u) => <User key={u.id} user={u} subscribe={subscribe} />);
    return (
        <div className={styles.wrap + " wrap"}>
            {userElems}
            {!isAllUsersLoaded && (
                <button className={isFetching ? styles.buttonLoadMore_hovered : styles.buttonLoadMore} onClick={getUsers}>
                    <span className={styles.DELETETHIS}>load more</span>
                </button>
            )}
            <div className={isFetching ? styles.preloader : styles.preloader_disabled}>
                <Preloader />
            </div>
        </div>
    );
};

export default UsersList;
