export default function ProjectItem(props) {

    return <div className={"projects-item"}>
        <div className={"projects-item-headline"}>{props.name}</div>
        <img className={"projects-item-image"} src={props.image} alt={"Project screenshot"}/>
        <div className={"projects-item-description"}>{props.description}</div>
    </div>
}