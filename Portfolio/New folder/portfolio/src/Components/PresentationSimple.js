import { Grid } from '@material-ui/core';
import React from 'react';

const avatarContainer ={
    backgroundColor: 'darkgray',
    border: '2px solid black',
    height: '50vh',
    width: '50vw',
    borderRadius: '3em',
}

const gridItemTextStyles ={
    backgroundColor: 'white',

}

class PresentationSimple extends React.Component {
    constructor(props) {
        super(props);
        this.state = { };
    }
    render() {
        return (
                <Grid 
                    container 
                    style={avatarContainer}
                    direction="row"
                    alignItems="center"
                >
                    <Grid id='img' item xs={5}>
                        <img src={require("../img/Eric.jpg")} alt="eric"/>
                    </Grid>
                    <Grid id='text' style={gridItemTextStyles}  item  xs={6}>
                            <Grid item  xs={12}>
                                Eric
                            </Grid>
                    </Grid>
                </Grid>
        );
    }
}

export default PresentationSimple;