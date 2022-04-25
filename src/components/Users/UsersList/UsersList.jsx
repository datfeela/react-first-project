import User from "./User/User";
import styles from "./UsersList.module.scss";
import Preloader from "./../../_common/Preloader/Preloader";
import { useEffect } from "react";
import { infiniteScrollObserver } from "../../../utils/intersectionObserver";

const UsersList = ({
    isAllUsersLoaded,
    isFetching,
    users,
    searchTerm,
    subscribe,
    resetUsers,
    updateUsersLoadPage,
    cleanUp,
    getUsers
}) => {
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

    //observer
    let observerOptions = {
        root: document.querySelector(styles.wrap + " wrap"),
    };

    let callbackFunc = () => {
        getUsers();
    };

    useEffect(() => {
        if (users && users[users.length - 2] && !isAllUsersLoaded) {
            let target = document.querySelector(`[id="${users[users.length - 2].id}"]`);
            let observer = infiniteScrollObserver(observerOptions, callbackFunc);
            // setObserverRef({ observer: observer, target: target });
            observer.observe(target);
        }
    }, [users]);

    //----//

    let userElems = users.map((u) => <User key={u.id} user={u} subscribe={subscribe} />);
    return (
        <div className={styles.wrap + " wrap"}>
            {userElems}
            <div className={isFetching ? styles.preloader : styles.preloader_disabled}>
                <Preloader />
            </div>
        </div>
    );
};

export default UsersList;
