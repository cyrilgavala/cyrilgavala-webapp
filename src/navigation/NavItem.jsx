export default function NavItem(props) {

    const scrollToElement = (selector) => {
        return document.querySelector('#' + selector).scrollIntoView({
            behavior: 'smooth'
        });
    }

    return <div className={"nav-item"} onClick={() => scrollToElement(props.selector)}>
        {props.label}
    </div>
}