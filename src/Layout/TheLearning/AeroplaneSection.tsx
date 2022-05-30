export default function AeroplaneSection() {
  return (
    <div className="bg-white">
      <main>
        <div>
          {/* Blue card */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="max-w-full ">
              <div className="relative ">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src="img/Banner 4@2x-cropped.png"
                    alt="People working on laptops"
                  />
                  <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
                </div>
                <div className="relative px-0 pt-16 sm:px-0">
                  {/* <img
                    className="relative z-999 "
                    style={{ height: '130px' }}
                    src="img/Cloud2.svg"
                    alt="People working on laptops"
                  /> */}
                  <div
                    className="flex max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center"
                    style={{ marginTop: '170px' }}
                  >
                    <div className="space-y-4 flex sm:space-y-0 sm:mx-auto">
                      <img
                        className=" w-full object-cover"
                        style={{ height: '130px' }}
                        src="img/Aeroplane-image.svg"
                        alt="People working on laptops"
                      />
                    </div>
                  </div>
                </div>
                <div className="flex -mx-24 justify-between">
                  <img
                    className="relative  z-999 "
                    style={{ height: '130px' }}
                    src="img/Cloud2.svg"
                    alt="People working on laptops"
                  />
                  <img
                    className="relative  z-999 "
                    style={{ height: '130px' }}
                    src="img/Cloud1.svg"
                    alt="People working on laptops"
                  />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-0  lg:py-0  lg:px-8">
                  <div className="" style={{ textAlign: 'right' }}>
                    <div className="relative  ">
                      <div
                        className="md:w-6/12 flex w-full mb-10 md:mb-0 mx-7 sm:mx-7 md:mx-0 lg:mx-0 xl:mx-0"
                        style={{ float: 'right' }}
                      >
                        <div className="">
                          <div className="relative   "></div>
                          <p className="text-black py-10 px-20">
                            Every kid is provided with a list of dos and don'ts since they are not
                            cognitively advanced to make the right decision. Parents feel that their
                            child is unaware of such things, and despite that expect the young ones
                            to follow the elders' sense of right and wrong. But what if that could
                            be changed. What if we teach our kids the basis of day-to-day decision
                            making, choosing between what is good and not so good for them? What if
                            we develop skills to build their list of healthy habits of eating,
                            screen time, discipline, time management. And yes, it goes with a lot of
                            trust and patience. The kids would be introduced to a series of
                            activities, story sessions, group discussions, games, concentration
                            exercises, memory hack exercises, practising power of visualisation.
                            They would be introduced to the inner magical power of conscious living,
                            positive mindset, goal setting, etc, which shall help them develop a
                            strong personality. They would understand the importance of healthy
                            eating along with healthy lifestyle. I AM MIRACLE shall help your young
                            ones understand the true power of visualisations that shall enable them
                            to lead a wholesome, aware and mindful life.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <img
                    className=" object-cover"
                    src="img/Boy-image.svg"
                    alt="People working on laptops"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
