import Button from './Button'
import List from './List'
import Text from './Text'
import Props2 from './exercices/Props2'
import Props3 from './exercices/Props3'

function App() {
  return (
    <>
      <h1>Salut React</h1>

      <h2>Présentation state</h2>
      <Button color="blue">Envoyer</Button>
      <Button>Contacter</Button>
      <Text />
      <List />

      <h2>Exercices state + props + event</h2>
      <Props2 />
      <Props3 />
    </>
  )
}

export default App
