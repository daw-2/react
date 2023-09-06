# React

Alors pour les tests, j'ai installé :

```bash
npm install vitest --save-dev
npm install jsdom --save-dev
npm install @testing-library/react @testing-library/jest-dom @testing-library/user-event --save-dev
```

J'ai modifié le fichier `vite.config.js` pour ajouter jsdom, c'est l'outil qui va permettre de simuler un DOM dans la console pour les tests (c'était ça qu'il nous manquait). Vous pouvez lancer les tests avec :

```bash
npm run test
```

J'ai écrit un test rapide avec un clic sur un bouton pour supprimer une todo...

J'ai oublié mais vous pouvez aussi déployer votre application (générer le code HTML / CSS / JS) avec :

```bash
npm run build
```
