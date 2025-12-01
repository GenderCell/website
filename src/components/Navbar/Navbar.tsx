import React, { useState } from "react";
import logo from "../../assets/images/logo_gc_new.png";
import logo_iitk from "../../assets/images/logo-iitk.png";
import { useLocation, Link } from "react-router-dom";

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const navLinks = [
        { path: "/", label: "Home" },
        { path: "/about", label: "About" },
        { path: "/events", label: "Events" },
        { path: "/resources", label: "Resources" },
        { path: "/blogs", label: "Blogs" },
        { path: "/support", label: "Support" },
        { path: "/surveys", label: "Surveys" },
        { path: "/competitions", label: "Competitions" },
        { path: "/icc", label: "ICC" },
    ];

    return (
        <div className="navbar bg-base-100 shadow-md sticky top-0 z-50 px-4 sm:px-10">
            <div className="navbar-start w-auto lg:w-[300px]">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden" onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    {menuOpen && (
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className={location.pathname === link.path ? "active font-bold" : ""}
                                        onClick={() => setMenuOpen(false)}
                                    >
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <Link to="/" className="flex items-center gap-2">
                    <img src={logo} className="max-w-10 sm:max-w-12 w-auto" alt="Gender Cell Logo" />
                    <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text font-heading">
                        Gender Cell
                    </span>
                </Link>
            </div>

            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 gap-8">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className={`font-semibold transition-all hover:text-primary ${location.pathname === link.path ? "active text-primary font-bold" : ""}`}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="navbar-end w-auto lg:w-[300px]">
                <a href="https://www.iitk.ac.in/" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        <img alt="IITK Logo" src={logo_iitk} className="!object-contain w-full h-full" />
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Navbar;
