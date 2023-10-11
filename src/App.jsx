import './App.css'


let charizardImg =
  "https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/4/4c/Pokemans_006.gif";
let bulbasaurImg =
  "https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/6/60/Pokemans_001.gif";
let eeveeImg =
  "https://oyster.ignimgs.com/mediawiki/apis.ign.com/pokemon-black-and-white/c/cd/Pokemans_133.gif?width=325";

let imgArr = [charizardImg, bulbasaurImg, eeveeImg];


export default function App() {
  return (
    <div className="container">
      <h1>Popular Pokemon</h1>
      <div className="pokemon">
        <Pokemon name="Charizard" type="fire, flying" image={imgArr[0]} />
        <Pokemon name="Bulbasaur" type="grass, poison" image={imgArr[1]} />
        <Pokemon name="Eevee" type="normal" image={imgArr[2]} />
      </div>

      <h1>Common Pokemon Types</h1>
      <div className="types">
        <PokemonTypes type="Normal" weakness="Rock" />
        <PokemonTypes type="Fire" weakness="Water" />
        <PokemonTypes type="Water" weakness="Grass" />
        <PokemonTypes type="Grass" weakness="Flying" />
      </div>
    </div>
  );
}

function Pokemon(props) {
  return (
    <div className="container">
      <h2>{props.name}</h2>
      <h6>{props.type}</h6>
      <img alt="Pokemon" src={props.image} />
    </div>
  );
}

function PokemonTypes(props) {
  return (
    <div>
      <h6>Type:</h6>
      <p>{props.type}</p>
      <h6>Weakness:</h6>
      <p>{props.weakness}</p>
    </div>
  );
}
