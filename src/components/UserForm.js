import {useState} from "react"
function UserForm({setUsers}){
    const [values, setValues] = useState({
        first_name:"",
        last_name:"",
        image:"",
    })

    function handleSubmit(event){
        event.preventDefault()
        event.target.reset()
        setUsers(users=>[...users,values])
        fetch('http://localhost:9292/users',{
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify(values)
        })
        .then(data => {
            if (!data.ok) {
              throw Error(data.status);
             }
             return data.json();
            }).then(update => {
            console.log(update);
            }).catch(e => {
            console.log(e);
            })}
    
    
    
    
    
    const handleFirstName = (event) => {
        setValues({...values, first_name: event.target.value})
    }
    const handleLastName = (event) => {
        setValues({...values, last_name: event.target.value})
    }
    const handleImage = (event) => {
        setValues({...values, image: event.target.value})
    }
    

    return(
        <div className="form-container">
            <header className="plantHeader">Create a plant</header>
            
            <form className="plant-form" onSubmit={handleSubmit}>
               <div className="nameBox"> <input
                    onChange={handleFirstName}
                    value={values.first_name}
                    className="form-field"
                    placeholder="First Name"
                    name="firstName" />
                </div>
                <div className="lastNameBox"> <input
                    onChange={handleLastName}
                    value={values.last_name}
                    className="form-field"
                    placeholder="Last Name"
                    name="lastName" />
                </div>
                <div className="imageBox">
                <input  
                    onChange={handleImage}
                    value={values.image}
                    className="form-field"
                    placeholder="Image"
                    name="plantImage" />
                </div>
                <input className="submit" type="submit"/>
            </form>
            
        </div>
    )
    

}

export default UserForm;