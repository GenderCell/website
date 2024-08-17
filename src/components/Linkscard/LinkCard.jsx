import React from 'react';

import './linkcard.css';
import LinksCard from './Linkscard';
import  ICC from './images/ICC1.png';
import  resources from './images/Resources1.png';
import  faqs from './images/faqs2.png';
import support from './images/support.png';
import team1 from './images/meet.png';
const LinksSection = () => {
  return (
    <div className="links-section">
                <LinksCard link="https://www.iitk.ac.in/wc/internal-complaints-committee/" icon={ICC} altText="ICC" title="ICC" />
                <LinksCard  link="./resources" icon={resources} altText="Resources" title="Resources" />
                <LinksCard  link="./about#team-info" icon={team1} altText="Meet Our Team" title="Meet Our Team" />
                <LinksCard  link="./support" icon={support} altText="FAQS" title="Support Services" />
                <LinksCard  link="./resources#faqs" icon={faqs} altText="FAQS" title="FAQS" />
            </div>
  );
};

export default LinksSection;
