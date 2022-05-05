import styles from "./Dialogs.module.scss";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { initializeDialogs } from "../../redux/chatReducer";
import { selectDialogsIsInit } from "../../redux/chatSelectors";

import Preloader from "../_common/Preloader/Preloader";
import DialogsList from "./DialogsList/DialogsList";
import DialogsSearch from "./DialogsSearch/DialogsSearch";

const Dialogs = ({ isInit, initializeDialogs }) => {

    useEffect(() => {
        initializeDialogs();
        document.title = `Dialogs | Feelanet`;
    }, []);

    if (!isInit)
        return (
            <div className={styles.wrap + ' wrapNoPadding'}>
                <Preloader />
            </div>
        );

    if (isInit)
        return (
            <div className={styles.wrap}>
                <DialogsSearch />
                <DialogsList />
            </div>
        );
};

let mapStateToProps = (state) => {
    return {
        isInit: selectDialogsIsInit(state),
    };
};

let dispatchObj = {
    initializeDialogs,
};

export default compose(connect(mapStateToProps, dispatchObj), withAuthRedirect)(Dialogs);
