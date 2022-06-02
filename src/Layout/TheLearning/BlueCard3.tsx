import React from 'react';
import styled from 'styled-components';

const MainBlock = styled.div`
  /* Default Design */
  .gfg-div {
    /* To make all elements center */
    display: flex;
    justify-content: center;
    align-items: center;

    /* Default Styling */
    margin: 20px auto;
    padding: 30px;
    font-size: 30px;
    width: 300px;
    height: 300px;
    background-color: darkseagreen;
    color: black;
  }

  /* For Desktop View */
  @media screen and (min-width: 1024px) {
    .gfg-div {
      background-color: #63c971;
      color: #fff;
    }
  }

  /* For Tablet View */
  @media screen and (min-device-width: 768px) and (max-device-width: 1024px) {
    .gfg-div {
      width: 400px;
      height: 400px;
      background-color: orange;
      color: black;
    }
  }

  /* For Mobile Portrait View */
  @media screen and (max-device-width: 480px) and (orientation: portrait) {
    .gfg-div {
      width: 200px;
      height: 200px;
      background-color: red;
      color: #fff;
    }
  }

  /* For Mobile Landscape View */
  @media screen and (max-device-width: 641px) and (orientation: landscape) {
    .gfg-div {
      width: 400px;
      height: 200px;
      background-color: cyan;
      color: black;
    }
  }

  /* For Mobile Phones Portrait or Landscape View */
  @media screen and (max-device-width: 641px) {
    .gfg-div {
      width: 400px;
      height: 200px;
      background-color: chartreuse;
      color: black;
    }
  }

  /* For iPhone 4 Portrait or Landscape View */
  @media screen and (min-device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {
    .gfg-div {
      width: 400px;
      height: 600px;
      background-color: brown;
      color: black;
    }
  }

  /* For iPhone 5 Portrait or Landscape View */
  @media (device-height: 568px) and (device-width: 320px) and (-webkit-min-device-pixel-ratio: 2) {
    .gfg-div {
      width: 400px;
      height: 600px;
      background-color: cornflowerblue;
      color: black;
    }
  }

  /* For iPhone 6 and 6 plus Portrait or Landscape View */
  @media (min-device-height: 667px) and (min-device-width: 375px) and (-webkit-min-device-pixel-ratio: 3) {
    .gfg-div {
      width: 400px;
      height: 400px;
      background-color: darkgoldenrod;
      color: black;
    }
  }
`;
export default function BlueCard3() {
  return (
    <div className="bg-white w-full">
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
          <div className="relative px-4 xs:px-6 xs:py-24 lg:py-32 lg:px-8">
            <div className="relative">
              <div className="md:w-6/12 w-full  lg:mb-10 md:mb-0 lg:mx-7 xs:mx-7 md:mx-0  xl:mx-0">
                <div className="relative px-4 py-2 xs:px-6 xs:py-24 lg:py-32 lg:px-8">
                  <div className="relative">
                    <div className="absolute inset-0">
                      <img
                        className="px-16 "
                        src="img/Aboutus-bg.svg"
                        alt="People working on laptops"
                      />
                    </div>
                    <div className="relative flex justify-center ">
                      <h1 className="text-center lg:mt-4 text-4xl font-extrabold tracking-tight xs:text-5xl lg:text-6xl">
                        <span className="block text-white">About us</span>
                      </h1>
                    </div>
                  </div>
                  <MainBlock className="text-black xs:px-72 text-xs lg:mt-20 lg:py-10 lg:px-20">
                    In this fast-paced world, children usually tend to succumb to a lot of stress or
                    become hyperactive for want of something constantly new. I AM MIRACLE brings
                    mindfulness to the little generation and make them more aware of themselves,
                    their behaviour, and their surroundings. We have come up with structured modules
                    and interactive activities through which we help children understand the
                    importance of mindfulness, interpersonal relationships, meditation, attention
                    and much more.
                  </MainBlock>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
