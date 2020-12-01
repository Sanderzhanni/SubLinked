import React, { FormEvent, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import { createStyles, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(() => createStyles({
  root: {
    width: '75%',
  },
  input: {
    width: '100%',
  },
  paper: {
    width: '75%',
    padding: '15px',
  },
  form: {
    width: '100%',
  },
}));

const ContactForm = (): React.ReactElement => {
  const classes = useStyles();
  const [email, setEmail] = useState<string>('');
  const [subject, setSubject] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    if (!email || !subject || !message) {
      console.log('data missing');
      return;
    }
    fetch('/api/v1/email', {
      method: 'POST',
      headers: {
        'Content-type': 'Application/json',
      },
      body: JSON.stringify({
        email, subject, message,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.accepted);
        setEmail('');
        setSubject('');
        setMessage('');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <Box margin="0 auto">
        <Box width="100%" display="flex" justifyContent="center">
          <Paper elevation={0} className={classes.paper}>
            <Box width="100%" display="flex" justifyContent="center">
              <form className={classes.form} noValidate autoComplete="off" onSubmit={handleSubmit}>
                <Typography component="h2" variant="h6" align="left">
                  Your Email* (required)
                </Typography>
                <TextField
                  className={classes.input}
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Box margin="0 auto" m={3} />
                <Typography component="h2" variant="h6" align="left">
                  The Subject*
                </Typography>
                <TextField
                  className={classes.input}
                  id="outlined-basic"
                  label="Subject"
                  variant="outlined"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                />
                <Box margin="0 auto" m={3} />
                <Typography component="h2" variant="h6" align="left">
                  Your Message*
                </Typography>
                <TextField
                  className={classes.input}
                  id="outlined-basic"
                  label="Message"
                  variant="outlined"
                  multiline
                  rows={6}
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
                <Box margin="0 auto" m={3} />
                <Button variant="contained" color="primary" disableElevation type="submit">
                  Submit
                </Button>
              </form>
            </Box>
          </Paper>
        </Box>
      </Box>
    </>
  );
};

export default ContactForm;
