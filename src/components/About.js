import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import profile from '../Images/Profile.jpg';
import pokemonLogo from '../Images/pokemon-logo.png';

function About() {
	return (
		<Container>
			<h1 style={{ margin: '50px auto 150px auto', textAlign: 'center' }}>
				About Page and Author
			</h1>
			<Row>
				<Col>
					<h3>
						<span style={{ color: 'grey' }}>Application: </span> Ordered pokemons viewer
					</h3>
					<h3>
						<span style={{ color: 'grey' }}>Api: </span>
						<a href="https://pokeapi.co/api/v2/pokemon/">pokemonapi</a>
					</h3>
					<h3>
						<span style={{ color: 'grey' }}>Used technologies: </span>Reactstrap, Axios,
						React router
					</h3>
				</Col>
				<Col>
					<Image
						src={pokemonLogo}
						style={{ height: '150px', marginTop: '-25px' }}
					></Image>
				</Col>
			</Row>
			<Row style={{ alignItems: 'center', margin: '100px auto' }}>
				<Col>
					<div
						style={{
							position: 'relative',
							width: '200px',
							height: '200px',
							overflow: 'hidden',
							borderRadius: '50%',
						}}
					>
						<Image src={profile} style={{ width: '200px', marginTop: '-25px' }}></Image>
					</div>
				</Col>
				<Col>
					<h3>
						<span style={{ color: 'grey' }}>Author: </span> Otar Mamatsashvili
					</h3>
					<h3>
						<span style={{ color: 'grey' }}>Proffesion: </span>Web Developer
					</h3>
					<h3>
						<span style={{ color: 'grey' }}>Education: </span>Student
					</h3>
				</Col>
			</Row>
		</Container>
	);
}

export default About;
