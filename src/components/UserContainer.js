import UserCard from "./UserCard";

function UserContainer({users}){
    const renderUsers= users.map(user=><UserCard key={user.id} user={user}/>)
return(
    <div className="user_container">
        {renderUsers}
    </div>
)}

export default UserContainer;