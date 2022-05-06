export default function About({data}) {

    const style = {
        "backgroundImage": "url(" + data.pathToProfilePicture + ")",
        "backgroundSize": "contain",
        "backgroundPosition": "center"
    }

    return <div id={"about-container"}>
        <div id={"photo-wrapper"} style={style}/>
        <div id={"bio-wrapper"}>{data.bio}</div>
    </div>
}