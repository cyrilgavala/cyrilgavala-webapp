export default function Footer(props) {

    const scrollToTop = () => {
        return window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return <div id={"footer"}>
        <img id={"scroll-to-top-icon"} src={"../images/icons/scroll_to_top_icon.png"} alt={"Scroll to top"} onClick={scrollToTop}/>
        &nbsp; &copy; {new Date().getFullYear()} {props.data.author}
    </div>
}