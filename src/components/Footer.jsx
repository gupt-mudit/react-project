import {
  faFacebook,
  faFacebookF,
  faInstagram,
  faLinkedin,
  faLinkedinIn,
  faQuora,
  faThreads,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import { faCircleChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Footer() {
  return (
    <footer className="px-4 pt-5 pb-20 mx-auto border-t max-w-7xl sm:px-6 lg:px-8 ">
      <div className="grid w-full grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-3">
        <div className="flex flex-col items-start w-full col-span-1 space-y-5">
          <img
            src="https://generative-ai.bluetickconsultants.com/images/bluetick-consultants.png"
            alt="Generative AI"
            className="object-contain w-40"
          />
          <div className="flex flex-col items-start space-y-10 ">
            <span className="text-lg font-bold ">Bluetick Consultants LLP</span>
            <span className="text-gray-500 text-md">
              contact@bluetickconsultants.com
            </span>
          </div>
          <img
            src="https://generative-ai.bluetickconsultants.com/images/glassdoor-rating.webp"
            alt="Glassdoor Rating"
            className="object-contain w-20"
          />
          <img
            src="https://generative-ai.bluetickconsultants.com/images/bluetick-iso.webp"
            alt="ISO Certified"
            className="object-contain w-20"
          />
        </div>
        <div className="flex flex-col w-full col-span-2 space-y-10 ">
          <ul className="flex-row hidden w-full space-x-10 md:flex ">
            <li className="flex flex-col items-start space-y-5">
              <span className="text-xl font-semibold uppercase">Resources</span>
            </li>
            <li className="flex flex-col items-start space-y-5">
              <span className="text-xl font-semibold uppercase">Products</span>
            </li>
          </ul>
          <ul className="flex flex-col items-start w-full space-x-10 md:flex-row ">
            <li className="flex flex-col items-start space-y-5">
              <a href="#" className="">
                <FontAwesomeIcon icon={faCircleChevronRight} className="" />
                Blogs
              </a>
            </li>
            <li className="flex flex-col items-start space-y-5">
              <a href="#" className="">
                <FontAwesomeIcon icon={faCircleChevronRight} className="" />
                Talk To Code
              </a>
            </li>
            <li className="flex flex-col items-start space-y-5">
              <a href="#" className="">
                <FontAwesomeIcon icon={faCircleChevronRight} className="" />
                InterviewGPT
              </a>
            </li>
            <li className="flex flex-col items-start space-y-5">
              <a href="#" className="">
                <FontAwesomeIcon icon={faCircleChevronRight} className="" />
                PrivacyDoc
              </a>
            </li>
            <li className="flex flex-col items-start space-y-5">
              <a href="#" className="">
                <FontAwesomeIcon icon={faCircleChevronRight} className="" />
                Sales Call Evaluator
              </a>
            </li>
          </ul>
          <div className="flex flex-col items-start pt-5 space-y-5 border-t md:flex-row md:items-center md:space-y-0 md:space-x-5">
            <ul className="flex w-full space-x-5 ">
              <li className="flex items-center justify-center text-gray-400 rounded-full shadow-md hover:text-white hover:bg-blue-800">
                <a href="#">
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    className="p-3 text-lg "
                  />
                </a>
              </li>
              <li className="flex items-center justify-center text-gray-400 rounded-full shadow-md hover:text-white hover:bg-pink-500">
                <a href="#">
                  <FontAwesomeIcon
                    icon={faInstagram}
                    className="p-3 text-lg "
                  />
                </a>
              </li>
              <li className="flex items-center justify-center text-gray-400 rounded-full shadow-md hover:text-black hover:bg-white">
                <a href="#">
                  <FontAwesomeIcon icon={faThreads} className="p-3 text-lg " />
                </a>
              </li>
              <li className="flex items-center justify-center text-gray-400 rounded-full shadow-md hover:text-white hover:bg-blue-400">
                <a href="#">
                  <FontAwesomeIcon icon={faTwitter} className="p-3 text-lg " />
                </a>
              </li>
              <li className="flex items-center justify-center text-gray-400 rounded-full shadow-md hover:text-white hover:bg-blue-700">
                <a href="#">
                  <FontAwesomeIcon
                    icon={faLinkedinIn}
                    className="p-3 text-lg "
                  />
                </a>
              </li>
              <li className="flex items-center justify-center text-gray-400 rounded-full shadow-md hover:text-white hover:bg-red-500">
                <a href="#">
                  <FontAwesomeIcon icon={faQuora} className="p-3 text-lg " />
                </a>
              </li>
            </ul>
            <span className="md:whitespace-nowrap md:px-5">
              2024 © All rights reserved by Bluetick Consultants LLP
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
