import React from "react";
import UserDetails from "./UserDetails";


class AllUserList extends React.Component {
    allUsers = [
        { name: "John", email: "johm@email.com", phoneNumber: "+91-1234567891"},
        {
            name: "Ravi",
            email: "ravi@email.com", 
            phoneNumber: "+91-9876543212",
        },
        {
            name: "Kris",
            email: "kris@email.com",
            phoneNumber: "+91-4567891234",
        },
    ];


   let array = allUsers.map(user, index) => (
    <UserDetails key={index} user={user}/>
   );
render(){
    return(
        <div>
    {array}
    </div>
    );
}
};
export default AllUserList;

    