import SkillItem from "./SkillItem";

export default function Skills({data}) {
    const items = data.skills.map(item => <SkillItem key={item.name} name={item.name} level={item.level}/>)

    return <div id="skills-container">
        <h2>My skills</h2>
        {items}
    </div>
}