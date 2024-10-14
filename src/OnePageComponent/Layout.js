import React from 'react'
import Navbar from '../Component/Navbar'
import Footer from '../Component/Footer'
import AllRight from '../Component/AllRight'

const Layout = ({children}) => {
  return (
    <div>
      <Navbar/>
      <main>
        {children}
      </main>
      <Footer/>
      <AllRight/>
    </div>
  )
}

export default Layout;
