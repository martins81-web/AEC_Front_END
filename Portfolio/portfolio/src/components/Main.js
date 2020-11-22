import { Typography } from '@material-ui/core';
import { IconButton } from '@material-ui/core/';
import React from 'react';
import { Link } from 'react-router-dom';

import { I18nProvider, LOCALES } from '../i18n';
import translate from '../i18n/translate';

/* import { IconButton, Select, Switch, withStyles } from '@material-ui/core/'; */

//import { FormattedMessage } from 'react-intl';

const overlay = {
    position: 'absolute',
    justifyContent: 'center',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'white',
    border: '2px solid white',
    padding: '20px',
    borderRadius: '14px',
    backgroundColor: 'SteelBlue',
    WebkitTouchCallout: 'none', /* iOS Safari */
    WebkitUserSelect: 'none', /* Safari */
    KhtmlUserSelect: 'none', /* Konqueror HTML */
    MozUserSelect: 'none', /* Old versions of Firefox */
    msUserSelect: 'none', /* Internet Explorer/Edge */
    userSelect: 'none',    
}



class Main extends React.Component {

    constructor() {
    super()
    this.state = {  buttonBackgroundcolor: 'transparent',
                    buttonColor: 'white',
                    backgroundColor: 'LightSeaGreen',
                    language: LOCALES.FRENCH,
                    checked: false
    };
    }

  
 
    mouseOver =()=>{
        this.setState({
            buttonBackgroundcolor: 'white',
            buttonColor: 'black'
        })
    }

    mouseOut =()=>{
        this.setState({
            buttonBackgroundcolor: 'transparent',
            buttonColor: 'white'
        })
    }

    

    render() {

    const button ={
        color: this.state.buttonColor,
        border: '1px solid white',
        backgroundColor: this.state.buttonBackgroundcolor,
    }


    return (
        <I18nProvider locale={this.state.language}>
{/*             <div style={page}>
 */}              {/*   <div style={selectStyle}>
                    <div style={{padding: '10px', border: '2px solid black', }}>
                        <div style={{display: 'flex', alignItems: 'center', borderBottom: '2px solid black', paddingBottom: '10px' }}>
                            <Typography>Français</Typography>
                            <PurpleSwitch onClick={this.handleLanguageChange} 
                            checked={this.state.checked} 
                            onChange={()=>this.setState({checked:!this.state.checked}) }
                            disableRipple
                            />
                            <Typography>English</Typography>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '10px'}}>
                            <Typography>{translate('MODE')}:</Typography>
                            <Select  onChange={(e)=> this.handleModeSelection(e)} native id="select" >
                                <FormattedMessage id='PARTICLES' children={msg=> <option value={1}>{msg}</option>}/>
                                <FormattedMessage id='CONNECTIONS' children={msg=> <option value={2}>{msg}</option>}/>
                                <FormattedMessage id='SNOW' children={msg=> <option value={3}>{msg}</option>}/>
                                <FormattedMessage id='CHRISTMAS' children={msg=> <option value={4}>{msg}</option>}/>
                            </Select >
                        </div>
                        
                    </div>
                </div> */}
            
                <div style={overlay}>
                    <div className='text-center mb-3'>
                        <Typography variant={'h3'}>Eric Martins</Typography>
                        <Typography variant={'h6'} style={{color: '#48fb47'}}>{translate('DEV')}</Typography>
                        {/*<Typography>{translate('EDIT',  {path:'lalala'} )}</Typography>*/}                    
                    </div>
                    <div style={button}>
                        
                            <IconButton 
                                component={Link}
                                to={"/portfolio/presentation"}
                                onMouseOver={this.mouseOver}
                                onMouseOut={this.mouseOut}
                                color='inherit'
                                onClick={()=>this.props.onChange('presentation')}
                            >
                                
                            <Typography variant={'h6'}>{translate('SEE_PORTFOLIO')}</Typography>
                        </IconButton>
                        

                    </div>       
                </div> 
{/*             </div>
 */}        </I18nProvider>
    );
    }
}

export default Main;



  

