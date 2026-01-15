import type { typesAnimalInfos } from "../interface/Props";

export default function AnimalGrid({ animalInfos }: typesAnimalInfos) {
    return(
        <img src={`./src/assets/img/${animalInfos.image_url}`} alt="photo d'animal" />
    )
}