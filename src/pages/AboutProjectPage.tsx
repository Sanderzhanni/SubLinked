import React from 'react';
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import RedditBanner from '../assets/redditbanner.png';
import GraphLinear from '../assets/graph_v1.linear.png';
import GraphAff from '../assets/graph_v2.affiliation.png';
import Singular from '../assets/singular.png';
import {text, table, selfReflectionReports} from '../utils/portfolio.text';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const AboutProjectPage = () => (
  <>
    <Box margin="0 auto" m={12}/>
    <Box className="portfolio-header">
      <img src={RedditBanner} alt="Reddit Banner"/>
    </Box>
    <Box display="flex" justifyContent="left" m={2} p={1}>
      <Box>
        <Typography component="h2" variant="h4" align="left">
          Introducing the Team
        </Typography>
        <Box margin="0 auto" m={6}/>
        <Typography component="h2" variant="body1" align="left">
          Supervisor: Yan Asadchy <br/>
          Team:
          <ul>
            <li>Ibitoye Olamilekan Hammed -GLS/ Politics and Governance</li>
            <li>Iryna Selina - DTI / Digital Learning Games</li>
            <li>Marianne Aruste - DTI / Computer Science</li>
            <li>Rohid Safi - DTI / Open Society Technologies</li>
            <li>Sander Hanni - DTI / Computer Science</li>
          </ul>
        </Typography>
      </Box>
    </Box>
    <Box margin="0 auto" m={4}/>
    <Box className="portfolio-content">
      <Typography component="h2" variant="h4" align="center">
        Project Report
      </Typography>
      <Box display="flex" justifyContent="center" m={3}>
        <Typography component="h3" variant="h5" align="center">
          Introduction
        </Typography>
      </Box>
      <Box className="text-tip">
        <Typography variant="body1" align="justify">
          {text.introduction}
        </Typography>
      </Box>

      <Box margin="0 auto" m={6}/>
      <Box display="flex" justifyContent="center" m={3}>
        <Typography component="h3" variant="h5" align="center">
          Importance of the problem
        </Typography>
      </Box>
      <Box className="text-tip">
        <Typography variant="body1" align="justify">
          {text.importance}
        </Typography>
      </Box>

      <Box margin="0 auto" m={6}/>
      <Box display="flex" justifyContent="center" m={3}>
        <Typography component="h3" variant="h5" align="center">
          Stakeholders
        </Typography>
      </Box>
      <Box className="text-tip">
        <Typography variant="body1" align="justify">
          {text.stakeholders}
        </Typography>
      </Box>

      <Box margin="0 auto" m={6}/>
      <Box display="flex" justifyContent="center" m={3}>
        <Typography component="h3" variant="h5" align="center">
          Summary of the results
        </Typography>
      </Box>
      <Box className="text-tip">
        <Typography variant="body1" align="justify">
          {text.resultsSummary}
        </Typography>
      </Box>
      <img src={GraphLinear} alt="GraphLinear"/>
      <Box className="text-tip">
        <Typography variant="body1" align="justify">
          {text.resultsSummary2}
        </Typography>
      </Box>
      <img src={GraphAff} alt="GraphLinear"/>
      <Box className="text-tip">
        <Typography variant="body1" align="justify">
          {text.resultsSummary3}
        </Typography>
      </Box>
      <img src={Singular} alt="GraphLinear"/>
      <Box className="text-tip">
        <Typography variant="body1" align="justify">
          {text.resultsSummary4}
        </Typography>
      </Box>

      <Box margin="0 auto" m={6}/>
      <Box display="flex" justifyContent="center" m={3}>
        <Typography component="h3" variant="h5" align="center">
          Project action plan
        </Typography>
      </Box>
      <TableContainer component={Paper}>
        <Table aria-label="table">
          <TableHead>
            <TableRow>
              <TableCell>Activity and short description</TableCell>
              <TableCell align="right">Time (which months)</TableCell>
              <TableCell align="right">Stakeholders</TableCell>
              <TableCell align="right">Person responsible (name+study field)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {table.map((row, i) => (
              <TableRow key={i}>
                <TableCell component="th" scope="row">{row.desc}</TableCell>
                <TableCell align="right">{row.date}</TableCell>
                <TableCell align="right">{row.stakeholders}</TableCell>
                <TableCell align="right">{row.responsible}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box margin="0 auto" m={6}/>
      <Box display="flex" justifyContent="center" m={3}>
        <Typography component="h3" variant="h5" align="center">
          Media coverage
        </Typography>
      </Box>
      <Box margin="0 auto" m={3}/>
      <Box display="flex" justifyContent="center" m={3}>
        <Typography component="h4" variant="h6" align="center">
          Social Media Channel
        </Typography>
      </Box>
      <Box className="text-tip">
        <Typography variant="body1" align="justify">
          {text.socialMediaChannel}
        </Typography>
      </Box>
      <Box margin="0 auto" m={3}/>
      <Box display="flex" justifyContent="center" m={3}>
        <Typography component="h4" variant="h6" align="center">
          Website
        </Typography>
      </Box>
      <Box className="text-tip">
        <Typography variant="body1" align="justify">
          {text.website}
        </Typography>
      </Box>

      <Box margin="0 auto" m={6}/>
      <Box display="flex" justifyContent="center" m={3}>
        <Typography component="h3" variant="h5" align="center">
          Self-reflection reports
        </Typography>
      </Box>
      <Box margin="0 auto" m={3}/>
      <Box display="flex" justifyContent="center" m={3}>
        <Typography component="h4" variant="h6" align="center">
          Ibitoye Olamilekan Hammed
        </Typography>
      </Box>
      <Box className="text-tip">
        <Typography variant="body1" align="justify">
          {selfReflectionReports[0]}
        </Typography>
      </Box>
      <Box margin="0 auto" m={3}/>
      <Box display="flex" justifyContent="center" m={3}>
        <Typography component="h4" variant="h6" align="center">
          Iryna Selina
        </Typography>
      </Box>
      <Box className="text-tip">
        <Typography variant="body1" align="justify">
          {selfReflectionReports[1]}
        </Typography>
      </Box>
      <Box margin="0 auto" m={3}/>
      <Box display="flex" justifyContent="center" m={3}>
        <Typography component="h4" variant="h6" align="center">
          Marianne Aruste
        </Typography>
      </Box>
      <Box className="text-tip">
        <Typography variant="body1" align="justify">
          {selfReflectionReports[2]}
        </Typography>
      </Box>
      <Box margin="0 auto" m={3}/>
      <Box display="flex" justifyContent="center" m={3}>
        <Typography component="h4" variant="h6" align="center">
          Rohid Safi
        </Typography>
      </Box>
      <Box className="text-tip">
        <Typography variant="body1" align="justify">
          {selfReflectionReports[3]}
        </Typography>
      </Box>
      <Box margin="0 auto" m={3}/>
      <Box display="flex" justifyContent="center" m={3}>
        <Typography component="h4" variant="h6" align="center">
          Sander Hanni
        </Typography>
      </Box>
      <Box className="text-tip">
        <Typography variant="body1" align="justify">
          {selfReflectionReports[4]}
        </Typography>
      </Box>
      <Box margin="0 auto" m={4}/>
    </Box>
  </>
);

export default AboutProjectPage;
