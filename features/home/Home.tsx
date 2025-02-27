import { Hero } from './components/Hero';
import { Highligth } from './components/HighlightInfo';
import { OverviewScan } from './components/OverviewScan';
const Homepage = () => {
  return (
    <section className="flex flex-col items-center  justify-center  ">
      <Hero />
      <Highligth />
      <OverviewScan />
    </section>
  );
};

export default Homepage;
