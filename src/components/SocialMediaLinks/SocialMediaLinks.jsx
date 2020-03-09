import React from 'react';
import { string, arrayOf, object } from 'prop-types'
import './social-media-links.scss';

const SocialMediaLink = ({ url, logo }) => (
  <div className = "social-media-link">
    <a href={url} target="_blank" rel="noopener noreferrer">
      <img src={logo} alt="social media logo" className="social-media-logo" />
    </a>
  </div>
);

const SocialMediaLinks = ({ socialMediaDetails }) => 
<div className="social-media-links">

{socialMediaDetails.map((link) => (
  <SocialMediaLink
    url={link.url}
    logo={link.logo}
  />))}
  </div>

SocialMediaLink.propTypes = {
  url: string.isRequired,
  logo: string.isRequired,
}

SocialMediaLinks.propTypes = {
  socialMediaLinks: arrayOf(object).isRequired,
}

export default SocialMediaLinks;
