import { useSearchParams } from "react-router";

export default function UseWhere() {
    const [searchParams, setSearchParams] = useSearchParams();
    const getAnimalType = (searchParams.get("animalType")) ?? "";
    const getLocalisation = (searchParams.get("localisation")) ?? "";

    let where = "";
    const paramsWhere: any[] = [];

    if (getAnimalType !== null && getAnimalType !== "") {
        if (getAnimalType !=="all") {
        where = `WHERE types.type = ?`;
        paramsWhere.push(getAnimalType);
        }
    }
    if (getLocalisation !== null && getLocalisation !== "") {
        // on met getLocalisation en minuscules sans accents
        let formatLocalisation = getLocalisation;
        formatLocalisation = formatLocalisation
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "")
            .toLowerCase();
        // on met le premier caractère en majuscule
        let localisationString = formatLocalisation;
        formatLocalisation = localisationString.charAt(0).toUpperCase() + localisationString.slice(1);

        paramsWhere.push(formatLocalisation);
        if (where == "") {
        where = `WHERE cities.city = ?`;
        } else {
        where = `WHERE types.type = ? AND cities.city = ?`;
        }
    }
    return {where: where, paramsWhere: paramsWhere};
}