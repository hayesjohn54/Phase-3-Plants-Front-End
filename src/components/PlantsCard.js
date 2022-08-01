function PlantCard(){
    return(
        <li className="cards__item">
        <div className="card">
          <img
            src='https://images.unsplash.com/photo-1581368976940-534956cab59b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8Z3Jvb3R8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
            alt='Groot'
            className="card__image"
          />
          <div className="card__content">
            <div className="card__title">🌱: Groot</div>
            <p className="card__text">Groot</p>
            <div className="card__detail">
              <p>It's Groot</p>
            </div>
          </div>
        </div>
      </li>
    )
}

export default PlantCard;