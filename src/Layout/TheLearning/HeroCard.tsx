import styled from 'styled-components';

const MainBlock = styled.div`
  @media screen and (min-width: 1025px) {
    & {
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
    }
    & a:hover {
      transition: all 0.2s linear;
      cursor: pointer;
      background: #e5e5e5;
    }
  }
`;
export default function HeroCard() {
  return (
    <MainBlock className="bg-white">
      <main>
        <div>
          {/* Hero card */}

          {/* <div className="bg-blue">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          
          <div className="mt-6 border-t border-blue-400 border-opacity-25 pt-10">
              <img
                    className="h-full w-full object-cover"
                    src="img/Welcome-bg-banner.svg"
                    alt="People working on laptops"
                  />
                 
          </div>
        </div>
      </div> */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-4/5 bg-gray-100" />
            <div className="max-w-full ">
              <div className="relative shadow-xl sm:rounded-none ">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-fill"
                    src="img/Banner 1@2x-cropped.png"
                    alt="People working on laptops"
                  />
                  <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
                </div>
                <div className="relative pt-16 flex justify-center  items-center ">
                  <img
                    className="object-contain lg:h-72"
                    // style={{ height: '350px' }}
                    src="img/Welcome-banner-img.svg"
                    alt="People working on laptops"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </MainBlock>
  );
}
