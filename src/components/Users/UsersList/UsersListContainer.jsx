import React, { useEffect } from "react";
import { connect } from "react-redux";
import { initializeUsers, getUsers, subscribe, cleanUp, resetUsers, updateUsersLoadPage, setAllUsersLoaded } from "../../../redux/usersPageReducer";
import {
    selectCurrentPageNumber,
    selectIsFetching,
    selectUsers,
    selectUsersPerLoad,
    selectIsAllUsersLoaded,
    selectSearchTerm,
    selectIsInit,
} from "../../../redux/usersPageSelectors";
import UsersList from "./UsersList";

const UsersListContainer = (props) => {
    const subscribe = (userId) => {
        props.subscribe(userId);
    };

    const getUsers = () => {
        props.getUsers(props.usersPerLoad, props.currentPage, props.loadFriends, props.searchTerm);
    };

    useEffect(() => {
        if (!props.isInit) props.initializeUsers(props.loadFriends);
    }, [props.isInit]);

    if (!props.isInit) return <div>fix this pls</div>;

    if (props.isInit)
        return (
            <UsersList
                users={props.users}
                searchTerm={props.searchTerm}
                cleanUp={props.cleanUp}
                subscribe={subscribe}
                getUsers={getUsers}
                resetUsers={props.resetUsers}
                updateUsersLoadPage={props.updateUsersLoadPage}
                isFetching={props.isFetching}
                isAllUsersLoaded={props.isAllUsersLoaded}
            />
        );
};

let mapStateToProps = (state) => {
    return {
        isInit: selectIsInit(state),
        users: selectUsers(state),
        usersPerLoad: selectUsersPerLoad(state),
        currentPage: selectCurrentPageNumber(state),
        isFetching: selectIsFetching(state),
        isAllUsersLoaded: selectIsAllUsersLoaded(state),
        searchTerm: selectSearchTerm(state),
    };
};

let dispatchObj = {
    initializeUsers,
    getUsers,
    subscribe,
    selectSearchTerm,
    cleanUp,
    setAllUsersLoaded,
    updateUsersLoadPage,
    resetUsers,
};

export default connect(mapStateToProps, dispatchObj)(UsersListContainer);
