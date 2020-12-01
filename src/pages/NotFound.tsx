import React from 'react';
import SentimentVeryDissatisfiedOutlinedIcon from '@material-ui/icons/SentimentVeryDissatisfiedOutlined';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

const NotFound = (): React.ReactElement => (
  <>
    <Box>
      <Box display="flex" justifyContent="center" m={1} p={1}>
        <SentimentVeryDissatisfiedOutlinedIcon style={{ fontSize: 175 }} />
      </Box>
      <Box display="flex" justifyContent="center" m={1} p={1}>
        <Typography component="h1" variant="h2">
          Error 404
        </Typography>
      </Box>
      <Box display="flex" justifyContent="center" m={1} p={1}>
        <Typography component="h2" variant="h5" align="center">
          Whoops. Looks like this page does not exist.
        </Typography>
      </Box>
    </Box>
  </>
);

export default NotFound;
