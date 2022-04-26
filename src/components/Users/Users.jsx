import { useState } from "react";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import styles from "./Users.module.scss";
import UsersHeader from "./UsersHeader/UsersHeader";
import UsersListContainer from "./UsersList/UsersListContainer";
import UsersSearch from "./UsersSearch/UsersSearch";

const Users = (props) => {
    return (
        <div className={styles.wrap}>
            <UsersHeader />
            <UsersListContainer/>
        </div>
    );
};

let AuthRedirectComponent = withAuthRedirect(Users);
export default AuthRedirectComponent;
