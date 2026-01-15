import UseQueryAnimalCard from "../hooks/UseQueryAnimalCard";
import AnimalCard from "./AnimalCard";
import type {
  typesAnimals,
  typesParamsAnimalType,
  typesParamsLocalisation,

} from "../interface/Props";
import { useSearchParams} from "react-router-dom";

export default function AnimalList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const getAnimalType: typesParamsAnimalType = searchParams.get("animalType");
  const getLocalisation: typesParamsLocalisation =
    searchParams.get("localisation");

  const { data, isLoading, error } = UseQueryAnimalCard(
    getAnimalType,
    getLocalisation
  );

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
