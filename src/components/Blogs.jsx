import { blogContent } from '~/utils/blogContent';

export default function Blogs() {
  return (
    <div id="blogs" className="max-w-7xl py-10 mx-auto px-4 sm:px-6 lg:px-8 ">
      <h2 className=" text-2xl md:text-4xl font-bold ">
        Explore and enjoy the blogs written by our passionate techies.
      </h2>
      <div className=" mt-10 grid grid-cols-1  md:grid-cols-3 lg:grid-cols-3 gap-4 ">
        {blogContent.map((blog) => (
          <div
            key={blog.id}
            className="col-span-1 p-8  rounded-xl shadow-md flex flex-col space-y-5 items-start  justify-around "
          >
            <h1 className="text-xl  space-y-5 font-medium ">{blog.title}</h1>
            <p className="text-md    text-gray-500">
              {blog.description.split(' ').slice(0, 20).join(' ')}...
            </p>

            <a href="blog.link" target="_blank" className="text-blue-500 ">
              Read More &rarr;
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
