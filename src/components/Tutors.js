import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid, CardMedia, CardActionArea, Paper, createMuiTheme, Divider } from "@material-ui/core";

const theme = createMuiTheme({
  palette: {
    red: "#ff1744",
    black: "#000000"
  }
});

const styles = theme => ({
  layout: {
    width: "auto",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  toolbarMain: {
    borderBottom: `1px solid ${theme.palette.grey[300]}`
  },
  toolbarTitle: {
    flex: 1
  },
  toolbarSecondary: {
    justifyContent: "space-between"
  },
  mainFeaturedPost: {
    backgroundColor: theme.palette.common.white,
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4,
    borderRadius: "10px",
    boxShadow: "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)",
    transition: "all 0.3s cubic-bezier(.25,.8,.25,1)"
  },
  mainFeaturedPostContent: {
    padding: `${theme.spacing.unit * 6}px`,
    [theme.breakpoints.up("md")]: {
      paddingRight: 0
    }
  },
  mainGrid: {
    marginTop: theme.spacing.unit * 3
  },
  card: {
    display: "flex"
  },
  cardDetails: {
    flex: 1
  },
  cardMedia: {
    width: 160
  },
  markdown: {
    padding: `${theme.spacing.unit * 3}px 0`
  },
  sidebarAboutBox: {
    padding: theme.spacing.unit * 2,
    backgroundColor: theme.palette.grey[200]
  },
  sidebarSection: {
    marginTop: theme.spacing.unit * 3
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    marginTop: theme.spacing.unit * 8,
    padding: `${theme.spacing.unit * 6}px 0`
  }
});

// const styles = {
//   card: {
//     minWidth: 275
//   },
//   bullet: {
//     display: "inline-block",
//     margin: "0 2px",
//     transform: "scale(0.8)"
//   },
//   title: {
//     fontSize: 14
//   },
//   pos: {
//     marginBottom: 12
//   }
// };

const Tutors = props => {
  const { classes } = props;
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Grid container style={{ justifyContent: "center", paddingTop: 40 }}>
      <Card
        className={classes.mainFeaturedPost}
        elevation="24"
        style={{ width: "900px", height: "400px" }}
      >
      <CardActionArea>
        <CardContent>
        <Grid
          container
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            paddingRight: 70
          }}
        >
          <Grid
            item
            md={6}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingLeft: "100px"
            }}
          >
            <img
              src={require("/Users/sulemanmalik/Desktop/epts-cra/src/images/Defilia.jpg")}
              style={{ width: "200px", height: "auto", borderRadius: "5px" }}
            />
          </Grid>
          <Grid item md={6}>
            <div className={classes.mainFeaturedPostContent}>
              <Typography
                component="h1"
                variant="h3"
                color="black"
                gutterBottom
              >
                Deifilia
              </Typography>
              <Divider/>
              <Typography variant="body1" color="grey" paragraph>
                Hey! I’m Deifilia, and I’m in U2 Chemical Engineering with a
                minor in CS. In my ideal life, I’d be a
                engineer-athlete-published writer. Since life isn’t ideal, I
                make up for it by playing Ultimate Frisbee, hiking up mountains,
                and writing little articles for myself. My goal for the year is
                to debunk the myth that U1 CHEE courses are impossible to
                succeed in. The hardest part is figuring out how to study and
                what you need to know. Drop by my office hours with your
                study/assignment/midterm questions, and I’ll give you a hand.
                I’m looking forward to meeting you! - Deifilia
              </Typography>
            </div>
          </Grid>
        </Grid>
        </CardContent>
        </CardActionArea>
      </Card>

      <Paper
        className={classes.mainFeaturedPost}
        elevation="24"
        style={{ width: "900px", height: "400px" }}
      >
        <Grid
          container
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            paddingRight: 70
          }}
        >
          <Grid
            item
            md={6}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingLeft: "100px"
            }}
          >
            <img
              src={require("/Users/sulemanmalik/Desktop/epts-cra/src/images/Defilia.jpg")}
              style={{ width: "200px", height: "auto", borderRadius: "5px" }}
            />
          </Grid>
          <Grid item md={6}>
            <div className={classes.mainFeaturedPostContent}>
              <Typography
                component="h1"
                variant="h3"
                color="black"
                gutterBottom
              >
                Deifilia
              </Typography>
              <Typography variant="body1" color="grey" paragraph>
                Hey! I’m Deifilia, and I’m in U2 Chemical Engineering with a
                minor in CS. In my ideal life, I’d be a
                engineer-athlete-published writer. Since life isn’t ideal, I
                make up for it by playing Ultimate Frisbee, hiking up mountains,
                and writing little articles for myself. My goal for the year is
                to debunk the myth that U1 CHEE courses are impossible to
                succeed in. The hardest part is figuring out how to study and
                what you need to know. Drop by my office hours with your
                study/assignment/midterm questions, and I’ll give you a hand.
                I’m looking forward to meeting you! - Deifilia
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Paper>

      <Paper
        className={classes.mainFeaturedPost}
        elevation="24"
        style={{ width: "900px", height: "400px" }}
      >
        <Grid
          container
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            paddingRight: 70
          }}
        >
          <Grid
            item
            md={6}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              paddingLeft: "100px"
            }}
          >
            <img
              src={require("/Users/sulemanmalik/Desktop/epts-cra/src/images/Defilia.jpg")}
              style={{ width: "200px", height: "auto", borderRadius: "5px" }}
            />
          </Grid>
          <Grid item md={6}>
            <div className={classes.mainFeaturedPostContent}>
              <Typography
                component="h1"
                variant="h3"
                color="black"
                gutterBottom
              >
                Deifilia
              </Typography>
              <Typography variant="body1" color="grey" paragraph>
                Hey! I’m Deifilia, and I’m in U2 Chemical Engineering with a
                minor in CS. In my ideal life, I’d be a
                engineer-athlete-published writer. Since life isn’t ideal, I
                make up for it by playing Ultimate Frisbee, hiking up mountains,
                and writing little articles for myself. My goal for the year is
                to debunk the myth that U1 CHEE courses are impossible to
                succeed in. The hardest part is figuring out how to study and
                what you need to know. Drop by my office hours with your
                study/assignment/midterm questions, and I’ll give you a hand.
                I’m looking forward to meeting you! - Deifilia
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </Grid>
  );
};

Tutors.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Tutors);
