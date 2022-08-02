
function PlantCard({plant}){

   
   


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
              <p>${plant.price}</p>
            </div>
          </div>
        </div>
      </li>
    )
}

export default PlantCard;