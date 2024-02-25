import { useState } from 'react';
import PrivacyDoc from './PrivacyDoc';
import SalesCallEvaluator from './SalesCallEvaluator';
import TalkToCode from './TalkToCode';
import TransformingEnterprises from './TransformingEnterprises';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faHeadset,
  faLaptopCode,
  faShieldHalved,
} from '@fortawesome/free-solid-svg-icons';

export default function WhatWeOffer() {
  const [selectedTab, setSelectedTab] = useState(1);
  return (
    <div className="flex flex-col items-center justify-center">
      <TransformingEnterprises />
      <div id="products">
        <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
          {/* Tab Nav */}
          <nav
            className="max-w-6xl mx-auto grid sm:flex gap-y-px sm:gap-y-0 sm:gap-x-4"
            aria-label="Tabs"
            role="tablist"
          >
            <button
              onClick={() => setSelectedTab(1)}
              type="button"
              className={` w-full flex flex-col text-start hover:bg-gray-100 p-3 md:p-5 rounded-xl  ${
                selectedTab === 1
                  ? 'bg-gray-100 text-gray-800'
                  : 'text-gray-800'
              }`}
              id="tabs-with-card-item-1"
              data-hs-tab="#tabs-with-card-1"
              aria-controls="tabs-with-card-1"
              role="tab"
            >
              <FontAwesomeIcon icon={faLaptopCode} className="text-3xl" />
              <span className="mt-5">
                <span className=" text-2xl md:text-4xl flex-col items-start space-y-5  flex font-bold text-blue-700">
                  Talk to Code
                </span>
                <span className="mt-2 text-gray-800  text-lg">
                  Your AI-Powered Code Assistant
                </span>
              </span>
            </button>
            <button
              onClick={() => setSelectedTab(2)}
              type="button"
              className={` w-full flex flex-col text-start hover:bg-gray-100 p-3 md:p-5 rounded-xl  ${
                selectedTab === 2
                  ? 'bg-gray-100 text-gray-800'
                  : 'text-gray-800'
              }`}
              id="tabs-with-card-item-2"
              data-hs-tab="#tabs-with-card-2"
              aria-controls="tabs-with-card-2"
              role="tab"
            >
              <FontAwesomeIcon icon={faShieldHalved} className="text-3xl" />
              <span className="mt-5">
                <span className=" text-2xl md:text-4xl flex-col items-start space-y-5  flex font-bold text-blue-700">
                  PrivacyDoc
                </span>
                <span className="mt-2 text-gray-800  text-lg">
                  Talk to your Business Documents in the most secure way
                </span>
              </span>
            </button>
            <button
              onClick={() => setSelectedTab(3)}
              type="button"
              className={` w-full flex flex-col text-start hover:bg-gray-100 p-3 md:p-5 rounded-xl  ${
                selectedTab === 3
                  ? 'bg-gray-100 text-gray-800'
                  : 'text-gray-800'
              }`}
              id="tabs-with-card-item-3"
              data-hs-tab="#tabs-with-card-3"
              aria-controls="tabs-with-card-3"
              role="tab"
            >
              <FontAwesomeIcon icon={faHeadset} className="text-3xl" />
              <span className="mt-5">
                <span className=" text-2xl md:text-4xl flex-col items-start space-y-5  flex font-bold text-blue-700">
                  Sales Call Evaluator
                </span>
                <span className="mt-2 text-gray-800  text-lg">
                  Unlock Comprehensive Insights from Your Sales Calls
                </span>
              </span>
            </button>
          </nav>
          {/* End Tab Nav */}
          {/* Tab Content */}
          <div className="mt-12 md:mt-16">
            <div
              id="tabs-with-card-1"
              className={`${selectedTab === 1 ? 'block' : 'hidden'}`}
              role="tabpanel"
              aria-labelledby="tabs-with-card-item-1"
            >
              <div className="max-w-[1140px] lg:pb-32 relative">
                <TalkToCode />
              </div>
            </div>
            <div
              className={`${selectedTab === 2 ? 'block' : 'hidden'}`}
              aria-labelledby="tabs-with-card-item-2"
            >
              <div className="max-w-[1140px] lg:pb-32 relative">
                <PrivacyDoc />
              </div>
            </div>
            <div
              className={`${selectedTab === 3 ? 'block' : 'hidden'}`}
              aria-labelledby="tabs-with-card-item-3"
            >
              <div className="max-w-[1140px] lg:pb-32 relative">
                <SalesCallEvaluator />
              </div>
            </div>
          </div>
          {/* End Tab Content */}
        </div>
      </div>
    </div>
  );
}
