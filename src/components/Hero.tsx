import { profile } from '../data'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <p className="hero__eyebrow">你好，我是</p>
        <h1 className="hero__title">
          一名<span className="hero__accent">前端工程师</span>
        </h1>
        <p className="hero__role">{profile.role}</p>
        <p className="hero__tagline">{profile.tagline}</p>
        <div className="hero__actions">
          <a href="#projects" className="btn btn--primary">
            查看项目
          </a>
          <a href="#contact" className="btn btn--ghost">
            联系我
          </a>
        </div>
      </div>
    </section>
  )
}
