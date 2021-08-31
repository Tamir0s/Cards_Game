import React, {Component} from 'react';
import Pokecard from './Pokecard';
import './Pokedex-Cards.css'

class Pokedex extends Component{
    static defaultProps = {
        pokemon: [
            {id:4, name:'Charmander', type:'Fire',EXP:62},
            {id:7, name:'Squirtle', type:'Water',EXP:63},
            {id:11, name:'Metapod', type:'Bug',EXP:72},
            {id:12, name:'Butterfree', type:'Flying',EXP:178},
            {id:25, name:'Pikachu', type:'Electric',EXP:112},
            {id:39, name:'Jigglypuff', type:'Normal',EXP:95},
            {id:94, name:'Gengar', type:'Poison',EXP:225},
            {id:133, name:'Eevee', type:'Normal',EXP:65}
        ]
    };
    render(){
        let title;
        if(this.props.isWinner){
            title=<h1 className="Pokedex-winner">Winning Hand</h1>
        }
        else{
            title =<h1 className="Pokedex-loser">Losing Hand</h1>
        }
     return(
         <div>
             <p>Total Experience: {this.props.exp}</p>
             {title}
             <div className= "Pokedex-Cards">
             {this.props.pokemon.map((p)=>(
                <Pokecard id={p.id} name={p.name} type={p.type} exp={p.EXP} />
            ))}
             </div>
            
         </div>
     )



    }
  
}

export default Pokedex;