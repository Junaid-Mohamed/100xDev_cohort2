import { selector } from "recoil";
import { notifications } from "../atoms/atoms";
import { all } from "axios";

// here in selector get is a function which gives access to get object.
// then using that object you describe how you use the selector using the atoms that the selector depends.
export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const allNotification = get(notifications);
    return "hi";
  },
});
