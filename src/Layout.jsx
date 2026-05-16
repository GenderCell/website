import { Outlet } from 'react-router-dom';
import Navbar from './components/Navbar/navbar';
import { Footer } from './components/Footer/Footer';
import { Link } from 'react-router-dom';
import { FaPhone } from 'react-icons/fa';
import Notification from './components/Notification/Notification';

export const Layout = () => {
  return (
    <>
      <div className=' border-slate-600 '>
        <div className=' w-full top-0 z-50 '>
          <Navbar />
          <Notification />
        </div>
        {/* Body */}
        <div className='w-full max-w-screen-2xl mx-auto'>
          <Outlet />
          {/* <Product_Details/> */}
        </div>

        {/* Body end */}
        <div>
          <Footer />
        </div>
        <Link to="/about#student-nominees" className="floating-contact" title="Contact Student Nominees">
          <FaPhone />
        </Link>
      </div>
    </>
  )
}