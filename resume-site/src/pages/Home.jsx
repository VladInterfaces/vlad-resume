import { Link } from 'react-router-dom'
import './Home.css'

const highlights = [
  {
    title: 'Jira',
    text: 'Experience using Jira for project management and issue tracking.',
    tone: 'orange',
  },
  {
    title: 'Requirements gathering',
    text: 'Turning stakeholder needs into clear, testable requirements.',
    tone: 'blue',
  },
  {
    title: 'UAT',
    text: 'Aligning business and technical teams through user acceptance testing.',
    tone: 'orange',
  },
]

function Home() {
  return (
    <>
      <section className="hero">
        <span className="hero-dot hero-dot-orange" aria-hidden="true"></span>
        <span className="hero-dot hero-dot-blue" aria-hidden="true"></span>
        <div className="hero-inner">
          <div>
            <p className="eyebrow">Business Systems Analyst &middot; Chicago, IL</p>
            <h1>
              Hi, I’m <span>Vlad.</span>
            </h1>
            <div className="hero-bar" aria-hidden="true"></div>
            <p className="hero-bio">
              I turn messy business needs into clear requirements and systems
              people actually want to use. I have 6+ years of experience, with a
              background in consulting at Accenture and Mathematica Policy
              Research and a focus on agile delivery, stakeholder alignment, and
              user acceptance testing.
            </p>
            <div className="hero-actions">
              <Link to="/resume" className="btn btn-primary">View resume</Link>
              <Link to="/contact" className="btn btn-outline">Contact me</Link>
            </div>
          </div>
          <div className="photo-wrap">
            <div className="photo-offset" aria-hidden="true"></div>
            <img
              className="photo"
              src="/profile.jpg"
              alt="AI generated portrait of Vladimir Gomez smiling at the camera while on a boat"
            />
          </div>
        </div>
      </section>

      <section className="highlights" aria-label="Highlights">
        {highlights.map((item) => (
          <div key={item.title} className={`card card-${item.tone}`}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      <section className="cta-section">
        <div className="cta-band">
          <div>
            <h2>Want the full list of what I do?</h2>
            <p>See every skill with a level for each.</p>
          </div>
          <Link to="/skills" className="btn btn-primary">Explore my skills</Link>
        </div>
      </section>
    </>
  )
}

export default Home