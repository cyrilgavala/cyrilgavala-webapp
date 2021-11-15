export default function ProjectItem(props) {

    return <div className={"projects-item"}>
            <img className={"projects-item-image"} src={props.image} alt={"Project screenshot"}/>
            <div className={"projects-item-headline"}><a href={props.url} target={"_blank"} rel={"noopener noreferrer"}>{props.name}</a></div>
            <div className={"projects-item-description"}>{props.description}</div>
    </div>
}