import type { typesAnimalInfos } from "../interface/Props";

export default function AnimalCard({ animalInfos }: typesAnimalInfos) {
  return (
    <article key={animalInfos.id} className="animal_card">
      <div>
        <div
          className="animal_img"
          style={{
            backgroundImage: `url(./src/assets/img/${animalInfos.image_url})`,
          }}
        ></div>
        <div>
          <p>{animalInfos.type}</p>
          <p className="animal_name">{animalInfos.animal_name}</p>
          <p>
            {animalInfos.age} ans • {animalInfos.breed}
          </p>
          <p>{animalInfos.city}</p>
        </div>
        <p>{animalInfos.description}</p>
      </div>
      <button
        onClick={() => {
          alert(` ${animalInfos.animal_name}: ${animalInfos.type}`);
        }}
        className="button1"
      >
        Rencontrer
      </button>
    </article>
  );
}
