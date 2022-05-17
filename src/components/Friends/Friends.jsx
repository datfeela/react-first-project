import styles from "./Friends.module.scss";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import UsersListContainer from "../Users/UsersList/UsersListContainer";
import UsersSearch from "../Users/UsersSearch/UsersSearch";
import { useContext, useEffect, useState } from "react";
import UsersHeader from "../Users/UsersHeader/UsersHeader";
import { checkScrollbar } from "../../utils/checkScrollbar";
import { AppContext } from "../../App";

const Friends = (props) => {
    const [childObserverRef, setObserverRef] = useState({
        observer: null,
        target: null,
    });

    const appContext = useContext(AppContext);

    useEffect(() => {
        document.title = appContext.currentLanguage === "eng" ? "Friends | Feelanet" : appContext.currentLanguage === "ru" && "Друзья | Feelanet";
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
