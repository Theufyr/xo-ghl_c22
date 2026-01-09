import Title from "../components/Title"
import Navbar from "../components/Navbar"
import HowTo from "../components/HowTo"
import Footer from "../components/Footer"
import Animals from "../components/Animals"
import Options from "../components/Options"

export default function Home() {
    return(
        <>
            <Navbar/>
            <Title/>
            <Animals/>
            <HowTo/>
            <Options/>
            <Footer/>
            

        </>
    )
}