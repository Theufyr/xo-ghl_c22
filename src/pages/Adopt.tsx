import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import SearchBar from "../components/SearchBar"
import AnimalList from "../components/AnimalList"

export default function Adopt() {
    return (
        <main id="adopt">
            <Navbar />
            <SearchBar />
            <AnimalList />
            <Footer />
        </main>
    )
}