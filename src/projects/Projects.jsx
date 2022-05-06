import {ProjectItem} from "./ProjectItem";

export default function Projects({data}) {

    const projects = data.projects.map(
        project => <ProjectItem key={project.name} image={project.image} name={project.name} url={project.url}
                                description={project.description} skills={project.skills}/>)

    return <div id="projects-container">
        <h2>My projects</h2>
        {projects}
    </div>
}