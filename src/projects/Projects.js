import ProjectItem from "./ProjectItem";
import {useState} from "react";

export default function Projects(props) {

    const [index, setIndex] = useState(0);
    const projects = props.data.projects.map(project => {
        return <ProjectItem name={project.name} url={project.url} image={project.image} description={project.description}/>
    })

    const nextProject = () => {
        setIndex((index + 1) % projects.length)
    }

    const previousProject = () => {
        setIndex((index + projects.length - 1) % 3)
    }

    return <div id={"projects-container"}>
        <h2>My projects</h2>
        <div id={"projects-slider"}>
            <div id={"previous"} onClick={previousProject}><img src={"../images/icons/previous_icon.png"} alt={"Previous project"}/></div>
            {projects[index]}
            <div id={"next"} onClick={nextProject}><img src={"../images/icons/next_icon.png"} alt={"Next project"}/>
            </div>
        </div>
    </div>
}