import AnimalGrid from "./AnimalGrid"
export default function Animals() {
return(
    <section id="animals">
        <h2>nos animaux à adopter</h2>
        <p>Découvrez en images tous nos animaux qui attendent une famille aimante. Chaque photo raconte une histoire et un espoir.</p>
        <AnimalGrid />
        <button>Voir tous les animaux</button>
    </section>
)
}