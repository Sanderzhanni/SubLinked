import React from 'react';
import Particles from 'react-tsparticles';
import Typography from '@material-ui/core/Typography';
import { particlesOptions } from '../utils/particlesOptions';
import LogoOnDark from '../assets/LogoOnDarkReddit.svg';

const WelcomePage = (): React.ReactElement => (
  <>
    <div className="container">
      <div className="particles__wrapper">
        <Particles className="particles__container" options={particlesOptions} />
        <div className="particles__content">
          <div className="text">
            <h1>Welcome To</h1>
            <img src={LogoOnDark} className="particles__logo" alt="Website Dark Logo" />
          </div>
        </div>
      </div>
    </div>
  </>
);

export default WelcomePage;
