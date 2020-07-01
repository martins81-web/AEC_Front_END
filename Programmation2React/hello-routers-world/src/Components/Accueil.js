import React from "react"; 
import Row from 'react-bootstrap/Row';  
import Col from 'react-bootstrap/Col';  
import Image from 'react-bootstrap/Image';  

import Bruce from '../img/Bruce.jpg'
export class Accueil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
                    <Row className="text-center no-gutters" style={rowStyle}>
                        <Col xs xl='12'>
                            <h1>Péninsule Bruce - Ontario</h1>
                        </Col>
                        <Col xs xl='12'>
                            <Image src={Bruce} />
                        </Col>
                        <Col xs xl='12' className='mt-3'>
                            <p>La péninsule Bruce est une bande de terre entre le lac Huron et la baie Géorgienne au Canada. C'est une région de la province de l'Ontario ayant un axe nord-sud qui suit l'escarpement du Niagara et pointe vers l'île Manitoulin. Elle fait partie du comté de Bruce et tire son nom de James Bruce (Lord Elgin), gouverneur général du Canada de 1847 à 1854. La péninsule est une zone touristique importante à environ 3 heures de route au nord-ouest de Toronto.
                            La région compte deux parcs nationaux canadiens, soit le parc national de la Péninsule-Bruce et le parc marin national de Fathom Five, plus d'une demi-douzaine de parc provinciaux de l'Ontario1, l'Observatoire des oiseaux migrateurs de la péninsule-Bruce et le sentier de randonnée « Bruce trail ».</p>
                        </Col>
                    </Row>
                  );
    }
}
 
const rowStyle={
    marginBottom:'2rem',
    color: 'white',
    backgroundColor: '#343a40',
    padding: '1rem'

}
