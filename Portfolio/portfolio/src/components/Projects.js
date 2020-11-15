import { Tooltip } from '@material-ui/core/';
import GitHubIcon from '@material-ui/icons/GitHub';
import WebIcon from '@material-ui/icons/Web';
import React from 'react';
import { Card } from 'react-bootstrap';

import { I18nProvider } from '../i18n';
import translate from '../i18n/translate';

class Projects extends React.Component {
    constructor(props) {
        super(props);
        this.state = {language:this.props.language  }
    }

    render() { 
        return (
            <I18nProvider locale={this.state.language}>
                <Card className="h-100 cardDrop" style={{ backgroundColor: 'LightSeaGreen', borderRadius: '20px', border:'none'}} >
                    <Tooltip title={this.props.nom} arrow placement="top">
                        <Card.Link  className='imgContainer' 
                                    style={{borderTopLeftRadius: '20px', borderTopRightRadius: '20px'}} 
                                    href={this.props.website}
                                    target="_blank"
                        >
                            <Card.Img  className='imgLink' variant="top" src={this.props.src} />
                        </Card.Link>
                    </Tooltip>
                    <Card.Body >
                        <Card.Title >{this.props.nom}</Card.Title>
                        <Card.Text>
                            {this.props.description}
                        </Card.Text>
                    </Card.Body>
                    <div className='px-3'>
                        <div className='d-flex text-center' style={{backgroundColor: 'LightSeaGreen', borderTop: '3px solid steelBlue', borderBottomLeftRadius: '20px', borderBottomRightRadius: '20px'}}>
                            <div style={{ flex: 1}}  className='my-2'>
                                <Tooltip title={translate('SEE_WEBSITE')}>
                                    <Card.Link className='iconLink' href={this.props.website} target="_blank"><WebIcon style={{ fontSize: 30 }}/> </Card.Link>
                                </Tooltip>
                            </div>
                            <div style={{ flex: 1}} className='my-2'>
                                <Tooltip title={translate('SEE_CODE')}>
                                    <Card.Link className='iconLink' href={this.props.github} target="_blank"><GitHubIcon style={{ fontSize: 30 }}/></Card.Link>
                                </Tooltip>
                            </div>
                        </div>
                    </div>
                </Card>
            </I18nProvider>
          );
    }
}
 
export default Projects;


