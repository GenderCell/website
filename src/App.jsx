
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { Layout } from './Layout'
import { Home } from './pages/Home'
import Resources from './pages/Resources'


function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path="/" element={Layout()} >
          <Route index element={<Home/>} />
          <Route path="/resources" element={<Resources />} />
          </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
