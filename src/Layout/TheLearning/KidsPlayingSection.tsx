export default function KidsPlayingSection() {
  return (
    <div className="bg-white max-h-screen">
      <main>
        <div>
          {/* kids playing image */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="max-w-full ">
              <div className="relative ">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src="img/Kid-playing-img.svg"
                    alt="Kids playing imagee"
                  />
                  <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
                </div>

                <div className="relative ">
                  <div className="absolute flex inset-0">
                    <img
                      className="w-screen"
                      src="img/Aboutus-bg.svg"
                      alt="People working on laptops"
                    />
                    <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
                  </div>
                  {/* <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8"> */}
                  <div className="relative ">
                    <h1 className="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                      <span className="block text-white">Age Group (6-11)</span>
                    </h1>

                    {/* <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center"> */}
                    <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                      <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5"></div>
                    </div>
                  </div>
                </div>

                <div className="relative px-4 py-2 sm:px-6 sm:pb-24 lg:pb-32 lg:px-8">
                  {/* <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center"> */}
                  <div className="mt-10 pb-64 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                    <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5"></div>
                    <p className="text-left text-lg font-normal tracking-tight sm:text-sm lg:text-lg">
                      <span className="block mx-96 text-black">
                        We are currently starting with the age group of 6 -11 years. Since young
                        kids are impressionable at that age, it is easier to start teaching them
                        what's important for their own betterment.
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More main page content here... */}
      </main>
    </div>
  );
}
