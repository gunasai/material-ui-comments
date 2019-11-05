import React, { useState } from "react";

import {
  makeStyles,
  createMuiTheme,
  ThemeProvider
} from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import "./App.css";

import IconButton from "@material-ui/core/IconButton";
import { Brightness3, WbSunny } from "@material-ui/icons";

import Comments from "./components/Comments";
import { CssBaseline, Grid } from "@material-ui/core";

const lightTheme = createMuiTheme({
  palette: {
    type: "light"
  }
});

const darkTheme = createMuiTheme({
  palette: {
    type: "dark"
  }
});

const useStyles = makeStyles({
  spacing: {
    marginTop: "50px"
  },
  header: {
    marginTop: "40px",
    fontWeight: 600
  },
  button: {
    color: "orange"
  }
});

function App() {
  const classes = useStyles();
  const [isDark, toggleDark] = useState(true);

  const changeTheme = () => {
    toggleDark(prev => !prev);
  };

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <CssBaseline>
        <Container>
          <Grid container justify="space-between" className={classes.spacing}>
            <Grid item>
              <Typography className={classes.header} variant="h4" gutterBottom>
                Comments
              </Typography>
            </Grid>
            <Grid item>
              <div>
                <IconButton aria-label="dark" onClick={changeTheme}>
                  {isDark ? (
                    <Brightness3 />
                  ) : (
                    <WbSunny className={classes.button} />
                  )}
                </IconButton>
              </div>
            </Grid>
          </Grid>

          <Comments />
        </Container>
      </CssBaseline>
    </ThemeProvider>
  );
}

export default App;
