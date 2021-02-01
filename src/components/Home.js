import React from "react";
import PropTypes from "prop-types";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img from "../images/dawn.jpg";

import {
  Paper,
  Grid,
  withStyles,
  Typography,
  Divider,
  createMuiTheme
} from "@material-ui/core";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1
};

const theme = createMuiTheme({
  palette: {
    light: "#757ce8"
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
    backgroundImage: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)",
    backgroundColor: theme.palette.grey[800],
    color: theme.palette.common.white,
    marginBottom: theme.spacing.unit * 4
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

const Home = props => {
  const { classes } = props;

  return (
    <div className={classes.root}>
      {/* <Slider {...settings}>
        <div style={{minWidth: "500px", display: "block", marginLeft: "0", marginRight: "auto", textAlign: "center"}}>
          <img src={img} style={{width: "100%"}}/>
        </div>
        <div>
          <h3>2</h3>
        </div>
      </Slider> */}
      <div style={{ justifyContent: "center" }}>
        <img
          src={require("../images/facebook-cover.png")}
          style={{ width: "80%", height: "auto", borderRadius: "5px" }}
        />
      </div>

      {/* <Paper className={classes.mainFeaturedPost}>
        <Grid container>
          <Grid item md={6}>
            <div className={classes.mainFeaturedPostContent}>
              <Typography
                component="h1"
                variant="h3"
                color="inherit"
                gutterBottom
                
              >
                Welcome to the EPTS
              </Typography>
              <Typography variant="h5" color="inherit" paragraph>
                Free tutoring service for U0 & U1 students engineering students 
              </Typography>
            </div>
          </Grid>
        </Grid>
      </Paper> */}

      <Grid container spacing={40} className={classes.mainGrid}>
        {/* Main content */}
        <Grid item xs={12} md={8}>
          <Typography variant="h6" gutterBottom>
          COVID-19 Updates
          </Typography>

          <Divider />

          <Typography variant="body1">
          All our tutoring services for the Winter 2021 semester will be offered
          remotely and we intend to maintain the excellent standard of tutoring
          that the students have come to expect.
          To facilitate this online transition, all EPTS Tutors will now have 
          separate MyCourses pages that will allow students to directly interact
          with tutors, access helpful material that the tutor will post,
          and find all the Zoom links and announcements for the tutor's weekly office 
          hours and exam review sessions. 

          Please fill out the following form to register for the EPTS MyCourses 
          pages:<br></br>


          <a href="https://docs.google.com/forms/d/e/1FAIpQLScb9xDS5kbnTaMzb37dSjz3osBiUkCFSYlhaYkP2WEcv7_HAA/viewform"> HERE </a> <br></br>
          For any immediate questions please email <a href="mailto:epts@mcgilleus.ca">epts@mcgilleus.ca</a>
          </Typography>

          <br />

          <Typography variant="h6" gutterBottom>
            Welcome
          </Typography>

          <Divider />

          <Typography variant="body1">
          The Engineering Peer Tutoring Service is a free tutoring service for
           U0 and U1 engineering students sponsored by the 
           Faculty of Engineering. Tutorial office hours are held on a weekly basis 
           in the McGill Engineering Student Centre on the ground floor of 
           the Frank Dawson Adams Building, Room 6B.  EPTS tutors can answer 
           some of the most challenging questions and help give students what 
           they need to obtain results in their respective field of study. 
           EPTS also offers direct contact with an upper-year student who has 
           already been through the program!
          </Typography>

          <br />

          <Typography variant="h6" gutterBottom>
            Hiring Process
          </Typography>

          <Divider />

          <Typography variant="body1" gutterBottom>
          The application period will begin in the first week of each semester.
           Key dates will be posted closer to the application period.To apply, 
           applicants must specify which classes they want to tutor as well as 
           send a copy of their transcript, and resume to epts@mcgilleus.ca by 
           the deadline. Applicants will be contacted about interviews by the 
           second week of the semester at the latest. In order to be eligible 
           all applicants must meet the following requirements
            <br />
            • Currently be an undergraduate student in the faculty of
            Engineering
            <br />
            • Have completed their first year at McGill
            <br />• Have achieved at least an A- in the classes they tutor
          </Typography>
          <br />

          <Typography variant="h6" gutterBottom>
            Advisory Committee
          </Typography>

          <Divider />

          <Typography variant="body1">
            Kaila Folinsbee (Associate Director, Engineering Student Centre) and
            Professor David Frost (Associate Dean, Student Affairs) form the
            advisory committee. They and the student EPTS manager, Sinan Abi
            Farraj, form the link between the tutors and the McGill
            administration and oversee operation of the service. They also work
            to ensure that EPTS receives continued funding.
          </Typography>
        </Grid>
        {/* End main content */}
        {/* Sidebar */}
        <Grid item xs={12} md={4}>
          <Paper elevation={0} className={classes.sidebarAboutBox}>
            <Typography variant="h6" gutterBottom>
              Updates
            </Typography>
            <Typography>
            Planned midterm and final review sessions for this 
            semester are posted on our Facebook page, click  
            <a href="https://www.facebook.com/pg/epts.mcgill/events"> here</a>
            


            </Typography>
          </Paper>

          



          <Typography
            variant="h6"
            gutterBottom
            className={classes.sidebarSection}
          >
            Archives
          </Typography>

          <Typography
            variant="h6"
            gutterBottom
            className={classes.sidebarSection}
          >
            <b>Social:</b><br></br>
            Find out more information about our service on our Facebook page:
            <a href="https://www.facebook.com/epts.mcgill/"> click here</a>
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
};

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
