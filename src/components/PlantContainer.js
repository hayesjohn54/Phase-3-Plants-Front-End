import PlantsCard from "./PlantsCard"

function PlantContainer({plants}){
    const renderPlants= plants.map(plant=><PlantsCard key={plant.id} plant={plant}/>)
return(
    <div className="plant_container">
        {renderPlants}
    </div>
)
}

export default PlantContainer;