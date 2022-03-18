import styles from "./Users.module.scss";
import UsersListContainer from "./UsersList/UsersListContainer";

const Users = (props) => {
    return <div className={styles.wrap}>
        {/* header */}
        <UsersListContainer/>
    </div>;
};

export default Users;

