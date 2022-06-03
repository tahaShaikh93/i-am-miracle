export default function OrangeCard2() {
  return (
    <div className="bg-white">
      <main>
        <div>
          {/* orange card */}
          <div className="relative ">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="max-w-full ">
              <div className="relative sm:rounded-none">
                <div className="absolute inset-0 ">
                  <img
                    className="h-full w-full object-cover"
                    src="img/Orange-card2.svg"
                    alt="People working on laptops"
                  />
                  <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
                </div>
                <div className="relative flex w-full justify-center px-4 py-16 sm:px-6 xs:pb-24 lg:py-32 items-center lg:px-8">
                  <img
                    className=" object-contain"
                    style={{ height: '350px' }}
                    src="img/orange-banner-cartoon.svg"
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
