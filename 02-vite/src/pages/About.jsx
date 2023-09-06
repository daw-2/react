import Counter from '../exercices/Counter';
import EventListener3 from '../exercices/EventListener3';
import EventListenerChallenge from '../exercices/EventListenerChallenge';
import Props2 from '../exercices/Props2';
import Props3 from '../exercices/Props3';
import Props5 from '../exercices/Props5';
import StateChallenge from '../exercices/StateChallenge';

function About() {
  return (
    <>
      <h2>Exercices state + props + event</h2>
      <Props2 />
      <Props3 />
      <Props5 />
      <Counter />
      <Counter init={3} max={10} />
      <StateChallenge />
      <EventListener3 />
      <EventListenerChallenge />
    </>
  );
}

export default About;
