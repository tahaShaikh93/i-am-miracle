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
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="max-w-full ">
              <div className="relative ">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src="img/Banner 5@2x-cropped.png"
                    alt="People working on laptops"
                  />
                  <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <div className="">
                    <div className="relative">
                      <div className="absolute inset-0 h-1/2 bg-gray-50" />
                      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="max-w-4xl mx-auto">
                          <dl className="rounded-lg bg-white shadow-lg sm:grid sm:grid-cols-3">
                            <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                Pepperoni
                              </dt>
                              <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                                100%
                              </dd>
                            </div>
                            <div className="flex flex-col border-b border-gray-100 p-6 text-center sm:border-0 sm:border-r">
                              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                Pepperoni
                              </dt>
                              <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                                100%
                              </dd>
                            </div>
                            <div className="flex flex-col border-t border-b border-gray-100 p-6 text-center sm:border-0 sm:border-l sm:border-r">
                              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                Delivery
                              </dt>
                              <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                                24/7
                              </dd>
                            </div>
                            <div className="flex flex-col border-t border-gray-100 p-6 text-center sm:border-0 sm:border-l">
                              <dt className="order-2 mt-2 text-lg leading-6 font-medium text-gray-500">
                                Calories
                              </dt>
                              <dd className="order-1 text-5xl font-extrabold text-indigo-600">
                                100k
                              </dd>
                            </div>
                          </dl>
                        </div>
                      </div>
                    </div>
                  </div>

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
