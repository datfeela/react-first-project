import styles from "./Dialogs.module.scss";
import { useContext, useEffect, useState } from "react";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import { compose } from "redux";
import { initializeDialogs } from "../../redux/chatReducer";
import { selectDialogsIsInit } from "../../redux/chatSelectors";

import Preloader from "../_common/Preloader/Preloader";
import DialogsList from "./DialogsList/DialogsList";
import DialogsSearch from "./DialogsSearch/DialogsSearch";
import { AppContext } from "../../App";
import { checkScrollbar } from "../../utils/checkScrollbar";

const Dialogs = ({ isInit, initializeDialogs }) => {
    const appContext = useContext(AppContext);

    useEffect(() => {
        checkScrollbar() ? appContext.setIsScrollbarActive(true) : appContext.setIsScrollbarActive(false);
    });

    useEffect(() => {
        initializeDialogs();
        document.title = appContext.currentLanguage === "eng" ? "Messages | Feelanet" : appContext.currentLanguage === "ru" && "Сообщения | Feelanet";
    }, []);

    if (!isInit)
        return (
            <div className={styles.preloaderWrap + " wrapNoPadding"}>
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
