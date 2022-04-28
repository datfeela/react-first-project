import { useRef } from "react";
import styles from "./EditMode.module.scss";

const EditMode = ({ deactivateEditMode }) => {
    const innerWrapRef = useRef();

    const handleClick = (e) => {
        !innerWrapRef.current.contains(e.target) && deactivateEditMode();
    }

    return <div onClick={handleClick} className={styles.wrap}>
        <div ref={innerWrapRef} className={styles.wrapInner}>aaaa</div>
    </div>
}

export default EditMode;