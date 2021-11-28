export default function ProjectItem(props) {

    return <div className={"projects-item"} style={{"background-image": "url(" + props.image + ")", "background-size": "cover", "background-position": "center"}}>
        <div className={"projects-item-description"}>{props.description}</div>
        {/*<img className={"projects-item-image"} src={props.image} alt={"Project screenshot"}/>*/}
        <div className={"projects-item-headline"}><a href={props.url} target={"_blank"}
                                                     rel={"noopener noreferrer"}>{props.name}</a></div>
    </div>
}