import { connect } from "react-redux";
import { SvgSelector } from "../../_common/SvgSelector/SvgSelector";
import styles from "./Settings.module.scss";
import { logOut } from "../../../redux/authReducer";

const Settings = ({ logOut }) => {
    return (
        <div className={styles.wrap}>
            <div className={styles.item}>
                <SvgSelector className={styles.icon + " " + styles.icon_theme} id="theme" />
                <span className={styles.item__title}>Theme: </span>
                <span className={styles.item__selector}>Light</span>
            </div>
            <div className={styles.item}>
                <SvgSelector className={styles.icon + " " + styles.icon_language} id="language" />
                <span className={styles.item__title}>Language: </span>
                <span className={styles.item__selector}>English</span>
            </div>
            <div onClick={logOut} className={styles.item + " " + styles.item_active}>
                <SvgSelector className={styles.icon + " " + styles.icon_logout} id="logout" />
                <span className={styles.item__title}>Log out </span>
            </div>
        </div>
    );
};

let mapStateToProps = (state) => {
    return {
    };
};

let dispatchObj = {
    logOut
};


export default connect(mapStateToProps, dispatchObj)(Settings);
