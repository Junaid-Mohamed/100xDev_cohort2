import axios from "axios";
import { atom, selector } from "recoil";

export const notifications = atom({
  key: "notifications",
  default: selector({
    key: "notificationsSelector",
    get: async () => {
      await new Promise((r) => setTimeout(r, 3000)); //sleep for 3 secs
      const res = await axios.get(
        "https://24b24bc4-1937-47c0-bdfa-5639804d92ab-00-2u1widgk5427.kirk.replit.dev/"
      );
      return res.data;
    },
  }),
  // default: { network: 0, jobs: 0, messaging: 0, notification: 0 },
});
