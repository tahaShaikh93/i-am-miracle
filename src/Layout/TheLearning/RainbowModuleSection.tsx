import React from 'react';
import styled from 'styled-components';

const DesktopCloud = styled.div`
  @media screen and (min-width: 1025px) {
    height: calc(100% + 250px);
  }
  @media screen and (max-width: 1024px) {
    height: calc(100% + 80px);
  }
`;
export default function RainbowModuleSection() {
  return (
    <div className="bg-white">
      <main>
        <div>
          <div className="relative">
            {/* <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" /> */}
            <div className="w-full flex ">
              <div className="relative w-full ">
                <div className="w-full flex justify-center items-center ">
                  <img
                    className="w-full object-contain"
                    src="img/Rainbow text@2x 1.png"
                    alt="People working on laptops"
                  />
                </div>

                {/* <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8"> */}
                <div className="absolute lg:w-full h-full xs:left-0 xs:-translate-x-16 xs:-translate-y-10 lg:-translate-x-64 lg:-translate-y-36  lg:transform top-0 z-99 ">
                  <div
                    className="h-full  mx-auto  xs:flex justify-left"
                    // style={{ height: '878px' }}
                  >
                    <DesktopCloud className="h-full xs:flex lg:hidden items-center justify-center">
                      <img
                        className="xs:h-full lg:h-96 object-cover"
                        src="img/Modules-img.svg"
                        alt="People working on laptops"
                      />
                    </DesktopCloud>
                    <DesktopCloud className="h-full lg:flex xs:hidden items-center justify-center">
                      <img
                        className="h-full object-contain"
                        src="img/Modules-img.svg"
                        alt="People working on laptops"
                      />
                    </DesktopCloud>
                    {/* <Overlay className="relative mt-4 text-white  text-5xl">
                      <div className="centered">01. Understanding Self</div>
                      <div className="centered pt-12">02. Being Mindful</div>
                      <div className="centered pt-20">03. Power of Visualization</div>
                      <div className="centered pt-20">04. Power of Affirmations</div>
                      <div className="centered pt-20">05. Excellence</div>
                      <div className="centered pt-20">06. My World</div>
                    </Overlay> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
