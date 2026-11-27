import { skillGroups, levelLabels } from '../data/skills'
import './Skills.css'

const allSkills = skillGroups.flatMap((group) =>
  group.skills.map((skill) => ({ ...skill, chip: group.chip || group.tone }))
)

function getLabel(skill) {
  return skill.label || levelLabels[skill.level]
}

function Skills() {
  return (
    <>
      <section className="page-banner">
        <div className="page-banner-inner">
          <h1>Skills</h1>
          <p>
            Everything I bring to a project, with a level shown for each skill.
            Levels run from Basic to Expert.
          </p>
        </div>
      </section>

      <div className="skills-body">
        <section>
          <h2>All skills</h2>
          <ul className="chip-list">
            {allSkills.map((skill) => (
              <li key={skill.name} className={`chip chip-${skill.chip}`}>
                {skill.name}
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2>Skill levels</h2>
          <div className="panel-grid">
            {skillGroups.map((group) => (
              <div key={group.id} className={`panel panel-${group.tone}`}>
                <h3>{group.title}</h3>
                {group.skills.map((skill) => (
                  <div key={skill.name} className="skill-row">
                    <span>{skill.name}</span>
                    <div
                      className="track"
                      role="img"
                      aria-label={`${skill.name}: ${getLabel(skill)}, ${skill.level} of 5`}
                    >
                      <div
                        className="fill"
                        style={{ width: `${(skill.level / 5) * 100}%` }}
                      ></div>
                    </div>
                    <span className="level">{getLabel(skill)}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  )
}

export default Skills