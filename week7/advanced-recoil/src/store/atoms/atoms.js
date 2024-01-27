import { atom } from "recoil";

export const notifications = atom({
  key: "notifications",
  default: { jobs: 0, messaging: 0, network: 0, notification: 0 },
});
