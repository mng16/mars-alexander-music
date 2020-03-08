import React from 'react';
import './App.css';
import Header from './components/Header';
import SocialMediaLinks from './components/SocialMediaLinks';
import SpotifyLogo from './assets/spotify-logo.png';
import YouTubeLogo from './assets/youtube-logo.png';
import FacebookLogo from './assets/facebook-logo.png';
import TwitterLogo from './assets/twitter-logo.png';
import InstagramLogo from './assets/instagram-logo.png';

const socialMediaLinks = [
  {
    url: 'https://spoti.fi/2vCgbgH',
    logo: SpotifyLogo,
  },
  {
    url: 'http://bit.ly/ytmars',
    logo: YouTubeLogo,
  },
  {
    url: 'http://bit.ly/imarsmusic',
    logo: InstagramLogo,
  },
  {
    url: 'http://bit.ly/fbmarsa',
    logo: FacebookLogo,
  },
  {
    url: 'https://twitter.com/MarsAlexanderMu',
    logo: TwitterLogo,
  },
]

function App() {
  return (
    <div className="App">
      <Header />
      <SocialMediaLinks socialMediaLinks={socialMediaLinks} />
    </div>
  );
}

export default App;
