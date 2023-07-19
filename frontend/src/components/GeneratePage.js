import React, { useState } from "react";
import { TextField, Button, Container, Grid, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  form: {
    width: '100%', 
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function GeneratePage() {
  const classes = useStyles();

  // Create state for the form inputs
  const [companyName, setCompanyName] = useState('');
  const [jobDescription, setJobDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
  
    const prompt = `Given this company name: ${companyName}, and job description: ${jobDescription}, write a paragraph in the first person about why you are interested in working there.`;
  
    fetch('http://localhost:3001/api/completion', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        prompt: prompt
      }),
    })    
    .then(response => response.json())
    .then(data => {
      if (data.choices && data.choices.length > 0) {
        console.log('Success:', data.choices[0].text.trim());
      } else {
        console.error('No choices returned from API');
      }
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  }


  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.root}>
        <Typography component="h1" variant="h5" align="center">
          Generate your cover letter
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                variant="outlined"
                fullWidth
                id="companyName"
                label="Company Name"
                name="companyName"
                autoComplete="companyName"
                value={companyName}
                onChange={(e) => setCompanyName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                variant="outlined"
                fullWidth
                multiline
                id="jobDescription"
                label="Job Description"
                name="jobDescription"
                autoComplete="jobDescription"
                rows={4} // sets a fixed height
                inputProps={{ style: { overflowX: 'auto' } }} // enables horizontal scrolling
                value={jobDescription}
                onChange={(e) => setJobDescription(e.target.value)}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Generate
          </Button>
        </form>
      </div>
    </Container>
  );
}

export default GeneratePage;
