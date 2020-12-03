import React from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import GitHubIcon from '@material-ui/icons/GitHub';
import MailIcon from '@material-ui/icons/Mail';
import DescriptionIcon from '@material-ui/icons/Description';
import HttpsIcon from '@material-ui/icons/Https';

const useStyles = makeStyles((theme: Theme) => createStyles({
  root: {
    flexGrow: 1,
  },
  text: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  icon: {
    marginBottom: '-5px',
  },
}));

const Footer: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  return (
    <>
      <Paper variant="outlined" square>
        <Box p={4}>
          <Grid container spacing={1}>
            <Grid container item xs={12} spacing={3}>
              <Grid item xs={4}>
                <Typography className={classes.text} variant="body1" align="center">
                  <b>Sublinked</b>
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography className={classes.text} variant="body1" align="center">
                  <b>Contact</b>
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography className={classes.text} variant="body1" align="center">
                  <b>Resources</b>
                </Typography>
              </Grid>
            </Grid>
            <Grid container item xs={12} spacing={3}>
              <Grid item xs={4}>
                <Typography
                  className={classes.text}
                  variant="body2"
                  align="center"
                  onClick={() => history.push('/terms-and-conditions')}
                  style={{ cursor: 'pointer' }}
                >
                  <DescriptionIcon className={classes.icon} />
                  &nbsp;
                  Terms of use
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography
                  className={classes.text}
                  variant="body2"
                  align="center"
                  onClick={() => history.push('/info#bottom')}
                  style={{ cursor: 'pointer' }}
                >
                  <MailIcon className={classes.icon} />
                  &nbsp;
                  Contact form
                </Typography>
              </Grid>
              <Grid item xs={4}>
                <Typography
                  className={classes.text}
                  variant="body2"
                  align="center"
                  onClick={(): Window | null => window.open('https://github.com/Sanderzhanni/SubLinked', '_blank')}
                  style={{ cursor: 'pointer' }}
                >
                  <GitHubIcon className={classes.icon} />
                  &nbsp;
                  Github
                </Typography>
              </Grid>
            </Grid>
            <Grid container item xs={12} spacing={3}>
              <Grid item xs={4}>
                <Typography
                  className={classes.text}
                  variant="body2"
                  align="center"
                  onClick={() => history.push('/privacy')}
                  style={{ cursor: 'pointer' }}
                >
                  <HttpsIcon className={classes.icon} />
                  &nbsp;
                  Privacy policy
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Box>
      </Paper>
    </>
  );
};

export default Footer;
