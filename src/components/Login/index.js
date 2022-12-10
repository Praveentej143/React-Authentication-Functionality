// Write your JS code here
import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const Login = props => {
  const token = Cookies.get('jwt_token')

  const onSuccess = jwtToken => {
    const {history} = props
    Cookies.set('jwt_token', jwtToken, {expires: 30})
    history.replace('/')
  }

  const onSubmitForm = async () => {
    const userDetails = {username: 'rahul', password: 'rahul@2021'}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()
    if (response.ok === true) {
      onSuccess(data.jwt_token)
    }
  }
  if (token !== undefined) {
    return <Redirect to="/" />
  }

  return (
    <>
      <div className="login-container">
        <h1>Please Login</h1>
        <button type="submit" className="login-btn" onClick={onSubmitForm}>
          Login with Sample Creds
        </button>
      </div>
    </>
  )
}

export default Login
