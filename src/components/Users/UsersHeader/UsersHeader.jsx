import styles from "./UsersHeader.module.scss";
import { connect } from "react-redux";
import UsersSearch from "../UsersSearch/UsersSearch";
import { selectUsersFoundCount } from "../../../redux/usersPageSelectors";
import { useLocation } from "react-router-dom";

const UsersHeader = ({ usersFound }) => {
    const location = useLocation();
    let headerText, countText;

    switch (location.pathname) {
        case "/friends":
            headerText = "Your friends ";
            countText = ` ${usersFound}`;
            break;
        case "/users":
            headerText = "Search Results ";
            countText = `(${usersFound} found)`;
    }

    return (
        <div className={styles.wrap + " wrapNoPadding"}>
            <div className={styles.innerWrap + " wrap"}>
                <h1 className={styles.title}>
                    {headerText} <span className={styles.count}>{usersFound && countText}</span>
                </h1>
            </div>
            <UsersSearch />
        </div>
    );
};

let mapStateToProps = (state) => {
    return {
        usersFound: selectUsersFoundCount(state),
    };
};

export default connect(mapStateToProps, {})(UsersHeader);
