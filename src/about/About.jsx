export default function About(props) {

    const style = {
        "backgroundImage": "url(" + props.data.pathToProfilePicture + ")",
        "backgroundSize": "contain",
        "backgroundPosition": "center"
    }

    return <div id={"about-container"}>
        <div id={"photo-wrapper"} style={style}/>
        <div id={"bio-wrapper"}>{props.data.bio}</div>
    </div>
}