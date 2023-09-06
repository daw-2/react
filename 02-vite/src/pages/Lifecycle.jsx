import { useState } from 'react';
import Lifecycle2 from '../exercices/Lifecycle2';
import Ajax1 from '../exercices/Ajax1';
import Ajax3 from '../exercices/Ajax3';
import Ajax from '../Ajax';
import Clock from '../Clock';

function Lifecycle() {
  const [show, setShow] = useState(true);

  return (
    <>
      <h2>Le cycle de vie</h2>
      <button onClick={() => setShow(!show)}>Voir</button>
      {show && <Clock />}
      <Clock timezone="Asia/Tokyo" />
      <Clock timezone="America/New_York" />
      <Ajax />

      <h2>Exercices lifecycle + ajax</h2>
      <Lifecycle2 />
      <Ajax1 />
      <Ajax3 />
    </>
  );
}

export default Lifecycle;
