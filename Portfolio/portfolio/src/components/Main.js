import { Typography } from '@material-ui/core';
import { IconButton, Switch, withStyles } from '@material-ui/core/';
import React from 'react';
import Particles from 'react-particles-js';
import { Link } from 'react-router-dom';

import { I18nProvider, LOCALES } from '../i18n';
import translate from '../i18n/translate';

/* import { IconButton, Select, Switch, withStyles } from '@material-ui/core/'; */

//import { FormattedMessage } from 'react-intl';


class Main extends React.Component {

    constructor() {
    super()
    this.state = {  buttonBackgroundcolor: 'transparent',
                    buttonColor: 'white',
                    parametres: particlesParametres1,
                    overlayBackgroundColor: 'SteelBlue',
                    backgroundColor: 'LightSeaGreen',
                    language: LOCALES.FRENCH,
                    checked: false
    };
    }

    async componentDidMount() {
        try {
          await this.setState({language2 : this.props.location.pathname.substring(this.props.location.pathname.length-5,this.props.location.pathname.length)});
          await console.log(this.state.language2);
          }
         catch (error) {
          console.log(error);
        }
        if(this.state.language2 === 'en-us'){
            this.setState({
                language: LOCALES.ENGLISH,
                checked: true,
            });
        }
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

    handleModeSelection =(e)=>{
        let mode;

        switch(e.target.value) {
            case '1':
                mode='Particles';        
                break;
            case '2':
                mode='Connexions';      
                break;
            case '3':
                mode='Neige';            
                break; 
            case '4':
                mode='Noel';            
                break; 
            default:
                mode='Particles'; 
        }

        switch(mode) {
            case 'Particles':
                this.setState ({
                    parametres: particlesParametres1,
                    overlayBackgroundColor: 'SteelBlue',
                    backgroundColor: 'LightSeaGreen'
                });          
                break;
            case 'Connexions':
                this.setState ({
                    parametres: particlesParametres2,
                    overlayBackgroundColor: '#ed9121',
                    backgroundColor: 'black',
                });          
                break;
            case 'Neige':
                this.setState ({
                    parametres: particlesParametres3,
                    overlayBackgroundColor: 'Salmon',
                    backgroundColor: 'DarkSlateBlue'
                });          
                break; 
            case 'Noel':
            this.setState ({
                    parametres: particlesParametres4,
                    overlayBackgroundColor: '#aaa9ad',
                    backgroundColor: '#b61924'
                });          
                break; 
            default:
                this.setState ({
                    parametres: particlesParametres1,
                    overlayBackgroundColor: 'DarkSeaGreen',
                    backgroundColor: 'black'
                });          
        }
    }

    handleLanguageChange = () => {
        if (this.state.checked){
            this.setState({language: LOCALES.FRENCH});
        } else {
            this.setState({language: LOCALES.ENGLISH});
        }
    } 

    

    render() {

    const PurpleSwitch = withStyles({
            switchBase: {
                color: this.state.overlayBackgroundColor,
                '&$checked': {
                  color:  this.state.overlayBackgroundColor,
                },
                '&$checked + $track': {
                    backgroundColor: this.state.backgroundColor,
                },
                '&+$track': {
                    backgroundColor: this.state.backgroundColor,
                },
            },
            checked: {
            },
            track: {
                
            },
    })(Switch);

          
    const button ={
        color: this.state.buttonColor,
        border: '1px solid white',
        backgroundColor: this.state.buttonBackgroundcolor,
    }

    const particles ={
        backgroundColor: this.state.backgroundColor,
        position: 'fixed',
        top:0,
        right:0,
        bottom:0,
        left:0,
        zIndex: 0,
    }

    const overlay = {
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        color: 'white',
        border: '2px solid white',
        padding: '20px',
        borderRadius: '14px',
        backgroundColor: this.state.overlayBackgroundColor,
        WebkitTouchCallout: 'none', /* iOS Safari */
        WebkitUserSelect: 'none', /* Safari */
        KhtmlUserSelect: 'none', /* Konqueror HTML */
        MozUserSelect: 'none', /* Old versions of Firefox */
        msUserSelect: 'none', /* Internet Explorer/Edge */
        userSelect: 'none',    
    }

    
    return (
        <I18nProvider locale={this.state.language}>
            <div style={page}>
                <div style={selectStyle}>
                    <div style={{padding: '10px', border: '2px solid black', }}>
                        <div style={{display: 'flex', alignItems: 'center',/*  borderBottom: '2px solid black', paddingBottom: '10px' */}}>
                            <Typography>Français</Typography>
                            <PurpleSwitch onClick={this.handleLanguageChange} 
                            checked={this.state.checked} 
                            onChange={()=>this.setState({checked:!this.state.checked}) }
                            disableRipple
                            />
                            <Typography>English</Typography>
                        </div>
                       {/*  <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: '10px'}}>
                            <Typography>{translate('MODE')}:</Typography>
                            <Select  onChange={(e)=> this.handleModeSelection(e)} native id="select" >
                                <FormattedMessage id='PARTICLES' children={msg=> <option value={1}>{msg}</option>}/>
                                <FormattedMessage id='CONNECTIONS' children={msg=> <option value={2}>{msg}</option>}/>
                                <FormattedMessage id='SNOW' children={msg=> <option value={3}>{msg}</option>}/>
                                <FormattedMessage id='CHRISTMAS' children={msg=> <option value={4}>{msg}</option>}/>
                            </Select >
                        </div>
                         */}
                    </div>
                </div>
              
                <Particles  style={particles}
                            params={this.state.parametres} />
                <div style={overlay}>
                    <div className='text-center mb-3'>
                        <Typography variant={'h3'}>Eric Martins</Typography>
                        <Typography variant={'h6'} style={{color: '#48fb47'}}>{translate('DEV')}</Typography>
                        {/*<Typography>{translate('EDIT',  {path:'lalala'} )}</Typography>*/}                    
                    </div>
                    <div style={button}>
                        
                            <IconButton 
                                component={Link}
                                to={'/Portfolio/'+this.state.language}
                                onMouseOver={this.mouseOver}
                                onMouseOut={this.mouseOut}
                                color='inherit'
                            >
                                
                            <Typography variant={'h6'}>{translate('SEE_PORTFOLIO')}</Typography>
                        </IconButton>
                        

                    </div>       
                </div> 
            </div>
        </I18nProvider>
    );
    }
}

export default Main;



const selectStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    border: '1px solid white',
    zIndex: '100',
    margin: '20px',
    padding: '1px',
    backgroundColor: 'white',
}

const page ={
    position: 'relative',
    height: '100vh',
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center', 
    alignItems: 'center'

}

const particlesParametres4 = {
    "particles":{"number":{"value":50,"density":
{"enable":true,"value_area":800}},
"color":{"value":"#fff"},"shape":
{"type":"star","stroke":{"width":0,"color":"#000000"},
"polygon":{"nb_sides":5},"image":{"src":"img/github.svg","width":100,"height":100}},
"opacity":{"value":0.5,"random":true,"anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},
"size":{"value":10,"random":true,"anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},
"line_linked":{"enable":false,"distance":500,"color":"#ffffff","opacity":0.4,"width":2},
"move":{"enable":true,"speed":4,"direction":"bottom","random":false,"straight":false,"out_mode":"out","bounce":false,
"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},"interactivity":{"detect_on":"canvas",
"events":{"onhover":{"enable":true,"mode":"bubble"},"onclick":{"enable":true,"mode":"repulse"},"resize":true},
"modes":{"grab":{"distance":400,"line_linked":{"opacity":0.5}},
"bubble":{"distance":400,"size":4,"duration":0.3,"opacity":1,"speed":3},
"repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true
}

const particlesParametres3 = {
    "particles":
        {
        "number":
            {
            "value":110,
            "density":
                {
                "enable":true,
                "value_area":800
                }
            },"color":
            {
                "value":"#fff"
            },
            "shape":
            {"type":
            "circle",
            "stroke":
            {
                "width":0,
                "color":"#000000"},
            "polygon":{"nb_sides":5},
            "image":{"src":"img/github.svg","width":100,"height":100}},
            "opacity":
            {"value":0.5,"random":true,
            "anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},
            "size":{"value":10,"random":true,
            "anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},
            "line_linked":{"enable":false,"distance":500,"color":"#ffffff","opacity":0.4,"width":2},
            "move":{"enable":true,"speed":4,"direction":"bottom","random":false,"straight":false,"out_mode":"out",
            "bounce":false,"attract":{"enable":false,"rotateX":600,"rotateY":1200}}},
            "interactivity":{"detect_on":"canvas","events":{"onhover":{"enable":true,"mode":"bubble"},
            "onclick":{"enable":true,"mode":"repulse"},"resize":true},
            "modes":{"grab":{"distance":400,"line_linked":{"opacity":0.5}},
            "bubble":{"distance":400,"size":4,"duration":0.3,"opacity":1,"speed":3},
            "repulse":{"distance":200,"duration":0.4},"push":{"particles_nb":4},"remove":{"particles_nb":2}}},"retina_detect":true
}

const particlesParametres2 = {
    "particles": {
        "number": {
            "value": 40,
            "density": {
                "enable": true,
                "value_area": 500
            }
        },
        "color": {
            "value": "#ff9800"
        },
        "shape": {
            "type": "polygon",
            "stroke": {
                "width": 2,
                "color": "#ff9800"
            },
            "polygon": {
                "nb_sides": 6
            },
            "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
            }
        },
        "opacity": {
            "value": 0.5,
            "random": true
        },
        "size": {
            "value": 10,
            "random": true
        },
        "line_linked": {
            "enable": false,
            "distance": 200,
            "color": "#ff5722",
            "opacity": 0.3,
            "width": 2
        },
        "move": {
            "enable": true,
            "speed": 4,
            "direction": "bottom",
            "random": true,
            "straight": true,
            "out_mode": "out",
            "bounce": false,
            "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
            }
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": {
                "enable": true,
                "mode": [
                    "grab",
                    "bubble"
                ]
            },
            "onclick": {
                "enable": true,
                "mode": "push"
            },
            "resize": true
        },
        "modes": {
            "grab": {
                "distance": 400,
                "line_linked": {
                    "opacity": 0.7
                }
            },
            "bubble": {
                "distance": 600,
                "size": 12,
                "duration": 1,
                "opacity": 0.8,
                "speed": 2
            },
            "repulse": {
                "distance": 400,
                "duration": 0.4
            },
            "push": {
                "particles_nb": 20
            },
            "remove": {
                "particles_nb": 10
            }
        }
    },
    "retina_detect": true
}

const particlesParametres1 = {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    
}
  

