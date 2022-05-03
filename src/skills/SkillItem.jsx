export default function SkillItem(props) {

    return <div className="skills-item">
        <div className="skill-label">{props.name}</div>
        <div className="skill-progress">
            <div className="skill-value" style={{width: `${props.level}%`}}/>
        </div>
    </div>
}