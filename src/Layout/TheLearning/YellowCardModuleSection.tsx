export default function YellowCardModuleSection() {
  return (
    <div className="bg-white">
      <main>
        <div>
          {/* Yellow card */}
          <div className="relative">
            <div className="max-w-full ">
              <div className="relative ">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src="img/Banner 5@2x-cropped.png"
                    alt="People working on laptops"
                  />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <div className="">
                    <div className="relative">
                      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="lg:flex  justify-center">
                          <div className="p-12 text-black bg-white">
                            <div className="text-center flex text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                              <div className="px-6 py-16 flex  text-yellow">Modules</div>
                            </div>
                          </div>
                          <div className=" align-text-top text-white bg-red1">
                            <div className="text-2xl font-extrabold border-b py-3 flex justify-center px-6 border-white">
                              Beginner
                            </div>
                            <div className="text-center p-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                              2<p className="">weeks</p>
                            </div>
                          </div>
                          <div className=" text-white bg-yellow">
                            <div className="text-2xl font-extrabold border-b py-3 px-6 flex justify-center border-white">
                              Intermediate
                            </div>
                            <div className="text-center p-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                              4<p className="">weeks</p>
                            </div>
                          </div>
                          <div className=" text-white bg-green">
                            <div className="text-2xl font-extrabold border-b py-3 px-6 flex justify-center border-white">
                              Advance
                            </div>
                            <div className="text-center p-6 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                              6<p className="">weeks</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
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
