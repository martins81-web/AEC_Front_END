import { Box, Container } from '@material-ui/core/';
import React from 'react';

import NavBar from './NavBar';
import PresentationSimple from './PresentationSimple';

const containerStyles ={
  height: '100vh',
}

const boxStyles ={
  height: '80vh',
  display:'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

const navBarBoxStyles ={
  height: '9vh',
  display:'flex',
  justifyContent: 'center',
  alignItems: 'center'
}

function App() {
  return (
    <Container style={containerStyles} maxWidth='false' disableGutters={true}  component="span">
      <Box style={navBarBoxStyles}>
        <NavBar/>
      </Box>
      <Box style={boxStyles}>
        <PresentationSimple/> 
      </Box>
    </Container>
  );
}

export default App;
