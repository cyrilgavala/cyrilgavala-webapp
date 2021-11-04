import image from "../images/me.jpg"

export default function About() {

    return <div id={"about-container"}>
        <div id={"photo-wrapper"}>
            <div id={"blur"}/>
            <img src={image} alt={"Profile"}/>
        </div>
        <div id={"bio-wrapper"}>
            <p>
                I‘m positively thinking Java developer who has advanced skills in developing web applications
                and REST services using Spring, SpringBoot, Hibernate and relation database. Also interested
                in other frameworks and programming languages like Python, React.js, Node.js, Express.js and MongoDB.
                I'm adaptable and resourceful. My advantage is mathematical education, which helps me to learn things
                more quickly. Next I'm creative and reliable with attention to the details. I'm an Apple fan and
                musician.
            </p>
        </div>
    </div>
}