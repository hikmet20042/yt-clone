import { AiFillHome } from "react-icons/ai";
import {
  MdSlowMotionVideo,
  MdOutlineVideoLibrary,
  MdOutlineSubscriptions,
} from "react-icons/md";
import { TfiDownload } from "react-icons/tfi";
const SideBar = (sideBar, showSideBar) => {
  return (
    <div className="sidebar">
      <div className="sidebar_home">
        <AiFillHome />
        <span>Home</span>
      </div>
      <div>
        <MdSlowMotionVideo />
        <span>Shorts</span>
      </div>
      <div>
        <MdOutlineSubscriptions />
        <span>Subscriptions</span>
      </div>
      <div>
        <MdOutlineVideoLibrary />
        <span>Library</span>
      </div>
      <div>
        <TfiDownload />
        <span>Downloads</span>
      </div>
    </div>
  );
};

export default SideBar;
