import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import SearchBar from "../components/SearchBar"
import AnimalList from "../components/AnimalList"
import { useSearchParams } from "react-router";

export default function Adopt() {
    const [searchParams, setSearchParams] = useSearchParams();
    const getAnimalType = searchParams.get("animalType");
    const getLocalisation = searchParams.get("localisation");
    console.log(getAnimalType, getLocalisation);
    return (
        <main id="adopt">
            <Navbar />
            <SearchBar />
            <AnimalList />
            <Footer />
        </main>
    )
}