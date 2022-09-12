import React from 'react'
import CartButton from '../Cart/CartButton'
import {Link} from 'react-router-dom'
import {useSelector} from 'react-redux'
import '../Layout/Navbar.css'

function Navbar(props) {

  const isLoggedIn = useSelector((state)=>{
    return state.auth.Authentication
  })

  const logOutHandler=()=>{
    props.onLogout();
  }

  return (
<nav className="navbar navbar-expand-lg bg-transparent">
  <div className="container-fluid">
    <a className="navbar-brand" href="/login">FasteR_Meal</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        {isLoggedIn && <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/login">Home</Link>
        </li>}
        {!isLoggedIn &&<li className="nav-item">
          <Link className="nav-link" to="/login">Login</Link>
        </li>}
        {!isLoggedIn &&<li className="nav-item">
          <Link className="nav-link" to="/signup">Register</Link>
        </li>}
      </ul>
    </div>
  {isLoggedIn && <CartButton />}
  {isLoggedIn && <button className='logout-btn' onClick={logOutHandler}>LogOut</button>}
  </div>
</nav>
  )
}

export default Navbar
