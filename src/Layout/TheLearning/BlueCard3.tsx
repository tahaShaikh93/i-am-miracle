import React from 'react';
import { useWindowSize } from 'src/libs/useWindowSize';
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
  const [width] = useWindowSize();
  return (
    <div className="w-full flex flex-col lg:min-h-screen">
      <div
        className="flex-1 flex flex-wrap justify-center items-center relative z-999"
        style={width <= 1024 ? { marginTop: '-30px' } : {}}
      >
        <div className="absolute w-full h-full xs:hidden lg:flex items-center justify-center top-0 left-0">
          <img className="object-cover" src="img/Banner-3.png" alt="People working on laptops" />
        </div>
        <div className="absolute w-full h-full xs:flex lg:hidden items-center justify-start top-0 left-0">
          <img
            className="h-full object-cover"
            src="img/Banner-3.png"
            alt="People working on laptops"
          />
        </div>
        <div className="w-full relative">
          <div className="relative flex lg:container lg:mx-auto xs:px-4 lg:px-8">
            <div className="lg:w-1/2 xs:w-full">
              <div className="w-full text-white xs:py-16 lg:py-0">
                <div className="w-full xs:px-10 lg:px-20">
                  <div className="flex items-center justify-center relative">
                    <div className="w-full flex justify-center items-center">
                      <img
                        className="w-full object-contain"
                        src="img/Aboutus-bg.svg"
                        alt="People working on laptops"
                      />
                    </div>
                    <div className="absolute w-full h-full top-0 left-0 flex items-center justify-center">
                      <h1 className="text-center text-4xl font-extrabold tracking-tight xs:text-5xl lg:text-6xl">
                        About us
                      </h1>
                    </div>
                  </div>
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
      </div>
    </div>
  );
}
