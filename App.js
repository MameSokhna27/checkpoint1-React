import React from 'react';
import './App.css';
import { Card, Button } from 'react-bootstrap'; // Import de React-Bootstrap
import Name from './name';        // Composant pour afficher le nom
import Price from './price';      // Composant pour afficher le prix
import Description from './description'; // Composant pour afficher la description
import Image from './image';      // Composant pour afficher l'image
import product from './product'; // Importer l'objet JSON

function App() {
  const firstName = ''; // Remplacez par votre prénom

  return (
    <div className="App">
      <Card style={{ width: '18rem' }}>
        <Card.Body>
          <Name product={product} />
          <Price product={product} />
          <Description product={product} />
          <Image product={product} />
          <Button variant="primary">Ajouter au panier</Button>
        </Card.Body>
      </Card>
      <div style={{ marginTop: '20px' }}>
        {firstName ? (
          <>
            <p>Bonjour, {firstName}!</p>
            <img src="https://via.placeholder.com/150" alt="Profil" style={{ width: '100px', borderRadius: '50%' }} />
          </>
        ) : (
          <p>Bonjour !</p>
        )}
      </div>
    </div>
  );
}

export default App;
