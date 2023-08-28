import {
  AiFillHome,
  AiOutlinePlaySquare,
  AiOutlineClockCircle,
} from "react-icons/ai";
import {
  MdSlowMotionVideo,
  MdOutlineVideoLibrary,
  MdOutlineSubscriptions,
  MdOutlinedFlag,
  MdOutlineFeedback,
} from "react-icons/md";
import { LiaDownloadSolid } from "react-icons/lia";
import { RxHamburgerMenu } from "react-icons/rx";
import { GoHistory, GoTrophy } from "react-icons/go";
import { BiLike, BiHelpCircle } from "react-icons/bi";
import { BsFire, BsMusicNote } from "react-icons/bs";
import { SiYoutubegaming, SiYoutubestudio } from "react-icons/si";
import { TbBrandYoutubeKids } from "react-icons/tb";
import { FiSettings } from "react-icons/fi";
import Logo from "./assets/logo.png";
import Profile from "./assets/profile.jpg";

const DetailedSideBar = () => {
  return (
    <div className="detailed_sidebar">
      <header>
        <div className="header__hamburger">
          <RxHamburgerMenu />
        </div>
        <div className="header__logo">
          <a href="#">
            <img src={Logo} alt="Youtube Home" />
          </a>
        </div>
      </header>
      <main>
        <div>
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
        <p className="divider" />
        <div>
          <MdOutlineVideoLibrary />
          <span>Library</span>
        </div>
        <div>
          <GoHistory />
          <span>History</span>
        </div>
        <div>
          <AiOutlinePlaySquare />
          <span>Your videos</span>
        </div>
        <div>
          <AiOutlineClockCircle />
          <span>Watch later</span>
        </div>
        <div>
          <LiaDownloadSolid />
          <span>Downloads</span>
        </div>
        <div>
          <BiLike />
          <span>Liked videos</span>
        </div>
        <p className="divider" />

        <h3>Subscriptions</h3>
        {/*         {data.map((item) => ( */}
        <div>
          <img src={Profile} />
          <span>Abao in Tokyo</span>
        </div>
        <div>
          <img src={Profile} />
          <span>Abao in Tokyo</span>
        </div>
        <div>
          <img src={Profile} />
          <span>Abao in Tokyo</span>
        </div>
        <div>
          <img src={Profile} />
          <span>Abao in Tokyo</span>
        </div>
        <p className="divider" />

        <h3>Explore</h3>
        <div>
          <BsFire />
          <span>Trending</span>
        </div>
        <div>
          <BsMusicNote />
          <span>Music</span>
        </div>
        <div>
          <SiYoutubegaming />
          <span>Gaming</span>
        </div>
        <div>
          <GoTrophy />
          <span>Sports</span>
        </div>
        <p className="divider"></p>
        <h3>More from YouTube</h3>
        <div>
          <SiYoutubestudio />
          <span>Youtube Studio</span>
        </div>
        <div>
          <TbBrandYoutubeKids />
          <span>Youtube Kids</span>
        </div>
        <p className="divider"></p>
        <div>
          <FiSettings />
          <span>Settings</span>
        </div>
        <div>
          <MdOutlinedFlag />
          <span>Report history</span>
        </div>
        <div>
          <BiHelpCircle />
          <span>Help</span>
        </div>
        <div>
          <MdOutlineFeedback />
          <span>Send feedback</span>
        </div>
      </main>
    </div>
  );
};

export default DetailedSideBar;
