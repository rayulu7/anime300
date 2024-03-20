import './index.css'
import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'

const Header = props => {
  const {history} = props
  const onLogOutButton = () => {
    Cookies.remove('jwt_token')
    history.replace('./login')
  }

  return (
    <nav className="nav-header">
      <div className="nav-content">
        <div className="nav-bar-mobile-logo-container">
          <img
            className="website-logo"
            src="https://i.ibb.co/xS6fmgd/Rayulu7.png"
            alt="website logo"
          />

          <button type="button" className="nav-mobile-btn">
            <img
              src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png"
              alt="nav logout"
              className="nav-bar-img"
              onClick={onLogOutButton}
            />
          </button>
        </div>

        <div className="nav-content nav-bar-large-container">
          <img
            className="website-logo"
            src="https://i.ibb.co/xS6fmgd/Rayulu7.png"
            alt="website logo"
          />

          <button
            onClick={onLogOutButton}
            type="button"
            className="logout-desktop-btn"
          >
            Logout
          </button>
        </div>
      </div>
    </nav>
  )
}
export default withRouter(Header)
