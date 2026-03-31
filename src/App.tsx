import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/home";
import PrivacyPolicy from "./pages/PrivacyPolicy";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
        </Routes>
      </>
    </Suspense>
  );
}

export default App;
