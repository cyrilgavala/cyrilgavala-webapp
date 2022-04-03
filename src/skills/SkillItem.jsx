export default function SkillItem(props) {

    return <div className={"skills-item"}>
        <label className={"skill-label"}>{props.name}</label>
        <div className={"skill-progress"}>
            <div className={"skill-value"} style={{width: `${props.level}%`}}/>
        </div>
    </div>
}