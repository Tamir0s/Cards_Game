import React, {Component} from 'react';
import Pokedex from './Pokedex';

class Pokegame extends Component {
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
        let hand1 =[];
        let hand2 =[...this.props.pokemon];
        while(hand1.length < hand2.length){
            let randIdx = Math.floor(Math.random() * hand2.length);
            let randPokemon = hand2.splice(randIdx, 1)[0];
            hand1.push(randPokemon);
        }

        let exp1 = hand1.reduce((exp, pokemon) => exp+ pokemon.EXP,0);
        let exp2 = hand2.reduce((exp, pokemon) => exp+ pokemon.EXP,0);


        return(
        <div>
            <Pokedex pokemon={hand1} exp={exp1} isWinner={exp1 > exp2} />
            <Pokedex pokemon={hand2} exp={exp2} isWinner={exp2 > exp1} />
        </div>
        );
    }
}

export default Pokegame;