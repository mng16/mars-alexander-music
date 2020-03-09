import React from 'react';
import HeaderImage from '../../assets/header-image.jpg';
import './header.scss';
import SocialMediaLinks from '../SocialMediaLinks';
import SocialMediaDetails from '../../mocks/SocialMediaDetails';

const Header = () => (
  <header>
    <img src={HeaderImage} alt="header logo Mars Alexander" />
    <SocialMediaLinks socialMediaDetails={SocialMediaDetails} />
  </header>
);

export default Header;
