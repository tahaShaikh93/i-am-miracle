export default function KidsPlayingSection() {
  return (
    <div className="bg-white ">
      <main>
        <div>
          {/* kids playing image */}
          <div className="relative">
            <div className="max-w-full ">
              <div className="relative lg:pb-72 pt-12">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src="img/Kids@2x.png"
                    alt="People working on laptops"
                  />
                </div>

                <div className="relative ">
                  <div className="absolute flex inset-0">
                    <img
                      className="w-screen"
                      src="img/Aboutus-bg.svg"
                      alt="People working on laptops"
                    />
                  </div>
                  {/* <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8"> */}
                  <div className="relative ">
                    <h1 className="text-center  font-extrabold tracking-tight xs:text-2xl lg:text-6xl">
                      <span className="block text-white">
                        Age Group (<span className="text-yellow">6</span> -
                        <span className="text-yellow">11</span> )
                      </span>
                    </h1>

                    {/* <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center"> */}
                    <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                      <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5"></div>
                    </div>
                  </div>
                </div>

                <div className="relative px-4 py-2 sm:px-6 sm:pb-24 lg:pb-32 lg:px-8">
                  {/* <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center"> */}
                  <div className="lg:mt-10 pb-64 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center">
                    <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-2 sm:gap-5"></div>
                    <p className="text-left font-normal xs:tracking-normal  ">
                      <p className="lg:block lg:mx-96 xs:text-sm lg:text-md text-black">
                        We are currently starting with the age group of 6 -11 years. Since young
                        kids are impressionable at that age, it is easier to start teaching them
                        what's important for their own betterment.
                      </p>
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
