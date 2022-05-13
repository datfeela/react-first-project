import styles from "./UsersHeader.module.scss";
import { connect } from "react-redux";
import UsersSearch from "../UsersSearch/UsersSearch";
import { selectUsersFoundCount } from "../../../redux/usersPageSelectors";
import { useLocation } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../../App";

const UsersHeader = ({ usersFound }) => {
    const appContext = useContext(AppContext);

    const location = useLocation();
    let headerText, countText;

    switch (location.pathname) {
        case "/friends":
            headerText = appContext.currentLanguage === "eng" ? "Your friends " : appContext.currentLanguage === "ru" && "Друзья ";
            countText = ` ${usersFound}`;
            break;
        case "/users":
            headerText = appContext.currentLanguage === "eng" ? "Search results " : appContext.currentLanguage === "ru" && "Результаты поиска ";
            countText = `(${usersFound} ${
                appContext.currentLanguage === "eng" ? "found" : appContext.currentLanguage === "ru" && "найдено"
            })`;
    }

    return (
        <div className={appContext.currentTheme === "dark" ? styles.wrap + " wrapNoPadding " + styles.wrap_dark : styles.wrap + " wrapNoPadding"}>
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
