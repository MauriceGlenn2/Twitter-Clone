import {
  HomeIcon,
  HashtagIcon,
  InboxIcon,
  BellIcon,
  UserAddIcon,
  DotsCircleHorizontalIcon,
  ClipboardListIcon,
  BookmarkIcon,
  UserIcon,
  DotsHorizontalIcon,
} from "@heroicons/react/outline";
import Image from "next/image";

export default function SideBar() {
  return (
    <div className="h-full hidden sm:flex flex-col fixed xl:ml-24">
      <nav className="h-full relative xl:space-y-1.5">
        <div className="flex justify-center items-center xl:justify-start py-8 xl:p-3">
          <Image src={"/assets/twitter-logo.webp"} width={34} height={34} />
        </div>
        <SideBarLink text={"Home"} Icon={HomeIcon} />
        <SideBarLink text={"Explore"} Icon={HashtagIcon} />
        <SideBarLink text={"Notifications"} Icon={BellIcon} />
        <SideBarLink text={"Messages"} Icon={InboxIcon} />
        <SideBarLink text={"Bookmarks"} Icon={BookmarkIcon} />
        <SideBarLink text={"Profile"} Icon={UserIcon} />
        <SideBarLink text={"More"} Icon={DotsCircleHorizontalIcon} />
        <button className="hidden bg-[#1d9bf0] rounded-full h-[53px] w-[200px] text-lg font-bold mt-2 xl:inline">
          Tweet
        </button>
        <div
          className="
          bottom-0
          hover:bg-white hover:bg-opacity-10 rounded-full cursor-pointer
          absolute xl:p-3 justify-center items-center flex space-x-3"
        >
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="/assets/Me pic.jpeg"
          />
          <div className="hidden xl:inline">
            <h1 className="font-bold whitespace-nowrap">Name</h1>
            <h1 className="text-gray-500">@Username</h1>
          </div>
          <DotsHorizontalIcon className="h-5 hidden xl:inline" />
        </div>
      </nav>
    </div>
  );
}

function SideBarLink({ text, Icon }) {
  return (
    <li className="hoverAnimation flex mb-3 xl:justify-start  justify-center text-xl space-x-3 xl:p-3kl">
      <Icon className="h-7" />
      <span className="hidden xl:inline">{text}</span>
    </li>
  );
}

//1:56