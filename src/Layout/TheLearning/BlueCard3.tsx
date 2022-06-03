import React from 'react';
import styled from 'styled-components';

const MainBlock = styled.div`
  // width: 400px;

  // @media (min-width: 0px) and (max-width: 600px) {
  //   width: 300px;
  // }
`;
export default function BlueCard3() {
  return (
    <MainBlock className=" bg-white w-full">
      <main>
        <div className="flex relative w-full xs:z-auto lg:z-999" style={{ marginTop: '-80px' }}>
          <div className="absolute top-0 left-0 flex items-center justify-center">
            <img
              className="w-full object-contain"
              src="img/Banner 3 (1).png"
              alt="People working on laptops"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply" /> */}
          </div>
          <div className="relative px-4 xs:px-6 xs:py-6 lg:py-32 lg:px-8">
            <div className="">
              <div className="md:w-6/12 w-full  lg:mb-10 md:mb-0 lg:mx-7 xs:mx-0 md:mx-0  xl:mx-0">
                <div className="relative  py-2 xs:px-0 xs:py-4 lg:py-32 lg:px-8">
                  <div className="relative">
                    <div className="absolute inset-0">
                      <img
                        className="w-full object-contain"
                        src="img/Aboutus-bg.svg"
                        alt="People working on laptops"
                      />
                    </div>
                    <div className="relative flex justify-center ">
                      <h1 className="text-center lg:mt-4  font-extrabold tracking-tight xs:text-2xl lg:text-6xl">
                        <span className="block text-white">About us</span>
                      </h1>
                    </div>
                  </div>
                  <p className="text-black xs:pt-2 xs:justify-start xs:text-1xs lg:text-md lg:mt-20 lg:py-10 lg:px-20">
                    In this fast-paced world, children usually tend to succumb to a lot of stress or
                    become hyperactive for want of something constantly new. I AM MIRACLE brings
                    mindfulness to the little generation and make them more aware of themselves,
                    their behaviour, and their surroundings. We have come up with structured modules
                    and interactive activities through which we help children understand the
                    importance of mindfulness, interpersonal relationships, meditation, attention
                    and much more.
                  </p>
                </div>
                <MainBlock className="text-justify xs:px-10 lg:py-10 lg:px-20 xs:text-xs lg:text-lg font-medium">
                  In this fast-paced world, children usually tend to succumb to a lot of stress or
                  become hyperactive for want of something constantly new. I AM MIRACLE brings
                  mindfulness to the little generation and make them more aware of themselves, their
                  behaviour, and their surroundings. We have come up with structured modules and
                  interactive activities through which we help children understand the importance of
                  mindfulness, interpersonal relationships, meditation, attention and much more.
                </MainBlock>
              </div>
            </div>
          </div>
        </div>
      </main>
    </MainBlock>
  );
}
