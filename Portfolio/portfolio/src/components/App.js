import './App.css';

import React, { useState } from 'react';
import Particles from 'react-particles-js';
import { Redirect } from 'react-router-dom';
import { Route, Switch } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

import Main from './Main';
import Portfolio from './Portfolio';

function App() {
  let location = useLocation(); 
  const [navigation,setNavigation] = useState(       location.pathname===`/portfolio/presentation` ? "presentation" : 
                                                location.pathname===`/portfolio/projects` ? "projects" :
                                                location.pathname===`/portfolio/contact` ? "contact" : "presentation"
  );
  return (
    <div style={{minHeight: '100vh', position:'relative'}} >  
    <Particles  style={particles}
                            params={particlesParametres1} />       
        <Switch>
              <Redirect exact from="/" to="/Main/" />
              <Route path="/Main/"><Main  onChange={(nav)=>setNavigation(nav)}/></Route>
              <Route path={`/portfolio/`}>
                <Portfolio navigation={navigation} onChange={(nav)=>setNavigation(nav)}/>
              </Route> 
        </Switch>
    </div>
  );
}

export default App;

const particles ={
  backgroundColor: 'LightSeaGreen',
  position: 'fixed',
  top:0,
  right:0,
  bottom:0,
  left:0,
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