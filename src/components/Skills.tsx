import { skills } from '../data'

export default function Skills() {
  return (
    <section className="section" id="skills">
      <div className="container">
        <h2 className="section__title">技能栈</h2>
        <div className="skills__grid">
          {skills.map((group) => (
            <div className="card" key={group.category}>
              <h3 className="card__title">{group.category}</h3>
              <div className="skills__tags">
                {group.items.map((item) => (
                  <span className="tag" key={item}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
