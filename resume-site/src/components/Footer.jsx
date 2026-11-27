import './Footer.css'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <span>© {new Date().getFullYear()} Vladimir Gomez</span>
        <span className="footer-links">
          <a href="mailto:vladimir.gomez.f@gmail.com">vladimir.gomez.f@gmail.com</a>
          <a href="https://www.linkedin.com/in/vgomezf">LinkedIn</a>
          <a href="https://github.com/VladInterfaces">GitHub</a>
        </span>
      </div>
    </footer>
  )
}

export default Footer