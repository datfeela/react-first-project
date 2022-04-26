import styles from "./Dialogs.module.scss";
import Dialog from "./Dialog/Dialog";
import { useEffect } from "react";

const Dialogs = ({ dialogs, isInit, initializeDialogs}) => {

    useEffect(() => {
        initializeDialogs();
    }, []);

    // let dialogElems = dialogs.map((el) => <Dialog id={el.id} name={el.name} message={el.message} />);
    let dialogElems = dialogs.map((el) => <Dialog key={el.id} {...el} />);

    if (!isInit) return (
        <div>fix me pls</div>
    )

    if (isInit) return (
        <div className={styles.wrap}>
            {dialogElems}
        </div>
    );
};

export default Dialogs;
