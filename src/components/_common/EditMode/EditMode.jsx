import { useContext, useRef } from "react";
import { AppContext } from "../../../App";
import { SvgSelector } from "../SvgSelector/SvgSelector";
import styles from "./EditMode.module.scss";


const EditMode = ({ deactivateEditMode, ChildComponent, ...props }) => {
    const appContext = useContext(AppContext);
    const innerWrapRef = useRef();
    const closeButtonRef = useRef();

    const handleClick = (e) => {
        closeButtonRef.current.contains(e.target) && deactivateEditMode();
        !innerWrapRef.current.contains(e.target) && deactivateEditMode();
    };

    return (
        <div onClick={handleClick} className={appContext.currentTheme === "dark" ? styles.wrap + " " + styles.wrap_dark : styles.wrap}>
            <div className={styles.wrapInner} ref={innerWrapRef}>
                <div className={styles.closeButtonWrap} ref={closeButtonRef}>
                    <SvgSelector id="close" className={styles.closeButton} />
                </div>
                <div>
                    <ChildComponent {...props} deactivateEditMode={deactivateEditMode} />
                </div>
            </div>
        </div>
    );
};

export default EditMode;
