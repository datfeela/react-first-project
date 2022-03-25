import { connect } from "react-redux";
import FriendsList from './FriendsList'


let mapStateToProps = (state) => {
    return {
        friends: state.friendsPage.friends,
    };
};

let dispatchObj = {
};

export default connect(mapStateToProps, dispatchObj)(FriendsList);