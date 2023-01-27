import React, { Component } from "react";


class UserDetails extends Component {
    user = this.props.user;
    render() {
    return(
        <div>
            <h3>{user.name}</h3>
            <h5>
                Email: {user.email}
                <br />
                phoneNumber: {user.phoneNumber}
            </h5>
        </div>
    );
};
}

export default UserDetails;