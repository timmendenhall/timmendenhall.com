import { Welcome } from './Welcome';
import { About } from './About';
import { Work } from './Work';
import { Resume } from './Resume';

export const Home = () => {
  return (
    <>
      <Welcome />
      <About />
      <Work />
      <Resume />
    </>
  );
};
