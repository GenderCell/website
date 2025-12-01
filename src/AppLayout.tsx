import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';
import LinksSection from './components/Sections/LinksSection';

export const Layout = () => {
  const location = useLocation();
  // Show LinksSection on all pages except individual blog posts
  const showLinksSection = !location.pathname.startsWith('/blogs/');

  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-base-content">
      <div className="sticky top-0 z-50 w-full">
        <Navbar />
      </div>
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      {showLinksSection && <LinksSection />}
      <Footer />
    </div>
  )
}