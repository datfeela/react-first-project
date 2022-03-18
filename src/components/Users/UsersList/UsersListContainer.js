import UsersList from "./UsersList";
import { connect } from "react-redux";
import { followAC, setUsersAC, unfollowAC } from "../../../redux/usersPageReducer";

let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    };
};

let mapDispatchToProps = (dispatch) => {
    return {
        subscribe: (followed, id) => {
            followed ? dispatch(unfollowAC(id)) : dispatch(followAC(id))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        }
    };
};

const UsersListContainer = connect(mapStateToProps, mapDispatchToProps)(UsersList);

export default UsersListContainer;