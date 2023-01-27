import React , {useState} from "react";
import Test from "./test";
import UserDetails from "./UserDetails";
  
const AllUserList = () => {
    const [state, setState] = useState({ 
        name: "Sahil",
    });



    let  allUsers = [
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

    return (
        <div>
        <Test name={state.name} setName={setStateName} />
        {allUsers.map((user, index) => (
            <UserDetails key={index} user={user} />
        ))};
        </div>
    );
 };
 export default AllUserList;