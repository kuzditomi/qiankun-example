import { useEffect, useState } from "react";
import "./App.css";
import { startQiankun, registerApps } from "./qiankun-setup";
import { Menu } from "./menu/Menu";

export const App: React.FC = () => {
  useEffect(() => {
    registerApps();
    startQiankun();
  }, []);

  return (
    <div className="App">
      <Menu />
      <main id="container"></main>
    </div>
  );
};
