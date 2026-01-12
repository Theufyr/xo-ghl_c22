import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import SearchBar from "../components/SearchBar"
import AnimalCard from "../components/AnimalCard"

export default function Adopt() {
    return (
        <main id="adopt">
            <Navbar />
            <SearchBar />
            <AnimalCard />
            <Footer />
        </main>
    )
}