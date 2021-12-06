import { UserConfig, defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import qiankun from "vite-plugin-qiankun/dist";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
const useDevMode = true;

// https://vitejs.dev/config/
const baseConfig: UserConfig = {
  plugins: [
    ...(useDevMode ? [] : [reactRefresh()]),
    qiankun("viteapp", {
      useDevMode,
    }),
  ],
  server: {
    port: 3002,
    cors: true,
  },
};

export default ({ mode }: any) => {
  baseConfig.base = "http://localhost:3002/";
  if (mode === "development") {
    baseConfig.base = "/";
  }
  return baseConfig;
};
