export default function SkillItem({name, level}) {

    return <div className="skills-item">
        <div className="skill-label">{name}</div>
        <div className="skill-progress">
            <div className="skill-value" style={{width: `${level}%`}}/>
        </div>
    </div>
}