import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBuilding,
  faCogs,
  faTurnUp,
} from '@fortawesome/free-solid-svg-icons';
import { faHandshake } from '@fortawesome/free-regular-svg-icons';

export default function TransformingEnterprises() {
  const items = [
    {
      id: 1,
      title: 'Explore AI Opportunities for Your Enterprise',
      description:
        'Unlock the potential of generative AI by identifying tailored opportunities for integration within your organization, ensuring a strategic and efficient approach to AI implementation.',
      icon: faBuilding,
    },
    {
      id: 2,
      title: 'Design AI Trust Layer',
      description:
        'Prioritize data security and build trust in generative AI applications with a dedicated trust layer, emphasizing privacy-focused solutions that safeguard both organizational and customer data.',
      icon: faHandshake,
    },
    {
      id: 3,
      title: 'Scalability-Focused Solutions',
      description:
        'Streamline and optimize business processes with comprehensive workflow automation, ensuring seamless integration of AI technologies from inception to execution for increased efficiency and productivity.',
      icon: faCogs,
    },
    {
      id: 4,
      title: 'End to end Workflow automation',
      description:
        'Implement cutting-edge, scalable generative AI solutions that not only meet current organizational needs but also adapt and grow with the evolving demands of your enterprise, providing a future-proof approach to AI integration.',
      icon: faTurnUp,
    },
  ];
  return (
    <div className="max-w-7xl py-20 mx-auto px-4 sm:px-6 lg:px-8 ">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 ">
        <div className="col-span-1 flex flex-col space-y-10 items-start  ">
          <h1 className=" text-3xl md:text-4xl flex-col items-start space-y-5  flex font-bold">
            <span className="text-[5rem]  text-gray-200">...</span>
            <span>TRANSFORMING ENTERPRISES</span>
          </h1>
          <p className=" text-2xl md:text-4xl text-gray-500">
            with cutting-edge, scalable, privacy-focused Generative AI Solutions
          </p>
          <span className=" text-xl md:text-3xl ">
            Founded in 2017, Bluetick Consultants is a technology-driven firm
            that has made a significant impact in the Indian and US startup
            ecosystems.
          </span>

          <button className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 0">
            Find Your Consultant
            <svg
              className="flex-shrink-0 size-4"
              width={16}
              height={16}
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
              />
            </svg>
          </button>
        </div>
        <div className="col-span-1">
          <img
            src="https://generative-ai.bluetickconsultants.com/images/products/generativeAI.png"
            alt="InterviewGPT"
          />
        </div>
      </div>
      <a
        href="https://www.bluetickconsultants.com"
        className="text-blue-500 underline mb-10"
      >
        www.bluetickconsultants.com
      </a>
      <div className="grid mt-10 grid-cols-1 md:grid-cols-4 lg:grid-cols-4 gap-4 ">
        {items.map((item) => (
          <div
            key={item.id}
            className="col-span-1 p-4 shadow-xl shadow-blue-100 hover:-translate-y-2 duration-300 ease-in-out rounded-xl flex flex-col items-center  justify-between  space-y-5"
          >
            <div className="flex flex-col items-center justify-center space-y-5">
              <FontAwesomeIcon icon={item.icon} size="2x" />
              <h1 className="text-xl font-medium text-center">{item.title}</h1>
            </div>
            <p className="text-gray-500 text-center">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
