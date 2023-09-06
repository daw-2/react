import Button from './Button'
import List from './List'
import Text from './Text'
import Counter from './exercices/Counter'
import EventListener3 from './exercices/EventListener3'
import Props2 from './exercices/Props2'
import Props3 from './exercices/Props3'
import Props5 from './exercices/Props5'
import StateChallenge from './exercices/StateChallenge'
import EventListenerChallenge from './exercices/EventListenerChallenge'
import Clock from './Clock'
import { useState } from 'react'
import Ajax from './Ajax'
import Lifecycle2 from './exercices/Lifecycle2'
import Ajax1 from './exercices/Ajax1'
import Ajax3 from './exercices/Ajax3'

function App() {
  const [show, setShow] = useState(true);

  return (
    <>
      <h1>Salut React</h1>

      <div>
      {/*<h2>Présentation state</h2>
      <Button color="blue">Envoyer</Button>
      <Button>Contacter</Button>
      <Text />
      <List />

      <h2>Exercices state + props + event</h2>
      <Props2 />
      <Props3 />
      <Props5 />
      <Counter />
      <Counter init={3} max={10} />
      <StateChallenge />
      <EventListener3 />
      <EventListenerChallenge />*/}
      </div>

      <h2>Le cycle de vie</h2>
      <button onClick={() => setShow(!show)}>Voir</button>
      {/*{show && <Clock />}
      <Clock timezone="Asia/Tokyo" />
      <Clock timezone="America/New_York" />
      <Ajax/>*/}

      <h2>Exercices lifecycle + ajax</h2>
      <Lifecycle2 />
      <Ajax1 />
      <Ajax3 />

      <br /><br /><br /><br /><br />
    </>
  )
}

export default App
