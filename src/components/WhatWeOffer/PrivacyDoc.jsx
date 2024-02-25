export default function PrivacyDoc() {
  return (
    <div className="max-w-7xl py-10 mx-auto px-4 sm:px-6 lg:px-8 ">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-4 ">
        <div className="col-span-1 flex flex-col space-y-5 items-start  ">
          <span className="text-lg ">
            Its ensures that your sensitive data never leaves your server,
            guaranteeing the highest level of security.
          </span>
          <span className="text-lg">
            This can process a wide range of file types, including text, doc,
            pdf, ebook, and csv, making it a versatile solution for your
            document needs
          </span>
          <button className="text-blue-500 ">Try Now &rarr;</button>
        </div>
        <div className="col-span-2">
          <img
            src="https://generative-ai.bluetickconsultants.com/images/products/privacydoc.webp"
            alt="InterviewGPT"
          />
        </div>
      </div>
    </div>
  );
}
