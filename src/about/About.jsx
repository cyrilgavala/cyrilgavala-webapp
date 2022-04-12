export default function About(props) {

    return <div id={"about-container"}>
        <div id={"photo-wrapper"}/>
        <div id={"bio-wrapper"}>{props.data.bio}</div>
    </div>
}