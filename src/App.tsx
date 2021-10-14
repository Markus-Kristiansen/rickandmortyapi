import React from 'react';
import logo from './logo.svg';
import './App.css';
import { RickAndMortyProvider } from './contexts/RickAndMortyContext';
import CharacterList from './components/CharacterList';
import { Container } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <RickAndMortyProvider>
          <CharacterList />
        </RickAndMortyProvider>
      </Container>
    </div>
  );
}

export default App;
