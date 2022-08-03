function UserCard({user}){
    return(
    <li className="users_item">
        <div className="user_card">
            <img 
            src={user.image}
            alt="user image"
            className="user_image"
            />
            <div className="user_content">
                <div className="user_name">{user.first_name + " " +  user.last_name}</div>
                
            
            </div>
        </div>
    </li>
)}

export default UserCard;