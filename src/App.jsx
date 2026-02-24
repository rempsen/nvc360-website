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

function App() {
  // We will setup global GSAP smooth scroll here later if needed

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
