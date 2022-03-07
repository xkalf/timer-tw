import React from "react";
import EmptySpace from "./components/EmptySpace";
import Main from "./components/Main";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="flex h-screen overflow-hidden">
      <SideBar />
      <Main />
      <EmptySpace />
    </div>
  );
}

export default App;
