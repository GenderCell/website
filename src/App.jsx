
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './Layout'
import { Home } from './pages/Home'
import Resources from './pages/Resources'
import ContactUs from './pages/ContactUs'


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={Layout()} >
          <Route index element={<Home/>} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/contact" element={<ContactUs />} />

          </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
