import styles from "./DialogsList.module.scss";
import Dialog from "./Dialog/Dialog";
import { connect } from "react-redux";
import { selectDialogs } from "../../../redux/chatSelectors";
import { useContext } from "react";
import { AppContext } from "../../../App";

const DialogsList = ({ dialogs }) => {
    const appContext = useContext(AppContext);

    let dialogElems = dialogs.map((el) => <Dialog key={el.id} {...el} />);
    if (dialogElems.length === 0) {
        return <div>No dialogs found</div>;
    }
    return <div className={appContext.currentTheme === "dark" ? styles.wrap + " " + styles.wrap_dark : styles.wrap}>{dialogElems}</div>;
};

let mapStateToProps = (state) => {
    return {
        dialogs: selectDialogs(state),
    };
};

let dispatchObj = {};

export default connect(mapStateToProps, dispatchObj)(DialogsList);
