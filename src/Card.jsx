import React from 'react';
import './App.css';
import './Card.css';
import PropTypes from 'prop-types';
import facebookIcon from './assets/facebook.jpg';
import linkedinIcon from './assets/linkedin.png';

const SocialIcon = ({ href, src, alt }) => (
  <a href={href} target="_blank" rel="noopener noreferrer">
    <img src={src} alt={alt} className="social-icon" />
  </a>
);

const Card = ({ pfp, name, designation, fb, linkedin }) => (
  <div className="card fade-in">
    <div className="image">
      <img src={pfp} alt={`${name}'s profile`} />
    </div>
    <p className="name">{name}</p>
    <p className="portfolio">{designation}</p>
    <div className="socialMedia">
      {fb && <SocialIcon href={fb} src={facebookIcon} alt="Facebook" />}
      {linkedin && <SocialIcon href={linkedin} src={linkedinIcon} alt="LinkedIn" />}
    </div>
  </div>
);

// Define prop types for better validation
Card.propTypes = {
  pfp: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  designation: PropTypes.string.isRequired,
  fb: PropTypes.string,
  linkedin: PropTypes.string,
};

export default Card;
