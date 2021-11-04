import './App.css';
import NavBar from "./navigation/NavBar";
import About from "./about/About";
import Socials from "./socials/Socials";
import Footer from "./footer/Footer";
import Projects from "./projects/Projects";

function App() {
    return (
        <div className="App">
            <NavBar/>
            <About/>
            <Socials/>
            <Projects/>
            <Footer/>
        </div>
    );
}

export default App;
