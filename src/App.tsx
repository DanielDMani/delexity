import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Support from "./pages/Support";
import CoraSupport from "./pages/CoraSupport";
import Cora from "./pages/Cora";
import CoraDownload from "./pages/CoraDownload";
import Nela from "./pages/Nela";
import NelaSupport from "./pages/NelaSupport";
import NelaPrivacy from "./pages/NelaPrivacy";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/support" element={<Support />} />
          <Route path="/cora-support" element={<CoraSupport />} />
          <Route path="/cora" element={<Cora />} />
          <Route path="/cora-habit-tracker" element={<CoraDownload />} />
          <Route path="/nela" element={<Nela />} />
          <Route path="/nela-support" element={<NelaSupport />} />
          <Route path="/nela-privacy" element={<NelaPrivacy />} />
        </Routes>
      </>
    </Suspense>
  );
}

export default App;
