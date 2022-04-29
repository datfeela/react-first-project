import { SvgSelector } from "../SvgSelector/SvgSelector";
import styles from "./WarningWithPopup.module.scss";

export default (props) => {
    return (
            <div className={styles.wrapRelative}>
                <SvgSelector className={styles.icon} id="warning" />
                <div className={styles.popupWrap}>
                    <div className={styles.popup}>
                        <span className={styles.text}>{props.error || props.children}</span>
                    </div>
                </div>
            </div>
    );
};
