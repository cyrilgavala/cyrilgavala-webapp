export default function SocialsItem(props) {

    return <div className={"socials-item"}>
        <a href={props.url} target={"_blank"} rel="noopener noreferrer">
            <img className={"socials-item-icon"} src={props.icon} alt={props.url}/>
        </a>
    </div>
}