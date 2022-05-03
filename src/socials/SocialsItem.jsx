export default function SocialsItem(props) {
    return <i className={"socials-item " + props.icon} aria-hidden="true" title={props.url}
              onClick={() => window.open(props.url, "_blank")}/>
}