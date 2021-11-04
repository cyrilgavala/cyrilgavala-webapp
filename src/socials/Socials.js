import SocialsItem from "./SocialsItem";

export default function Socials(props) {

    const items = props.data.socials.map(item => {
        return <SocialsItem url={item.url} icon={item.icon}/>
    })

    return <div id={"socials-container"}>
        {items}
    </div>
}