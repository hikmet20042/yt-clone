import {
  AiFillHome,
  MdSlowMotionVideo,
  MdOutlineVideoLibrary,
  MdOutlineSubscriptions,
  LiaDownloadSolid,
} from "./icons.js";
const SideBar = () => {
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
        <LiaDownloadSolid />
        <span>Downloads</span>
      </div>
    </div>
  );
};

export default SideBar;
