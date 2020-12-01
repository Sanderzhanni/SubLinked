import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import AccordionSection from '../components/AccordionSection';
import ContactForm from '../components/ContactForm';

const useStyles = makeStyles(() => createStyles({
  root: {
    width: '75%',
  },
}));

const InfoPage = (): React.ReactElement => {
  const classes = useStyles();
  return (
    <>
      <Box margin="0 auto" m={12} />
      <Box width="75%" margin="0 auto">
        <Box display="flex" justifyContent="center" m={2} p={1}>
          <Typography component="h2" variant="h4" align="center">
            General
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" m={2} p={1}>
          <div className={classes.root}>
            <AccordionSection head1="What is SubLinked?" head2="What is it for?">
              SubLinked is a website for generating social networks
              the show the connections between different
              subreddits via their users. The point of this website is
              to provide a servive that allows users to generate a
              social network, visualize it and show basic information
              about the generated network and its subreddits.
            </AccordionSection>
            <AccordionSection head1="How does it work?" head2="">
              We are using the Reddit API to gather data about the
              subreddit and then parse the information so that we
              can render a visualization of the subreddit and the
              connections between different subreddits.
              The graph is rendered using the cytoscapeJS framework.
              If you are interested about the code and technicality
              behind the website you can visit SubLinked repository on
              the github webpage&nbsp;
              <a href="https://github.com/Sanderzhanni/SubLinked">https://github.com/Sanderzhanni/SubLinked</a>
              . Its all open source!
            </AccordionSection>
            <AccordionSection head1="Limitations" head2="Slow generation">
              Since the Reddit API has a limited number of requests
              per 10 minutes, we can not forsee how it will affect the
              website if a lot of users are using it at the same time.
              We are doing the best we can with serverside caching, but
              even then it is not hard to hit the limit fast. In the future
              things might change, with improvements to the Reddit API
              and to our serverside caching, but since this is the beginning
              please have patience if the request times are slow due to a
              high number of users. Thank you for understanding!
            </AccordionSection>
          </div>
        </Box>
        <Box display="flex" justifyContent="center" m={2} p={1}>
          <Typography component="h2" variant="h4" align="center">
            Basic usage
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" m={2} p={1}>
          <div className={classes.root}>
            <AccordionSection head1="Generating a subreddit" head2="">
              To generate a new subreddit enter the subreddit name
              (without the &apos;/r&apos;) and click generate. You can also
              choose the amount of users you want the subreddit to generate
              with. To choose the amount of users drag the slider to the
              desired amount (Currently only in increments of 5).
            </AccordionSection>
            <AccordionSection head1="Deleting a subreddit" head2="">
              To delete a subreddit right click on the subreddit
              node and choose delete from the menu. On mobile hold
              the node for a couple seconds instead. To delete all of the
              nodes press the delete graph button on top of the page.
            </AccordionSection>
            <AccordionSection head1="Deleting nodes and edges" head2="">
              To delete a singular node or an edge simply open the control
              menu (via clicking with the right mouse
              button or holding the node for a couple seconds) and choose
              delete.
            </AccordionSection>
            <AccordionSection head1="How to choose subreddits" head2="">
              In the future we are planning to add a section to this website
              that would help its users choose subreddits based on
              how likely they are to be connected. For now you can visits
              other websites that can already provide an overlook of
              subreddits and their connectivity information. For example&nbsp;
              <a href="https://subredditstats.com/">https://subredditstats.com/</a>
              &nbsp;shows information like related subreddits by users and keywords.
            </AccordionSection>
            <AccordionSection head1="Why the 100 users / 1000 nodes limit?" head2="">
              Since cytoscape (the graph framework we are using) is not capable
              of rendering a graph with thousands of nodes and the api we are using
              doesnt allow for too many request in a short time we are forced to
              limit both of them. In the future things might change but for now
              we can not bypass these limitations.
            </AccordionSection>
            <AccordionSection head1="Can I close the website and keep my generated network?" head2="">
              Yes! But you will only be able to see your generated network on the same computer
              you generated it on. The generated data is saved in
              your browser and will not be deleted unless deleted by the user themselves.
            </AccordionSection>
          </div>
        </Box>
        <Box display="flex" justifyContent="center" m={2} p={1}>
          <Typography component="h2" variant="h4" align="center">
            Advanded usage
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" m={2} p={1}>
          <div className={classes.root}>
            <AccordionSection head1="Node information" head2="">
              In addition to generating and visualizing subreddits
              you can gather some basic information about them.
              For example the usernames, if 2 nodes are connected
              , how closely are they connected and how many connections
              does a certain node have.
            </AccordionSection>
            <AccordionSection head1="Connectiong nodes" head2="">
              To connect 2 nodes they must be chosen as source and target.
              After that connecting them is a s simple as pressing the connect
              button under the node information section. To disconnect them
              delete the edge(line) between them.
            </AccordionSection>
            <AccordionSection head1="Coloring the path" head2="">
              We are also using the A* algorith to find the shortest path
              between 2 nodes. To see the shortest path choose a source and
              a target node and check the Color Path checkbox.
            </AccordionSection>
            <AccordionSection head1="Hiding nodes" head2="">
              Currently it is possible to hide nodes which have only
              1 connection (useful for affiliation networks).
              To hide low degree nodes check the Hide low degree nodes checkbox
              under the node information section.
            </AccordionSection>
          </div>
        </Box>
        <Box display="flex" justifyContent="center" m={2} p={1}>
          <Typography component="h2" variant="h4" align="center">
            Contact Us
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" m={1} p={1} width="50%" margin="0 auto">
          <Typography component="h2" variant="subtitle1" align="center">
            If you have any questions or suggestions feel free
            to send us an email.
          </Typography>
        </Box>
        <Box m={2} p={1}>
          <ContactForm />
        </Box>
      </Box>
    </>
  );
};

export default InfoPage;
