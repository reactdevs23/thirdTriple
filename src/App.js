import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

import JoinModal from "./Modals/JoinModal/JoinModal";

import { useMyContext } from "./Context/Context";

import Whitelist from "./pages/Whitelist/Whitelist";
import MainLayout from "./components/Layout/MainLayout";
import WhitlistLaout from "./components/Layout/Whitelist/WhitelistLayout";

function App() {
  const { isJoinWaitingListModalActive, setIsJoinWaitingListModalActive } =
    useMyContext();
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route path="" element={<Home />} />
        </Route>{" "}
        <Route path="/" element={<WhitlistLaout />}>
          <Route path="whitelist" element={<Whitelist />} />
        </Route>
      </Routes>

      <JoinModal
        isActive={isJoinWaitingListModalActive}
        onClose={() => setIsJoinWaitingListModalActive(false)}
      />
    </>
  );
}

export default App;
