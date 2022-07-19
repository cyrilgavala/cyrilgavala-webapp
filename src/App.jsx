import './App.css';
import About from "./about/About";
import Socials from "./socials/Socials";
import Footer from "./footer/Footer";
import Projects from "./projects/Projects";
import data from "./data.json"

export default function App() {
    return <div className="App">
        <About data={data}/>
        <Socials data={data}/>
        <Projects data={data}/>
        <Footer data={data}/>
    </div>
}
