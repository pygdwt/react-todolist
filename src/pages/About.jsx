import React from 'react';
import Paper from '../components/paper/Paper';
import Container from '../layout/Container';
import {Link} from 'react-router-dom';

const About = () => {
  return (
    <Paper>
      <Container //flexDirection="column" justifyContent="space-between" height="100%" 
      />
      <h1> About </h1>
      <Link to="/"> Home </Link>
    </Paper>
  )
}

export default About;