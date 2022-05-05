import { NavLink } from "react-router-dom";
import { SvgSelector } from "../_common/SvgSelector/SvgSelector";
import Settings from "./Settings/Settings";
import styles from "./Header.module.scss";
import { useRef, useState } from "react";

const Header = ({ isAuth }) => {
    const [isPopupActive, setIsPopupActive] = useState(false);
    const wrapRef = useRef();

    const popupClassName = isPopupActive ? styles.popup + " " + styles.popup_active : styles.popup;
    const iconWrapClassName = isPopupActive ? styles.iconWrap + " " + styles.iconWrap_active : styles.iconWrap;

    const togglePopup = () => {
        isPopupActive ? deactivatePopup() : activatePopup();
    };

    const deactivatePopup = () => {
        setIsPopupActive(false);
        document.removeEventListener("mousedown", handleClick);
    };

    const activatePopup = () => {
        setIsPopupActive(true);
        document.addEventListener("mousedown", handleClick);
    };

    const handleClick = (e) => {
        if (!wrapRef.current) document.removeEventListener("mousedown", handleClick);
        if (!wrapRef.current.contains(e.target)) {
            deactivatePopup();
        }
    };

    return (
        <div className={styles.wrap}>
            <header className={styles.content}>
                <NavLink className={styles.link} to={isAuth ? "/profile/22988" : "/login"}>
                    <SvgSelector className={styles.logo} id="logo" />
                    <span className={styles.logoText}>FEELANET</span>
                </NavLink>
                {isAuth ? (
                    <div ref={wrapRef} className={styles.wrapRight}>
                        <div className={iconWrapClassName} onClick={togglePopup}>
                            <SvgSelector className={styles.settingsIcon} id="settings" />
                        </div>
                        <div className={popupClassName}>
                            <Settings/>
                        </div>
                    </div>
                ) : (
                    <div className={styles.wrapRight}>
                        <NavLink to={"/login"}>Log in</NavLink>
                    </div>
                )}
            </header>
        </div>
    );
};

export default Header;
