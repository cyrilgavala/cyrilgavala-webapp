import ProjectItem from "./ProjectItem";

export default function Projects(props) {

    const projects = props.data.projects.map(project => {
        return <ProjectItem name={project.name} url={project.url} image={project.image} description={project.description}/>
    })

    return <div id={"projects-container"}>
        <h2>My projects</h2>
        <div id={"projects-slider"}>
            {projects}
        </div>
    </div>
}