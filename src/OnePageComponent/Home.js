import React from 'react'
import Hero from '../Component/Hero'
import About from '../Component/About'
import Layout from './Layout'
import Maps from '../Component/Maps'
import Product from '../Component/Product'
import Gallery from '../Component/Gallery'
import Service from '../Component/Service'

const Home = () => {
  return (
    <div >
      <Layout>
      <Hero/>
      <Product/>
      <About/>
      <Gallery/>
      <Service/>
      <Maps/>
      </Layout>
    </div>
  )
}

export default Home
