export default function NavItem({label, selector}) {

    const scrollToElement = selector => document.querySelector('#' + selector).scrollIntoView({behavior: 'smooth'})

    return <div className={"nav-item"} onClick={() => scrollToElement(selector)}>
        {label}
    </div>
}