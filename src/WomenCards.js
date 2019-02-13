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
        disabled: false 
      },

      {
        name: 'Nelly Bly',
        url: './img/NellyBly.png',
        visible: false,
        hidden:'./img/background.jpg',
        matched: false,
        disabled: false 
      },

      {
        name: 'Sonita Alizadeh',
        url: './img/SonitaAlizadeh.png',
        visible: false,
        hidden: './img/background.jpg',
        matched: false,
        disabled: false 
      },

      {
        name: 'temple Grandin',
        url: './img/TempleGrandin.png',
        visible: false,
        hidden:'./img/background.jpg',   
        matched: false ,
        disabled: false  
      },

      {
        name: 'Betty Davis',
        url: './img/BettyDavis.png',
        visible: false,
        hidden: './img/background.jpg',
        matched: false,
        disabled: false 
      },

      {
        name: 'Nelly Bly',
        url: './img/NellyBly.png',
        visible: false,
        hidden: './img/background.jpg',
        matched: false,
        disabled: false 
      },

      {
        name: 'Wu Zetian',
        url: './img/wuzetian.png',
        visible: false,
        hidden:'./img/background.jpg',
        matched: false,
        disabled: false 
      },

      {
        name: 'Sonita Alizadeh',
        url: './img/SonitaAlizadeh.png',
        visible: false,
        hidden: './img/background.jpg',
        matched: false,
        disabled: false 
      },


      {
        name: 'Thérèse Clerc',
        url: './img/ThereseClerc.png',
        visible: false,
        hidden:'./img/background.jpg',
        matched: false,
        disabled: false 
      },

      {
        name: 'Wu Zetian',
        url: './img/wuzetian.png',
        visible: false,
        hidden:'./img/background.jpg',
        matched: false,
        disabled: false 
      },

      {
        name: 'Thérèse Clerc',
        url: './img/ThereseClerc.png',
        visible: false,
        hidden:'./img/background.jpg',
        matched: false,
        disabled: false 
      },

      {
        name: 'temple Grandin',
        url: './img/TempleGrandin.png',
        visible: false,
        hidden:'./img/background.jpg',
        matched: false,
        disabled: false             
      }
    ],
    selection: [],
  }
}
// le setState ne lit pas les index d'un tableau, donc il faut déclarer une variable, et lui donner la valeur de "characters".
  
  // switchCard = (index) => {
  //   const modif = this.state.characters 
  //  modif[index].visible = ! this.state.characters[index].visible
  //   this.setState({
  //     characters: modif
  //   })
  // }

  shuffleCard = (index, url) => {
    const shuffled = underscore.shuffle(this.state.characters) 
    shuffled[index, url] = ! this.state.characters[index, url]
    this.setState({
      characters: shuffled
    })
  }

//   selectCard = (index) => {
//    if (this.state.selection.length == 2) {
//     this.setState({selection: [...this.state.selection, this.state.characters[index]]})
//     console.log(this.state.selection);
//     let selection = this.state.characters
//       this.setState({
//          characters: selection
//       })
//     }
//  }

   toggleVisible = (index) => {
        if(this.state.characters.length < 2){
          this.state.characters.push(index);
        }
        if(this.state.selection.length == 2 && (this.state.characters[0].value == this.state.characters[1].value)){
            this.state.characters[0].find = true
            this.state.characters[0].find = true
        } else {
          this.state.characters.splice(0,2)
        }
      }
    


render() {
   return( 
    <div className="fond"> 
      <div className="cards"> 
        {this.state.characters.map((item, index) => {
          return(
            item.visible ? 
            <img key={index} src={process.env.PUBLIC_URL + item.url } className="characters"  onClick={() => this.toggleVisible(index)} alt="characters" />
            :
            <img key={index} src={process.env.PUBLIC_URL + item.hidden } className= {item.visible ? "characters" : "character-hidden"}  onClick={() => this.toggleVisible(index)} alt="characters" />  
          )}
        )}
        </div>
      <div className="button">
         <Button color="danger mt-5 mb-5 text-center"  onClick={this.shuffleCard}>Play !</Button>
      </div>
      
    </div>
  )}}

export default WomenCards;


