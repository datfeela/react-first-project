import { useContext, useEffect } from "react";
import { AppContext } from "../../App";
import { SvgSelector } from "../_common/SvgSelector/SvgSelector";
import styles from "./Error.module.scss";

const Error = () => {
    const appContext = useContext(AppContext);

    useEffect(() => {
        document.title = appContext.currentLanguage === "eng" ? "Page not found | Feelanet" : appContext.currentLanguage === "ru" && "Страница не найдена | Feelanet";
    }, [appContext]);

    return (
        <div className={appContext.currentTheme === "dark" ? styles.wrap + " " + styles.wrap_dark : styles.wrap}>
            <SvgSelector id="404" className={styles.icon} />
            <h1 className={styles.header}>{appContext.currentLanguage === "eng" ? "404 | Page not found" : appContext.currentLanguage === "ru" && "404 | Страница не найдена"}</h1>
        </div>
    );
};

export default Error;
