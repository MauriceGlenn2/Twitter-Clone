import { ChartBarIcon, ChatIcon, HeartIcon, UploadIcon } from "@heroicons/react/outline";

export default function Tweet() {
  return (
    <div className="border-b border-gray-700">
      <TweetHeader />
      <div className="p-3 ml-16 text-gray-500 flex space-x-12">
        <ChatIcon className="w-5 cursor-pointer hover:text-green-400" />
        <HeartIcon className="w-5 cursor-pointer hover:text-pink-500" />
        <ChartBarIcon className="w-5 cursor-not-allowed" />
        <UploadIcon className="w-5 cursor-not-allowed" />
      </div>
    </div>
  );
}

export function TweetHeader() {
  return (
    <div className="flex space-x-3 p-3  border-gray-700">
      <img
        className="h-11 w-11 rounded-full object-cover"
        src="/assets/Me pic.jpeg"
      />
      <div>
        <div className="text-gray-500 flex items-center space-x-2 mb-1">
          <span>@Moe</span>
          <div className="w-1 h-1 bg-gray-500 rounded-full"></div>
          <span>2 hours ago</span>
        </div>

        <span>Text </span>
      </div>
    </div>
  );
}
