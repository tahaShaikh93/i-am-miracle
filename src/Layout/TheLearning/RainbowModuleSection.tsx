import styled from 'styled-components';

const Overlay = styled.text`
 .container {
  position: relative;
  text-align: center;
  color: white;
}

.bottom-left {
  position: absolute;
  bottom: 8px;
  left: 16px;
}

.top-left {
  position: absolute;
  top: 8px;
  left: 16px;
}

.top-right {
  position: absolute;
  top: 8px;
  right: 16px;
}

.bottom-right {
  position: absolute;
  bottom: 8px;
  right: 16px;
}

.centered {
  position: absolute;
  top: 50%;
  left: 50%;
 
  padding-top: 20px;
  
}
  }
`;
export default function RainbowModuleSection() {
  return (
    <div className="bg-white">
      <main>
        <div>
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="max-w-full ">
              <div className="relative ">
                <div className="absolute inset-0">
                  <img
                    className="w-screen"
                    src="img/Rainbow text@2x 1.png"
                    alt="People working on laptops"
                  />
                </div>

                {/* <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8"> */}
                <div className="relative  ">
                  <div
                    className=" max-w-sm mx-auto lg:mb-96 sm:max-w-none sm:flex sm:justify-left"
                    // style={{ height: '878px' }}
                  >
                    <div className="">
                      <img
                        className="h-full   w-full object-cover"
                        src="img/Modules-img.svg"
                        alt="People working on laptops"
                      />
                    </div>
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
