/* eslint-disable react/prop-types */
import {
  AiFillHome,
  AiOutlinePlaySquare,
  AiOutlineClockCircle,
  MdSlowMotionVideo,
  MdOutlineVideoLibrary,
  MdOutlineSubscriptions,
  MdOutlinedFlag,
  MdOutlineFeedback,
  LiaDownloadSolid,
  RxHamburgerMenu,
  GoHistory,
  GoTrophy,
  BiLike,
  BiHelpCircle,
  BsFire,
  BsMusicNote,
  SiYoutubegaming,
  SiYoutubestudio,
  TbBrandYoutubeKids,
  FiSettings,
} from "./icons.js";
import Logo from "./assets/logo.png";
import Profile from "./assets/profile.jpg";

const DetailedSideBar = (props) => {
  return (
    <div className="detailed_sidebar">
      <header>
        <div
          className="header__hamburger"
          onClick={() => props.showSideBar(!props.sideBar)}
        >
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
        <p className="divider"></p>
        <section className="additional-menu">
          <a href="">About</a>
          <a href="">Press</a>
          <a href="">Copyright</a>
          <a href="">Contact us</a>
          <a href="">Creators</a>
          <a href="">Advertise</a>
          <a href="">Developers</a>
          <br />
          <br />
          <a href="">Terms</a>
          <a href="">Privacy</a>
          <a href="">Policy & Safety</a>
          <a href="">How YouTube works</a>
          <a href="">Test new features</a>
          <br />
          <br />
          <p>&copy; 2023 Google LLC</p>
        </section>
      </main>
    </div>
  );
};

export default DetailedSideBar;
