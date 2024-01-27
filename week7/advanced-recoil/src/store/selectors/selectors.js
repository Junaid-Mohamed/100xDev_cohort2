import { selector } from "recoil";
import {
  jobsAtom,
  messageAtom,
  networkAtom,
  notificationAtom,
} from "../atoms/atoms";

// here in selector get is a function which gives access to get object.
// then using that object you describe how you use the selector using the atoms that the selector depends.
export const totalNotificationSelector = selector({
  key: "totalNotificationSelector",
  get: ({ get }) => {
    const networkAtomCount = get(networkAtom);
    const notificationAtomCount = get(notificationAtom);
    const messageAtomCount = get(messageAtom);
    const jobsAtomCount = get(jobsAtom);
    return (
      networkAtomCount +
      notificationAtomCount +
      messageAtomCount +
      jobsAtomCount
    );
  },
});
