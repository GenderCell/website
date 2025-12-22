import React, { useState, useEffect, useRef } from "react";
import logo from "../../assets/images/logo_gc_new.png";
import logo_iitk from "../../assets/images/logo-iitk.png";
import { useLocation, Link } from "react-router-dom";

const Navbar: React.FC = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const location = useLocation();
    const menuRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    // Close menu when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setMenuOpen(false);
            }
        };

        if (menuOpen) {
            document.addEventListener("mousedown", handleClickOutside);
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [menuOpen]);

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
        <div className="flex items-center justify-between bg-base-100 shadow-md sticky top-0 z-50 px-4 sm:px-10 py-2 gap-4 max-w-full">
            {/* Left section: Gender Cell Logo and Text */}
            <div className="flex items-center gap-2 flex-none">
                <div className="relative lg:hidden" ref={menuRef}>
                    <button className="btn btn-ghost" onClick={toggleMenu} aria-label="Toggle menu">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </button>
                    {menuOpen && (
                        <ul className="menu menu-sm absolute left-0 mt-3 z-[60] p-2 shadow-lg bg-base-100 rounded-box w-52">
                            {navLinks.map((link) => (
                                <li key={link.path}>
                                    <Link
                                        to={link.path}
                                        className={location.pathname === link.path ? "active-link" : "nav-link"}
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
                    <span className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-primary to-secondary inline-block text-transparent bg-clip-text font-heading whitespace-nowrap">
                        Gender Cell
                    </span>
                </Link>
            </div>

            {/* Spacer */}
            <div className="flex-1 hidden lg:block min-w-4"></div>

            {/* Center section: Navigation Links */}
            <div className="hidden lg:flex flex-none">
                <ul className="menu menu-horizontal px-1 gap-4">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <Link
                                to={link.path}
                                className={location.pathname === link.path ? "active-link" : "nav-link"}
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Spacer */}
            <div className="flex-1 hidden lg:block min-w-4"></div>

            {/* Right section: IITK Logo */}
            <div className="flex-none">
                <a href="https://www.iitk.ac.in/" target="_blank" rel="noopener noreferrer" className="btn btn-ghost btn-circle avatar" aria-label="Visit IIT Kanpur website">
                    <div className="w-10 rounded-full">
                        <img alt="IITK Logo" src={logo_iitk} className="!object-contain w-full h-full" />
                    </div>
                </a>
            </div>
        </div>
    );
};

export default Navbar;
