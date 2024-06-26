import React, { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import './experience.css'
import Typography from '@mui/material/Typography';
import { styled } from '@mui/system';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function TabPanel(props) {

  
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        sx={{ '.MuiBox-root': { paddingTop: '0px' }, maxWidth: '500px'}}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3, pt: 0, maxWidth: '650px'}}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }


  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };
  

export default function Experience(){
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('lg'));
  const [isHorizontal, setIsHorizontal] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsHorizontal(window.innerWidth < 600);
        };

        // Set the initial state
        handleResize();

        // Add the event listener
        window.addEventListener('resize', handleResize);

        // Clean up the event listener
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    const [value, setValue] = useState(0);

    function a11yProps(index) {
      if (isHorizontal) {
        return {
          id: `full-width-tab-${index}`,
          "aria-controls": `full-width-tabpanel-${index}`
        };
      } else {
        return {
          id: `vertical-tab-${index}`
        };
      }
    }

  const handleChange = (event, newValue) => {
    console.log(newValue)
    setValue(newValue);
  };

  const color = '#FF4500'
    return (
    
      <div className="experience-wrapper">
      <Box className="custom-box" sx={{ flexGrow: 1, bgcolor: '#1f1f2e', display: 'flex', height: 'auto', width: 'auto' }}>
            <Tabs
              orientation="vertical"
              value={value}
              onChange={handleChange}
              TabIndicatorProps={{style: {background:color, color:color}}}
              aria-label="Vertical tabs example"
              sx={{ '.MuiTab-root': {
                alignItems: 'baseline', color: color
            }, '.MuiTabs-scroller': {
            overflow: 'visible', // Ensures the scroller doesn't cut off content
            marginRight: '0px', // Adjusts the right margin as per the style you want
          },borderRight: 1, paddingBottom: '5%', borderColor: 'divider', height: '100%', width: isSmallScreen ? '100%' : '300px', '&.Mui-selected': { color: color } }}
            >
              <Tab sx={{'&.Mui-selected': { color: color }}} label="Deloitte" {...a11yProps(0)}/>
              <Tab sx={{'&.Mui-selected': { color: color }}} label="University of Sydney" {...a11yProps(1)}/>
              <Tab sx={{'&.Mui-selected': { color: color }}} label="Deloitte Internship" {...a11yProps(2)}/>
              <Tab sx={{'&.Mui-selected': { color: color }}} label="Conducive Technologies" {...a11yProps(3)}/>
            </Tabs>
            <TabPanel value={value} index={0}>
              <span className="tab-content">
                <span className="job-title">
                  <span className="job-title-text">Software Engineer @ </span><span className='job-title-text-2'>Deloitte</span>
                </span>
                <span className="job-duration">
                  <span className="job-duration-text">Jan 2023 - Jul 2023</span>
                </span>
                <span className="job-tasks">
                  <ul>
                    <li className="job-tasks-b1">
                      Wrote SQL queries for backend payment API calls using Apex (Java) code for the Australian Olympic 
                      Committee (AOC) and incorporated Google ReCaptcha to make payments secure
                    </li>
                    <li className="job-tasks-b2">
                      Implemented payment web page and receipt enhancements using tools like Lightning Web Components, adhering
                      to Object-Oriented Principles (OOP). Integrated Stripe API for seamless payment processing. Reduced load 
                      times and payment processing by 20%
                    </li>
                  </ul>
                </span>
              </span>
            </TabPanel>
            <TabPanel value={value} index={1}>
              <span className="tab-content">
                <span className="job-title">
                  <span className="job-title-text">Research Internship @ </span><span className='job-title-text-2'>The University of Sydney</span>
                </span>
                <span className="job-duration">
                  <span className="job-duration-text">Feb 2022 - Dec 2022</span>
                </span>
                <span className="job-tasks">
                  <ul>
                    <li className="job-tasks-b1">
                    My findings were published at the prestigious UbiComp 2022 conference and the ACM journal (Association 
                    for Computing Machinery).
                    </li>
                    <li className="job-tasks-b2">
                    Utilized data mining algorithms and unsupervised machine learning techniques from scikit-learn to
                    produce a habit change detection algorithm with an 80% accuracy
                    </li>
                    <li className="job-tasks-b3">
                    Created a web portal using Heroku and Flask to automatically collect data from APIs for smart plugs and store
                    them in a MongoDB database. This helped me automate the data collection process from 8am - 5pm every day
                    </li>
                  </ul>
                </span>
              </span>
            </TabPanel>
            <TabPanel value={value} index={2}>
            <span className="tab-content">
                <span className="job-title">
                  <span className="job-title-text">Software Engineer Intern @ </span><span className='job-title-text-2'>Deloitte</span>
                </span>
                <span className="job-duration">
                  <span className="job-duration-text">Dec 2021 - Feb 2022</span>
                </span>
                <span className="job-tasks">
                  <ul>
                    <li className="job-tasks-b1">
                    Developed forms using React for a local energy company and developed a backend server that utilized REST 
                    API calls to store user information
                    </li>
                    <li className="job-tasks-b2">
                    Wrote unit tests using JUnit to verify the correctness of form functionality
                    </li>
                  </ul>
                </span>
              </span>
            </TabPanel>
            <TabPanel value={value} index={3}>
              <div className="tab-content">
                <div className="job-title">
                  <span className="job-title-text">Software Engineer Intern @ </span><span className='job-title-text-2'>Conducive Technologies</span>
                </div>
                <div className="job-duration">
                  <span className="job-duration-text">July 2021 - Oct 2021</span>
                </div>
                <div className="job-tasks">
                  <ul>
                    <li className="job-tasks-b1">
                    Used Apache Kafka with Python in order to collect real-time video streaming data for Azure analytics. The data was provided to the Australian government for processing amount of people arriving at COVID testing sites.
                    </li>
                    <li className="job-tasks-b2">
                    Wrote unit tests using JUnit to verify the correctness of form functionality
                    </li>
                  </ul>
                </div>
              </div>
            </TabPanel>

          </Box>
          </div>)

}