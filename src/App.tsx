import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Support from "./pages/Support";
import CoraSupport from "./pages/CoraSupport";
import CoraMarketing from "./pages/CoraMarketing";
import CoraDownload from "./pages/CoraDownload";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/support" element={<Support />} />
          <Route path="/cora-support" element={<CoraSupport />} />
          <Route path="/cora" element={<CoraMarketing />} />
          <Route path="/cora-habit-tracker" element={<CoraDownload />} />
        </Routes>
      </>
    </Suspense>
  );
}

export default App;
