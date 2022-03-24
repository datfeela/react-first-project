import React from "react";
import { connect } from "react-redux";
import { follow, setUsers, unfollow, updateUsersLoadPage, updateIsFetching } from "../../../redux/usersPageReducer";
import UsersList from "./UsersList";
import { usersAPI } from "../../../api/api";

class UsersListContainer extends React.Component {
    subscribe = (userId) => {
        usersAPI.getIsFollowed(userId).then((response) => {
            if (response === true) {
                usersAPI.unfollow(userId).then((response) => {
                    response.resultCode === 0 ? this.props.unfollow(userId) : console.log(response);
                });
            } else {
                usersAPI.follow(userId).then((response) => {
                    response.resultCode === 0 ? this.props.follow(userId) : console.log(response);
                });
            }
        });
    };

    getUsers = () => {
        this.props.updateIsFetching(true);
        usersAPI.getUsers(this.props.usersPerLoad, this.props.currentPage).then((response) => {
            this.props.setUsers(response.items);
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
                subscribe={this.subscribe}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
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
    updateIsFetching,
};

export default connect(mapStateToProps, dispatchObj)(UsersListContainer);
