import ProjectItem from "./ProjectItem";
import previousIcon from "../images/icons/previous_icon.png"
import nextIcon from "../images/icons/next_icon.png"
import covid19 from "../images/projects/covid-19-webapp.png"
import emailSender from "../images/projects/email-sender-webapp.png"
import workoutChallenges from "../images/projects/workout-challenges-webapp.png"
import {useState} from "react";

export default function Projects() {

    let [index, setIndex] = useState(0);

    const covid19Description = "JavaScript project containing three application. Firstly, the key application, simple web-scrap application mining data from https://korona.gov.sk and storing them into cloud MongoDB database. Next is simple node.js/express.js API for client-server communication. Lastly a simple ReactJS web application visualising web-scrapped data."
    const emailSenderDescription = "JavaScript project consisting of simple node.js/express.js API using SMTP protocol for sending emails and simple ReactJS application containing simple login (plan for the future is to integrate real Gmail login) and interface for sending a bulk emails."
    const workoutChallengesDescription = "JavaScript project having two applications. Firstly, a simple node.js/express.js API for client-server communication and ReactJS application for saving a progress of various workout challenges and visualizing it."

    const projects = [<ProjectItem name={"Covid-19"} image={covid19} description={covid19Description}/>,
        <ProjectItem name={"Bulk e-mail sender"} image={emailSender} description={emailSenderDescription}/>,
        <ProjectItem name={"Workout challenges"} image={workoutChallenges} description={workoutChallengesDescription}/>]

    const nextProject = () => {
        setIndex(++index % projects.length)
    }

    const previousProject = () => {
        setIndex((index + projects.length - 1) % 3)
    }

    return <div id={"projects-container"}>
        <h2>My projects</h2>
        <div id={"projects-slider"}>
            <div id={"previous"} onClick={previousProject}><img src={previousIcon} alt={"Previous project"}/></div>
            {projects[index]}
            <div id={"next"} onClick={nextProject}><img src={nextIcon} alt={"Next project"}/></div>
        </div>
    </div>
}