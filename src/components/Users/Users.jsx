import { useEffect } from "react";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import styles from "./Users.module.scss";
import UsersListContainer from "./UsersList/UsersListContainer";

const Users = (props) => {
    return <div className={styles.wrap}>
        {/* header */}
        <UsersListContainer/>
    </div>;
};

let AuthRedirectComponent = withAuthRedirect(Users);
export default AuthRedirectComponent;

