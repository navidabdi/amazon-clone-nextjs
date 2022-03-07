import Image from 'next/image';
import {
  MenuIcon,
  SearchIcon,
  ShoppingCartIcon,
} from '@heroicons/react/outline';
const Header = () => {
  return (
    <header>
      {/* Top Nav */}
      <div className="flex items-center bg-amazon_blue p-1 flex-grow py-2">
        <div className="mt-2 flex flex-grow items-center sm:flex-grow-0">
          <Image
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            width={150}
            height={40}
            objectFit="contain"
            className="cursor-pointer"
          />
        </div>
        {/* Search */}
        <div className="hidden sm:flex items-center h-10 rounded-md bg-yellow-400 hover:bg-yellow-500 transition duration-150 flex-grow cursor-pointer">
          <input
            className="p-2 h-full w-6 flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
            type="text"
          />
          <SearchIcon className="h-12 p-4" />
        </div>
        {/* Right */}
        <div className="text-white flex items-center justify-center text-xs space-x-6 mx-6 whitespace-nowrap">
          <div className="link">
            <p className="">Hello Nabi Abdi</p>
            <p className="font-bold md:text-sm">Account & Lists</p>
          </div>
          <div className="link">
            <p>Returns</p>
            <p className="font-bold md:text-sm">& Orders</p>
          </div>
          <div className="link relative flex items-center">
            <span className="absolute bg-yellow-400 top-0 text-center text-black font-bold right-0 h-4 w-4 rounded-full md:right-10">
              0
            </span>
            <ShoppingCartIcon className="h-8" />
            <p className="hidden md:inline font-bold md:text-sm mt-2">Basket</p>
          </div>
        </div>
      </div>
      {/* Bottom Nav */}
      <div></div>
    </header>
  );
};

export default Header;
