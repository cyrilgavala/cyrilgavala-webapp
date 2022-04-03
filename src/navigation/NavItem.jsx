export default function NavItem(props) {

    function scrollToElement(selector) {
        return document.querySelector('#' + selector).scrollIntoView({
            behavior: 'smooth'
        });
    }

    return <div className={"nav-item"} onClick={() => scrollToElement(props.selector)}>
        {props.label}
    </div>
}