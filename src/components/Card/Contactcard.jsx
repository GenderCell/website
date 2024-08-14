import React from 'react';
import '../../css/About.css'; // Import the CSS file
import profile from '../../assets/images/profile.png';
import { FaPhone } from 'react-icons/fa';
import { AiOutlineMail } from 'react-icons/ai';
const ContactCard = ({ name, designation, post,email, phone }) => {
  return (
    <div className="card">
      {/* <div className="avatar-placeholder"></div> */}
      <img src={profile} alt="profile" />
      <h2>{name}</h2>
      <p>{designation}</p>
      <p>{post}</p>
      {/* <div className="links">
        <a href={github} target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href={`mailto:${email}`}>Email</a>
        <a href={linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div> */}
      <div className="links">
        <a href={`mailto:${email}`}><AiOutlineMail /></a>
        <a href={`tel:${phone}`}><FaPhone /></a>
      </div>
    </div>
  );
};

export default ContactCard;
