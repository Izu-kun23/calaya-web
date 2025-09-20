import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './layout/layout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import Contact_Us from './pages/contact/Contact_Us'
import OHS_Policy from './pages/policies/OHS_Policy'
import Quality_Policy from './pages/policies/Quality_Policy'
import Well_Services from './pages/what_we_do/Well_Services'
import Corrosion_Management from './pages/what_we_do/Corrosion_Management'
import Pipeline_Construction from './pages/what_we_do/Pipeline_Construction'
import Technical_Manpower_Support from './pages/what_we_do/Technical_Manpower_Support'
import Facilities_Management from './pages/what_we_do/Facilities_Management'
import Procurement_Services from './pages/what_we_do/Procurement_Services'
import Civil_Engineering from './pages/what_we_do/Civil_Engineering'
import Product_Partners from './pages/partners/Product_Partners'
import RS_Clare from './pages/partners/RS_Clare'
import Precise_Tool from './pages/partners/Precise_Tool'
import DHVI from './pages/partners/DHVI'
import IP_Pipeline from './pages/partners/IP_Pipeline'
import Lex_Technology from './pages/partners/Lex_Technology'
import TCK_W from './pages/partners/TCK_W'
import TwelveS from './pages/partners/12S'
import RemediAde from './pages/partners/RemediAde'
import Certifications from './pages/Certifications'

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

          {/* Contact Page */}
          <Route path="/contact" element={<Contact_Us />} />

          {/* Policies */}
          <Route path="/policies/ohs" element={<OHS_Policy />} />
          <Route path="/policies/quality" element={<Quality_Policy />} />

          {/* What We Do Services */}
          <Route path="/services/well-services" element={<Well_Services />} />
          <Route path="/services/corrosion-management" element={<Corrosion_Management />} />
          <Route path="/services/pipeline-construction" element={<Pipeline_Construction />} />
          <Route path="/services/technical-manpower" element={<Technical_Manpower_Support />} />
          <Route path="/services/facilities-management" element={<Facilities_Management />} />
          <Route path="/services/procurement" element={<Procurement_Services />} />
          <Route path="/services/civil-engineering" element={<Civil_Engineering />} />
          <Route path="/products" element={<Product_Partners />} />
          <Route path="/partners/rs-clare" element={<RS_Clare />} />
          <Route path="/partners/precise-tool" element={<Precise_Tool />} />
          <Route path="/partners/dhvi" element={<DHVI />} />
          <Route path="/partners/ip-pipeline" element={<IP_Pipeline />} />
          <Route path="/partners/lex-technology" element={<Lex_Technology />} />
          <Route path="/partners/tck-w" element={<TCK_W />} />
          <Route path="/partners/12s" element={<TwelveS />} />
          <Route path="/partners/remediade" element={<RemediAde />} />
          <Route path="/certifications" element={<Certifications />} />

          {/* 404 Page */}
          <Route path="*" element={<div />} />
        </Routes>
      </Layout>
    </Router>
  )
}

export default App