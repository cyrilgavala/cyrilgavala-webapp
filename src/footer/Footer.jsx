export default function Footer(props) {

    const scrollToTop = () => {
        return window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return <div id={"footer"}>
        <i id="scroll-to-top-icon" className="fa fa-arrow-circle-up" aria-hidden="true" onClick={scrollToTop}/>
        <p>&copy; {new Date().getFullYear()} {props.data.author}</p>
    </div>
}