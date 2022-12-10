// Write your JS code here
import {Component} from 'react'
import './index.css'
import Header from '../Header'
import LogoutButton from '../LogoutButton'

class Home extends Component {
  render() {
    return (
      <>
        <Header />
        <div className="home-container">
          <h1>Home Route</h1>
        </div>
        <LogoutButton />
      </>
    )
  }
}

export default Home
