import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { Footer } from './components/Footer/Footer';

export const Layout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-base-100 text-base-content">
      <div className="sticky top-0 z-50 w-full">
        <Navbar />
      </div>
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}