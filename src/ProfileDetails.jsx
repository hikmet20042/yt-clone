import {
  MdAccountBox,
  SiYoutubestudio,
  MdOutlineSwitchAccount,
  PiSignInLight,
  ImCoinDollar,
  AiOutlineRight,
  MdOutlinePrivacyTip,
  MdOutlineKeyboardAlt,
  BsMoon,
  HiTranslate,
  BsShieldLock,
  SlSettings,
  BsGlobe,
} from "./icons.js";
import Profile from "./assets/profile.jpg";
const ProfileDetails = () => {
  return (
    <div className="navbar__right-container_profile-detailed">
      <header>
        <div className="profile_icon">
          <img src={Profile} />
        </div>
        <div className="profile_details">
          <div className="full-name">Hikmat Mammadli</div>
          <div className="username">@hikmatmammadlii</div>
          <a href="">Manage your Google Account</a>
        </div>
      </header>
      <p className="divider"></p>
      <section>
        <div className="setting">
          <div className="icon">
            <MdAccountBox />
          </div>
          <div className="property-name">Your channel</div>
        </div>
        <div className="setting">
          <div className="icon">
            <SiYoutubestudio />
          </div>
          <div className="property-name">YouTube Studio</div>
        </div>
        <div className="setting">
          <div className="icon">
            <MdOutlineSwitchAccount />
          </div>
          <div className="property-name">Switch account</div>
          <AiOutlineRight />
        </div>
        <div className="setting">
          <div className="icon">
            <PiSignInLight />
          </div>
          <div className="property-name">Sign out</div>
        </div>
        <p className="divider"></p>
        <div className="setting">
          <div className="icon">
            <ImCoinDollar />
          </div>
          <div className="property-name">Purchases and memberships</div>
        </div>
        <div className="setting">
          <div className="icon">
            <MdOutlinePrivacyTip />
          </div>
          <div className="property-name">Your data in YouTube</div>
        </div>
        <p className="divider"></p>
        <div className="setting">
          <div className="icon">
            <BsMoon />
          </div>
          <div className="property-name">Appearance: Light</div>
          <AiOutlineRight />
        </div>
        <div className="setting">
          <div className="icon">
            <HiTranslate />
          </div>
          <div className="property-name">Language: English</div>
          <AiOutlineRight />
        </div>
        <div className="setting">
          <div className="icon">
            <BsShieldLock />
          </div>
          <div className="property-name">Restricted Mode: Off</div>
          <AiOutlineRight />
        </div>
        <div className="setting">
          <div className="icon">
            <BsGlobe />
          </div>
          <div className="property-name">Location: Azerbaijan</div>
          <AiOutlineRight />
        </div>
        <div className="setting">
          <div className="icon">
            <MdOutlineKeyboardAlt />
          </div>
          <div className="property-name">Keyboard shortcuts</div>
        </div>
        <p className="divider"></p>
        <div className="setting">
          <div className="icon">
            <SlSettings />
          </div>
          <div className="property-name">Settings</div>
        </div>
      </section>
    </div>
  );
};

export default ProfileDetails;
