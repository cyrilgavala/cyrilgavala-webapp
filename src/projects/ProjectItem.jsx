export default function ProjectItem(props) {

    const style = {
        "backgroundImage": "url(" + props.image + ")",
        "backgroundSize": "cover",
        "backgroundPosition": "center"
    }

    return <div className={"projects-item"} style={style}>
        <div className={"projects-item-description"}>{props.description}</div>
        <div className={"projects-item-headline"}>
            <a href={props.url} target={"_blank"} rel={"noopener noreferrer"}>{props.name}</a>
        </div>
    </div>
}