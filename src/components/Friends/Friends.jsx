import styles from "./Friends.module.scss";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import UsersListContainer from "../Users/UsersList/UsersListContainer";
import UsersSearch from "../Users/UsersSearch/UsersSearch";
import { useState } from "react";
import UsersHeader from "../Users/UsersHeader/UsersHeader";


const Friends = (props) => {
    const [childObserverRef, setObserverRef] = useState({
        observer: null,
        target: null,
    });
    
    return (
        <div className={styles.wrap + " wrap"}>
            <UsersHeader />
            <UsersListContainer isLoadingFriends={true} observerRef={childObserverRef} setObserverRef={setObserverRef} />
        </div>
    );
};

let AuthRedirectComponent = withAuthRedirect(Friends);
export default AuthRedirectComponent;

