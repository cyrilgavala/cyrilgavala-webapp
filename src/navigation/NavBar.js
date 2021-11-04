import NavItem from "./NavItem";

export default function NavBar() {
    return <div id={"navbar"}>
        <NavItem label={"About"} selector={"about-container"}/>
        <NavItem label={"Socials"} selector={"socials-container"}/>
        <NavItem label={"Projects"} selector={"projects-container"}/>
    </div>
}