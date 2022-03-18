import UsersList from "./UsersList";
import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC, updateUsersLoadPageAC } from "../../../redux/usersPageReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        usersPerLoad: state.usersPage.usersPerLoad,
        currentPage: state.usersPage.currentPage
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        subscribe: (followed, id) => {
            followed ? dispatch(unfollowAC(id)) : dispatch(followAC(id))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        updateUsersLoadPage: () => {
            dispatch(updateUsersLoadPageAC())
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);

// export default UsersListContainer;