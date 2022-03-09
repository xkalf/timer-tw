/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import EmptySpace from "./components/EmptySpace";
import Main from "./components/Main";
import SideBar from "./components/SideBar";
import { displayTime, getAvg, loadAvg } from "./utils/TimerUtils";
import mainScramble from "./utils/Scramble";

function App() {
  const [theme, setTheme] = useState("dark");
  const [state, setState] = useState("");
  const [solves, setSolves] = useState([]);
  const [displaySec, setDisplaySec] = useState("");
  const [scramble, setScramble] = useState("");
  const [currentType, setCurrentType] = useState("3x3");

  let millSec = 0;
  let running = false;
  let keyPress = false;
  let myInterval;

  const themeToggler = () => {
    if (theme === "light") setTheme("dark");
    else if (theme === "dark") setTheme("light");

    localStorage.setItem(
      "theme",
      JSON.stringify(theme === "light" ? "dark" : "light")
    );
  };
  const timeStart = () => {
    millSec = 0;
    myInterval = setInterval(() => {
      millSec++;
      setDisplaySec(displayTime(millSec));
    }, 10);
    running = true;
  };
  const timeStop = () => {
    setSolves((curr) => [
      ...curr,
      {
        time: millSec,
        date: Date.now,
        scramble: scramble,
        ao5: getAvg(curr, millSec, 5),
        ao12: getAvg(curr, millSec, 12),
        ao50: getAvg(curr, millSec, 50),
        ao100: getAvg(curr, millSec, 100),
      },
    ]);
    clearInterval(myInterval);
    running = false;
    setScramble(mainScramble(currentType));
  };
  const deleteTime = (index) => {
    const temp = [...solves];
    temp.splice(index, 1);
    setSolves(temp);
  };
  const plusTime = (index) => {
    const temp = [...solves];
    temp[index].time += 200;
    setSolves(temp);
    setSolves((curr) => loadAvg(curr, 5));
    setSolves((curr) => loadAvg(curr, 12));
    setSolves((curr) => loadAvg(curr, 50));
    setSolves((curr) => loadAvg(curr, 100));
  };
  const dnfTime = (index) => {
    const temp = [...solves];
    temp[index].time = -1;
    setSolves(temp);
    setSolves((curr) => loadAvg(curr, 5));
    setSolves((curr) => loadAvg(curr, 12));
    setSolves((curr) => loadAvg(curr, 50));
    setSolves((curr) => loadAvg(curr, 100));
  };
  const resetSolves = () => {
    let answer = window.confirm("Are you sure?");
    if (!answer) return;
    setSolves([]);
    localStorage.setItem("solves", JSON.stringify([]));
  };
  useEffect(() => {
    setDisplaySec(displayTime(0));
    setScramble(mainScramble(currentType));
    setTheme(JSON.parse(localStorage.getItem("theme")) || "dark");
    setCurrentType(JSON.parse(localStorage.getItem("type")) || "3x3");

    setSolves(JSON.parse(localStorage.getItem("solves")) || []);

    window.addEventListener("keydown", (event) => {
      if (event.code === "Space") {
        if (running === true) {
          timeStop();
          setState("");
        } else {
          setState("ready");
        }
      } else if (event.altKey && event.code === "KeyD") {
        resetSolves();
      } else if (event.altKey && event.code === "ArrowRight") {
        setScramble(mainScramble(currentType));
      } else if (event.altKey && event.code === "Digit2") {
        setCurrentType("2x2");
      } else if (event.altKey && event.code === "Digit3") {
        setCurrentType("3x3");
      } else if (event.altKey && event.code === "Digit4") {
        setCurrentType("4x4");
      } else if (event.altKey && event.code === "Digit5") {
        setCurrentType("5x5");
      } else if (event.altKey && event.code === "Digit6") {
        setCurrentType("6x6");
      } else if (event.altKey && event.code === "Digit7") {
        setCurrentType("7x7");
      } else if (event.altKey && event.code === "KeyM") {
        setCurrentType("MEGA");
      }
    });
    window.addEventListener("keyup", (event) => {
      if (event.code === "Space") {
        if (running === false && keyPress === false) {
          timeStart();
          setState("");
          keyPress = true;
        } else {
          keyPress = false;
        }
      }
    });
  }, []);
  useEffect(() => {
    localStorage.setItem("solves", JSON.stringify(solves));
  }, [solves]);
  useEffect(() => {
    setScramble(mainScramble(currentType));
    localStorage.setItem("type", JSON.stringify(currentType));
  }, [currentType]);
  return (
    <div className="flex h-screen overflow-hidden">
      <SideBar
        solves={solves}
        setSolves={setSolves}
        displayTime={displayTime}
        themeToggler={themeToggler}
        theme={theme}
        dnfTime={dnfTime}
        plusTime={plusTime}
        deleteTime={deleteTime}
      />
      <Main
        theme={theme}
        displaySec={displaySec}
        state={state}
        scramble={scramble}
        currentType={currentType}
      />
      <EmptySpace currentType={currentType} setCurrentType={setCurrentType} />
    </div>
  );
}

export default App;
