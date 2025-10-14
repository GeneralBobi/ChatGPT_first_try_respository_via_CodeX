import React, { useState } from 'react';
import Card from './components/Card';
import Swipe from './components/Swipe';
import './App.css';

import Grunge from './illustrations/Grunge';
import Retro from './illustrations/Retro';
import Sport from './illustrations/Sport';
import Goth from './illustrations/Goth';
import Punk from './illustrations/Punk';

const initialStyles = [
  { name: 'Grunge', description: 'A style characterized by durable and timeless thrift-store clothing, often worn in a loose, androgynous manner to de-emphasize the silhouette.', illustration: <Grunge /> },
  { name: 'Retro', description: 'A style that is consciously derivative or imitative of trends, modes, and styles from the recent past, typically the 1950s, 1960s, or 1970s.', illustration: <Retro /> },
  { name: 'Sport', description: 'A style of clothing, footwear and accessories that is designed for sport or physical exercise, but which is often worn for casual or leisure purposes.', illustration: <Sport /> },
  { name: 'Goth', description: 'A style marked by dark, mysterious, antiquated and homogenous features. It is stereotyped as spooky, mysterious, complex and exotic.', illustration: <Goth /> },
  { name: 'Punk', description: 'A style characterized by a rebellious and aggressive attitude, often with ripped clothing, safety pins, and provocative slogans.', illustration: <Punk /> },
];

function App() {
  const [styles, setStyles] = useState(initialStyles);
  const [currentStyleIndex, setCurrentStyleIndex] = useState(0);

  const handleSwipe = () => {
    setCurrentStyleIndex((prevIndex) => (prevIndex + 1) % styles.length);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Fashion Styles</h1>
      </header>
      <Swipe onSwipe={handleSwipe}>
        <Card style={styles[currentStyleIndex]} />
      </Swipe>
    </div>
  );
}

export default App;
