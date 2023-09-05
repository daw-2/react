import { useEffect, useState } from 'react';

function Clock({ timezone = 'Europe/Paris' }) {
  const [date, setDate] = useState(new Date());

  // Lance moi ce code au chargement du composant
  useEffect(() => {
    let timer = setInterval(() => {
      console.log('interval');
      setDate(new Date());
    }, 1000);

    // Lance moi ce code à la destruction du composant
    // (et aussi avant la construction)
    return () => { // Unmount du composant
      clearInterval(timer);
    }
  }, []); // [] = Mount du composant

  // Lance moi ce code à chaque mise à jour du state
  useEffect(() => {
    if (date.getSeconds() % 10 === 0) {
      console.log('ding dong');
    }
  }, [date]); // [date] ou rien, Update du composant

  return (
    <h1>{date.toLocaleTimeString('fr-FR', {
      timeZone: timezone
    })}</h1>
  );
}

export default Clock;
