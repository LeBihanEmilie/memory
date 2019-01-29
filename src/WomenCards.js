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
        visible: true,         
        hidden:'./img/background.jpg',
        matched: false
      },

      {
        name: 'Nelly Bly',
        url: './img/NellyBly.png',
        visible: true,
        hidden:'./img/background.jpg',
        matched: false
      },

      {
        name: 'Sonita Alizadeh',
        url: './img/SonitaAlizadeh.png',
        visible: true,
        hidden: './img/background.jpg',
        matched: false
      },

      {
        name: 'temple Grandin',
        url: './img/TempleGrandin.png',
        visible: true,
        hidden:'./img/background.jpg',   
        matched: false  
      },

      {
        name: 'Betty Davis',
        url: './img/BettyDavis.png',
        visible: true,
        hidden: './img/background.jpg',
        matched: false
      },

      {
        name: 'Nelly Bly',
        url: './img/NellyBly.png',
        visible: true,
        hidden: './img/background.jpg',
        matched: false
      },

      {
        name: 'Wu Zetian',
        url: './img/wuzetian.png',
        visible: true,
        hidden:'./img/background.jpg',
        matched: false
      },

      {
        name: 'Sonita Alizadeh',
        url: './img/SonitaAlizadeh.png',
        visible: true,
        hidden: './img/background.jpg',
        matched: false
      },


      {
        name: 'Thérèse Clerc',
        url: './img/ThereseClerc.png',
        visible: true,
        hidden:'./img/background.jpg',
        matched: false
      },

      {
        name: 'Wu Zetian',
        url: './img/wuzetian.png',
        visible: true,
        hidden:'./img/background.jpg',
        matched: false
      },

      {
        name: 'Thérèse Clerc',
        url: './img/ThereseClerc.png',
        visible: true,
        hidden:'./img/background.jpg',
        matched: false
      },

      {
        name: 'temple Grandin',
        url: './img/TempleGrandin.png',
        visible: true,
        hidden:'./img/background.jpg',
        matched: false              
      }
    ]
  }
}
// le setState ne lit pas les index d'un tableau, donc il faut déclarer une variable, et lui donner la valeur de "characters".
  
switchCard = (index) => {
    let modif = this.state.characters 
      modif[index].visible = ! this.state.characters[index].visible
      this.setState({
        characters:  modif
      })
  }

  shuffleCard = (index, url) => {
    let shuffled = underscore.shuffle(this.state.characters) 
      shuffled[index, url] = ! this.state.characters[index, url]
      this.setState({
        characters:  shuffled
      })
  }
 
  pairsCard = (name) => {
   let pair = underscore.pairs() 
   pair[name] = 
   this.setState({
     characters: pair
   })
  }
  
// _.pairs(object) 
// Convert an object into a list of [key, value] pairs. The opposite of object.



  

  // shuffleCard = () => {
  //   let shuffled = underscore.shuffle(this.state.characters);
  //   console.log(shuffled)
  //   }

render() {

  return( 
    <div className="background"> 
      {/* <img className="image-fond" src={process.env.PUBLIC_URL + '../img/fond.jpg'} alt="fond" width="100%"/>  */}
      <div className="cards"> 
        {this.state.characters.map((item, index) => {
          return(
            item.visible ? 
            <img key={index} src={process.env.PUBLIC_URL + item.url } className= {item.visible ? "characters" : "character-hidden"}  onClick={() => {this.switchCard(index)}} alt="characters" />
            :
            <img key={index} src={process.env.PUBLIC_URL + item.hidden } className= {item.visible ? "characters" : "character-hidden"}  onClick={() => {this.switchCard(index)}} alt="characters" />  
          )}
        )}
        </div>
      <div className="button">
         <Button outline color="danger mt-5 mb-5 text-center"  onClick={() => {this.shuffleCard(this.state.shuffled)}}>Play !</Button>
      </div>
      
    </div>
  )}}

export default WomenCards;






// Definir une methode qui permet de cliquer uniquement 2 fois sur 2 cartes différentes.
// Si ces cartes sont différentes, les cartes se retournent - hidden si ce st le mêmes le restent - characters


