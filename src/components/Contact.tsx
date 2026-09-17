import { profile } from '../data'

export default function Contact() {
  return (
    <section className="section" id="contact">
      <div className="container contact">
        <h2 className="section__title">联系我</h2>
        <p className="contact__intro">
          期待与团队一起，用扎实的工程能力打磨出好用、可靠的产品。
        </p>
        <a href={`mailto:${profile.email}`} className="btn btn--primary">
          {profile.email}
        </a>
        <p className="contact__location">📍 {profile.location}</p>
      </div>
    </section>
  )
}
