export default function Hero() {
  return (
    <div
      id="hero"
      className="pt-12 relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('/polygon-bg-element.svg')] before:bg-no-repeat before:bg-top before:bg-cover before:size-full before:-z-[1] before:transform before:-translate-x-1/2 "
    >
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-10">
        <div className="flex justify-center">
          <p className="inline-flex items-center gap-x-2 bg-white border border-gray-200 text-sm text-gray-800 p-1 px-3 rounded-full transition hover:border-gray-300 ">
            Empowering Recruiters with AI-Driven Interviews
          </p>
        </div>
        <div className="mt-5 max-w-2xl text-center mx-auto">
          <h1 className="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl ">
            INTERVIEW
            <span className="bg-clip-text bg-gradient-to-tl from-blue-600 to-violet-600 text-transparent">
              GPT
            </span>
          </h1>
        </div>
        <div className="mt-5 max-w-3xl text-center mx-auto">
          <p className="text-lg text-gray-600 ">
            Revolutionize Your Hiring Process with InterviewGPTAI-Powered
          </p>
        </div>
        <div className="max-w-xl md:max-w-3xl text-center mx-auto">
          <p className="text-lg text-gray-600 ">
            Question Generation for Accurate Candidate Assessment
          </p>
        </div>
        <div className="mt-8 gap-3 flex justify-center">
          <button
            onClick={() =>
              window.open(
                'https://www.bluetickconsultants.com/generative-ai.html ',
                '_blank'
              )
            }
            className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 hover:from-violet-600 hover:to-blue-600 border border-transparent text-white text-sm font-medium rounded-md focus:outline-none focus:ring-1 focus:ring-gray-600 py-3 px-4 0"
          >
            Explore Now
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

        <div className="lg:max-w-6xl lg:mx-auto mt-5">
          <img
            src="https://generative-ai.bluetickconsultants.com/images/products/interviewgpt.webp"
            alt="InterviewGPT"
          />
        </div>
      </div>
    </div>
  );
}
