import React from 'react'
import { Link } from 'react-router-dom'

function SignIn() {
  return (
    <div className="auth-container">
      <div className="auth-box">
        <h2>Sign In</h2>
        <form>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
          <button type="submit">Sign In</button>
        </form>
        <p>
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </p>
      </div>
    </div>
  )
}

export default SignIn