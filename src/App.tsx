import { Navbar } from './components/Navbar'
import { About } from './components/About'
import { Experience } from './components/Experience'
import { Skills } from './components/Skills'
import { Training } from './components/Training'
import { Services } from './components/Services'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { LanguageProvider } from './i18n/LanguageContext'
function App() {

  return (
    <LanguageProvider>
      <>
        <Navbar />
        <main className='main-container'>
          <Hero />
          <Experience />
          <Skills />
          <About />
          <Training />
          <Services />
          <Contact />
        </main>
        <Footer />
      </>
    </LanguageProvider>

  )
}

export default App
