export default function Footer({data}) {

    const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

    return <div id={"footer"}>
        <i id="scroll-to-top-icon" className="fa fa-arrow-circle-up" aria-hidden="true" title="Scroll to top" onClick={scrollToTop}/>
        <p>&copy; {new Date().getFullYear()} {data.author}</p>
    </div>
}