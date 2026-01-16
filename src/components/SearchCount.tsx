
import UseQueryCountResult from "../hooks/UseQueryCountResult";

export default function SearchCount({setAnimalType, setLocalisation}: any) {
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
            <div id="reinit" onClick={() => {setAnimalType("all"); setLocalisation("")}} >Réinitialiser les filtres</div>
        </div>
    )
}