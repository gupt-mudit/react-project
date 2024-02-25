export default function TalkToCode() {
  return (
    <div className="max-w-7xl py-10 mx-auto px-4 sm:px-6 lg:px-8 ">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 ">
        <div className="col-span-1 flex flex-col space-y-5 items-start  ">
          <span className="text-lg ">
            Elevate Your Coding with AI-Assisted Insights
          </span>
          <span className="text-lg">
            Speak Directly to Your Code - Optimize, Debug, and Learn on the Go
          </span>
          <button className="text-blue-500 ">Try Now &rarr;</button>
        </div>
        <div className="col-span-2">
          <img
            src="https://generative-ai.bluetickconsultants.com/images/products/talktocode.webp"
            alt="InterviewGPT"
          />
        </div>
      </div>
    </div>
  );
}
