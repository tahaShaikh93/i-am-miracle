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

export default function HeroCard() {
  return (
    <div className="bg-white">
      <main>
        <div>
          {/* Hero card */}

          {/* <div className="bg-blue">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          
          <div className="mt-6 border-t border-blue-400 border-opacity-25 pt-10">
              <img
                    className="h-full w-full object-cover"
                    src="img/Welcome-bg-banner.svg"
                    alt="People working on laptops"
                  />
                 
          </div>
        </div>
      </div> */}
          <div className="relative">
            <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gray-100" />
            <div className="max-w-full ">
              <div className="relative shadow-xl sm:rounded-none ">
                <div className="absolute inset-0">
                  <img
                    className="h-full w-full object-cover"
                    src="img/New-welcome-Banner.png"
                    alt="People working on laptops"
                  />
                  <div className="absolute inset-0 bg-indigo-700 mix-blend-multiply" />
                </div>
                <div className="relative flex justify-center  items-center ">
                  <img
                    className="object-contain"
                    style={{ height: '350px' }}
                    src="img/Welcome-banner-img.svg"
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
