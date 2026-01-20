
import UseQueryCountResult from "../hooks/UseQueryCountResult";
import { useNavigate } from "react-router";

export default function SearchCount({setAnimalType, setLocalisation}: any) {
    // réinitialisation des filtres
    let navigate = useNavigate();
    function reinitSearchParams() {
        setAnimalType("all");
        setLocalisation("");
        navigate("/jadopte")
    }
    // récupération du nombre de résultats
    const queryCount = UseQueryCountResult();
    if (queryCount.isLoading) return <p>Chargement...</p>;
    if (queryCount.error) return <p>Erreur : {queryCount.error.message}</p>;
    const countNb = queryCount.data[0].count;
    let countDisplay = "";
    
    if (countNb == 0) {
        countDisplay = "Aucun résultat";
        } else {
        countDisplay = (countNb == 1) ? countNb + " animal trouvé" : countNb + " animaux trouvés";
    }

    return (
        <div id="search_result">
            <div>{countDisplay}</div>
            <div id="reinit" onClick={() => {reinitSearchParams()}} >Réinitialiser les filtres</div>
        </div>
    )
}