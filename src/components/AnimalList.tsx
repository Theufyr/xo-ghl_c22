import UseQueryAnimalCard from "../hooks/UseQueryAnimalCard";
import AnimalCard from "./AnimalCard";
import type { typesAnimals } from '../interface/Props';

export default function AnimalList() {

  const { data, isLoading, error } = UseQueryAnimalCard();

  if (isLoading) return <p>Chargement...</p>;
  if (error) return <p>Erreur : {error.message}</p>;

  const animalDatas: typesAnimals[] = data;
  return (
    <div id="animal_card">
      {animalDatas.map((animal) => (
        <AnimalCard key={animal.id} animalInfos={animal} />
      ))}
    </div>
  );
}
