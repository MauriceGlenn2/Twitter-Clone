export default function TweetInput() {
    return (
      <div className="flex space-x-3 p-3 border-b border-gray-700">
        <img
          className="h-11 w-11 rounded-full object-cover"
          src="/assets/me pic.jpeg"
        />
        <div>
          <textarea
            placeholder="What's on your mind?"
            className="bg-transparent resize-none outline-none w-full min-h-[50] text-lg"
          />

          <div className="flex justify-between border-t border-gray-700 pt-4">
            {/* Icons div */}
            <div>

            </div>
            <button>
                Tweet
            </button>
          </div>
        </div>
      </div>
    );
}

//stopped at 47:41