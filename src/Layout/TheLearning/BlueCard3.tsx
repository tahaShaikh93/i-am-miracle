/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import { Popover, Transition } from '@headlessui/react';
import {
  AnnotationIcon,
  ChatAlt2Icon,
  InboxIcon,
  MenuIcon,
  QuestionMarkCircleIcon,
  XIcon,
} from '@heroicons/react/outline';
import { ChevronDownIcon } from '@heroicons/react/solid';
import styled from 'styled-components';
import Header from '../Header';
import HeroCard from './HeroCard';
import OrangeCard2 from './OrangeCard2';
import Footer from '../Footer';

const Overlay = styled.button`
  .overlay__about {
    background-image: url('/img/Orange-card2.svg');
    @apply bg-slate-900;
    background-repeat: no-repeat;
    position: left;
  }

  .overlay__team {
    background-image: url('./img/Welcome-bg-banner.svg');
    @apply bg-slate-900;
    background-repeat: no-repeat;
    position: right;
  }
`;

const solutions = [
  {
    name: 'Inbox',
    description: 'Get a better understanding of where your traffic is coming from.',
    href: '#',
    icon: InboxIcon,
  },
  {
    name: 'Messaging',
    description: 'Speak directly to your customers in a more meaningful way.',
    href: '#',
    icon: AnnotationIcon,
  },
  {
    name: 'Live Chat',
    description: "Your customers' data will be safe and secure.",
    href: '#',
    icon: ChatAlt2Icon,
  },
  {
    name: 'Knowledge Base',
    description: "Connect with third-party tools that you're already using.",
    href: '#',
    icon: QuestionMarkCircleIcon,
  },
];
const navigation = [
  { name: 'The learning', href: '#' },
  { name: 'Modules', href: '#' },
  { name: 'Benefit', href: '#' },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function BlueCard3() {
  return (
    <div className="bg-white">
      <main>
        <div>
          {/* Blue card */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="max-w-full ">
              <div className="relative w-full">
                <div className="w-full flex justify-center items-center z-999 absolute inset-0 mt-20">
                  <img
                    className="w-screen"
                    src="img/Banner 3 (1).png"
                    alt="People working on laptops"
                  />
                  <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
                </div>
                <div className="relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8 z-999">
                  <div className="relative  ">
                    <div className="md:w-6/12 w-full  mb-10 md:mb-0 mx-7 sm:mx-7 md:mx-0 lg:mx-0 xl:mx-0">
                      <div className="">
                        <div className="relative   ">
                          <div className="absolute inset-0">
                            <img
                              className="px-16"
                              src="img/Aboutus-bg.svg"
                              alt="People working on laptops"
                            />
                          </div>
                          <div className="relative flex justify-center ">
                            <h1 className="text-center mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl">
                              <span className="block text-white">About us</span>
                            </h1>
                          </div>
                        </div>
                        <p className="text-white mt-20 py-10 px-20">
                          In this fast-paced world, children usually tend to succumb to a lot of
                          stress or become hyperactive for want of something constantly new. I AM
                          MIRACLE brings mindfulness to the little generation and make them more
                          aware of themselves, their behaviour, and their surroundings. We have come
                          up with structured modules and interactive activities through which we
                          help children understand the importance of mindfulness, interpersonal
                          relationships, meditation, attention and much more.{' '}
                        </p>
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
