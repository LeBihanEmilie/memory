import React, { Component } from 'react'
import './App.css';
import './WomenCards.css';

import underscore from 'underscore'
import { Button } from 'reactstrap';


class WomenCards extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters:[
      {
        name: 'Betty Davis',
        url: './img/BettyDavis.png' ,
        visible: false ,        
        hidden:'./img/background.jpg',
        matched: false,
        selected: false,             
      },

      {
        name: 'Nelly Bly',
        url: './img/NellyBly.png',
        visible: false,
        hidden:'./img/background.jpg',
        matched: false,
        selected: false,             
      },

      {
        name: 'Sonita Alizadeh',
        url: './img/SonitaAlizadeh.png',
        visible: false,
        hidden: './img/background.jpg',
        matched: false,
        selected: false,             
      },

      {
        name: 'temple Grandin',
        url: './img/TempleGrandin.png',
        visible: false,
        hidden:'./img/background.jpg',   
        matched: false ,
        selected: false,              
      },

      {
        name: 'Betty Davis',
        url: './img/BettyDavis.png',
        visible: false,
        hidden: './img/background.jpg',
        matched: false,
        selected: false,             
      },

      {
        name: 'Nelly Bly',
        url: './img/NellyBly.png',
        visible: false,
        hidden: './img/background.jpg',
        matched: false,
        selected: false,             
      },

      {
        name: 'Wu Zetian',
        url: './img/wuzetian.png',
        visible: false,
        hidden:'./img/background.jpg',
        matched: false,
        selected: false,            
      },

      {
        name: 'Sonita Alizadeh',
        url: './img/SonitaAlizadeh.png',
        visible: false,
        hidden: './img/background.jpg',
        matched: false,
        selected: false,             
      },


      {
        name: 'Thérèse Clerc',
        url: './img/ThereseClerc.png',
        visible: false,
        hidden:'./img/background.jpg',
        matched: false,
        selected: false,             
      },

      {
        name: 'Wu Zetian',
        url: './img/wuzetian.png',
        visible: false,
        hidden:'./img/background.jpg',
        matched: false,
        selected: false,            
      },

      {
        name: 'Thérèse Clerc',
        url: './img/ThereseClerc.png',
        visible: false,
        hidden:'./img/background.jpg',
        matched: false,
        selected: false,            
      },

      {
        name: 'temple Grandin',
        url: './img/TempleGrandin.png',
        visible: false,
        hidden:'./img/background.jpg',
        matched: false,
        selected: false,            
      }
    ],
  }
}
// le setState ne lit pas les index d'un tableau, donc il faut déclarer une variable, et lui donner la valeur de "characters".
  
  switchCard = (selectedCharacterIndex) => {
    const newCharacters = [...this.state.characters];
   
    const selectedCharacter = newCharacters[selectedCharacterIndex];

    const foundCharacterIndex = newCharacters.findIndex(character => character.selected);
  
    if (foundCharacterIndex >= 0) {
      //on a trouvé une carte, qui a déjà été cliquée, reste à trouver la sde pour matcher les 2.

      const foundCharacter = newCharacters[foundCharacterIndex];

      if (selectedCharacter.name === foundCharacter.name && selectedCharacterIndex !== foundCharacterIndex) {
        // dans ce cas, on a une carte sélectionnée qui correspond à la sde carte que l'on vient sélectionner.

        this.setState({characters: newCharacters.map((item, index) => {
          if (index === foundCharacterIndex || index === selectedCharacterIndex) {
            return {
              ...item,
              matched: true,
              selected: false,
              visible: true
            };
          }
          return item;
        })});

      } else {
        //cas ou carte déjà sélectionnée mais qu'elle ne matche pas avec la précédente.Appliquer du css
        
        this.setState({characters: newCharacters.map((item, index) => {
          if (index === foundCharacterIndex) {
            return {
              ...item,
              selected: false,
            };
          }
          return item;
        })});
      }
    } else {
      // on a pas trouvé de carte sélectionnée donc, on va cliquer sur une 1ère carte.
      this.setState({characters: newCharacters.map((item, index) => {
        if (index === selectedCharacterIndex) {
          return {
            ...item,
            selected: true,
          };
        }
        return item;
      })})
    }
  }
 
  shuffleCard = (index, url) => {
    const shuffled = underscore.shuffle(this.state.characters) 
    shuffled[index, url] = ! this.state.characters[index, url]
      this.setState({characters: shuffled.map((item, index) => {
        return {
         ...item,
         selected: false,
         matched : false,
      }})
    })
  }

render() {
   return( 
    <div className="fond"> 
    <div className="row">
      <div className="cards col-lg-12"> 
        {this.state.characters.map((item, index) => {
          return(
            item.selected || item.matched ? 
            <img key={index} src={process.env.PUBLIC_URL + item.url } className="characters"  onClick={() => this.switchCard(index)} alt="characters" />
            :
            <img key={index} src={process.env.PUBLIC_URL + item.hidden } className= {item.selected || item.matched  ? "characters" : "character-hidden"}  onClick={() => this.switchCard(index)} alt="characters" />  
          )}
        )}
      </div>
    </div>
      <div className="button">
         <Button color="danger mt-5 mb-5 text-center"  onClick={this.shuffleCard}>Play !</Button>
      </div>
    </div>
  )}}

export default WomenCards;


