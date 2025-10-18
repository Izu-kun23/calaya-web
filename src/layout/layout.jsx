import React from 'react'
import Navbar from '../components/navigation/navbar'
import Footer from '../components/footer/Footer'
import TopArrow from '../components/arrow/toparrow'

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <TopArrow />
    </div>
  )
}

export default Layout

