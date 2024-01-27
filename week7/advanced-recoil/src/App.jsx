import { useState, useMemo } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RecoilRoot, useRecoilValue } from "recoil";
import {
  jobsAtom,
  messageAtom,
  networkAtom,
  notificationAtom,
} from "./store/atoms/atoms";
import { totalNotificationSelector } from "./store/selectors/selectors";

function App() {
  return (
    <div>
      <RecoilRoot>
        <MainApp />
      </RecoilRoot>
    </div>
  );
}

const MainApp = () => {
  const networkNotificationCount = useRecoilValue(networkAtom);
  const jobsNotificationCount = useRecoilValue(jobsAtom);
  const messageNotificationCount = useRecoilValue(messageAtom);
  const notificationCount = useRecoilValue(notificationAtom);
  // total notification calculation should run only if anyone of this values change
  // so should put into useMemo

  const totalNotificationCount = useMemo(() => {
    return (
      networkNotificationCount +
      jobsNotificationCount +
      messageNotificationCount +
      notificationCount
    );
  }, [
    networkNotificationCount,
    jobsNotificationCount,
    messageNotificationCount,
    notificationCount,
  ]);

  // the same above logic using selectors
  const totalNotificationCount1 = useRecoilValue(totalNotificationSelector);

  //  you use this approach like if there's some other component which depends on this count and some other state,
  // that time you can use this selector and that state, but if you had used useMemo, you wouldn't had been able to do that.
  return (
    <div>
      <button>Home</button>

      <button>
        My Netwrok (
        {networkNotificationCount > 99 ? "99+" : networkNotificationCount})
      </button>
      <button>
        Jobs ({jobsNotificationCount > 99 ? "99+" : jobsNotificationCount})
      </button>
      <button>
        Messaging (
        {messageNotificationCount > 99 ? "99+" : messageNotificationCount})
      </button>
      <button>
        Notifications ({notificationCount > 99 ? "99+" : notificationCount})
      </button>

      <button>Me ({totalNotificationCount1})</button>
    </div>
  );
};

export default App;
