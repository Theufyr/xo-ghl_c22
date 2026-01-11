import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Search from "../components/Search"
import AnimalsList from "../components/AnimalsList"

export default function Adopt() {
    return(
        <>
            <Navbar/>
            <Search/>
            <AnimalsList/>
            <Footer/>
        </>
    )
}