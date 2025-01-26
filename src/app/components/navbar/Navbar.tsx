import { IoIosMoon } from 'react-icons/io';

const Navbar = () => {
  return (
    <nav>
      <div className="mx-auto px-2">
        <div className="relative flex items-center justify-between">
          <div className="flex flex-1 items-center">
            <div className="sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="py-2 text-xl font-semibold text-gray-400"
                >
                  ntrio<span className="text-black">dev.</span>
                </a>
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <button
              type="button"
              className="relative rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <IoIosMoon />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
