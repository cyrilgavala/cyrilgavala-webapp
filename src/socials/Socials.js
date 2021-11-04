import facebookIcon from "../images/icons/fb_icon.png"
import githubIcon from "../images/icons/github_icon.png"
import linkedInIcon from "../images/icons/linkedin_icon.png"
import twitterIcon from "../images/icons/twitter_icon.png"
import SocialsItem from "./SocialsItem";

export default function Socials() {

    return <div id={"socials-container"}>
        <SocialsItem url={"https://www.facebook.com/cyrilgavala"} icon={facebookIcon}/>
        <SocialsItem url={"https://www.linkedin.com/in/cyril-gavala-15380083/"} icon={linkedInIcon}/>
        <SocialsItem url={"https://twitter.com/cypooo"} icon={twitterIcon}/>
        <SocialsItem url={"https://github.com/cyrilgavala"} icon={githubIcon}/>
    </div>
}