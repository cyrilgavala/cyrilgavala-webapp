import SocialsItem from "./SocialsItem";

export default function Socials({data}) {

    const items = data.socials.map(item => <SocialsItem key={item.icon.substring(3)} url={item.url} icon={item.icon}/>)

    return <div id="socials-container">
        {items}
    </div>
}