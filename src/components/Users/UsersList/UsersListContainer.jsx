import React from "react";
import { connect } from "react-redux";
import { getUsers, subscribe } from "../../../redux/usersPageReducer";
import { selectCurrentPageNumber, selectIsFetching, selectUsers, selectUsersPerLoad } from "../../../redux/usersPageSelectors";
import UsersList from "./UsersList";

class UsersListContainer extends React.Component {
    subscribe = (userId) => {
        this.props.subscribe(userId);
    }

    getUsers = () => {
        this.props.getUsers(this.props.usersPerLoad, this.props.currentPage);
    };

    componentDidMount = () => {
        if (this.props.users.length === 0) {
            this.getUsers();
        }
    };

    render = () => {
        return (
            <UsersList
                users={this.props.users}
                subscribe={this.subscribe}
                getUsers={this.getUsers}
                isFetching={this.props.isFetching}
            />
        );
    };
}

let mapStateToProps = (state) => {
    return {
        users: selectUsers(state),
        usersPerLoad: selectUsersPerLoad(state),
        currentPage: selectCurrentPageNumber(state),
        isFetching: selectIsFetching(state),
    };
};

let dispatchObj = {
    getUsers,
    subscribe
};

export default connect(mapStateToProps, dispatchObj)(UsersListContainer);
