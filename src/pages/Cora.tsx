import { useEffect } from "react";
import CoraNav from "@/components/cora/CoraNav";
import CoraHero from "@/components/cora/CoraHero";
import CoraFeatures from "@/components/cora/CoraFeatures";
import CoraScreens from "@/components/cora/CoraScreens";
import CoraChallenges from "@/components/cora/CoraChallenges";
import CoraHowItWorks from "@/components/cora/CoraHowItWorks";
import CoraDownloadCTA from "@/components/cora/CoraDownload";
import CoraFeedback from "@/components/cora/CoraFeedback";
import CoraFooter from "@/components/cora/CoraFooter";
import { cora } from "@/components/cora/theme";

export default function Cora() {
  useEffect(() => {
    document.title =
      "Cora — Own Your Day | Rituals, Habits, Routines & Challenges";
  }, []);

  return (
    <div
      className="min-h-screen"
      style={{ background: cora.bg, color: cora.ink }}
    >
      <CoraNav />
      <CoraHero />
      <CoraFeatures />
      <CoraScreens />
      <CoraChallenges />
      <CoraHowItWorks />
      <CoraDownloadCTA />
      <CoraFeedback />
      <CoraFooter />
    </div>
  );
}
