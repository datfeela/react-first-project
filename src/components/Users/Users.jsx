import { useContext, useEffect } from "react";
import { AppContext } from "../../App";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import styles from "./Users.module.scss";
import UsersHeader from "./UsersHeader/UsersHeader";
import UsersListContainer from "./UsersList/UsersListContainer";

const Users = (props) => {
    const appContext = useContext(AppContext);

    useEffect(() => {
        document.title = appContext.currentLanguage === "eng" ? "Search | Feelanet" : appContext.currentLanguage === "ru" && "Поиск | Feelanet";
    }, [appContext.currentLanguage]);

    return (
        <div className={styles.wrap}>
            <UsersHeader />
            <UsersListContainer />
        </div>
    );
};

let AuthRedirectComponent = withAuthRedirect(Users);
export default AuthRedirectComponent;
