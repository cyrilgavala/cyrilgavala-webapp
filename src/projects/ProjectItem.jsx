export const ProjectItem = ({image, name, url, description, skills}) => {

    const style = {
        "backgroundImage": "url(" + image + ")",
        "backgroundSize": "cover",
        "backgroundPosition": "center"
    }

    return <div className={"projects-item"} style={style}>
        <i className="fa fa-info" aria-hidden="true" title="Hover here for more info"/>
        <div className="projects-item-info">
            <div className="projects-item-headline">
                {name}
            </div>
            <div className="projects-item-description">
                <p>Description:</p> {description}
            </div>
            <div className="projects-item-skills">
                <p>Skills:</p> {skills}
            </div>
            <div className="projects-item-link">
                <a href={url} target={"_blank"} rel="noreferrer" title="Click here to visit the application">Try it out</a>
            </div>
        </div>
    </div>
}