import youtubeVideo from "./assets/hq720.jpg";
import Profile from "./assets/profile.jpg";
const MainContent = () => {
  const data = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 1, 21, 2, 1, 21, 2, 12, 12, 1, 2,
  ];
  return (
    <main className="mainContent">
      {data.map((data, key) => (
        <div key={key} className="video">
          <img src={youtubeVideo} alt="" />
          <div className="description">
            <div className="channel_img">
              <img src={Profile} alt="" />
            </div>

            <div className="infos">
              <h2>Music for Work - Smooth Workflow Vibes</h2>
              <h4>Chill Music Lab</h4>
              <h4>4.7K views • 4 minutes ago</h4>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default MainContent;
