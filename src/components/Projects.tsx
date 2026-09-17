import { projects } from '../data'

export default function Projects() {
  return (
    <section className="section section--alt" id="projects">
      <div className="container">
        <h2 className="section__title">项目</h2>
        <div className="projects__grid">
          {projects.map((p) => (
            <a className="card project" href={p.link} key={p.title}>
              <h3 className="card__title">{p.title}</h3>
              <p className="project__desc">{p.description}</p>
              <div className="skills__tags">
                {p.tech.map((t) => (
                  <span className="tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
