import './App.css'
import Hero from "./components/organism/Hero.jsx";
import Services from "./components/organism/Services.jsx";
import AboutUs from "./components/organism/AboutUs.jsx";
import Footer from "./components/organism/Footer.jsx";
import Explore from "./components/organism/Explore.jsx";
import ContactUs from "./components/organism/ContactUs.jsx";
import LocateUs from "./components/organism/LocateUs.jsx";
import Companies from "./components/organism/Companies.jsx";
import ContainersType from "./components/organism/ContainersType.jsx";

function App() {
    return (
        <>
            <Hero/>
            <Companies/>
            <AboutUs/>
            <Services/>
            <Explore/>
            <ContainersType/>
            <ContactUs/>
            <LocateUs/>
            <Footer/>
        </>
    )
}

export default App
