import {useState} from "react"
function NewPlantForm({setPlants}){
    const [values, setValues] = useState({
        name:"",
        image:"",
        description:"",
        likes:0,
        user_id: ""
    })

    function handleSubmit(event){
        event.preventDefault()
        event.target.reset()
        setPlants(plants=>[...plants,values])
        fetch('http://localhost:9292/plants',{
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
    
    
    
    
    
    const handleName = (event) => {
        setValues({...values, name: event.target.value})
    }
    const handleImage = (event) => {
        setValues({...values, image: event.target.value})
    }
    
    const handleDescription = (event) => {
        setValues({...values, description:event.target.value})
    }
    const handleUserId = (event) => {
        setValues({...values, user_id:event.target.value})
    }
    

    return(
        <div className="form-container">
            <header className="plantHeader">Create a plant</header>
            
            <form className="plant-form" onSubmit={handleSubmit}>
               <div className="nameBox"> <input
                    onChange={handleName}
                    value={values.name}
                    className="form-field"
                    placeholder="Name"
                    name="plantName" />
                </div>
                <div className="imageBox">
                <input  
                    onChange={handleImage}
                    value={values.image}
                    className="form-field"
                    placeholder="Image"
                    name="plantImage" />
                </div>
                <div className="descriptionBox">
                <input 
                    onChange={handleDescription}
                    value={values.description}
                    className="form-field"
                    placeholder="Description"
                    name="plantDescription"/>
                </div>
                <div>
                <input 
                    onChange={handleUserId}
                    value={values.user_id}
                    className="user_id"
                    placeholder="user_id"
                    name="plantUser_id"/>
                </div>
                
                <input className="submit" type="submit"/>
            </form>
            
        </div>
    )
    

}
    
export default NewPlantForm;