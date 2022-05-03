import {useState} from "react";

export default function ProjectItem(props) {

    const [infoVisible, setInfoVisible] = useState(false)

    const style = {
        "backgroundImage": "url(" + props.project.image + ")",
        "backgroundSize": "cover",
        "backgroundPosition": "center"
    }

    return <div className={"projects-item"} style={style}>
        <i className="fa fa-info" aria-hidden="true" title="Click here for more info" onClick={() => setInfoVisible(!infoVisible)}/>
        <div className={infoVisible ? "projects-item-info infoShow" : "projects-item-info"}>
            <div className="projects-item-headline" title="Click here to visit the application">
                <a href={props.project.url} target={"_blank"} rel="noreferrer">{props.project.name}</a>
            </div>
            <div className="projects-item-description">
                Description: {props.project.description}
            </div>
            <div className="projects-item-skills">
               Skills: {props.project.skills}
            </div>
        </div>
    </div>
}