import React from "react";
import axios from "axios";
import User from "./User/User";
import styles from "./UsersList.module.scss";

// import { useRef } from "react"; //!

class UsersList extends React.Component {
    getUsers = () => {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?count=${this.props.usersPerLoad}&page=${this.props.currentPage}`).then((response) => {
            this.props.setUsers(response.data.items);
        });
        this.props.updateUsersLoadPage();
    };

    componentDidMount = () => {
        if (this.props.users.length === 0) {
            this.getUsers();
        }
    };

    render = () => {
        // const myRef = useRef(); //!


        let userElems = this.props.users.map((u) => <User key={u.id} user={u} subscribe={this.props.subscribe} />);

        return <div className={styles.wrap + " wrap"}>
            {userElems}
            <button onClick={this.getUsers}>load more</button>
        </div>;
    };
}

export default UsersList;

// const UsersList = (props) => {
//     if (props.users.length === 0) {
//         axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
//             props.setUsers(response.data.items);
//         })
//     }

//     let userElems = props.users.map((u) => <User key={u.id} user={u} subscribe={props.subscribe} />);

//     return <div className={styles.wrap + ' wrap'}>{userElems}</div>;
// };
