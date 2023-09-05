import { useState } from 'react';

export default function EventListenerChallenge() {
  const [birds, setBirds] = useState([
    {
      name: 'Pingouin',
      age: 18,
      color: 'Noir',
      isColorDisplayed: true,
    },
    {
      name: 'Manchot',
      age: 15,
      color: 'Blanc',
      isColorDisplayed: false,
    },
    {
      name: 'Autruche',
      age: 8555,
      color: 'Blanc',
      isColorDisplayed: false,
    },
    {
      name: 'Colibri',
      age: 85,
      color: 'Bleu',
      isColorDisplayed: true,
    },
  ]);

  const defaultBird = {
    name: '',
    age: '',
    color: '',
    isColorDisplayed: false,
  };
  const [newBird, setNewBird] = useState(defaultBird);
  const [errors, setErrors] = useState([]);

  const saveBird = (e) => {
    e.preventDefault();
    let hasErrors = false;
    setErrors([]);

    // Validation
    if (newBird.name.length < 4) {
      setErrors((e) => [ ...e, 'Veuillez entrer un nom entre 4 et 12 caractères' ]);
      hasErrors = true;
    }

    if (!['bleu', 'noir', 'blanc'].includes(newBird.color.toLowerCase())) {
      setErrors((e) => [ ...e, 'Veuillez entrer une de ces trois couleurs : bleu, noir, blanc' ]);
      hasErrors = true;
    }

    if (!hasErrors) {
      setBirds([ ...birds, newBird ]);
      setNewBird(defaultBird);
    }
  }

  const updateBird = (index, newColor) => {
    // birds[index].color = newColor;
    // setBirds([ ...birds ]);

    setBirds(birds.map((bird, i) => {
      if (i === index) {
        return { ...bird, color: newColor }
      } else {
        return bird;
      }
    }));
  }

  return (
    <div>
      <ul>
        <li>Afficher chaque oiseau dans une boucle map</li>
      </ul>
      <ul>
        {birds.map((bird, index) =>
          <li>
            {bird.name} a {bird.age} ans.
            {bird.isColorDisplayed && <span> Il est {bird.color}.</span>}
            <input type="text" value={bird.color} onChange={(e) => updateBird(index, e.target.value)} />
            <button onClick={() => setBirds(birds.filter((b, i) => index !== i))}>
              Supprimer
            </button>
          </li>
        )}
      </ul>
      <ul>
        {errors.map(error =>
          <li>{error}</li>
        )}
      </ul>
      <form onSubmit={(e) => saveBird(e)}>
        <label htmlFor="name">Nom</label>
        <input id="name" value={newBird.name} onChange={(e) => setNewBird({ ...newBird, name: e.target.value })} />
        <label htmlFor="age">Âge</label>
        <input id="age" value={newBird.age} onChange={(e) => setNewBird({ ...newBird, age: e.target.value })} />
        <label htmlFor="color">Couleur</label>
        <input id="color" value={newBird.color} onChange={(e) => setNewBird({ ...newBird, color: e.target.value })} />
        <label htmlFor="isColorDisplayed">Afficher couleur ?</label>
        <input id="isColorDisplayed" type="checkbox" checked={newBird.isColorDisplayed}
          onChange={(e) => setNewBird({ ...newBird, isColorDisplayed: e.target.checked })}
        />

        {JSON.stringify(newBird)}
        <button>Ajouter</button>
      </form>
      <h2>Pour chaque oiseau</h2>
      <ul>
        <li>Afficher son age, son nom, sa couleur</li>
        <li>Si sa propriété isColorDisplayed n'est pas égale à true, ne pas afficher sa couleur</li>
      </ul>
      <ul>
        <li>Créer un mécanisme qui permet d'ajouter un oiseau en utilisant un formulaire et des states</li>
        <li>Créer un mécanisme qui permet de supprimer un oiseau en utilisant un bouton supprimer</li>
        <li>Créer un mécanisme qui permet de modifier la couleur d'un oiseau en utilisant un input texte</li>
      </ul>
      <p>Dans le mécanisme d'ajout, ajouter des conditions qui empêchent la sauvegarde de l'oiseau</p>
      <ul>
        <li>Si son nom mesure moins de 4 caractères de long, ou plus de 12 caractères de long, alerter "Veuillez entrer un nom entre 4 et 12 caractères"</li>
        <li>Si sa couleur n'est ni "bleu", ni "noir", ni "blanc", alerter "Veuillez entrer une de ces trois couleurs : bleu, noir, blanc"</li>
      </ul>
    </div>
  )
}
