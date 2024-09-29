import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'

const Layout = ({children}) => {
  return (
    <div>
      <Navbar/>
      <main>
        {children}
      </main>
      <Footer/>
    </div>
  )
}

export default Layout;
