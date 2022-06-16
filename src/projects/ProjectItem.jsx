import {useState} from "react";

export const ProjectItem = ({image, name, url, description, skills}) => {

    const [infoVisible, setInfoVisible] = useState(false)

    const style = {
        "backgroundImage": "url(" + image + ")",
        "backgroundSize": "cover",
        "backgroundPosition": "center"
    }

    return <div className={"projects-item"} style={style}>
        <i className="fa fa-info" aria-hidden="true" title="Hover here for more info" onClick={() => setInfoVisible(!infoVisible)}/>
        <div className={infoVisible ? "projects-item-info infoShow" : "projects-item-info"}>
            <div className="projects-item-headline" title="Click here to visit the application">
                <a href={url} target={"_blank"} rel="noreferrer">{name}</a>
            </div>
            <div className="projects-item-description">
                Description: {description}
            </div>
            <div className="projects-item-skills">
               Skills: {skills}
            </div>
        </div>
    </div>
}