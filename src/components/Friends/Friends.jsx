import styles from "./Friends.module.scss";
import FriendsListContainer from "./FriendsList/FriendsListContainer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";


const Friends = (props) => {
    return (
        <div className={styles.wrap + " wrap"}>
            {/* <Header/> */}
            <FriendsListContainer/>
        </div>
    );
};

let AuthRedirectComponent = withAuthRedirect(Friends);
export default AuthRedirectComponent;
