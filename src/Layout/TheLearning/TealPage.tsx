import Header from '../Header';

export default function TealPage() {
  return (
    <div className="bg-white">
      <main>
        <div>
          {/* teal page bg */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="max-w-full ">
              <div className="relative ">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src="img/New-teal-bg.svg"
                    alt="People working on laptops"
                  />
                  <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8">
                  <img
                    className="h-full w-full object-cover"
                    src="img/Page-bg.svg"
                    alt="People working on laptops"
                  />

                  {/* <div className="mt-10 max-w-sm mx-auto sm:max-w-none sm:flex sm:justify-center"> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
