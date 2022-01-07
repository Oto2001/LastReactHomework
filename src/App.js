import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Navbar, Nav } from 'react-bootstrap';
import About from './components/About';
import Home from './components/Home';

function App() {
	return (
		<Router>
			<Navbar bg="dark" variant="dark" style={{ marginBottom: '50px' }}>
				<Container>
					<Navbar.Brand href="/">PokemonsApp</Navbar.Brand>
					<Nav className="me-auto">
						<Nav.Link href="/">Home</Nav.Link>
						<Nav.Link href="/about">About</Nav.Link>
					</Nav>
				</Container>
			</Navbar>

			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/about" element={<About />} />
				<Route path="*" element={<Home />}></Route>
			</Routes>
		</Router>
	);
}

export default App;
