import React from 'react';
import Particles from 'react-tsparticles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Paper from '@material-ui/core/Paper';
import { useHistory } from 'react-router-dom';
import PermDataSettingIcon from '@material-ui/icons/PermDataSetting';
import { particlesOptions } from '../utils/particlesOptions';
import LogoOnDark from '../assets/LogoOnDarkReddit.svg';
import GenerateGif from '../assets/generate.gif';
import GenerateImage from '../assets/generatePage.svg';
import ProjectImage from '../assets/project.png';
import Footer from '../components/Footer';

const WelcomePage = (): React.ReactElement => {
  const history = useHistory();
  return (
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
      <Box width="75%" margin="0 auto">
        <Box display="flex" justifyContent="center" m={2} p={1}>
          <Typography component="h1" variant="h4" align="center">
            <b>SubLinked. </b>
            Visualize connections between subreddits.
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" m={1} p={1} width="50%" margin="0 auto">
          <Typography component="h2" variant="subtitle1" align="center">
            SubLinked is a website dedicated to finding
            connections between subreddits via their users.
            Find out how the social network for your favourite
            subreddits looks like.
          </Typography>
        </Box>
        <Box margin="0 auto" m={8} />
        <Box margin="0 auto" m={2} p={1}>
          <Box display="flex" justifyContent="center" m={3}>
            <Typography component="h3" variant="h5" align="center">
              Try it out
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center" width="35%" margin="0 auto">
            <Typography variant="body1" align="center">
              Get started by creating your own social networks
              by choosing any existing subreddits.
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center" m={3} p={1} className="play__container">
            <Paper
              variant="outlined"
              square
              className="card"
              onClick={() => history.push('/generate-graph')}
            >
              <img className="static" src={GenerateImage} alt="Generate page banner" />
              <img className="active" src={GenerateGif} alt="Generate page banner" />
            </Paper>
          </Box>
          <Box margin="0 auto" m={32} />
          <Box display="flex" justifyContent="center" m={3}>
            <Typography component="h3" variant="h5" align="center">
              Need inspiration?
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center" width="35%" margin="0 auto">
            <Typography variant="body1" align="center">
              Check out one of our social networks
              made for our project.
            </Typography>
          </Box>
          <Box display="flex" justifyContent="center" m={3} p={1}>
            <Paper
              variant="outlined"
              style={{ width: '100%', cursor: 'pointer' }}
              onClick={() => history.push('/project-graph')}
            >
              <img style={{ width: '100%' }} src={ProjectImage} alt="Generate page banner" />
            </Paper>
          </Box>
        </Box>
        <Box margin="0 auto" m={8} />
        <Box display="flex" justifyContent="center" m={3}>
          <Typography component="h3" variant="h5" align="center">
            Need help?
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" width="35%" margin="0 auto">
          <Typography variant="body1" align="center">
            If you need help using our website, please
            refer to our info page.
          </Typography>
        </Box>
        <Box margin="0 auto" m={8} />
        <Box display="flex" justifyContent="center" width="35%" margin="0 auto">
          <PermDataSettingIcon
            style={{ fontSize: 175, cursor: 'pointer' }}
            onClick={() => history.push('/info')}
          />
        </Box>
      </Box>
      <Box margin="0 auto" m={8} />
      <Footer />
    </>
  );
};

export default WelcomePage;
