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
            <div className="projects-item-link">
                <b>Link:</b> <a href={url} target={"_blank"} rel="noreferrer" title="Click here to visit the application">{url}</a>
            </div>
            <div className="projects-item-description">
                <b>Description:</b> {description}
            </div>
            <div className="projects-item-skills">
                <b>Skills:</b> {skills}
            </div>
        </div>
    </div>
}