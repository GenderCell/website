import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { Layout } from './Layout';
import { Home } from './pages/Home';
import Resources from './pages/Resources';
import About from './pages/About';
import Loader from './components/Loader';
import Support from './pages/Support';
import EventsPage from './pages/events';
import GridLayout from './pages/Surveysresult';
// import SurveyResults from './components';
// import ContactUs from './pages/ContactUs'

const App = () => {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const handleLoading = () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 500); // Simulate a delay for loading
    };

    handleLoading();
  }, [location]);

  return (
    <>
      {loading && <Loader />}
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />

          <Route path='/support' element={<Support/>} />
          <Route path='/events' element={<EventsPage/>}/>
           {/* <Route path="/contact" element={<ContactUs />} /> */}
           <Route path='/survey' element={<GridLayout />}/>
         </Route>
      </Routes>
    </>
  );
}

const AppWrapper = () => (
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default AppWrapper;
