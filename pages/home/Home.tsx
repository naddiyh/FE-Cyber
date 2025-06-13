import Hero from './components/Hero';
import Highligth from './components/HighlightInfo';
import OverviewForum from './components/OverviewForum';
import OverviewScan from './components/OverviewScan';
import OverviewSimulation from './components/OverviewSimulation';
const Homepage = () => {
  return (
    <section className="flex flex-col items-center  justify-center  ">
      <Hero />
      <Highligth />
      <OverviewScan />
      <OverviewForum />
      <OverviewSimulation />
    </section>
  );
};

export default Homepage;
