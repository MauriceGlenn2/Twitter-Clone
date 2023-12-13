import { DotsHorizontalIcon, SearchIcon } from "@heroicons/react/outline";
import { BadgeCheckIcon } from "@heroicons/react/solid";

export default function Trending() {
  return (
    <div className="hidden lg:flex flex-col ml-7 mt-4">
      <div className="flex space-x-3 bg-white bg-opacity-10 w-[300px] h-[44px] p-3 rounded-3xl">
        <SearchIcon className="w-6 text-gray-600" />
        <input
          placeholder="Search Twitter"
          className="bg-transparent focus:outline-none placeholder:text-gray-600"
        />
      </div>
      <div className="w-[300px] h-[500px] bg-white bg-opacity-10 rounded-3xl mt-3 text-white">
        <h1 className="font-bold text-xl p-3">Whats happening</h1>
        <div className="relative p-3">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Sports Trending</p>
          <h1 className="text-[15px] font-bold">CJ. Stroud</h1>
          <p className="text-xs text-gray-500">1,000 Tweets</p>
        </div>
        <div className="relative p-3">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Sports Trending</p>
          <h1 className="text-[15px] font-bold">Bryce Young</h1>
          <p className="text-xs text-gray-500">1,000 Tweets</p>
        </div>
        <div className="relative p-3">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Sports Trending</p>
          <h1 className="text-[15px] font-bold">Cowboys at Eagles</h1>
          <p className="text-xs text-gray-500">1,000,000 Tweets</p>
        </div>
        <div className="relative p-3">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Trending in US</p>
          <h1 className="text-[15px] font-bold">China</h1>
          <p className="text-xs text-gray-500">1,000 Tweets</p>
        </div>
        <div className="relative p-3">
          <DotsHorizontalIcon className="w-5 text-gray-600 absolute right-4" />
          <p className="text-xs text-gray-500">Trending in US</p>
          <h1 className="text-[15px] font-bold">China</h1>
          <p className="text-xs text-gray-500">1,000 Tweets</p>
        </div>
        
      </div>
      <div className="w-[300px] h-[300px] bg-white bg-opacity-10 rounded-3xl mt-3 text-white">
        <h1 className="font-bold text-xl p-3">Who to Follow</h1>
        <div className="flex justify-between p-3">
          <div className="flex space-x-3 ">
            <img
              src="/assets/Me pic.jpeg"
              className="h-11 w-11 rounded-full object-cover"
            />
            <div>
              <div className="flex space-x-1">
                <h1 className="font-bold text-lg">Moe</h1>
                <BadgeCheckIcon className="w-[18px] text-blue-400" />
              </div>
              <h1 className="text-[12px] text-gray-500 mt-1">@Moe</h1>
            </div>
          </div>
          <button className="bg-white text-black text-sm w-20 h-8 font-bold rounded-3xl">
            Follow
          </button>
        </div>
        <div className="flex justify-between p-3">
          <div className="flex space-x-3 ">
            <img
              src="/assets/Me pic.jpeg"
              className="h-11 w-11 rounded-full object-cover"
            />
            <div>
              <div className="flex space-x-1">
                <h1 className="font-bold text-lg">Moe</h1>
                <BadgeCheckIcon className="w-[18px] text-blue-400" />
              </div>
              <h1 className="text-[12px] text-gray-500 mt-1">@Moe</h1>
            </div>
          </div>
          <button className="bg-white text-black text-sm w-20 h-8 font-bold rounded-3xl">
            Follow
          </button>
        </div>
        <div className="flex justify-between p-3">
          <div className="flex space-x-3 ">
            <img
              src="/assets/Me pic.jpeg"
              className="h-11 w-11 rounded-full object-cover"
            />
            <div>
              <div className="flex space-x-1">
                <h1 className="font-bold text-lg">Moe</h1>
                <BadgeCheckIcon className="w-[18px] text-blue-400" />
              </div>
              <h1 className="text-[12px] text-gray-500 mt-1">@Moe</h1>
            </div>
          </div>
          <button className="bg-white text-black text-sm w-20 h-8 font-bold rounded-3xl">
            Follow
          </button>
        </div>
      </div>
    </div>
  );
}


