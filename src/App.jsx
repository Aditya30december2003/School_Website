import { useState } from 'react'
import './App.css'
import {Routes , Route } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Navbar from './components/Navbar'
import Academics from './Pages/Academics'
import Students from './Pages/Students'
import Footer from './components/Footer'
import Admission from './Pages/Admission'
import Faculty from './Pages/Faculty'
import Gallery from './Pages/Gallery'
import Contact from './Pages/Contact'
import { GalleryProvider } from './context/ContextGallery'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <GalleryProvider>
    <Navbar />
    <Routes>
    <Route path='/School_Website/' element={<Home />}/>
    <Route path='/School_Website/about' element={<About />}/>
    <Route path='/School_Website/academics' element={<Academics />}/>
    <Route path='/School_Website/faculty' element={<Faculty />}/>
    <Route path='/School_Website/students' element={<Students />}/>
    <Route path='/School_Website/gallery' element={<Gallery/>} />
    <Route path='/School_Website/contact' element={<Contact/>} />
    <Route path='/School_Website/admission' element={<Admission />}/>
    </Routes>
    </GalleryProvider>
    <div className='mt-[5rem]'><Footer /></div>
    </>
  )
}

export default App
