import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './layout/layout'
import HomePage from './pages/HomePage'

// Import your page components here
// import WhoAreWe from './pages/WhoAreWe'
// import WhatWeDo from './pages/WhatWeDo'
// import Products from './pages/Products'
// import Projects from './pages/Projects'
// import Contact from './pages/Contact'

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          {/* Home Page */}
          <Route path="/" element={<HomePage />} />

          {/* 404 Page */}
          <Route path="*" element={<div />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App