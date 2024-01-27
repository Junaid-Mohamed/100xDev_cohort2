import { atom } from "recoil";

export const notifications = atom({
  key: "notifications",

  default: { network: 0, jobs: 0, messaging: 0, notification: 0 },
});
