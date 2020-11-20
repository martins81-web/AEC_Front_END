import { AppBar, Box, IconButton, Toolbar, Typography } from '@material-ui/core/';
import React from 'react';

const iconButtonStyles ={
    color: 'white'
}

const toolbarStyles ={
    display: 'flex',
    justifyContent: 'space-around'
}

const bracketStyles ={
    color: 'darkgray'
}

const componentStyles ={
    color: 'springgreen'
}

const componentPropsNameStyles ={
    color: '#67cdfe',
    marginLeft: '0.65em'
}

const componentPropsStyles ={
    color: '#ce725b',
}

class NavBar
 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <AppBar>
                    <Toolbar  style={toolbarStyles}>
                        <Box>
                            <IconButton style={iconButtonStyles}>
                                <Typography style={bracketStyles} variant="h4" >
                                    {'<'}
                                </Typography>
                                <Typography style={componentStyles} variant="h5" >
                                    {'EricMartins'}
                                </Typography>
                               {/*  <Typography style={componentPropsNameStyles} variant="h5" >
                                    {'profession'}
                                </Typography>
                                <Typography variant="h5" >
                                    {'='}
                                </Typography>
                                <Typography style={componentPropsStyles} variant="h5" >
                                    {'"Développeur Front-End"'}
                                </Typography> */}
                                <Typography style={bracketStyles} variant="h4" >
                                    {'/>'}
                                </Typography>
                            </IconButton>
                        </Box>
                        <Box>
                            <IconButton style={iconButtonStyles}> 
                                <Typography variant="h5" >
                                Présentation
                                </Typography>
                            </IconButton>
                            <IconButton style={iconButtonStyles}> 
                                <Typography variant="h5" >
                                PortFolio
                                </Typography>
                            </IconButton>
                            <IconButton style={iconButtonStyles}> 
                                <Typography variant="h5" >
                                Contact
                                </Typography>
                            </IconButton>
                        </Box>
                    </Toolbar>
            </AppBar>
         );
    }
}
 
export default NavBar
;