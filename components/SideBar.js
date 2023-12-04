import {
    HomeIcon, 
    HashtagIcon, 
    InboxIcon, 
    BellIcon, 
    UserAddIcon, 
    DotsCircleHorizontalIcon, 
    ClipboardListIcon,
    BookmarkIcon,
    UserIcon
} from "@heroicons/react/outline"
import Image from "next/image"


export default function SideBar() {
    return (
      <div className="h-full hidden sm:flex flex-col fixed xl:ml-24">
        <nav className="h-full relative xl:space-y-1.5">
          <div className="flex justify-center items-center xl:justify-start py-3 xl:p-3">
            <Image src={"/assets/twitter-logo.webp"} width={34} height={34} />
          </div>
          <SideBarLink text={"Home"} Icon={HomeIcon} />
          <SideBarLink text={"Explore"} Icon={HashtagIcon} />
          <SideBarLink text={"Notifications"} Icon={BellIcon} />
          <SideBarLink text={"Messages"} Icon={InboxIcon} />
          <SideBarLink text={"Bookmarks"} Icon={BookmarkIcon} />
          <SideBarLink text={"Profile"} Icon={UserIcon} />
          <SideBarLink text={"More"} Icon={DotsCircleHorizontalIcon} />
          <button className="hidden bg-[#1d9bf0] rounded-full h-[53px] w-[200px] text-lg font-bold mt-2 xl:inline">Tweet</button>
          <div className="absolute bottom-0">User</div>
        </nav>
      </div>
    );
}

function SideBarLink({text, Icon}) {
    return (
      <li className="hoverAnimation flex mb-6 xl:justify-start justify-center text-xl space-x-3 xl:p-3">
        <Icon className="h-7" />
        <span className="hidden xl:inline">{text}</span>
      </li>
    );
}