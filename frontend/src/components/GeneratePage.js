import React from "react";
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

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.root}>
        <Typography component="h1" variant="h5" align="center">
          Generate your cover letter
        </Typography>
        <form className={classes.form}>
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
