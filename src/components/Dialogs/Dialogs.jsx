import styles from "./Dialogs.module.scss";
import Dialog from "./Dialog/Dialog";

const Dialogs = (props) => {

    let dialogElems = props.dialogs.map((el) => <Dialog id={el.id} name={el.name} message={el.message} />);

    return (
        <div className={styles.wrap}>
            {dialogElems}
        </div>
    );
};

export default Dialogs;
