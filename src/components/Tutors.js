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
              src={require("../images/tutor profiles/Deifilia.jpg")}
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
              Hey! I’m Deifilia, and I’m in U2 Chemical Engineering with a minor in CS.
               In my ideal life, I’d be a engineer-athlete-published writer. Since life isn’t ideal,
                I make up for it by playing Ultimate Frisbee, hiking up mountains, and writing little articles for myself.
                 My goal for the year is to debunk the myth that U1 CHEE courses are impossible to succeed in.
                  The hardest part is figuring out how to study and what you need to know. 
              Drop by my office hours with your study/assignment/midterm questions, and I’ll give you a hand. I’m looking forward to meeting you!
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
              src={require("../images/tutor profiles/Denis.jpg")}
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
                Denis
              </Typography>
              <Typography variant="body1" color="grey" paragraph>
              My name is Denis and I will be your tutor for MATH271 Partial Differential Equations this Fall. I am currently in my final year of 
              Mechanical Engineering in the Honours stream. This is my second year tutoring at EPTS but I've been a tutor in all kinds of engineering related subjects
               for over six years now. These years of experience tutoring hundreds and hundreds of students have truly made me grow as a teacher.
                My goal is not only to make you succeed in this course; it's also to make you appreciate the intricacies of this realm of 
                mathematics known as partial differential equations.
               I guarantee that knowledge of partial differential equations will be of crucial importance to you!
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
              src={require("../images/tutor profiles/Abdul.jpg")}
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
                Abdul
              </Typography>
              <Typography variant="body1" color="grey" paragraph>
                Hi, My name's Abdul, I'm tutoring U1 Bioengineering courses.
                 I'm a U2 Bioengineering Student minoring in Software Engineering.
                  Whether it's BIEN 200, 210, or 300, I will be there to help you ace those courses.
                   Feel free to drop in at the EPTS room if you need help with assignments, projects, exams, or just understanding the course Material.
                    We can also chat about Bioengineering and what makes it cool in general. Looking forward to see you all!
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
            <br></br>
            <img
              src={require("../images/tutor profiles/Dylan.jpg")}
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
                Dylan
              </Typography>
              <Typography variant="body1" color="grey" paragraph>
                <br></br>
               My name is Dylan and I am the ECSE-Software tutor this year! I am a fourth year Software Engineering student and this is my second year with EPTS.
               I know how difficult the first year Software courses can be, so don’t hesitate to come to EPTS for any questions you may have!
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
            <br></br>
            <img
              src={require("../images/tutor profiles/Hansen.jpg")}
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
                Hansen
              </Typography>
              <Typography variant="body1" color="grey" paragraph>
                <br></br>
                My name is Hansen, and I’ll be your tutor for all the first year MECH courses! Don’t let the fact that they’re 200 level courses deceive you; Statics, 
                Dynamics and Thermodynamics are some of the hardest courses in our curriculum.
                 I always enjoy helping out other students, so come ask me about anything, be it the heat transfer between a cold beer and your stomach, to the gyroscopic dynamics of a satellite!
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
            <br></br>
            <img
              src={require("../images/tutor profiles/Itai.jpg")}
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
                Itai
              </Typography>
              <Typography variant="body1" color="grey" paragraph>
                <br></br>
                My name is Itai Wine, I'm in U4 studying bioengineering and am very excited to be one of the U1 Math tutors at EPTS this year! As a returning EPTS tutor, 
                I can't wait to continue helping students, 
                leading review sessions, and being part of the EPTS team! 
                Please come by my drop in hours if you ever need help with MATH 262, 263 or 264. I am excited to meet you all!
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
            <br></br>
            <img
              src={require("../images/tutor profiles/George.jpg")}
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
                George
              </Typography>
              <Typography variant="body1" color="grey" paragraph>
                <br></br>
                My name is George and I am a U3 student in mechanical engineering. I am tutoring U0 Math courses (133, 140, 141) - here’s looking at you, Freshies! I’ve tutoring since high school, 
                and though this is my first year at EPTS, I tutored MATH262 at an external organization last year.
                 I will also be hosting MATH140/141 review sessions, so stay tuned!
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
            <br></br>
            <img
              src={require("../images/tutor profiles/Judy.jpg")}
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
                Judy
              </Typography>
              <Typography variant="body1" color="grey" paragraph>
                <br></br>
                Hey everyone! My name is Judy, and I'm one of your U1 Math tutors - that means I'm here to help you with anything you need for 262, 263, or 264. When I'm not doing math (an increasingly rare occasion, to be honest), you can probably find me drawing, painting, or sipping some beers at Blues Pub. I'm also a U2 Mech student, and I know just how stressful McGill can be
                 - but with the right approach, math really doesn't have to be one of the reasons why. 
                 Drop by my hours, and I promise I'll help you out as best as I can!
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
            <br></br>
            <img
              src={require("../images/tutor profiles/Mukit.jpg")}
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
                Mukit
              </Typography>
              <Typography variant="body1" color="grey" paragraph>
                <br></br>
                Hi! I’m studying Mechanical Engineering with a minor in Computer Science, and this year I’m the COMP tutor for EPTS.
                 I’ve been tutoring people since high school and I love doing it. I love learning new languages in my free time and exploring cool things I can do with coding.
                  EPTS helped me a lot in my first two years at McGill and I’m here to return the favor. I think my favorite part of being a tutor is seeing the ‘ah-hah’ moment when I
                   help a student understand a topic they were struggling with for a while. 
                If you’re ever having problems understand a tricky algorithm your professor showed in class,
                 or just want to chat about CS things, feel free to drop by my office hours. Cheers!
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
            <br></br>
            <img
              src={require("../images/tutor profiles/Nicolas.jpg")}
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
                Nicolas
              </Typography>
              <Typography variant="body1" color="grey" paragraph>
                <br></br>
                I am a fourth year Honors Electrical Engineering student. I am tutoring students for Electrical Circuits 1, 
                Electrical Circuits 2, Signal and Systems 1 and Electric and Magnetic Fields. 
                It brings me great pleasure to help students and I look forward to meeting you!
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
            <br></br>
            <img
              src={require("../images/tutor profiles/Roey.jpg")}
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
                Roey
              </Typography>
              <Typography variant="body1" color="grey" paragraph>
                <br></br>
                My name is Roey and I am the physics U0 tutor this year! I am a second year Software Engineering student and I'm very excited to 
                help students with assignments, midterm and final prep,
                 and any other questions they might have! If you ever need any help with Physics 131 or 142,
                  please come to my drop in hours. I am looking forward to a great year with all of you!
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
            <br></br>
            <img
              src={require("../images/tutor profiles/Salar.jpg")}
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
                Salar
              </Typography>
              <Typography variant="body1" color="grey" paragraph>
                My name is Salar and I’m a U3 civil engineering student with a minor in computer science.
                 Don’t ask me how those two programs are related; I wouldn’t be able to tell you. I just enjoy them both.
                  I’m also a huge sports fan and currently have 2 (dreadful) fantasy teams in football and basketball. 
                  As this semester’s CIVE tutor, I’ll have the pleasure of going over some of the foundation courses in the civil engineering curriculum,
                   so whether it’s a question on Mohr’s circle,
                 general tips on how to study for the different courses or just what to expect from exams,
                  come see me during my hours and I’ll be sure to clear some things up!
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
            <br></br>
            <img
              src={require("../images/tutor profiles/Sepher.jpg")}
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
                Sepehr
              </Typography>
              <Typography variant="body1" color="grey" paragraph>
              Hello, 
              My name is Sepehr Moalemi but I go by Sep.
              I am a third-year Mechanical Engineering student minoring in Mathematics. 
              I have previously been a TA for Math 262 twice and I am currently a TEAM TA for Math 264. As for EPTS,
               I am responsible for Math 133 and could help with other U0 Math courses.

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
            <br></br>
            <img
              src={require("../images/tutor profiles/Sinan.jpg")}
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
                Sinan
              </Typography>
              <Typography variant="body1" color="grey" paragraph>
              Hi everyone, my name is Sinan and I am very excited to be the EPTS Manager and your MIME tutor for this year!
               I’m a fourth (fifth?) year Materials Engineering student, minoring in nanotechnology. I know just how difficult the
                first year of engineering classes can be. With all the different professors, different materials, and different expectations,
                 it can be very easy to get overwhelmed. If you ever have any questions about course material, internships, 
                 or just want to chat, drop by anytime! I hope that EPTS will help 
              ease your transition into your first year of McGill Engineering and provide 
              you with all the help you need in your exciting path of Engineering for the years to come!

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
