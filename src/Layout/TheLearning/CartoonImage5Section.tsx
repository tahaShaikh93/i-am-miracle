export default function CartoonImage5Section() {
  return (
    <div className="bg-white">
      <main>
        <div>
          <div className="relative shadow-2xl">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="max-w-full ">
              <div className="relative ">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src="img/Orange-bg.svg"
                    alt="People working on laptops"
                  />
                  <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
                </div>
                <div className="relative  py-16 sm:p-24 lg:py-32 lg:px-32       w-full justify-center px-4 sm:px-6 sm:py-24  items-center ">
                  <h1 className="text-left text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                    <span className="block text-white">Hello ,</span>

                    <span className="block text-brown">I am Mirako</span>
                  </h1>

                  {/* <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center"> */}
                  {/* <div className="mt-10 max-w-xl mx-auto sm:max-w-xl  sm:justify-center">
                    <div className="space-y-4 sm:space-y-0 sm:mx-auto sm:inline-grid sm:grid-cols-0 sm:gap-5"> */}
                  <div className="">
                    <div className="">
                      <img
                        className="h-full w-full object-cover"
                        src="img/Cartoon-images6.svg"
                        alt="People working on laptops"
                      />
                    </div>
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
