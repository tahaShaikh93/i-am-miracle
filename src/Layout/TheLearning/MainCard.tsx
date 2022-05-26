import Header from '../Header';
import HeroCard from './HeroCard';
import OrangeCard2 from './OrangeCard2';
import Footer from '../Footer';
import BlueCard3 from './BlueCard3';
import TealPage from './TealPage';
import KidsPlayingSection from './KidsPlayingSection';
import CartoonImage5Section from './CartoonImage5Section';
import RainbowModuleSection from './RainbowModuleSection';
import AeroplaneSection from './AeroplaneSection';
import YellowCardModuleSection from './YellowCardModuleSection';

export default function MainCard() {
  return (
    <div className="bg-white">
      <Header />

      <main>
        <div>
          <HeroCard />
          {/* orange card */}
          <OrangeCard2 />

          {/* Blue card */}
          <BlueCard3 />

          {/* Blue card */}
          <AeroplaneSection />

          {/* Yellow card */}
          <YellowCardModuleSection />
          {/* teal page bg */}
          <TealPage />

          {/* kids playing image */}
          <KidsPlayingSection />

          <RainbowModuleSection />

          <CartoonImage5Section />

          {/* Logo cloud */}
          <Footer />
        </div>
      </main>
    </div>
  );
}
