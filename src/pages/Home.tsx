import Hero from "../components/Hero"
import Navbar from "../components/Navbar"
import HowTo from "../components/HowTo"
import Footer from "../components/Footer"
import Animals from "../components/Animals"
import Options from "../components/Options"

export default function Home() {
    return(
        <>
            <Navbar/>
            <Hero />
            <Animals/>
            <HowTo/>
            <Options/>
            <Footer/>
        </>
    )
}