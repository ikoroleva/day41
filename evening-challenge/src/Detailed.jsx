export const Detailed = (props) => {
    return (
        <div className="detailed_info">

            <div className="user_age">Age: {props.age}</div>
            <div className="user_gender">Gender: {props.gender}</div>
            <div className="user_company">Company: {props.company}</div>
            <div className="user_balance">Balance: {props.balance}</div>

        </div>
    )

}