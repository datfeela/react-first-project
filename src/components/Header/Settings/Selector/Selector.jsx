import styles from "./Selector.module.scss";
import { useContext, useEffect, useRef, useState } from "react";
import { AppContext } from "../../../../App";

const Selector = ({ selectorType, ...props }) => {
    const appContext = useContext(AppContext);

    let initialSelectorValue, dropdownItems, selectorClassName;
    const selectorRef = useRef();
    const [isSelectorActive, setIsSelectorActive] = useState(false);
    selectorClassName = isSelectorActive ? styles.selector + " " + styles.selector_active : styles.selector;

    const togglePopup = (e) => {
        isSelectorActive ? deactivatePopup() : activatePopup();
    };

    const deactivatePopup = () => {
        setIsSelectorActive(false);
        document.removeEventListener("mousedown", handleClick);
    };

    const activatePopup = () => {
        setIsSelectorActive(true);
        document.addEventListener("mousedown", handleClick);
    };

    const handleClick = (e) => {
        if (!selectorRef.current) document.removeEventListener("mousedown", handleClick);
        if (!selectorRef.current.contains(e.target)) {
            deactivatePopup();
        }
    };

    const setLanguage = (lang) => {
        props.setLanguage(lang);
        localStorage.setItem("lang", lang);
    };

    const setTheme = (theme) => {
        props.setTheme(theme);
        localStorage.setItem("theme", theme);
    };

    const changeSelectorValue = (e) => {
        if (selectorType === "lang" && props.lang !== e.target.id) setLanguage(e.target.id);
        if (selectorType === "theme" && props.theme !== e.target.id) setTheme(e.target.id);
    };

    if (selectorType === "theme") {
        props.theme === "light" &&
            ((appContext.currentLanguage === "eng" && (initialSelectorValue = "Light")) ||
                (appContext.currentLanguage === "ru" && (initialSelectorValue = "Светлая")));
        props.theme === "dark" &&
            ((appContext.currentLanguage === "eng" && (initialSelectorValue = "Dark")) ||
                (appContext.currentLanguage === "ru" && (initialSelectorValue = "Темная")));
        dropdownItems = (
            <div className={styles.dropdown}>
                <div onClick={changeSelectorValue} className={styles.dropdown_item} id="light">
                    {appContext.currentLanguage === "eng" && "Light"} {appContext.currentLanguage === "ru" && "Светлая"}
                </div>
                <div onClick={changeSelectorValue} className={styles.dropdown_item} id="dark">
                    {appContext.currentLanguage === "eng" && "Dark"} {appContext.currentLanguage === "ru" && "Темная"}
                </div>
            </div>
        );
    }
    if (selectorType === "lang") {
        props.lang === "eng" && (initialSelectorValue = "English");
        props.lang === "ru" && (initialSelectorValue = "Русский");
        dropdownItems = (
            <div className={styles.dropdown}>
                <div onClick={changeSelectorValue} className={styles.dropdown_item} id="eng">
                    English
                </div>
                <div onClick={changeSelectorValue} className={styles.dropdown_item} id="ru">
                    Русский
                </div>
            </div>
        );
    }
    return (
        <div className={appContext.currentTheme === "dark" ? styles.wrap + " " + styles.wrap_dark : styles.wrap}>
            <div onClick={togglePopup} ref={selectorRef} className={selectorClassName}>
                <span className={styles.title}>{initialSelectorValue}</span>
                {dropdownItems}
            </div>
        </div>
    );
};

export default Selector;
