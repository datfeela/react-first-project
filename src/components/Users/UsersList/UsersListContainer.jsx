import React from "react";
import axios from "axios";
import { connect } from "react-redux";
import { follow, setUsers, unfollow, updateUsersLoadPage, updateIsFetching } from "../../../redux/usersPageReducer";
import UsersList from "./UsersList";

class UsersListContainer extends React.Component {
    getUsers = () => {
        this.props.updateIsFetching(true);
        axios
            .get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPerLoad}&page=${this.props.currentPage}`)
            .then((response) => {
                this.props.setUsers(response.data.items);
                this.props.updateIsFetching(false);
            });
        this.props.updateUsersLoadPage();
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
                isFetching={this.props.isFetching}
                updateIsFetching={this.props.updateIsFetching}
                subscribe={this.props.subscribe}
                getUsers={this.getUsers}
            />
        );
    };
}

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        usersPerLoad: state.usersPage.usersPerLoad,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
    };
};

// let mapDispatchToProps = (dispatch) => {
//     return {
//         subscribe: (followed, id) => {
//             followed ? dispatch(unfollowAC(id)) : dispatch(followAC(id));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         updateUsersLoadPage: () => {
//             dispatch(updateUsersLoadPageAC());
//         },
//         updateIsFetching: (isFetching) => {
//             dispatch(updateIsFetchingAC(isFetching));
//         },
//     };
// };

let dispatchObj = {
    follow,
    unfollow,
    setUsers,
    updateUsersLoadPage,
    updateIsFetching
}

export default connect(mapStateToProps, dispatchObj)(UsersListContainer);
