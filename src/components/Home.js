import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import PokemonCard from './PokemonCard';

const client = axios.create({
	baseURL: 'https://pokeapi.co/api/v2/pokemon',
});

function Home() {
	const [pokemons, setPokemons] = useState([]);
	const [pokemonsAmount, setPokemonsAmount] = useState(20);
	const [startIndex, setStartIndex] = useState(1);

	useEffect(() => {
		async function getPokemons() {
			for (let i = startIndex; i <= pokemonsAmount; i++) {
				const response = await client.get(`/${i}`);
				const pokemonObject = {
					name: response.data.name,
					id: response.data.id,
					image: response.data.sprites.other.dream_world.front_default,
					type: response.data.types[0].type.name,
				};
				setPokemons((currentPokemons) => [...currentPokemons, pokemonObject]);
			}
			setStartIndex(pokemonsAmount + 1);
		}
		getPokemons();
	}, [pokemonsAmount, startIndex]);

	return (
		<div style={{ width: '80%', margin: 'auto' }}>
			<div
				style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}
			>
				{pokemons.map((pokemon, index) => {
					return (
						<PokemonCard
							key={pokemon.id}
							id={pokemon.id}
							name={pokemon.name}
							img={pokemon.image}
							type={pokemon.type}
						/>
					);
				})}
			</div>

			<div
				style={{ marginTop: '100px', width: '50%', margin: '100px auto' }}
				className="d-grid gap-2"
			>
				<Button
					variant="primary"
					size="lg"
					onClick={() => setPokemonsAmount(pokemonsAmount + 10)}
				>
					View More
				</Button>
			</div>
		</div>
	);
}

export default Home;
