export default function About(props) {

    return <div id={"about-container"}>
        <div id={"photo-wrapper"}/>
        <div id={"bio-wrapper"}>
            <p>{props.data.bio}</p>
        </div>
    </div>
}