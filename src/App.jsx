import { useState } from "react";
import NavBar from "./NavBar";
// import SideBar from "./SideBar";
import DetailedSideBar from "./detailedSideBar";

function App() {
  const [sideBar, showSideBar] = useState(false);
  return (
    <>
      <NavBar sideBar={sideBar} showSideBar={showSideBar} />
      {/* <SideBar /> */}
      <DetailedSideBar />
      <main></main>
    </>
  );
}

export default App;
