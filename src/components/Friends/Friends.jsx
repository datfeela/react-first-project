import styles from "./Friends.module.scss";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import UsersListContainer from "../Users/UsersList/UsersListContainer";
import UsersSearch from "../Users/UsersSearch/UsersSearch";
import { useEffect, useState } from "react";
import UsersHeader from "../Users/UsersHeader/UsersHeader";
import { checkScrollbar } from "../../utils/checkScrollbar";

const Friends = (props) => {
    const [childObserverRef, setObserverRef] = useState({
        observer: null,
        target: null,
    });


    useEffect(() => {
        document.title = `Friends | Feelanet`;
    }, []);

    return (
        <div className={styles.wrap + " wrap"}>
            <UsersHeader />
            <UsersListContainer isLoadingFriends={true} observerRef={childObserverRef} setObserverRef={setObserverRef} />
        </div>
    );
};

let AuthRedirectComponent = withAuthRedirect(Friends);
export default AuthRedirectComponent;
