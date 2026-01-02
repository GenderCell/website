import React from 'react';
import { Link } from 'react-router-dom';
import logo from "../../assets/images/logo_gc_new.png";
import logo_dark from "../../assets/images/logo-iitk-dark.png";

export const Footer: React.FC = () => {
    return (
        <div className="bg-neutral text-neutral-content">
            <footer className="footer p-10 max-w-7xl mx-auto">
                <aside>
                    <div className="flex justify-center items-center gap-4">
                        <img src={logo} className="max-w-16 w-auto" alt="Gender Cell Logo" />
                        <img src={logo_dark} className="max-w-16 max-h-16 w-auto h-auto" alt="IITK Logo" />
                    </div>
                    <div>
                        <h2 className="footer-title text-white opacity-100">Gender Cell, IIT KANPUR</h2>
                        <p className="mt-2">
                            The Gender Cell at IIT Kanpur is dedicated to promoting gender equality, inclusivity, <br />
                            and awareness within the campus community. The cell actively engages to prevent <br />
                            sexual harassment, abuse and gender inequality across the campus, creating a safe <br />
                            and respectful environment where all individuals can thrive.
                        </p>
                    </div>
                </aside>
                <nav>
                    <h6 className="footer-title text-secondary">Quick Links</h6>
                    <Link className="link link-hover hover:text-secondary transition-colors" to="/">Home</Link>
                    <Link className="link link-hover hover:text-secondary transition-colors" to="/about">About us</Link>
                    <Link className="link link-hover hover:text-secondary transition-colors" to="/events">Events</Link>
                    <Link className="link link-hover hover:text-secondary transition-colors" to="/resources">Resources</Link>
                    <Link className="link link-hover hover:text-secondary transition-colors" to="/blogs">Blogs</Link>
                    <Link className="link link-hover hover:text-secondary transition-colors" to="/support">Support Services</Link>
                    <Link className="link link-hover hover:text-secondary transition-colors" to="/surveys">Surveys</Link>
                    <Link className="link link-hover hover:text-secondary transition-colors" to="/competitions">Competitions</Link>
                </nav>
                <nav>
                    <h6 className="footer-title text-secondary">IITK's LINK</h6>
                    <a className="link link-hover hover:text-secondary transition-colors" href="https://www.iitk.ac.in/" target="_blank" rel="noopener noreferrer">IITK HOMEPAGE</a>
                    <a className="link link-hover hover:text-secondary transition-colors" href="https://students.iitk.ac.in/gymkhana/" target="_blank" rel="noopener noreferrer">Students Gymkhana</a>
                    <Link className="link link-hover hover:text-secondary transition-colors" to="/icc">ICC Website</Link>
                </nav>
                <nav>
                    <h6 className="footer-title text-secondary">Documents</h6>
                    <a className="link link-hover hover:text-secondary transition-colors" href="https://drive.google.com/file/d/1n1TDtLwd1HoBMlgyhMrgKYZWMVLRqzKN/view?usp=drive_link" target="_blank" rel="noopener noreferrer">Mandate</a>
                    <a className="link link-hover hover:text-secondary transition-colors" href="https://drive.google.com/file/d/11n9HL9SIGfCHMhTZhmdJ8ohIaX-Kgt2s/view?usp=drive_link" target="_blank" rel="noopener noreferrer">POSH Act</a>
                    <a className="link link-hover hover:text-secondary transition-colors" href="https://drive.google.com/file/d/1NzUpkvmnCnzDTZwMyqSlJ6uQbpcVWL20/view?usp=drive_link" target="_blank" rel="noopener noreferrer">The Indian Penal Code</a>
                    <a className="link link-hover hover:text-secondary transition-colors" href="https://drive.google.com/file/d/1InAyLMV51J7SBKR2TwQcYQhNmsepdqNu/view?usp=drive_link" target="_blank" rel="noopener noreferrer">CSS Conduct Rules</a>
                </nav>
            </footer>
            <footer className="footer footer-center p-4 max-w-7xl mx-auto border-t border-neutral-content/20">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Gender Cell, IIT Kanpur</p>
                </aside>
            </footer>
        </div>
    );
};
