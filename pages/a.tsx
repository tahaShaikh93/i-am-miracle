export default function Example() {
  return (
    <div className="bg-white">
      <main>
        {/* Hero section */}
        <div className="relative">
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
          <div className="max-w-full mx-auto sm:px-6 lg:px-8">
            <div className="relative sm:overflow-hidden">
              <div className="absolute inset-0">
                <img
                  className="h-full w-full object-cover"
                  src="img/Banner 3 (1).png"
                  alt="People working on laptops"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply" />
              </div>
              <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
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
                <p className="mt-6 max-w-lg mx-auto text-left text-xl text-indigo-200 sm:max-w-3xl">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat
                  commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
