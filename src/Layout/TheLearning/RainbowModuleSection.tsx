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
                    className="h-full w-full object-cover"
                    src="img/Rainbow-img.svg"
                    alt="People working on laptops"
                  />
                  <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
                </div>
                {/* <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8"> */}
                <div className="relative ">
                  <div className=" max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-left">
                    <div className="">
                      <img
                        className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2"
                        width={404}
                        height={784}
                        // fill="none"
                        // viewBox="0 0 404 784"
                        // className="h-full w-full object-cover"
                        src="img/Modules-img.svg"
                        alt="People working on laptops"
                      />
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
