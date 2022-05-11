import styles from "./Header.module.scss";
import { SvgSelector } from "../../_common/SvgSelector/SvgSelector";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { AppContext } from "../../../App";

const Header = ({ recipientImage, recipientName, dialogId }) => {
    const appContext = useContext(AppContext);

    return (
        <div className={appContext.currentTheme === "dark" ? styles.wrap + " " + styles.wrap_dark : styles.wrap}>
            <NavLink to="/messages" className={styles.goBackButton}>
                <SvgSelector className={styles.icon} id="arrowBack"></SvgSelector>
                <span>Go back</span>
            </NavLink>
            <div className={styles.userInfo}>
                <NavLink to={`/profile/${dialogId}`} className={styles.name}>
                    {recipientName}
                </NavLink>
            </div>
            <NavLink className={styles.imgLink} to={`/profile/${dialogId}`}>
                <img src={recipientImage} alt="avatar" className={styles.avatar} />
            </NavLink>
        </div>
    );
};

export default Header;
