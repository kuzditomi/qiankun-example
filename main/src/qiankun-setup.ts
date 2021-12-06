import { registerMicroApps, setDefaultMountApp, start } from "qiankun";
import { renderSubApp } from "./subapprender";

const loader = (loading: boolean) => renderSubApp(loading);

export const registerApps = () => {
  registerMicroApps(
    [
      {
        name: "home",
        entry: "//localhost:3001",
        container: "#subapp-viewport",
        loader,
        activeRule: "/home",
      },
      {
        name: "about",
        entry: "//localhost:3002",
        container: "#subapp-viewport",
        loader,
        activeRule: "/about",
      },
    ],
    {
      // beforeLoad: [
      //   (app: any) => {
      //     console.log(
      //       "[LifeCycle] before load %c%s",
      //       "color: green;",
      //       app.name
      //     );
      //   },
      // ],
      // beforeMount: [
      //   (app) => {
      //     console.log(
      //       "[LifeCycle] before mount %c%s",
      //       "color: green;",
      //       app.name
      //     );
      //   },
      // ],
      // afterUnmount: [
      //   (app) => {
      //     console.log(
      //       "[LifeCycle] after unmount %c%s",
      //       "color: green;",
      //       app.name
      //     );
      //   },
      // ],
    }
  );

  setDefaultMountApp("/home");
};

export const startQiankun = () => {
  renderSubApp(true);
  // start qiankun
  start();
};
