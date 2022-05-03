import ProjectItem from "./ProjectItem";

export default function Projects(props) {

    const projects = props.data.projects.map(project => <ProjectItem key={project.name} project={project}/>)

    return <div id="projects-container">
        <h2>My projects</h2>
        {projects}
    </div>
}