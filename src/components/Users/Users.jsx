import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import styles from "./Users.module.scss";
import UsersListContainer from "./UsersList/UsersListContainer";
import UsersSearch from "./UsersSearch/UsersSearch";

const Users = (props) => {
    return (
        <div className={styles.wrap}>
            <UsersSearch />
            <UsersListContainer />
        </div>
    );
};

let AuthRedirectComponent = withAuthRedirect(Users);
export default AuthRedirectComponent;
