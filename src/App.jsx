import './App.css'
import Hero from "./components/organism/Hero.jsx";
import NavBar from "./components/organism/NavBar.jsx";
import Services from "./components/organism/Services.jsx";
import AboutUs from "./components/organism/AboutUs.jsx";
import Footer from "./components/organism/Footer.jsx";
import Explore from "./components/organism/Explore.jsx";
import ContactUs from "./components/organism/ContactUs.jsx";
import LocateUs from "./components/organism/LocateUs.jsx";
import Companies from "./components/organism/Companies.jsx";

function App() {
    return (
        <>
            {/*<NavBar/>*/}
            <Hero/>
            <Companies/>
            <AboutUs/>
            <Services/>
            <Explore/>
            <ContactUs/>
            <LocateUs/>
            <Footer/>
        </>
    )
}

export default App
