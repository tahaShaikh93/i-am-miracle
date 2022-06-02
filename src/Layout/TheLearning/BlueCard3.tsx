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
const Card = styled.div`
  & {
    width: 100%;
    border: 0px solid #5e5d5d;
  }
  &.hide .cardcontent {
    height: 0px;
    border-radius: 0px !important;
    background: #00000000 !important;
    transition: all 1s ease;
    display: none;
    top: 10px;
  }
  &.show .cardcontent {
    border-radius: 0px !important;
    background: #00000000 !important;
    padding: 0px 20px;
    transition: all 1s ease;
    display: block;
    height: auto;
    top: 0px;
  }
  &.hide .cardHeader {
    border-radius: 5px !important;
    background: #ffffff !important;
    transition: all 1s ease;
  }
  &.show .cardHeader {
    border-radius: 0px !important;
    background: #ffffff !important;
  }
`;
export default function BlueCard3() {
  return (
    <div className="bg-white ">
      <main>
        <div className="relative ">
          <div className="absolute inset-0">
            <img
              className="h-full w-full object-cover"
              src="img/Banner 3 (1).png"
              alt="People working on laptops"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply" />
          </div>
          <div className="relative px-4  sm:px-6 sm:py-24 lg:py-32 lg:px-8 z-999">
            <div className="relative  ">
              <div className="md:w-6/12 w-full  lg:mb-10 md:mb-0 lg:mx-7 sm:mx-7 md:mx-0  xl:mx-0">
                <div className="relative px-4 py-2 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <div className="relative">
                    <div className="absolute inset-0">
                      <img
                        className="px-16 "
                        src="img/Aboutus-bg.svg"
                        alt="People working on laptops"
                      />
                    </div>
                    <div className="relative flex justify-center ">
                      <h1 className="text-center lg:mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                        <span className="block text-white">About us</span>
                      </h1>
                    </div>
                  </div>
                  <MainBlock className="text-black sm:px-72 text-xs lg:mt-20 lg:py-10 lg:px-20">
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
