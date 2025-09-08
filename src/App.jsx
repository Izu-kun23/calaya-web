import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './layout/layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import OHS_Policy from './pages/policies/OHS_Policy'
import Quality_Policy from './pages/policies/Quality_Policy'
import Well_Services from './pages/what_we_do/Well_Services'

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

          {/* About Page */}
          <Route path="/about" element={<AboutPage />} />

          {/* Policies */}
          <Route path="/policies/ohs" element={<OHS_Policy />} />
          <Route path="/policies/quality" element={<Quality_Policy />} />

          {/* What We Do Services */}
          <Route path="/services/well-services" element={<Well_Services />} />

          {/* 404 Page */}
          <Route path="*" element={<div />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App