import { Fragment, useState } from 'react';
import styled from 'styled-components';

const MainBlock = styled.div`
  .background-img .overlay {
    position: absolute;
    background: '#FF4357';
    overflow: hidden;
    top: 0;
    left: 0;
  }

  .background-img .overlay {
    opacity: 1;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 51, 51, 0.5);
  }
  .container {
    position: relative;
  }

  .container img {
    width: 100%;
  }
`;
export default function TealPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative bg-gray-900">
        {/* Decorative image and overlay */}
        <div aria-hidden="true" className="background-img absolute inset-0 overflow-hidden">
          <img
            src="img/New-teal-bg.svg"
            alt=""
            className="w-full h-full object-center object-cover"
          />
        </div>
        <div aria-hidden="true" className="absolute inset-0 bg-gray-900 opacity-50" />

        <div className="relative  mx-auto py-12 px-6 flex flex-col items-center text-center sm:py-20 lg:px-0">
          <img src="img/Page-img.png" alt="" className="w-full h-full object-center object-cover" />
        </div>
      </div>
    </div>
  );
}
