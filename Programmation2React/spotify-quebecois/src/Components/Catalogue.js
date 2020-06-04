import React from 'react';
import './App.css';
import Col from 'react-bootstrap/Col';
import Row  from 'react-bootstrap/Row'; 
import { Album } from './Album';
import { PageAlbum } from './PageAlbum';



export class Catalogue extends React.Component  {
    constructor(props) {
        super(props);
        this.state = { pageAlbum:false, albumClicke: -1, paroles: null }
    }

    handleAffichageCatalogue(){
        this.setState({pageAlbum: false});
        this.props.afficheAccueil(true);
    }

    render() { 
        if (this.state.pageAlbum){
            return <PageAlbum back={()=>this.handleAffichageCatalogue()} album={tabAlbums[this.state.albumClicke]}/>
        } else {
            return ( 
                <Row className='no-gutters'>
                        {tabAlbums.map((element,i) => ( element.artist.toLowerCase().includes(this.props.recherche.toLowerCase()) || element.title.toLowerCase().includes(this.props.recherche.toLowerCase())) &&
                            <Album  key={"album" + i} 
                                    src={element.src} 
                                    title={element.title} 
                                    artist={element.artist} 
                                    alt={element.alt} 
                                    pageAlbum={() => this.setState({pageAlbum: true, albumClicke:i})}
                                    onClick={(e)=>this.props.onClick(e)}
                                    >
                            </Album> )}
                </Row>
            );
        }
    }
}




var tabAlbums = [ 
    { 
        src : require("../img/albums/leDome.jpg"), 
        alt: "JeanLeloup_Ledôme",
        title: 'Le dôme', 
        artist: "Jean Leloup",
        releaseYear: '1996',
        chansons: [{
            nom: "Faire des enfants",
            paroles:<>
                    <Row className='mb-5'>
                        <Col xs lg="12">
                            <p>J'faisais du pouce depuis une heure dans un trou perdu le malheur</p> 
                            <p>S'acharnait sur moi ce jour-là , il me tenait, il m' lâchait pas</p>
                            <p>Quand à minuit oui j'aperçois une limousine nec plus ultra</p>
                            <p>C'est le diable je le connais il me connaît il m' lâchera pas</p>
                            <p>Nous arrêtons le plan suivant faire s'entre-tuer des tas de gens</p>
                            <p>Non sans avoir fait tout d'abord brûler quelques énormes bâtiments</p>
                            <p>Non sans avoir fait tout d'abord brûler quelques énormes bâtiments</p>
                            <p>Je me mets à l'ouvrage oui j'avoue d'abord un peu mollement</p>
                            <p>Puis enfin le coeur vient et</p>
                            <p>Allons-y gaiement</p>
                            <p>Il suffit d'exciter la connerie de tous ces braves gens</p>
                            <p>Pour qu'en deux temps et trois mouvements y s'mettent à se rentrer dedans</p>
                            <p>En moins de temps qu'il ne me faut pour te faire un enfant</p>
                        </Col> 
                    </Row>
                    <Row className='mb-5'>
<                         Col xs lg="12">
                            <p>Attends un peu avant d'me dire que tu voudrais des p'tits bébés</p>
                            <p>Les gens aiment bien quand ça fait mal</p>
                            <p>et y a pas de mal à s'faire du bien, à s'faire du bien</p>
                        </Col>
                    </Row>
                    <Row className='mb-5'>
<                         Col xs lg="12">
                            <p>Je suis couché dans l'herbe tendre et je rêvasse reconnaissant</p>
                            <p>devant moi la ville s'écroule</p>
                            <p>Devant moi à feu et à sang</p>
                            <p>Les gens sont frustrés à un point ma foi je crois extrêmement</p>
                            <p>IIs ont besoin de s'égorger au moins une p'tite fois d' temps en temps</p>
                        </Col>
                    </Row >
                    <Row className='mb-5'>
<                         Col xs lg="12">
                            <p>Attends un peu avant d' me dire que tu voudrais des p'tits bébés</p>
                            <p>Les gens aiment bien quand ça fait mal</p>
                            <p>et y a pas de mal à s'faire du bien, à s'faire du bien</p>
                        </Col>
                    </Row>
                    <Row className='mb-5'>
<                         Col xs lg="12">
                            <p>Je suis couché dans l'herbe tendre et je rêvasse reconnaissant</p>
                            <p>devant moi la ville s'écroule</p>
                            <p>Devant moi à feu et à sang</p>
                            <p>Les gens sont frustrés à un point ma foi je crois extrêmement</p>
                            <p>IIs ont besoin de s'égorger au moins une p'tite fois d' temps en temps</p>
                        </Col>
                    </Row>
                    <Row className='mb-5'>
<                         Col xs lg="12">
                            <p>Attends un peu avant d' me dire que tu voudrais des p'tits bébés</p>
                            <p>Les gens aiment bien quand ça fait mal et y a pas de mal à s'faire du bien</p>
                        </Col>
                    </Row>
                    <Row className='mb-5'>
<                         Col xs lg="12">
                            <p>J'faisais du pouce depuis une heure dans un trou perdu le malheur</p>
                            <p>S'acharnait sur moi ce jour-là , il me tenait, il m' lâchait pas</p>
                            <p>Quand à minuit oui j'aperçois une limousine nec plus ultra</p>
                            <p>C'est le diable je le connais il me connaît il m' lâchera pas</p>
                        </Col>
                    </Row>
                    <Row className='mb-5'>
<                         Col xs lg="12">
                            <p>Attends un peu avant d' me dire que tu voudrais des p'tits bébés</p>
                            <p>Les gens aiment bien quand ça fait mal et y a pas de mal à s'faire du bien</p>
                        </Col>
                    </Row>
                    </>
        },
        {
            nom: "Edgar",
            paroles:<>
                    <Row className='mb-5'>
                        <Col xs lg="12">
                            <p>Edgar était un vrai saoulon</p> 
                            <p>Il écrivait toute la journée</p>
                            <p>Il n'écrivait pas de chansons</p>
                            <p>Mais des contes où l'assassin</p>
                            <p>L'emportait toujours haut la main</p>
                            <p>La victime était homme de bien</p>
                        </Col> 
                    </Row>
                    <Row className='mb-5'>
<                           Col xs lg="12">
                            <p>Le soir Edgar de la folie</p>
                            <p>La plus atroce se sentait pris</p>
                            <p>Malgré les honneurs et les prix</p>
                            <p>De l'alcool était avili</p>
                        </Col>
                    </Row>
                    <Row className='mb-5'>
<                           Col xs lg="12">
                            <p>Courant d'une ruelle à l'autre</p>
                            <p>Son paletot se déchirait</p>
                            <p>Dans la boue il se rassasiait</p>
                            <p>Dans la vermine il se vautrait</p>
                        </Col>
                    </Row>
                    <Row className='mb-5'>
<                           Col xs lg="12">
                            <p>À boire à boire pour maître Edgar</p>
                            <p>À boire à boire pour le génie</p>
                        </Col>
                    </Row>
                    <Row className='mb-5'>
<                           Col xs lg="12">
                            <p>Prenez garde au fou qui sommeille</p>
                            <p>Au fond d'un manoir décrépit</p>
                            <p>Jouant de ses mains anguleuses</p>
                            <p>Une valse de Chopin affreuse</p>
                        </Col>
                    </Row>
                    <Row className='mb-5'>
<                           Col xs lg="12">
                            <p>D'une femme il était amoureux</p>
                            <p>Comment la convaincre que le bleu</p>
                            <p>N'est pas la couleur de ses yeux</p>
                            <p>Mais bien celle des démons hideux</p>
                            <p>Visqueux</p>
                        </Col>
                    </Row>
                    <Row className='mb-5'>
<                           Col xs lg="12">
                            <p>À boire à boire pour maître Edgar</p>
                            <p>À boire à boire pour le génie</p>
                            <p>Voilà longtemps que je n'ai bu</p>
                            <p>Jusqu'à la lie mon dernier verre</p>
                        </Col>
                    </Row>
                    <Row className='mb-5'>
<                           Col xs lg="12">
                            <p>On l'a retrouvé un jour</p>
                            <p>Qu'il venait d'obtenir la palme</p>
                            <p>D'espoir des auteurs du pays</p>
                            <p>Dans le canal il était gris</p>
                        </Col>
                    </Row>
                    <Row className='mb-5'>
<                           Col xs lg="12">
                            <p>En proie au délirium tremens</p>
                            <p>On emmena le vagabond</p>
                            <p>Délirer son génie immense</p>
                            <p>À l'hôpital puis il mourut</p>
                            <p>Puis il mourut</p>
                        </Col>
                    </Row>
                    <Row className='mb-5'>
<                           Col xs lg="12">
                            <p>À boire à boire pour maître Edgar</p>
                            <p>À boire à boire pour le génie</p>
                        </Col>
                    </Row>
                    </>
        },
        {
            nom: "Sara",
        },
        {
            nom: "La Chambre",
        },
        {
            nom: "Johnny Go",
        },
        {
            nom: "I Lost My Baby",
        },
        {
            nom: "Sang d'encre",
        },
        {
            nom: "Le Castel impossible",
        },
        {
            nom: "Le monde est à pleurer",
        },
        {
            nom: "Le Dôme",
        },
        {
            nom: "Vampire",
        },
        {
            nom: "Fashion Victim",
        },
        {
            nom: "Pigeon",
        },
        {
            nom: "La Drop sociale",
        }
    ]
    }, 
    { 
        src : require("../img/albums/jaune.jpg"), 
        alt: "Jean-PierreFerland_Jaune",
        title: 'Jaune', 
        artist: "Jean-Pierre Ferland",
        releaseYear: '1970',
        chansons: [{
            nom: "Prologue",
        },
        {
            nom: "Le Petit roi",
        },
        {
            nom: "Sing Sing",
        },
        {
            nom: "Quand on aime on a toujours 20 ans",
        },
        {
            nom: "God Is an American",
        },
        {
            nom: "Le Chat du café des artistes",
        },
        {
            nom: "...",
        },
        {
            nom: "Y'a des jour",
        },
        {
            nom: "Ce qu'on dit quand on tient une femme dans ses bras",
        },
        {
            nom: "Épilogue",
        },
        {
            nom: "It Ain't Fair",
        }
    ]
    }, 
    { 
        src : require("../img/albums/Tumaimestu.jpg"), 
        alt: " Richard Desjardins_TuM'aimes-tu", 
        title: "Tu m'aimes-tu", 
        artist: "Richard Desjardins",
        releaseYear: '1990',
        chansons: [{
            nom: "Tu m'aimes-tu",
        },
        {
            nom: "Le Bon Gars",
        },
        {
            nom: "L'Homme-canon",
        },
        {
            nom: "Signe distinctif ",
        },
        {
            nom: "...Et j'ai couché dans mon char",
        },
        {
            nom: "Nataq",
        },
        {
            nom: "Quand ton corps touche",
        },
        {
            nom: "Lucky Lucky",
        },
        {
            nom: "Va-t'en pas",
        },
        {
            nom: "Quand j'aime une fois j'aime pour toujours",
        }
    ]
    }, 
    { 
        src : require("../img/albums/colocs.jpg"), 
        alt: "LesColocs_DehorsNovembre", 
        title: 'Dehors Novembre', 
        artist: "Les Colocs",
        releaseYear: '1998',
        chansons: [{
            nom: "Belzébuth",
        },
        {
            nom: "Pis si ô moins",
        },
        {
            nom: "Tassez-vous de d'là",
        },
        {
            nom: "La Maladresse",
        },
        {
            nom: "Le Répondeur",
        },
        {
            nom: "Tout seul",
        },
        {
            nom: "U-Turn",
        },
        {
            nom: "Tellement longtemps",
        },
        {
            nom: "Dehors novembre",
        }
    ]
    }, 
    { 
        src : require("../img/albums/danielBelanger.webp"), 
        alt: "Daniel Bélanger_RêverMieux", 
        title: 'Rêver mieux', 
        artist: "Daniel Bélanger",
        releaseYear: '2001',
        chansons: [{
            nom: "Te quitter",
        },
        {
            nom: "Fous n'importe où",
        },
        {
            nom: "Chante encore",
        },
        {
            nom: "Une femme, un train, un homme et une gare",
        },
        {
            nom: "Dans un spoutnik",
        },
        {
            nom: "Tu tombes",
        },
        {
            nom: "Une chanson pour moi",
        },
        {
            nom: "Dis tout sans rien dire",
        },
        {
            nom: "Intouchable et immortel",
        },
        {
            nom: "Fugue en sol inconnu",
        },
        {
            nom: "Air pur",
        },
        {
            nom: "Rêver mieux",
        },
        {
            nom: "Comme des amants",
        },
        {
            nom: "Revivre",
        }
        ]
    }, 
    { 
        src : require("../img/albums/arcadeFire.jpg"), 
        alt: "ArcadeFire_Funeral", 
        title: 'Funeral', 
        artist: 'Arcade Fire',
        releaseYear: '2004',
        chansons: [{
            nom: "Neighborhood #1 (Tunnels)",
        },
        {
            nom: "Neighborhood #2 (Laïka)",
        },
        {
            nom: "Une année sans lumière",
        },
        {
            nom: "Neighborhood #3 (Power Out)",
        },
        {
            nom: "Neighborhood #4 (7 Kettles)",
        },
        {
            nom: "Crown of Love",
        },
        {
            nom: "Wake Up",
        },
        {
            nom: "Haiti",
        },
        {
            nom: "Rebellion (Lies)",
        },
        {
            nom: "In the Backseat",
        }
        ]
    }, 
] 