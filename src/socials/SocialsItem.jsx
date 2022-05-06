export default function SocialsItem({icon, url}) {
    return<a href={url} target="_blank" rel="noopener noreferrer">
        <i className={"socials-item " + icon} aria-hidden="true" title={url}/>
    </a>
}