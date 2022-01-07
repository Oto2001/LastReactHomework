import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import '../index.css';
import { colors } from './backgroundColors';

function PokemonCard({ id = 1, img, name = 'bulbasur', type = 'grass' }) {
	return (
		<Card style={{ width: '18rem', padding: '20px', backgroundColor: `${colors[type]}` }}>
			<Card.Text
				style={{ textAlign: 'center', backgroundColor: 'white', borderRadius: '20px' }}
			>
				# {id}
			</Card.Text>
			<Card.Img style={{ height: '200px' }} src={img} />
			<Card.Body>
				<Card.Title style={{ textAlign: 'center', fontWeight: 'bold' }}>{name}</Card.Title>
				<Card.Text style={{ textAlign: 'center' }}>Type: {type}</Card.Text>
			</Card.Body>
		</Card>
	);
}

export default PokemonCard;
