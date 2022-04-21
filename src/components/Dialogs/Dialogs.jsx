import styles from "./Dialogs.module.scss";
import Dialog from "./Dialog/Dialog";
import { useEffect } from "react";

const Dialogs = ({ dialogs, getDialogs }) => {
    
    useEffect(() => {
        getDialogs()
    }, []);

    // let dialogElems = dialogs.map((el) => <Dialog id={el.id} name={el.name} message={el.message} />);
    let dialogElems = dialogs.map((el) => <Dialog key={el.id} {...el} />);

    return (
        <div className={styles.wrap}>
            {dialogElems}
        </div>
    );
};

export default Dialogs;
