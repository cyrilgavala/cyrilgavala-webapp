import './App.css';
import NavBar from "./navigation/NavBar";
import About from "./about/About";
import Socials from "./socials/Socials";
import Footer from "./footer/Footer";
import Projects from "./projects/Projects";

function App() {
    const data = require("./data.json")
    return (
        <div className="App">
            <NavBar/>
            <About data={data}/>
            <Socials data={data}/>
            <Projects data={data}/>
            <Footer data={data}/>
        </div>
    );
}

export default App;
