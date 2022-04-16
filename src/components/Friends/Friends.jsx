import styles from "./Friends.module.scss";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import UsersListContainer from "../Users/UsersList/UsersListContainer";
import UsersSearch from "../Users/UsersSearch/UsersSearch";


const Friends = (props) => {
    return (
        <div className={styles.wrap + " wrap"}>
            <UsersSearch />
            <UsersListContainer loadFriends={true} />
        </div>
    );
};

let AuthRedirectComponent = withAuthRedirect(Friends);
export default AuthRedirectComponent;
