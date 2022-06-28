import { Detailed } from "./Detailed";
import { useState } from "react";

export const User = (props) => {


    const {
        balance,
        picture,
        age,
        name,
        gender,
        company,
        email
    } = props.user;

    const buttonHandler = () => {

        props.setSelectedUser(props.user);

    }

    return (
        <div className="user-info">
            <div className="user_name"><h3>{name}</h3></div>
            <div className="user_email"><h4>{email}</h4></div>
            {/* <div className="user_thumbnail">
                <img src={picture} alt="user thumbnail" />
            </div> */}
            <button onClick={buttonHandler}>Detail</button>
            {name === props.selectedUser.name
                ? <Detailed age={age} gender={gender} company={company} balance={balance} />
                : ''
            }
        </div >
    )
}

//export default User;