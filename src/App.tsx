import { useState, useEffect } from 'react';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import { Layout as AppLayout } from './AppLayout.tsx';
import { Home } from './pages/Home.tsx';
import Resources from './pages/Resources.tsx';
import About from './pages/About.tsx';
import Loader from './components/Loader.tsx';
import Support from './pages/Support.tsx';
import EventsPage from './pages/Events.tsx';
import SurveysResult from './pages/SurveysResult.tsx';
import ICC from './pages/ICC.tsx';
import Blogs from './pages/Blogs.tsx';
import BlogPost from './pages/BlogPost.tsx';
import Competitions from './pages/Competitions.tsx';

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
          <Route path='/surveys' element={<SurveysResult />} />
          <Route path='/competitions' element={<Competitions />} />
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
