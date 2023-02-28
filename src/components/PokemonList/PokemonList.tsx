import { useState } from "react";
import { Pokemon } from "../models/Pokemon";
import PokemonBox from "../PokemonBox/PokemonBox";
import axios from "axios";
import { PokemonAPI } from "../models/PokemonAPI";

function PokemonList () {

    const newPokemon:Pokemon = {
        damage:0,
        health:0,
        img:'',
        level:0,
        name:""
    }

    const [listOfPokemon, setListPoke] = useState<Pokemon[]>([{
        name: "ditto",
        level: 30,
        health: 100,
        damage:10,
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
      },{
        name: "pikachu",
        level: 70,
        health: 300,
        damage:40,
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
      },{
        name: "something",
        level: 10,
        health: 50,
        damage:4,
        img: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/342.png"
      }]);

    function onSubmitP(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        axios.get<PokemonAPI>(`https://pokeapi.co/api/v2/pokemon/${newPokemon.name}`)
        .then(response => {
            console.log(response.data);
            let myPoke:Pokemon = {
                name: response.data.name,
                img: response.data.sprites.front_default,
                level: 10,
                health: response.data.stats[0].base_stat,
                damage: response.data.stats[1].base_stat
            }
            setListPoke([myPoke, ...listOfPokemon])
        })
    }

    function setNameP(event: React.ChangeEvent<HTMLInputElement>){
        newPokemon.name = event.target.value;
    }

    let removeName: string = "";

    function setRemoveNameP(event: React.ChangeEvent<HTMLInputElement>){
        removeName = event.target.value;
    }

    function removePokemon(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        setListPoke(listOfPokemon.filter(poke => poke.name !== removeName));
    }

    return (
    <div>
        <h3>Add Pokemon via PokeAPI</h3>
        <form className="grid" onSubmit={onSubmitP}>
            <label>Name</label>
            <input type="text" onChange={setNameP}></input>
            <br/>
            <input type="submit"></input>
        </form>

        <h3>Remove</h3>
        <form className="grid" onSubmit={removePokemon}>
            <label>Name</label>
            <input type="text" onChange={setRemoveNameP}></input>
            <br/>
            <input type="submit" value="Remove"></input>
        </form>
        <h2>Pokemon List</h2>
        <div className="grid-pokemon">
            {
                listOfPokemon.map(poke => {
                    return (<PokemonBox key={poke.name} {...poke} />);
                })
            }
        </div>
    </div>)
}

export default PokemonList;