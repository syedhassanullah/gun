import React from 'react'
import { useNavigate } from 'react-router-dom'
import './NotFoud.css'




const NotFound = () => {

  const Navigate = useNavigate();

  const Nav = () =>{
    Navigate('/')
  }

  return (
    <>
        <div className='notfound'>
        <h1>Oops!</h1>
        <div className='not'>
          <h2>404</h2>
          <p>Page Not Found</p>
        </div>
        <button onClick={Nav}>GO TO HomePage</button>
        </div> 
    </>
  )
}

export default NotFound
