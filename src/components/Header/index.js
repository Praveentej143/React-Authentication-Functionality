// Write your JS code here
import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <>
    <div className="header-container">
      <ul className="nav-links-container">
        <Link to="/">
          <li className="nav-link">Home</li>
        </Link>
        <Link to="/about">
          <li className="nav-link">About</li>
        </Link>
      </ul>
    </div>
  </>
)

export default Header
