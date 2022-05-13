import { useEffect } from "react";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { checkScrollbar } from "../../utils/checkScrollbar";
import styles from "./Users.module.scss";
import UsersHeader from "./UsersHeader/UsersHeader";
import UsersListContainer from "./UsersList/UsersListContainer";

const Users = (props) => {
    useEffect(() => {
        document.title = `Search | Feelanet`;
    }, []);

    return (
        <div className={styles.wrap}>
            <UsersHeader />
            <UsersListContainer />
        </div>
    );
};

let AuthRedirectComponent = withAuthRedirect(Users);
export default AuthRedirectComponent;
