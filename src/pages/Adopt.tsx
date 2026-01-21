import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import SearchBar from "../components/SearchBar"
import AnimalList from "../components/AnimalList"
import Paging from "../components/Paging"

export default function Adopt() {
    return (
        <main id="adopt">
            <Navbar />
            <SearchBar />
            <AnimalList />
            <Paging />
            <Footer />
        </main>
    )
}