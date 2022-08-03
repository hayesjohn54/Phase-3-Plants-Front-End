import React, {useState} from 'react';

function PlantCard({plant, onUpdatePlant}){
  const [likes, setLikes] = useState(plant.likes)
  
   
   function handleDelete(){
    fetch(`http://localhost:9292/plants/${plant.id}`, { method: 'DELETE' })
    .then(async response => {
        const isJson = response.headers.get('content-type')?.includes('application/json');
    })
   }

   
   
    
    function handleLikes(){
      fetch(` http://localhost:9292/plants/${plant.id}`,{
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          likes: likes+1,
        }),
      })
      .then((r) => r.json())
      .then((onUpdatePlant) => console.log(onUpdatePlant));
      setLikes(likes=>likes+1)
    }

    return(
        <li className="cards__item">
        <div className="card">
        
          <img
            src={plant.image}
            alt='Groot'
            className="card__image"
          />
          <div className="card__content">
            <div className="card__title">{plant.name}</div>
            <p className="card__text">{plant.description}</p>
            <div className="card__detail">
              <p>{`${likes} Likes`}</p>
              <button onClick={handleLikes}>❤️</button>
            </div>
          </div>
          
          
        </div>
        <button onClick={handleDelete}>X</button>
      </li>
    )
}

export default PlantCard;