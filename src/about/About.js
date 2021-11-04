export default function About(props) {

    return <div id={"about-container"}>
        <div id={"photo-wrapper"}>
            <div id={"blur"}/>
            <img src={props.data.pathToProfilePicture} alt={"Profile"}/>
        </div>
        <div id={"bio-wrapper"}>
            <p>
                {props.data.bio}
            </p>
        </div>
    </div>
}