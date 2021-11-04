import scrollToTopIcon from "../images/icons/scroll_to_top_icon.png"

export default function Footer() {

    const scrollToTop = () => {
        return window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return <div id={"footer"}>
        <img id={"scroll-to-top-icon"} src={scrollToTopIcon} alt={"Scroll to top"} onClick={scrollToTop}/>
        &nbsp; &copy; {new Date().getFullYear()} Cyril Gavala
    </div>
}