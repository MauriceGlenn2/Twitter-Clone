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


export default function SideBar() {
    return (
      <div className="hidden sm:flex flex-col fixed">
        <div>
            <Image src={} width={34} height={34} />
        </div>
        <nav>
          <SideBarLink text={"Home"} Icon={HomeIcon} />
          <SideBarLink text={"Explore"} Icon={HashtagIcon} />
          <SideBarLink text={"Notifications"} Icon={BellIcon} />
          <SideBarLink text={"Messages"} Icon={InboxIcon} />
          <SideBarLink text={"Bookmarks"} Icon={BookmarkIcon} />
          <SideBarLink text={"Profile"} Icon={UserIcon} />
          <SideBarLink text={"More"} Icon={DotsCircleHorizontalIcon} />
        </nav>
        <div>User</div>
      </div>
    );
}

function SideBarLink({text, Icon}) {
    return (
      <li className="flex mb-6 items-center text-xl space-x-3">
        <Icon className="h-7" />
        <span className="hidden xl:inline">{text}</span>
      </li>
    );
}