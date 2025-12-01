import React from 'react';
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
                        <h2 className="footer-title text-white opacity-100">Gender Cell IIT KANPUR</h2>
                        <p className="mt-2">
                            The Gender Cell at IIT Kanpur is dedicated to promoting gender equality, inclusivity, <br />
                            and awareness within the campus community. The cell actively engages to prevent <br />
                            sexual harassment, abuse and gender inequality across the campus, creating a safe <br />
                            and respectful environment where all individuals can thrive.
                        </p>
                    </div>
                </aside>
                <nav>
                    <h6 className="footer-title">Quick Links</h6>
                    <a className="link link-hover" href="./">Home</a>
                    <a className="link link-hover" href="./about">About us</a>
                    <a className="link link-hover" href="./events">Events</a>
                    <a className="link link-hover" href="./resources">Resources</a>
                    <a className="link link-hover" href="./blogs">Blogs</a>
                    <a className="link link-hover" href="./support">Support Services</a>
                    <a className="link link-hover" href="./surveys">Surveys</a>
                </nav>
                <nav>
                    <h6 className="footer-title">IITK's LINK</h6>
                    <a className="link link-hover" href="https://www.iitk.ac.in/">IITK HOMEPAGE</a>
                    <a className="link link-hover" href="https://students.iitk.ac.in/gymkhana/">Students Gymkhana</a>
                    <a className="link link-hover" href="/icc">ICC Website</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Documents</h6>
                    <a className="link link-hover" href="https://drive.google.com/file/d/1n1TDtLwd1HoBMlgyhMrgKYZWMVLRqzKN/view?usp=drive_link">Mandate</a>
                    <a className="link link-hover" href="https://drive.google.com/file/d/11n9HL9SIGfCHMhTZhmdJ8ohIaX-Kgt2s/view?usp=drive_link">POSH Act</a>
                    <a className="link link-hover" href="https://drive.google.com/file/d/1NzUpkvmnCnzDTZwMyqSlJ6uQbpcVWL20/view?usp=drive_link">The Indian Penal Code</a>
                    <a className="link link-hover" href="https://drive.google.com/file/d/1InAyLMV51J7SBKR2TwQcYQhNmsepdqNu/view?usp=drive_link">CSS Conduct Rules</a>
                </nav>
            </footer>
            <footer className="footer footer-center p-4 max-w-7xl mx-auto border-t border-neutral-content/20">
                <aside>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by Gender Cell IITK</p>
                </aside>
            </footer>
        </div>
    );
};
