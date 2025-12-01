import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Layout as AppLayout } from './AppLayout';
import { Home } from './pages/Home';
import Resources from './pages/Resources';
import About from './pages/About';
import Loader from './components/Loader';
import Support from './pages/Support.tsx';
import EventsPage from './pages/Events';
import SurveysResult from './pages/SurveysResult';
import ICC from './pages/ICC';
import Blogs from './pages/Blogs';
import BlogPost from './pages/BlogPost';

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
        <Route path="/" element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/resources" element={<Resources />} />
          <Route path='/support' element={<Support />} />
          <Route path='/events' element={<EventsPage />} />
          <Route path='/blogs' element={<Blogs />} />
          <Route path='/blogs/:id' element={<BlogPost />} />
          {/* <Route path="/contact" element={<ContactUs />} /> */}
          <Route path='/survey' element={<SurveysResult />} />
          <Route path='/icc' element={<ICC />} />
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
