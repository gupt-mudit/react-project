import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function LetsConnect() {
  return (
    <div
      id="contact"
      className="max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
    >
      {/* Grid */}
      <div className="grid md:grid-cols-2  gap-12">
        <div>
          <h2 className="text-3xl font-bold text-blue-500 sm:text-4xl lg:text-5xl lg:leading-tight ">
            Let's Connect
          </h2>
          <p className="mt-1 md:text-lg text-gray-800 ">
            Contact our support team or make an appointment with our experts.
          </p>
          <div className="mt-8">
            <h2 className="text-lg font-semibold text-gray-800 ">
              What can I expect?
            </h2>
            <ul className="mt-2 space-y-2">
              <li className="flex space-x-3">
                <FontAwesomeIcon icon={faCheck} className="text-xl" />
                <span className="text-gray-600 ">Industry-leading design</span>
              </li>
              <li className="flex space-x-3">
                <FontAwesomeIcon icon={faCheck} className="text-xl" />
                <span className="text-gray-600 ">
                  Developer community support
                </span>
              </li>
              <li className="flex space-x-3">
                <FontAwesomeIcon icon={faCheck} className="text-xl" />
                <span className="text-gray-600 ">Simple and affordable</span>
              </li>
            </ul>
          </div>

          <div className="mt-10 flex items-center gap-x-5">
            {/* Avatar Group */}
            <div className="flex -space-x-2">
              <img
                className="inline-block size-8 rounded-full ring-2 ring-white "
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=320&h=320&q=80"
                alt="Image Description"
              />
              <img
                className="inline-block size-8 rounded-full ring-2 ring-white "
                src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2.5&w=320&h=320&q=80"
                alt="Image Description"
              />
              <img
                className="inline-block size-8 rounded-full ring-2 ring-white "
                src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=3&w=320&h=320&q=80"
                alt="Image Description"
              />
              <span className="inline-flex justify-center items-center size-8 rounded-full bg-blue-600 text-white ring-2 ring-white">
                <svg
                  className="size-3.5"
                  xmlns="http://www.w3.org/2000/svg"
                  width={16}
                  height={16}
                  fill="currentColor"
                  viewBox="0 0 16 16"
                >
                  <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                </svg>
              </span>
            </div>
            {/* End Avatar Group */}
            <span className="text-sm text-gray-500">
              Trusted by over 37k customer
            </span>
          </div>
        </div>
        {/* End Col */}
        <div className="relative">
          {/* Card */}
          <div className="flex flex-col border rounded-xl p-4 sm:p-6 lg:p-10 ">
            <h2 className="text-xl font-semibold text-gray-800 ">
              Fill in the form
            </h2>
            <form>
              <div className="mt-6 grid gap-4 lg:gap-6">
                {/* Grid */}
                <div className="grid grid-cols-1  gap-4 lg:gap-6">
                  <div>
                    <label
                      htmlFor="fullname"
                      className="block mb-2 text-sm text-gray-700 font-medium "
                    >
                      Full Name <span className="text-red-500 ">*</span>
                    </label>
                    <input
                      type="text"
                      name="fullname"
                      id="fullname"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-slate-100"
                    />
                  </div>
                </div>
                {/* End Grid */}
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm text-gray-700 font-medium "
                  >
                    Email <span className="text-red-500 ">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-slate-100"
                  />
                </div>
                {/* Grid */}
                <div className="grid grid-cols-1  gap-4 lg:gap-6">
                  <div>
                    <label
                      htmlFor="contact-number"
                      className="block mb-2 text-sm text-gray-700 font-medium "
                    >
                      Contact Number <span className="text-red-500 ">*</span>
                    </label>
                    <input
                      type="number"
                      name="contact-number"
                      id="contact-number"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-slate-100"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1  gap-4 lg:gap-6">
                  <div>
                    <label
                      htmlFor="message-subject"
                      className="block mb-2 text-sm text-gray-700 font-medium "
                    >
                      Subject <span className="text-red-500 ">*</span>
                    </label>
                    <input
                      type="text"
                      name="message-subject"
                      id="message-subject"
                      className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-slate-100"
                    />
                  </div>
                </div>
                {/* End Grid */}
                <div>
                  <label
                    htmlFor="message-body"
                    className="block mb-2 text-sm text-gray-700 font-medium "
                  >
                    Message <span className="text-red-500 ">*</span>
                  </label>
                  <textarea
                    id="message-body"
                    name="message-body"
                    rows={4}
                    className="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none bg-slate-100"
                    defaultValue={''}
                  />
                </div>
              </div>
              {/* End Grid */}
              <div className="mt-6 grid">
                <button
                  type="submit"
                  className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none "
                >
                  Submit form
                </button>
              </div>
            </form>
            <div className="mt-3 text-center">
              <p className="text-sm text-gray-500">
                We'll get back to you in 1-2 business days.
              </p>
            </div>
          </div>
          {/* End Card */}
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
    </div>
  );
}
