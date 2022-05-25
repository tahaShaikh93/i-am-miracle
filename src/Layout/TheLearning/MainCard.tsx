import Header from '../Header';
import HeroCard from './HeroCard';
import OrangeCard2 from './OrangeCard2';
import Footer from '../Footer';
import BlueCard3 from './BlueCard3';
import TealPage from './TealPage';
import KidsPlayingSection from './KidsPlayingSection';
import CartoonImage5Section from './CartoonImage5Section';
import RainbowModuleSection from './RainbowModuleSection';

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
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="max-w-full ">
              <div className="relative ">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src="img/Blue-bg5.svg"
                    alt="People working on laptops"
                  />
                  <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 ">
                  <div className=" max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                    <div className="space-y-4 sm:space-y-0 sm:mx-auto">
                      <img
                        className="h-full w-full object-cover"
                        src="img/Aeroplane-image.svg"
                        alt="People working on laptops"
                      />
                    </div>
                  </div>
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                    <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                      <a
                        href="#"
                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium  shadow-sm text-indigo-700 bg-white hover:bg-indigo-50 sm:px-8"
                      >
                        Get started
                      </a>
                      <a
                        href="#"
                        className="flex items-center justify-center px-4 py-3 border border-transparent text-base font-medium  shadow-sm text-white bg-indigo-500 bg-opacity-60 hover:bg-opacity-70 sm:px-8"
                      >
                        Live demo
                      </a>
                    </div>
                  </div>
                  <img
                    className="h-32 w-32 object-cover"
                    src="img/Boy-image.svg"
                    alt="People working on laptops"
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Yellow card */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="max-w-full ">
              <div className="relative ">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src="img/Yellow-card.svg"
                    alt="People working on laptops"
                  />
                  <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">Take control of your</span>

                    <span className="block text-indigo-200">customer support</span>
                  </h1>

                  {/* <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center"> */}
                  <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                    <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5">
                      <img
                        className="h-full w-full object-cover"
                        src="img/Yellowcard-modules3.svg"
                        alt="People working on laptops"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
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
