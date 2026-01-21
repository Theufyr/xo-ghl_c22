import type { typesAnimalInfos } from "../interface/Props";

export default function AnimalGrid({ animalInfos }: typesAnimalInfos) {
    return(
        <div className="grid_card">
            <img src={`./src/assets/img/${animalInfos.image_url}`} alt={animalInfos.animal_name} />
        </div>
    )
}