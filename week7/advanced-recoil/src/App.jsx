import { useState, useMemo, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { RecoilRoot, useRecoilState, useRecoilValue } from "recoil";

import { totalNotificationSelector } from "./store/selectors/selectors";
import axios from "axios";
import { notifications } from "./store/atoms/atoms";

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
  const [networkCount, setNetwrokCount] = useRecoilState(notifications);
  const totalNotificationCount = useRecoilValue(totalNotificationSelector);
  // useEffect(() => {
  //   // fetch the data
  //   axios
  //     .get(
  //       "https://24b24bc4-1937-47c0-bdfa-5639804d92ab-00-2u1widgk5427.kirk.replit.dev/"
  //     )
  //     .then((res) => {
  //       setNetwrokCount(res.data);
  //     });
  // }, []);

  return (
    <div>
      {console.log(networkCount)}
      <button>Home</button>

      <button>
        My Netwrok ({networkCount.network >= 100 ? "99+" : networkCount.network}
        )
      </button>
      <button>
        Jobs ({networkCount.jobs >= 100 ? "99+" : networkCount.jobs})
      </button>
      <button>
        Messaging ({" "}
        {networkCount.messaging >= 100 ? "99+" : networkCount.messaging})
      </button>
      <button>
        Notifications (
        {networkCount.notification >= 100 ? "99+" : networkCount.notification})
      </button>

      <button>Me ({totalNotificationCount})</button>
    </div>
  );
};

export default App;
