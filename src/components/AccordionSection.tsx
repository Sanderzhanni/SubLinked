import React from 'react';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Typography from '@material-ui/core/Typography';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) => createStyles({
  heading: {
    fontSize: theme.typography.pxToRem(16),
    flexBasis: '100%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

interface AccordionSectionProps {
  head1: string;
  head2: string;
  children: React.ReactNode;
}

const AccordionSection: React.FC<AccordionSectionProps> = (props: AccordionSectionProps) => {
  const classes = useStyles();
  const { head1, head2, children } = props;
  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1bh-content"
          id="panel1bh-header"
        >
          <Typography className={classes.heading}>{head1}</Typography>
          <Typography className={classes.secondaryHeading}>{head2}</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            {children}
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default AccordionSection;
