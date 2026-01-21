import AnimalGridList from "./AnimalGridList";
import { useNavigate } from "react-router";

export default function Animals() {
    let navigate = useNavigate();

    return(
        <section id="animals">
            <h2>nos animaux à adopter</h2>
            <p>Découvrez en images tous nos animaux qui attendent une famille aimante. Chaque photo raconte une histoire et un espoir.</p>
            <AnimalGridList />
            <button className="button1" onClick={() => {
                    navigate("/jadopte"),
                    window.scrollTo({top: 0, left: 0, behavior: "smooth"})
                }}>Voir tous les animaux</button>
        </section>
    )
}