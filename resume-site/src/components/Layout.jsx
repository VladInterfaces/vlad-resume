import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'

function Layout() {
  return (
    <>
      <a className="skip-link" href="#main">Skip to main content</a>
      <Navbar />
      <main id="main">
        <Outlet />
      </main>
    </>
  )
}

export default Layout