import { useState } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import DetailedSideBar from "./DetailedSideBar";
import MainContent from "./MainContent";

function App() {
  const [sideBar, showSideBar] = useState(false);
  return (
    <>
      <NavBar sideBar={sideBar} showSideBar={showSideBar} />

      <SideBar />
      {sideBar && (
        <DetailedSideBar sideBar={sideBar} showSideBar={showSideBar} />
      )}
      <MainContent />
    </>
  );
}

export default App;
