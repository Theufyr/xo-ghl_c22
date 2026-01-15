import UseQueryAnimalGrid from "../hooks/UseQueryAnimalGrid";
import AnimalGrid from "./AnimalGrid";
import type { typesAnimals } from "../interface/Props";

export default function AnimalGridList() {
  const { data, isLoading, error } = UseQueryAnimalGrid();
  
  if (isLoading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;
  
  const animalDatas: typesAnimals[] = data;
  return (
    <div id="animal_grid">
    {animalDatas.map((animal) => (
        <AnimalGrid key={animal.id} animalInfos={animal}/>
    ))}
    </div>
  );
}