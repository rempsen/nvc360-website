import { useState, useEffect } from 'react'
import { builder, BuilderComponent } from '@builder.io/react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Showcase from './components/Showcase'
import Features from './components/Features'
import Philosophy from './components/Philosophy'
import Protocol from './components/Protocol'
import Testimonials from './components/Testimonials'
import Blog from './components/Blog'
import Contact from './components/Contact'
import Footer from './components/Footer'
import CostCalculatorArticle from './components/CostCalculatorArticle'

// User's internal Builder.io Public API Key for visual editing intercept
builder.init('071c3ce42e3d468886e152588b998264')

function App() {
  const [builderContentJson, setBuilderContentJson] = useState(null)
  const isCalculatorArticle = window.location.pathname === '/field-service-wasted-hours-calculator'

  useEffect(() => {
    // If the user navigates directly to a Builder-published URL path, fetch that content
    builder.get('page', { url: window.location.pathname })
      .promise()
      .then(setBuilderContentJson)
  }, [])

  if (isCalculatorArticle) {
    return (
      <div className="relative w-full bg-moss-900 text-white selection:bg-chartreuse selection:text-black">
        <div className="noise-overlay"></div>
        <Navbar />
        <CostCalculatorArticle />
        <Footer />
      </div>
    )
  }

  // If Builder has content for this URL, render the visual drag-and-drop CMS!
  if (builderContentJson || BuilderComponent.isEditing) {
    return (
      <div className="relative w-full bg-moss-900 text-white selection:bg-chartreuse selection:text-black">
        <div className="noise-overlay"></div>
        <Navbar />
        <BuilderComponent model="page" content={builderContentJson} />
        <Footer />
      </div>
    )
  }

  // Otherwise, render our custom high-performance GSAP React build
  return (
    <div className="relative w-full bg-moss-900 text-white selection:bg-chartreuse selection:text-black">
      <div className="noise-overlay"></div>

      <Navbar />

      <main className="w-full flex-col flex select-none">
        <Hero />
        <Showcase />
        <Features />
        <Philosophy />
        <Protocol />
        <Testimonials />
        <Blog />
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
